---
layout: archive
title: "CV"
permalink: /cv/
author_profile: false
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Ph.D in Version Control Theory, GitHub University, 2018 (expected)
* M.S. in Jekyll, GitHub University, 2014
* B.S. in GitHub, GitHub University, 2012

Work experience
======
* **Associate Professor, Assistant Dean**
  * College of Cyber Security, Jinan University, Guangzhou, China

Research Interests
======
*   **Multimedia security:** Steganography, steganalysis, digital watermarking, signal processing for security application.
*   **AI security:** AI model watermarking, adversarial example.

Research Grants
======
*   **PI**, Research on Generative Image Steganography with Multi-Attribute Balancing (62472199), General Program of National Natural Science Foundation of China (NSFC). Jan 2025 – Dec 2028.
*   **PI**, Research on Key Technologies of Image Steganography with Robustness and Anti-Detection Capabilities (61802145), Youth Program of National Natural Science Foundation of China (NSFC). Jan 2019 – Dec 2021.
*   **PI**, Key Technologies and Systems for Multi-Dimensional Dynamic Location Privacy Protection (2017YFB0802203), Sub-project, National Key R&D Program of China. Jul 2017 – Dec 2020.
*   **PI**, Key Technologies and Systems for Intelligent Perception of Cybersecurity Situational Awareness Based on Big Data (2019B010136003), Sub-project, Key-Area R&D Program of Guangdong Province. Jan 2019 – Dec 2022.

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Professional Service
======
*   **Guest Editor**, *Symmetry* (ISSN: 2073-8994; CiteScore: Q1).
*   **Organizing Committee Chair**, CryptoIC 2023 (China Cryptography Association Annual Conference on Cryptographic Chips).
*   **Poster Chair**, ICEA 2021 (2021 ACM International Conference on Intelligent Computing and its Emerging Applications).
*   **Peer Reviewer** for numerous journals including *IEEE Transactions on Information Forensics and Security*, *Information Fusion*, and more.
*   Recognized with a **Certificate of Excellence in Reviewing** from *Information Fusion*.

---

## JavaScript 功能测试区域

<div id="test-container" style="background: #f8f9fa; border: 2px solid #dee2e6; border-radius: 10px; padding: 20px; margin: 20px 0;">
  <h3 style="color: #495057; margin-bottom: 15px;">GitHub Pages JavaScript 测试</h3>
  
  <!-- 测试按钮区域 -->
  <div style="margin-bottom: 20px;">
    <button id="test-btn-1" class="test-button" style="background: #007bff; color: white; border: none; padding: 10px 20px; margin: 5px; border-radius: 5px; cursor: pointer;">基础点击测试</button>
    <button id="test-btn-2" class="test-button" style="background: #28a745; color: white; border: none; padding: 10px 20px; margin: 5px; border-radius: 5px; cursor: pointer;">DOM操作测试</button>
    <button id="test-btn-3" class="test-button" style="background: #dc3545; color: white; border: none; padding: 10px 20px; margin: 5px; border-radius: 5px; cursor: pointer;">事件委托测试</button>
    <button id="clear-log" style="background: #6c757d; color: white; border: none; padding: 10px 20px; margin: 5px; border-radius: 5px; cursor: pointer;">清空日志</button>
  </div>
  
  <!-- 动态内容显示区域 -->
  <div id="dynamic-content" style="background: white; border: 1px solid #dee2e6; border-radius: 5px; padding: 15px; margin-bottom: 15px; min-height: 50px;">
    <p>等待测试...</p>
  </div>
  
  <!-- 控制台日志显示区域 -->
  <div style="margin-bottom: 15px;">
    <h4 style="color: #495057;">调试日志输出：</h4>
    <div id="debug-log" style="background: #2d3748; color: #e2e8f0; font-family: monospace; padding: 10px; border-radius: 5px; max-height: 200px; overflow-y: auto; font-size: 12px;">
      <div class="log-entry">页面加载中...</div>
    </div>
  </div>
  
  <!-- 功能状态指示器 -->
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;">
    <div class="status-item" style="background: white; border: 1px solid #dee2e6; border-radius: 5px; padding: 10px; text-align: center;">
      <div style="font-weight: bold; color: #495057;">DOM加载状态</div>
      <div id="dom-status" style="color: #dc3545;">未检测</div>
    </div>
    <div class="status-item" style="background: white; border: 1px solid #dee2e6; border-radius: 5px; padding: 10px; text-align: center;">
      <div style="font-weight: bold; color: #495057;">事件监听状态</div>
      <div id="event-status" style="color: #dc3545;">未检测</div>
    </div>
    <div class="status-item" style="background: white; border: 1px solid #dee2e6; border-radius: 5px; padding: 10px; text-align: center;">
      <div style="font-weight: bold; color: #495057;">点击次数</div>
      <div id="click-count" style="color: #007bff; font-size: 18px; font-weight: bold;">0</div>
    </div>
  </div>
</div>

<style>
  .test-button:hover {
    opacity: 0.8;
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }
  
  .log-entry {
    margin: 2px 0;
    padding: 2px 0;
    border-bottom: 1px solid #4a5568;
  }
  
  .log-entry:last-child {
    border-bottom: none;
  }
  
  .status-item {
    transition: all 0.3s ease;
  }
  
  .status-item:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
</style>

<script>
  // 调试日志函数
  function debugLog(message, type = 'info') {
    const logContainer = document.getElementById('debug-log');
    if (!logContainer) return;
    
    const timestamp = new Date().toLocaleTimeString();
    const colors = {
      'info': '#81c784',
      'success': '#66bb6a', 
      'warning': '#ffb74d',
      'error': '#e57373'
    };
    
    const logEntry = document.createElement('div');
    logEntry.className = 'log-entry';
    logEntry.style.color = colors[type] || '#e2e8f0';
    logEntry.textContent = `[${timestamp}] ${message}`;
    
    logContainer.appendChild(logEntry);
    logContainer.scrollTop = logContainer.scrollHeight;
    
    // 同时输出到浏览器控制台
    console.log(`CV页面调试: ${message}`);
  }

  // 更新状态指示器
  function updateStatus(elementId, text, color) {
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = text;
      element.style.color = color;
    }
  }

  // 点击计数器
  let clickCount = 0;
  function updateClickCount() {
    clickCount++;
    updateStatus('click-count', clickCount.toString(), '#007bff');
    debugLog(`点击计数更新: ${clickCount}`, 'info');
  }

  // 页面加载完成时的初始化
  document.addEventListener('DOMContentLoaded', function() {
    debugLog('DOMContentLoaded 事件触发', 'success');
    updateStatus('dom-status', '已加载', '#28a745');
    
    // 基础点击测试
    const testBtn1 = document.getElementById('test-btn-1');
    if (testBtn1) {
      testBtn1.addEventListener('click', function() {
        debugLog('基础点击测试按钮被点击', 'success');
        updateClickCount();
        document.getElementById('dynamic-content').innerHTML = 
          '<p style="color: #28a745;"><strong>✓ 基础点击功能正常!</strong><br>时间: ' + new Date().toLocaleString() + '</p>';
      });
      debugLog('基础点击按钮事件监听器已添加', 'info');
    }

    // DOM操作测试
    const testBtn2 = document.getElementById('test-btn-2');
    if (testBtn2) {
      testBtn2.addEventListener('click', function() {
        debugLog('DOM操作测试按钮被点击', 'success');
        updateClickCount();
        
        const dynamicContent = document.getElementById('dynamic-content');
        dynamicContent.innerHTML = '<p style="color: #007bff;"><strong>DOM操作测试</strong></p>';
        
        // 动态创建元素
        const newElement = document.createElement('div');
        newElement.style.cssText = 'background: #e3f2fd; border: 1px solid #1976d2; border-radius: 5px; padding: 10px; margin: 10px 0;';
        newElement.innerHTML = `
          <p><strong>✓ DOM创建成功!</strong></p>
          <p>随机数: ${Math.floor(Math.random() * 1000)}</p>
          <p>用户代理: ${navigator.userAgent.substring(0, 50)}...</p>
        `;
        dynamicContent.appendChild(newElement);
        
        debugLog('DOM元素动态创建完成', 'success');
      });
      debugLog('DOM操作按钮事件监听器已添加', 'info');
    }

    // 事件委托测试 
    document.addEventListener('click', function(e) {
      if (e.target.id === 'test-btn-3') {
        debugLog('事件委托测试触发', 'success');
        updateClickCount();
        
        document.getElementById('dynamic-content').innerHTML = `
          <div style="color: #dc3545;">
            <h4>✓ 事件委托测试成功!</h4>
            <p><strong>点击目标:</strong> ${e.target.tagName} (ID: ${e.target.id})</p>
            <p><strong>事件类型:</strong> ${e.type}</p>
            <p><strong>鼠标坐标:</strong> (${e.clientX}, ${e.clientY})</p>
            <p><strong>页面URL:</strong> ${window.location.href}</p>
          </div>
        `;
        
        debugLog(`事件委托 - 目标: ${e.target.id}, 坐标: (${e.clientX}, ${e.clientY})`, 'info');
      }
      
      if (e.target.id === 'clear-log') {
        debugLog('清空日志按钮被点击', 'warning');
        const logContainer = document.getElementById('debug-log');
        if (logContainer) {
          logContainer.innerHTML = '<div class="log-entry">日志已清空</div>';
        }
        clickCount = 0;
        updateStatus('click-count', '0', '#007bff');
      }
    });

    updateStatus('event-status', '已激活', '#28a745');
    debugLog('所有事件监听器初始化完成', 'success');
    
    // 环境信息检测
    debugLog(`运行环境: ${navigator.userAgent.includes('GitHub') ? 'GitHub Pages' : '本地/其他'}`, 'info');
    debugLog(`协议: ${window.location.protocol}`, 'info');
    debugLog(`主机: ${window.location.host}`, 'info');
    debugLog(`路径: ${window.location.pathname}`, 'info');
    
    // 测试 Jekyll 构建信息（如果可用）
    if (typeof jekyll !== 'undefined') {
      debugLog('检测到 Jekyll 环境变量', 'info');
    } else {
      debugLog('未检测到 Jekyll 环境变量', 'info');
    }
  });

  // 页面可见性变化检测
  document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
      debugLog('页面变为可见状态', 'info');
    } else {
      debugLog('页面变为隐藏状态', 'warning');
    }
  });

  // 错误捕获
  window.addEventListener('error', function(e) {
    debugLog(`JavaScript错误: ${e.message} (行: ${e.lineno})`, 'error');
  });

  // 初始化完成标志
  debugLog('CV页面JavaScript初始化脚本加载完成', 'success');
</script>
