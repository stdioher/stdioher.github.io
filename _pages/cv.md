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
  
  <!-- CSP和安全检测区域 -->
  <div style="margin-bottom: 15px;">
    <h4 style="color: #495057;">安全策略检测：</h4>
    <div id="security-info" style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 5px; padding: 10px; font-size: 12px;">
      <div>🔍 检测内容安全策略限制...</div>
      <div id="csp-status">CSP状态: 检测中</div>
      <div id="script-status">脚本加载状态: 检测中</div>
      <div id="inline-status">内联脚本状态: 检测中</div>
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

<!-- 引用外部JavaScript文件以符合GitHub Pages CSP政策 -->
<script src="{{ base_path }}/assets/js/cv-test.js"></script>
