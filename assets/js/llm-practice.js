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

            // 根据错误类型提供不同的提示
            if (err.message.includes('Failed to fetch') || err.name === 'TypeError') {
                responseDiv.textContent = "网络请求失败：CORS跨域限制\n\n原因：从 " + window.location.hostname + " 访问 api.masanli.top 被浏览器阻止\n\n解决方案：\n1. 点击下方按钮直接访问 New API 网站\n2. 如果是开发者，可以尝试安装CORS浏览器扩展";
            } else {
                responseDiv.textContent = "请求失败：" + err.message;
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

    // 检测CORS支持
    function detectCORSSupport() {
        console.log("当前访问域名: " + window.location.hostname);
        console.log("目标API域名: api.masanli.top");
        console.log("协议: " + window.location.protocol);

        if (window.location.protocol === 'file:') {
            console.log('本地文件访问 - CORS限制较少');
        } else {
            console.log('网站访问 - 受CORS策略限制');
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

        // 检测CORS支持
        detectCORSSupport();

        console.log('LLM Practice页面JavaScript初始化完成');
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
        window.addEventListener('load', detectCORSSupport);
    }

    // 启动初始化
    init();

})();
