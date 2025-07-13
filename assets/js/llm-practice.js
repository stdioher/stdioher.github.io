// LLM Practice页面JavaScript功能
// 专为GitHub Pages兼容性设计

(function () {
    'use strict';

    // API配置
    const CHAT_API_URL = "https://api.masanli.top/v1/chat/completions";
    const CHAT_API_KEY = "sk-hSOhO1abExLakY8DHt7ES19L8OBTEoS9LPP9tAvJqNUwnnsb";

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
            // 使用与成功代码相同的请求格式
            const res = await fetch(CHAT_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + CHAT_API_KEY
                },
                body: JSON.stringify({
                    model: "gemini-2.5-flash",
                    messages: [
                        { role: "system", content: "You are a helpful assistant." },
                        { role: "user", content: prompt }
                    ]
                })
            });

            if (!res.ok) {
                const errText = await res.text();
                throw new Error("状态 " + res.status + ": " + errText);
            }

            const data = await res.json();
            const reply = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;

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
                responseDiv.textContent = getCORSErrorMessage(environment);
            } else if (err.message.includes('401') || err.message.includes('403')) {
                responseDiv.textContent = "API认证失败\n\n可能原因：\n1. API密钥已失效\n2. 服务器拒绝访问\n3. API额度已用完\n\n请联系管理员检查API配置";
            } else if (err.message.includes('429')) {
                responseDiv.textContent = "请求过于频繁\n\n请稍等片刻后再试，或联系管理员提升API限额";
            } else if (err.message.includes('500') || err.message.includes('502') || err.message.includes('503')) {
                responseDiv.textContent = "API服务器错误\n\n服务器暂时不可用，请稍后重试";
            } else {
                responseDiv.textContent = "请求失败：" + err.message + "\n\n环境：" + environment;
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

    // 更新网络状态显示
    function updateNetworkStatus(environment) {
        const statusElement = document.getElementById('networkStatus');
        const detailsElement = document.getElementById('networkDetails');

        if (!statusElement || !detailsElement) return;

        const hostname = window.location.hostname;

        switch (environment) {
            case 'local':
                statusElement.textContent = 'Local Development';
                statusElement.style.color = '#28a745';
                detailsElement.textContent = 'Running on localhost - CORS restrictions minimal';
                break;
            case 'github':
                statusElement.textContent = 'GitHub Pages';
                statusElement.style.color = '#ffc107';
                detailsElement.textContent = 'May have CORS limitations - API calls might be restricted';
                break;
            case 'production':
                statusElement.textContent = 'Production Environment';
                statusElement.style.color = '#dc3545';
                detailsElement.textContent = 'Domain: ' + hostname + ' - CORS restrictions apply to external APIs';
                break;
            default:
                statusElement.textContent = 'Unknown';
                statusElement.style.color = '#6c757d';
                detailsElement.textContent = 'Environment detection failed';
        }
    }

    // 检测CORS支持和环境
    function detectCORSSupport() {
        const hostname = window.location.hostname;
        const protocol = window.location.protocol;

        console.log("当前访问域名: " + hostname);
        console.log("目标API域名: api.masanli.top");
        console.log("协议: " + protocol);

        // 判断是否为本地开发环境
        const isLocalDev = hostname === 'localhost' ||
            hostname === '127.0.0.1' ||
            hostname.startsWith('192.168.') ||
            hostname.startsWith('10.') ||
            protocol === 'file:';

        let environment;
        if (isLocalDev) {
            console.log('本地开发环境 - CORS限制较少');
            environment = 'local';
        } else if (hostname.includes('github.io')) {
            console.log('GitHub Pages环境 - 可能存在CORS限制');
            environment = 'github';
        } else {
            console.log('生产环境 (' + hostname + ') - 受CORS策略限制');
            environment = 'production';
        }

        // 更新UI状态显示
        updateNetworkStatus(environment);

        return environment;
    }

    // 获取适合当前环境的错误消息
    function getCORSErrorMessage(environment) {
        const hostname = window.location.hostname;

        if (environment === 'local') {
            return "本地环境网络请求失败\n\n可能原因：\n1. API服务器暂时不可用\n2. 网络连接问题\n3. API密钥失效\n\n建议检查网络连接和API服务状态";
        } else {
            return "网络请求失败：CORS跨域限制\n\n原因：从 " + hostname + " 访问 api.masanli.top 被浏览器阻止\n\n解决方案：\n1. 点击页面上的 'New API' 卡片直接访问API网站\n2. 联系管理员在API服务器添加 " + hostname + " 到CORS白名单\n3. 如果是开发者，可以尝试安装CORS浏览器扩展\n4. 或者使用代理服务器转发请求";
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

        // 检测CORS支持和环境
        const environment = detectCORSSupport();

        console.log('LLM Practice页面JavaScript初始化完成 - 环境: ' + environment);
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
