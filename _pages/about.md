---
permalink: /
title: "Bingwen Feng"
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---

<style>
/* 学术页面通用样式 */
.academic-section {
  margin: 30px 0;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.08);
}

.academic-section h2 {
  color: #2c3e50;
  border-bottom: 2px solid #34495e;
  padding-bottom: 8px;
  margin-bottom: 20px;
}

.education-item {
  background: #f8f9fa;
  border-left: 4px solid #6c757d;
  padding: 15px;
  margin: 15px 0;
  border-radius: 0 6px 6px 0;
}

.research-interest {
  background: #f1f3f4;
  padding: 15px;
  margin: 10px 0;
  border-radius: 6px;
  border-left: 4px solid #5a67d8;
}

.publication-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.publication-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.framework-image {
  margin: 15px 0;
  text-align: center;
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.framework-image img {
  width: 100%;
  max-width: 500px;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.grant-item {
  background: #f7f8fc;
  border: 1px solid #e6e8ed;
  border-radius: 6px;
  padding: 18px;
  margin: 12px 0;
}

.service-item {
  background: #fafbfc;
  border-left: 3px solid #718096;
  padding: 15px;
  margin: 10px 0;
  border-radius: 0 4px 4px 0;
}
</style>

{% include base_path %}

<div class="academic-section">
<h2>Education</h2>
<div class="education-item">
  <strong>09/2010 – 12/2014</strong> Sun Yat-sen University<br>
  Computer Software and Theory <em>Doctoral Degree</em>
</div>
<div class="education-item">
  <strong>09/2006 – 06/2008</strong> Sun Yat-sen University<br>
  Software Engineering <em>Master's Degree</em>
</div>
<div class="education-item">
  <strong>09/2002 – 06/2006</strong> Sun Yat-sen University<br>
  Network Engineering <em>Bachelor's Degree</em>
</div>
</div>

<div class="academic-section">
<h2>Work Experience</h2>
<div class="education-item">
  <strong>Associate Professor, Assistant Dean</strong><br>
  College of Cyber Security, Jinan University, Guangzhou, China
</div>
</div>

<div class="academic-section">
<h2>Research Interests</h2>
<div class="research-interest">
  <strong>Multimedia Security:</strong> Steganography, steganalysis, digital watermarking, signal processing for security application.
</div>
<div class="research-interest">
  <strong>AI Security:</strong> AI model watermarking, adversarial example.
</div>
</div>

<div class="academic-section">
<h2>Publications</h2>
<div class="publication-section">
  {% for post in site.publications reversed %}
    <div class="publication-card">
      {% include archive-single-cv.html %}
      
      <!-- Add framework images for specific publications -->
      {% if post.title contains "Robust Generative Steganography" %}
        <div class="framework-image">
          <img src="/images/publications/Robust Generative Steganography for Image Hiding.gif" alt="Research Framework">
          
        </div>
      {% elsif post.title contains "JPEG Compression-Resistant" %}
        <div class="framework-image">
          <img src="/images/publications/JPEG Compression-Resistant Generative Image.gif" alt="Research Framework">
          
        </div>
      {% elsif post.title contains "Camera-shooting resilient" %}
        <div class="framework-image">
          <img src="/images/publications/Camera-Shooting Resilient Watermarking on.gif" alt="Research Framework">
          
        </div>
      {% elsif post.title contains "Removing Hidden Information" %}
        <div class="framework-image">
          <img src="/images/publications/Removing Hidden Information.png" alt="Research Framework">
          
        </div>
      {% elsif post.title contains "Robust image hiding" %}
        <div class="framework-image">
          <img src="/images/publications/Robust image hiding network with Frequency and Spatial Attentions.jpg" alt="Research Framework">
          
        </div>
      {% endif %}
    </div>
  {% endfor %}
</div>
</div>

<div class="academic-section">
<h2>Research Grants</h2>
<div class="grant-item">
  <strong>PI</strong>, Research on Generative Image Steganography with Multi-Attribute Balancing (62472199), General Program of National Natural Science Foundation of China (NSFC). <em>Jan 2025 – Dec 2028.</em>
</div>
<div class="grant-item">
  <strong>PI</strong>, Research on Key Technologies of Image Steganography with Robustness and Anti-Detection Capabilities (61802145), Youth Program of National Natural Science Foundation of China (NSFC). <em>Jan 2019 – Dec 2021.</em>
</div>
<div class="grant-item">
  <strong>PI</strong>, Key Technologies and Systems for Multi-Dimensional Dynamic Location Privacy Protection (2017YFB0802203), Sub-project, National Key R&D Program of China. <em>Jul 2017 – Dec 2020.</em>
</div>
<div class="grant-item">
  <strong>PI</strong>, Key Technologies and Systems for Intelligent Perception of Cybersecurity Situational Awareness Based on Big Data (2019B010136003), Sub-project, Key-Area R&D Program of Guangdong Province. <em>Jan 2019 – Dec 2022.</em>
</div>
</div>

<div class="academic-section">
<h2>Professional Service</h2>
<div class="service-item">
  <strong>Guest Editor</strong>, <em>Symmetry</em> (ISSN: 2073-8994; CiteScore: Q1).
</div>
<div class="service-item">
  <strong>Organizing Committee Chair</strong>, CryptoIC 2023 (China Cryptography Association Annual Conference on Cryptographic Chips).
</div>
<div class="service-item">
  <strong>Poster Chair</strong>, ICEA 2021 (2021 ACM International Conference on Intelligent Computing and its Emerging Applications).
</div>
<div class="service-item">
  <strong>Peer Reviewer</strong> for numerous journals including <em>IEEE Transactions on Information Forensics and Security</em>, <em>Information Fusion</em>, and more.
</div>
<div class="service-item">
  Recognized with a <strong>Certificate of Excellence in Reviewing</strong> from <em>Information Fusion</em>.
</div>

<p style="text-align: center; margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 8px;">
For a full list of my publications, please see my <a href="https://scholar.google.com/" target="_blank" style="color: #5a67d8; text-decoration: none; font-weight: 500;">Google Scholar Profile</a>.
</p>
</div>
