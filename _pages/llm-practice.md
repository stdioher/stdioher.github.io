---
layout: archive-nosidebar
title: "LLM Practice"
permalink: /llm-practice/
author_profile: false
---

<style>
.llm-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 25px;
    margin: 30px 0;
}

.llm-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 15px;
    padding: 25px;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    position: relative;
    overflow: hidden;
}

.llm-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255,255,255,0.1);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.llm-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
    text-decoration: none;
    color: white;
}

.llm-card:hover::before {
    opacity: 1;
}

.llm-icon {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    margin-bottom: 15px;
    border: 3px solid rgba(255,255,255,0.2);
}

.llm-title {
    font-size: 1.4em;
    font-weight: bold;
    margin-bottom: 10px;
    color: white;
}

.llm-description {
    font-size: 0.95em;
    line-height: 1.5;
    margin-bottom: 15px;
    opacity: 0.9;
}

.llm-url {
    font-size: 0.85em;
    opacity: 0.8;
    font-family: monospace;
    background: rgba(255,255,255,0.1);
    padding: 5px 10px;
    border-radius: 5px;
    display: inline-block;
}

.openwebui {
    background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
}

.lobechat {
    background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
}

.lmarena {
    background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
}

.newapi {
    background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
}
.gitlab {
    background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
}

.aicc {
    background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
}

.page-header {
    text-align: center;
    margin-bottom: 40px;
    padding: 30px 0;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    border-radius: 15px;
}

.page-header h1 {
    color: #2c3e50;
    margin-bottom: 10px;
}

.page-header p {
    color: #7f8c8d;
    font-size: 1.1em;
}

.chat-container {
    background: #ffffff;
    border-radius: 15px;
    padding: 30px;
    margin: 40px 0;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    border: 1px solid #e9ecef;
}

.chat-header {
    text-align: center;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 2px solid #f8f9fa;
}

.chat-header h2 {
    color: #2c3e50;
    margin-bottom: 5px;
    font-size: 1.5em;
}

.chat-header p {
    color: #6c757d;
    margin: 0;
}

.chat-input-group {
    margin-bottom: 20px;
}

.chat-textarea {
    width: 100%;
    min-height: 120px;
    padding: 15px;
    border: 2px solid #e9ecef;
    border-radius: 10px;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    resize: vertical;
    transition: border-color 0.3s ease;
    box-sizing: border-box;
}

.chat-textarea:focus {
    outline: none;
    border-color: #495057;
    box-shadow: 0 0 0 3px rgba(73, 80, 87, 0.1);
}

.chat-send-btn {
    background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: block;
    margin: 0 auto;
}

.chat-send-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(73, 80, 87, 0.3);
}

.chat-send-btn:disabled {
    background: #adb5bd;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
}

.chat-response {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 10px;
    padding: 20px;
    min-height: 100px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: #495057;
    white-space: pre-wrap;
    word-wrap: break-word;
}

.chat-response.loading {
    background: linear-gradient(90deg, #f8f9fa 25%, #e9ecef 50%, #f8f9fa 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
}

@keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}

.chat-response.error {
    background: #f8d7da;
    border-color: #f5c6cb;
    color: #721c24;
}
</style>

<div class="page-header">
    <h1>LLM Practice Platform</h1>

</div>



<div class="llm-container">
    <a href="http://47.113.200.53:33005/" target="_blank" class="llm-card openwebui">
        <img src="/images/llm/openwebui.png" alt="Open WebUI" class="llm-icon">
        <div class="llm-title">Open WebUI</div>
        <div class="llm-description">
            A feature-rich, extensible, and user-friendly self-hosted WebUI designed to operate entirely offline. Supports various LLM runners including Ollama and OpenAI-compatible APIs.
        </div>
    </a>

    <a href="http://47.113.200.53:33210/" target="_blank" class="llm-card lobechat">
        <img src="/images/llm/lobechat.png" alt="LobeChat" class="llm-icon">
        <div class="llm-title">LobeChat</div>
        <div class="llm-description">
            An open-source, modern-design ChatGPT/LLMs UI/Framework. Supports speech-synthesis, multimodal, and extensible Function Call plugin system. One-click FREE deployment.
        </div>
    </a>

    <a href="https://lmarena.ai/leaderboard" target="_blank" class="llm-card lmarena">
        <img src="/images/llm/LMArena.png" alt="LM Arena" class="llm-icon">
        <div class="llm-title">LM Arena</div>
        <div class="llm-description">
            An open platform for evaluating AI through human preference. Compare different language models side-by-side and contribute to the community-driven evaluation of AI systems.
        </div>
    </a>

    <a href="https://api.masanli.top/" target="_blank" class="llm-card newapi">
        <img src="/images/llm/newapi.png" alt="New API" class="llm-icon">
        <div class="llm-title">New API</div>
        <div class="llm-description">
            A unified large model interface gateway provides a unified API interface for a variety of mainstream large models, simplifies the complexity of developers integrating multiple AI models, and supports load balancing and intelligent routing.
        </div>
    </a>
    <a href="https://gitlab.stdlibh.site/" target="_blank" class="llm-card gitlab">
        <img src="/images/llm/gitlab.png" alt="Gitlab" class="llm-icon">
        <div class="llm-title">Gitlab</div>
        <div class="llm-description">
            A self-hosted GitLab instance for personal code reference and storing deep learning training scripts.
        </div>
    </a>

    <a href="https://icas.jnu.edu.cn/cas/login?service=https://aicc.jnu.edu.cn/api/blade-auth/jinanLogin?loginSuccessURL=https://aicc.jnu.edu.cn/" target="_blank" class="llm-card aicc">
        <img src="/images/llm/jnu.png" alt="AICC" class="llm-icon">
        <div class="llm-title">AICC</div>
        <div class="llm-description">
            The intelligent computing platform of Jinan University, utilized for deploying and fine-tuning large-scale model experiments.
        </div>
    </a>
</div>

<!-- AI Chat Interface -->
<div class="chat-container">
    <div class="chat-header">
        <h2>AI Classmate</h2>
        <p>Experience AI chat through our unified API gateway</p>
    </div>
    
    <div class="chat-input-group">
        <textarea id="chatPrompt" class="chat-textarea" placeholder="Input quetion...">Hello!</textarea>
    </div>
    
    <button id="chatSendBtn" class="chat-send-btn">Send Message</button>
    
    <div style="margin-top: 20px;">
        <h3 style="color: #495057; margin-bottom: 10px;">AI reply：</h3>
        <div id="chatResponse" class="chat-response">Waiting to send message...</div>
    </div>
    
    
</div>

<!-- 引用外部JavaScript文件以符合GitHub Pages CSP政策 -->
<script src="{{ base_path }}/assets/js/llm-practice.js"></script>

<div style="text-align: center; margin-top: 40px; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
    <h3>Research & Development</h3>
    <p>These platforms serve as testbeds for exploring the latest developments in large language models, enabling hands-on experimentation with cutting-edge AI technologies.</p>
</div>
