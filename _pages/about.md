---
permalink: /
title: "Bingwen Feng"
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---


{% include base_path %}

Education
======
* 09/2002 – 06/2006 Sun Yat-sen University Network Engineering Bachelor's Degree
* 09/2006 – 06/2008 Sun Yat-sen University Software Engineering Master's Degree
* 09/2010 – 12/2014 Sun Yat-sen University Computer Software and Theory Doctoral Degree

Work experience
======
* **Associate Professor, Assistant Dean**
  * College of Cyber Security, Jinan University, Guangzhou, China

Research Interests
======
*   **Multimedia security:** Steganography, steganalysis, digital watermarking, signal processing for security application.
*   **AI security:** AI model watermarking, adversarial example.

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
    
    <!-- Add framework images for specific publications -->
    {% if post.title contains "Robust Generative Steganography" %}
      <div style="margin: 10px 0; text-align: center;">
        <img src="/images/publications/Robust Generative Steganography for Image Hiding.gif" alt="Framework" style="width:100%; max-width:500px; border: 1px solid #ddd; border-radius: 5px;">
      </div>
    {% elsif post.title contains "Conditional image hiding" %}
      <div style="margin: 10px 0; text-align: center;">
        <img src="/images/publications/Conditional image hiding network based on style transfer.jpg" alt="Framework" style="width:100%; max-width:500px; border: 1px solid #ddd; border-radius: 5px;">
      </div>
    {% elsif post.title contains "Camera-shooting resilient" %}
      <div style="margin: 10px 0; text-align: center;">
        <img src="/images/publications/Camera-Shooting Resilient Watermarking on.gif" alt="Framework" style="width:100%; max-width:500px; border: 1px solid #ddd; border-radius: 5px;">
      </div>
    {% elsif post.title contains "JPEG Compression-Resistant" %}
      <div style="margin: 10px 0; text-align: center;">
        <img src="/images/publications/JPEG Compression-Resistant Generative Image.gif" alt="Framework" style="width:100%; max-width:500px; border: 1px solid #ddd; border-radius: 5px;">
      </div>
    {% elsif post.title contains "robust reversible watermarking" %}
      <div style="margin: 10px 0; text-align: center;">
        <img src="/images/publications/A Robust Reversible Watermarking scheme using DC prediction and histogram shifting.jpg" alt="Framework" style="width:100%; max-width:500px; border: 1px solid #ddd; border-radius: 5px;">
      </div>
    {% elsif post.title contains "Multi-Party Reversible" %}
      <div style="margin: 10px 0; text-align: center;">
        <img src="/images/publications/Multi-Party Reversible Data Hiding.gif" alt="Framework" style="width:100%; max-width:500px; border: 1px solid #ddd; border-radius: 5px;">
      </div>
    {% elsif post.title contains "Removing Hidden Information" %}
      <div style="margin: 10px 0; text-align: center;">
        <img src="/images/publications/Removing Hidden Information by Geometrical Perturbation in Frequency Domain.png" alt="Framework" style="width:100%; max-width:500px; border: 1px solid #ddd; border-radius: 5px;">
      </div>
    {% elsif post.title contains "Robust image hiding" %}
      <div style="margin: 10px 0; text-align: center;">
        <img src="/images/publications/Robust image hiding network with Frequency and Spatial Attentions.jpg" alt="Framework" style="width:100%; max-width:500px; border: 1px solid #ddd; border-radius: 5px;">
      </div>
    {% elsif post.title contains "TCEMD" %}
      <div style="margin: 10px 0; text-align: center;">
        <img src="/images/publications/TCEMD_A_Trust_Cascading-Based_Emergency_Message_Dissemination_Model_in_VANETs.gif" alt="Framework" style="width:100%; max-width:500px; border: 1px solid #ddd; border-radius: 5px;">
      </div>
    {% endif %}
  {% endfor %}</ul>

Research Grants
======
*   **PI**, Research on Generative Image Steganography with Multi-Attribute Balancing (62472199), General Program of National Natural Science Foundation of China (NSFC). Jan 2025 – Dec 2028.
*   **PI**, Research on Key Technologies of Image Steganography with Robustness and Anti-Detection Capabilities (61802145), Youth Program of National Natural Science Foundation of China (NSFC). Jan 2019 – Dec 2021.
*   **PI**, Key Technologies and Systems for Multi-Dimensional Dynamic Location Privacy Protection (2017YFB0802203), Sub-project, National Key R&D Program of China. Jul 2017 – Dec 2020.
*   **PI**, Key Technologies and Systems for Intelligent Perception of Cybersecurity Situational Awareness Based on Big Data (2019B010136003), Sub-project, Key-Area R&D Program of Guangdong Province. Jan 2019 – Dec 2022.


Professional Service
======
*   **Guest Editor**, *Symmetry* (ISSN: 2073-8994; CiteScore: Q1).
*   **Organizing Committee Chair**, CryptoIC 2023 (China Cryptography Association Annual Conference on Cryptographic Chips).
*   **Poster Chair**, ICEA 2021 (2021 ACM International Conference on Intelligent Computing and its Emerging Applications).
*   **Peer Reviewer** for numerous journals including *IEEE Transactions on Information Forensics and Security*, *Information Fusion*, and more.
*   Recognized with a **Certificate of Excellence in Reviewing** from *Information Fusion*.

For a full list of my publications, please see my [Google Scholar Profile](https://scholar.google.com/).
