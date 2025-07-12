---
layout: archive
title: "LLM Practice"
permalink: /llm-practice/
author_profile: true
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
</div>

## Platform Features

### Open WebUI
- **Multi-Model Support**: Compatible with Ollama, OpenAI API, and other LLM backends
- **User Management**: Built-in authentication and user role management
- **Plugin System**: Extensible with custom functions and integrations
- **Offline Capable**: Run completely offline for privacy and security

### LobeChat
- **Modern Interface**: Clean, intuitive design with dark/light theme support
- **Multimodal**: Support for text, image, and voice interactions
- **Customizable**: Highly configurable with plugin architecture
- **Real-time**: Fast response times with streaming support

### LM Arena
- **Model Comparison**: Side-by-side evaluation of different language models
- **Community Driven**: Crowdsourced evaluation through human preferences
- **Leaderboard**: Track the latest rankings and model performance
- **Research Tool**: Valuable resource for AI research and development

### New API
- **Unified Gateway**: Single API interface for multiple large language models
- **Model Aggregation**: Access to various mainstream AI models through one endpoint
- **Load Balancing**: Intelligent routing and distribution of API requests
- **Developer Friendly**: Simplified integration process for multi-model applications

---

<div style="text-align: center; margin-top: 40px; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
    <h3>Research & Development</h3>
    <p>These platforms serve as testbeds for exploring the latest developments in large language models, enabling hands-on experimentation with cutting-edge AI technologies.</p>
</div>
