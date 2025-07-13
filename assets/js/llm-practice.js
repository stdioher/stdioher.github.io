// LLM Practice页面JavaScript功能
// 专为GitHub Pages兼容性设计

(function () {
    'use strict';

    // API配置 - 支持多个API提供商
    const API_CONFIGS = {
        // 豆包API (推荐 - 支持流式响应)
        doubao: {
            url: "https://ark.cn-beijing.volces.com/api/v3/chat/completions",
            key: "186255e4-80aa-4f36-93ec-b9b487933cf1",
            model: "doubao-1-5-vision-pro-32k-250115",
            name: "豆包AI",
            supportStream: true
        },
        // 备用API
        masanli: {
            url: "https://api.masanli.top/v1/chat/completions",
            key: "sk-hSOhO1abExLakY8DHt7ES19L8OBTEoS9LPP9tAvJqNUwnnsb",
            model: "gemini-2.5-flash",
            name: "Masanli API",
            supportStream: false
        }
    };

    // 当前使用的API配置
    let currentAPI = API_CONFIGS.doubao;    // 流式响应处理 (豆包API)
    async function handleStreamResponse(response, responseDiv) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let botReply = '';

        try {
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const lines = decoder.decode(value).split('\n');
                for (const line of lines) {
                    if (line.startsWith('data:')) {
                        const data = line.slice(5).trim();
                        if (data === '[DONE]') break;

                        try {
                            const parsed = JSON.parse(data);
                            const delta = parsed.choices && parsed.choices[0] && parsed.choices[0].delta && parsed.choices[0].delta.content;
                            if (delta) {
                                botReply += delta;
                                responseDiv.textContent = botReply;
                                responseDiv.className = "chat-response";
                            }
                        } catch (e) {
                            // 忽略解析错误
                        }
                    }
                }
            }
            return botReply;
        } catch (error) {
            throw new Error('流式响应处理失败: ' + error.message);
        }
    }

    // 发送聊天消息
    async function handleChatSend() {
        const prompt = document.getElementById("chatPrompt").value.trim();
        const responseDiv = document.getElementById("chatResponse");
        const sendBtn = document.getElementById("chatSendBtn");

        if (!prompt) {
            responseDiv.textContent = "请输入消息后再发送";
            responseDiv.className = "chat-response error";
            return;
        }

        // 设置加载状态
        responseDiv.textContent = "正在思考中...";
        responseDiv.className = "chat-response loading";
        sendBtn.disabled = true;
        sendBtn.textContent = "发送中...";

        try {
            const requestBody = {
                model: currentAPI.model,
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    { role: "user", content: prompt }
                ]
            };

            // 为豆包API添加流式响应和额外参数
            if (currentAPI.supportStream) {
                requestBody.stream = true;
                requestBody.max_tokens = 1024;
                requestBody.temperature = 0.7;
            }

            const res = await fetch(currentAPI.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + currentAPI.key
                },
                body: JSON.stringify(requestBody)
            });

            if (!res.ok) {
                const errText = await res.text();
                throw new Error("状态 " + res.status + ": " + errText);
            }

            let reply;
            if (currentAPI.supportStream) {
                // 处理流式响应
                reply = await handleStreamResponse(res, responseDiv);
            } else {
                // 处理普通响应
                const data = await res.json();
                reply = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
            }

            if (reply) {
                responseDiv.textContent = reply;
                responseDiv.className = "chat-response";
            } else {
                responseDiv.textContent = "未收到有效响应";
                responseDiv.className = "chat-response error";
            }
        } catch (err) {
            console.error("请求错误:", err);

            // 检测当前环境
            const environment = detectCORSSupport();

            // 根据错误类型和环境提供不同的提示
            if (err.message.includes('Failed to fetch') || err.name === 'TypeError') {
                // 如果豆包API失败，尝试切换到备用API
                if (currentAPI === API_CONFIGS.doubao) {
                    responseDiv.textContent = "豆包API连接失败，正在尝试备用API...";
                    currentAPI = API_CONFIGS.masanli;
                    // 递归调用，使用备用API
                    setTimeout(() => handleChatSend(), 1000);
                    return;
                } else {
                    responseDiv.textContent = getCORSErrorMessage(environment);
                }
            } else if (err.message.includes('401') || err.message.includes('403')) {
                responseDiv.textContent = "API认证失败\n\n可能原因：\n1. API密钥已失效\n2. 服务器拒绝访问\n3. API额度已用完\n\n正在尝试备用API...";
                // 切换到备用API
                currentAPI = currentAPI === API_CONFIGS.doubao ? API_CONFIGS.masanli : API_CONFIGS.doubao;
                setTimeout(() => handleChatSend(), 1000);
                return;
            } else if (err.message.includes('429')) {
                responseDiv.textContent = "请求过于频繁\n\n请稍等片刻后再试，或联系管理员提升API限额";
            } else if (err.message.includes('500') || err.message.includes('502') || err.message.includes('503')) {
                responseDiv.textContent = "API服务器错误\n\n服务器暂时不可用，请稍后重试";
            } else {
                responseDiv.textContent = "请求失败：" + err.message + "\n\n当前API：" + currentAPI.name + "\n环境：" + environment;
            }
            responseDiv.className = "chat-response error";
        } finally {
            // 恢复按钮状态
            sendBtn.disabled = false;
            sendBtn.textContent = "Send Message";
        }
    }

    // 处理键盘事件
    function handleKeyDown(e) {
        if (e.key === "Enter" && e.ctrlKey) {
            const sendBtn = document.getElementById("chatSendBtn");
            if (sendBtn) {
                sendBtn.click();
            }
        }
    }

    // API选择器变化处理
    function handleApiSelectorChange() {
        const apiSelector = document.getElementById("apiSelector");
        if (apiSelector) {
            const selectedValue = apiSelector.value;
            if (API_CONFIGS[selectedValue]) {
                currentAPI = API_CONFIGS[selectedValue];
                updateNetworkStatus("API已切换到: " + currentAPI.name, "info");
                console.log('API已切换到:', currentAPI.name);
            }
        }
    }

    // 测试API连接
    async function testApiConnection() {
        const statusElement = document.getElementById("networkStatus");
        if (statusElement) {
            statusElement.textContent = "正在测试API连接...";
            statusElement.className = "network-status warning";
        }

        try {
            const testMessage = "Hello";

            if (currentAPI.key === "doubao") {
                // 测试豆包AI连接
                const response = await fetch(currentAPI.url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + currentAPI.apiKey,
                    },
                    body: JSON.stringify({
                        model: currentAPI.model,
                        messages: [{
                            role: "user",
                            content: testMessage
                        }],
                        max_tokens: 10,
                        stream: false
                    })
                });

                if (response.ok) {
                    updateNetworkStatus(currentAPI.name + " 连接成功 ✓", "success");
                } else {
                    throw new Error("HTTP " + response.status);
                }
            } else {
                // 测试其他API连接 (Masanli)
                const response = await fetch(currentAPI.url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        message: testMessage,
                        type: "test"
                    })
                });

                if (response.ok) {
                    updateNetworkStatus(currentAPI.name + " 连接成功 ✓", "success");
                } else {
                    throw new Error("HTTP " + response.status);
                }
            }
        } catch (error) {
            console.error('API连接测试失败:', error);
            updateNetworkStatus(currentAPI.name + " 连接失败: " + error.message, "error");
        }
    }

    // 初始化页面
    function initializePage() {
        // 设置发送按钮事件监听器
        const sendBtn = document.getElementById("chatSendBtn");
        if (sendBtn) {
            sendBtn.addEventListener("click", handleChatSend);
            console.log('聊天发送按钮事件监听器已添加');
        } else {
            console.error('未找到聊天发送按钮元素');
        }

        // 设置键盘事件监听器
        const chatPrompt = document.getElementById("chatPrompt");
        if (chatPrompt) {
            chatPrompt.addEventListener("keydown", handleKeyDown);
            console.log('聊天输入框键盘事件监听器已添加');
        } else {
            console.error('未找到聊天输入框元素');
        }

        // 设置API选择器事件监听器
        const apiSelector = document.getElementById("apiSelector");
        if (apiSelector) {
            apiSelector.addEventListener("change", handleApiSelectorChange);
            console.log('API选择器事件监听器已添加');
        } else {
            console.error('未找到API选择器元素');
        }

        // 设置API测试按钮事件监听器
        const testApiBtn = document.getElementById("testApiBtn");
        if (testApiBtn) {
            testApiBtn.addEventListener("click", testApiConnection);
            console.log('API测试按钮事件监听器已添加');
        } else {
            console.error('未找到API测试按钮元素');
        }

        // 检测CORS支持和环境
        const environment = detectCORSSupport();

        console.log('LLM Practice页面JavaScript初始化完成 - 环境: ' + environment + ' - API: ' + currentAPI.name);
    }

    // 主初始化函数
    function init() {
        // 确保DOM已加载
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function () {
                initializePage();
            });
        } else {
            initializePage();
        }

        // 页面加载完成时再次检测CORS
        window.addEventListener('load', function () {
            const env = detectCORSSupport();
            console.log('页面加载完成 - 当前环境: ' + env);
        });
    }

    // 启动初始化
    init();

})();
