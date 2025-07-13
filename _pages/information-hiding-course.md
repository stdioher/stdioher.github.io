---
layout: archive-nosidebar
title: "Information Hiding Course"
permalink: /information-hiding-course/
author_profile: false
---

Welcome to the Information Hiding Course page! This course aims to explore the theoretical foundations and practical applications of information hiding technologies.

<!-- Innovation Practice Section -->
<div class="section-container" style="margin: 40px 0;">
  <h2 class="section-title" style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 3px solid #3498db; display: inline-block;">Innovation Practice</h2>
  
  <!-- Research Publications related to Information Hiding -->
  <div style="margin: 30px 0;">
    {% for post in site.publications reversed %}
      {% assign title_lower = post.title | downcase %}
      {% if title_lower contains "steganography" or title_lower contains "hiding" or title_lower contains "watermark" %}
      
        <!-- Get publication info based on title -->
        {% assign framework_image = "" %}
        {% assign abstract = "" %}
        {% assign pdf_path = "" %}
        {% assign authors = "" %}
        {% assign journal = "" %}

        {% if post.title contains "Robust Generative Steganography" %}
          {% assign framework_image = "/images/publications/Robust Generative Steganography for Image Hiding.gif" %}
          {% assign authors = "Liyan Chen, Bingwen Feng*, Zhihua Xia, et al." %}
          {% assign journal = "IEEE Transactions on Information Forensics and Security, 2025" %}
          {% assign abstract = "Generative steganography stands as a promising technique for information hiding, primarily due to its remarkable resistance to steganalysis detection. Despite its potential, hiding a secret image using existing generative steganographic models remains a challenge, especially in lossy or noisy communication channels. This paper proposes a robust generative steganography model for hiding full-size image. It lies on three reversible concatenated mappings proposed. The first mapping uses VQGAN with an order-preserving codebook to compress an image into a more concise representation. The second mapping incorporates error correction to further convert the representation into a robust binary representation. The third mapping devises a distribution-preserving sampling mapping that transforms the binary representation into the latent representation. This latent representation is then used as input for a text-to-image Diffusion model, which generates the final stego image. Experimental results show that our proposed scheme can freely customize the stego image content. Moreover, it simultaneously attains high stego and recovery image quality, high robustness, and provable security." %}
          {% assign pdf_path = "/files/publications/Robust_Generative_Steganography_for_Image_Hiding_Using_Concatenated_Mappings.pdf" %}

        {% elsif post.title contains "Conditional image hiding" %}
          {% assign framework_image = "/images/publications/Conditional image hiding network based on style transfer.jpg" %}
          {% assign authors = "Fenghua Zhang, Bingwen Feng*, Zhihua Xia, et al." %}
          {% assign journal = "Information Sciences, 2024" %}
          {% assign abstract = "Various data hiding methods have been suggested to hide secret images within stego images. However, many of them could be easily detected by steganalytic tools due to their large hidden information. In this paper, we enhance the undetectability of image hiding network by mapping latent representation conditional on secret information. We extend the idea of image generation-based steganography and propose a Transformer-based image hiding network, which can hide secret images of the same size as the target image. The proposed scheme uses style transfer to help map the latent representation. The proposed scheme's hiding network includes three modules: encoding module, transfer module, and synthesis module. The encoding module extracts latent representations from the content image and the secret image, the transfer module stylizes intermediate representations conditional on secret information, and the synthesis module fuses the stylized features and the secret image features to synthesize the target image with the secret image hidden in it. A new synthesis module and corresponding extraction network are developed to improve recovery accuracy. The proposed scheme shows high image quality on both target images and recovered secret images. Furthermore, it is robust to steganalytic tools, thus providing good security." %}
          {% assign pdf_path = "/files/publications/Conditional image hiding network based on style transfer.pdf" %}

        {% elsif post.title contains "Camera-shooting resilient" or post.title contains "Camera-Shooting Resilient" %}
          {% assign framework_image = "/images/publications/Camera-Shooting Resilient Watermarking on.gif" %}
          {% assign authors = "Lin He, Bingwen Feng*, Zecheng Peng, et al." %}
          {% assign journal = "IEEE Transactions on Circuits and Systems for Video Technology, 2024" %}
          {% assign abstract = "Capturing displayed images using portable cameras has become familiar among multimedia pirates, necessitating the urgent requirement of camera-shooting resilient watermarking schemes. In this paper, we consider the stealers who only record parts of images, and propose a robust watermarking scheme at the image instance level. This scheme consists of an encoding end, a noise layer, and a decoding end. The encoding end first selects specific watermarking regions associated with segmented image instances. Afterwards, an encoder is employed to embed watermark sequences into the RGB color model of these watermarking regions. At last, templates are embedded to product the final watermarked images. Specifically, our suggested template-based resynchronization comprises a template embedding module at the encoding end and a geometric correction module at the decoding end. The former embeds templates by a correlation-aware multiplicative spread spectrum with an adaptive amplitude, while the latter learns a calibrator to estimate the perspective projection. Experiments on both simulation and real-world scenarios support that the proposed scheme effectively resists camera-shooting attacks with various shooting conditions, regardless of whether the entire displayed images have been captured." %}
          {% assign pdf_path = "/files/publications/Camera-Shooting_Resilient_Watermarking_on_Image_Instance_Level.pdf" %}

        {% elsif post.title contains "JPEG Compression-Resistant" %}
          {% assign framework_image = "/images/publications/JPEG Compression-Resistant Generative Image.gif" %}
          {% assign authors = "Tiewei Qin, Bingwen Feng*, Bingbing Zhou, et al." %}
          {% assign journal = "IEEE Transactions on Information Forensics and Security, 2025" %}
          {% assign abstract = "Generative steganography is renowned for its exceptional undetectability. However, prevalent generative methods often have insufficient capacity for concealing secret images. Furthermore, the sensitivity of commonly utilized generative models exacerbates the challenge of ensuring robustness against channel distortions such as JPEG compression. In this paper, we introduce a generative image hiding network that employs two invertible generators to transform secret images into stego images within a disparate image domain. Additionally, we seamlessly integrate an up-and-down sampling module (UDM) within these generators to facilitate efficient decoupling of the intermediate representations obtained by each generator. The UDM serves multiple purposes: preserving coherence between the intermediate representations, enhancing resilience against JPEG compression, and safeguarding the confidentiality of the concealed images. To address the complexity of mapping both uncompressed and compressed stego images to a unified intermediary representation, we implement two distinct flows for the forward and backward processes of the generator associated with the stego images. The experimental results show that our scheme offers concurrent advantages in terms of full-size image hiding ability, undetectability, confidentiality, and robustness." %}
          {% assign pdf_path = "/files/publications/JPEG_Compression-Resistant_Generative_Image_Hiding_Utilizing_Cascaded_Invertible_Networks.pdf" %}

        {% elsif post.title contains "robust reversible watermarking" or post.title contains "Robust Reversible Watermarking" %}
          {% assign framework_image = "/images/publications/A Robust Reversible Watermarking scheme.jpg" %}
          {% assign authors = "Jiancheng Xiao, Shuaichao Wu, Bingwen Feng*, et al." %}
          {% assign journal = "Signal Processing, 2025" %}
          {% assign abstract = "Robust Reversible Watermarking (RRW) not only ensures the resilience of watermarked images under various attacks but also enables the exact recovery of the original host images from these watermarked versions. However, many existing RRW methods suffer from compromised reversibility when subjected to attacks, preventing successful restoration of the host image. In this paper, we explore the dual robustness of RRW—simultaneously enhancing both watermark resilience and reversibility. We propose a JPEG compression-resistant histogram-shifting algorithm that withstands targeted compression and exhibits strong robustness against common image manipulations. Building on this algorithm, we introduce two RRW schemes: one embeds watermark bits into the AC coefficients, and the other embeds them into the prediction error of DC coefficients. Furthermore, we design a convolutional neural network (CNN)-based DC predictor to infer DC coefficients from AC coefficients. Experimental results demonstrate that our approach achieves superior robustness and watermarked image quality, while reliably preserving reversibility under various distortions." %}
          {% assign pdf_path = "/files/publications/A Robust Reversible Watermarking scheme using DC prediction and histogram shifting.pdf" %}

        {% elsif post.title contains "Multi-Party Reversible" %}
          {% assign framework_image = "/images/publications/Multi-Party Reversible Data Hiding.gif" %}
          {% assign authors = "Bing Chen, Jingkun Yu, Bingwen Feng, et al." %}
          {% assign journal = "IEEE Signal Processing Letters, 2025" %}
          {% assign abstract = "Existing methods for reversible data hiding in ciphertext binary images only involve one data hider to perform data embedding. When the data hider is attacked, the original binary image cannot be perfectly reconstructed. To this end, this letter proposes multi-party reversible data hiding in ciphertext binary images (MRDHCBI), where multiple data hiders are involved in data embedding. In this solution, we use visual cryptography technology to encrypt a binary image into multiple ciphertext binary images, and transmit the ciphertext binary images to different data hiders. Each data hider can embed data into a ciphertext binary image and generate a marked ciphertext binary image. The original binary image is perfectly reconstructed by collecting a portion of marked ciphertext binary images from the unattacked data hiders. Compared with existing solutions, the proposed solution enhances the recoverability of the original binary image. Besides, the proposed solution maintains a stable embedding capacity for different categories of images." %}
          {% assign pdf_path = "/files/publications/Multi-Party_Reversible_Data_Hiding_in_Ciphertext_Binary_Images_Based_on_Visual_Cryptography.pdf" %}

        {% elsif post.title contains "Removing Hidden Information" %}
          {% assign framework_image = "/images/publications/Removing Hidden Information.png" %}
          {% assign authors = "Lin He, Bingwen Feng*, Zecheng Peng, et al." %}
          {% assign journal = "IEEE Transactions on Circuits and Systems for Video Technology, 2024" %}
          {% assign abstract = "The risk of malicious exploitation of advanced image steganography necessitates the removal of hidden information from images. However, it is crucial to preserve the visual quality of the images undergoing processed. This paper suggests a geometrical attack in frequency domain (GAF) to address this challenge. GAF employs a thin plate spline (TPS) to slightly geometrically perturb the frequency components of the stego image. It incorporates a channel weight estimator and a frequency jammer. The channel weight estimator assigns perturbation strengths to each DCT channel, while the frequency jammer performs the TPS transform on the DCT channels using the assigned perturbation strengths. Experimental results demonstrate that the proposed approach effectively hinders secret image recovery with a little distortion to the stego images. Furthermore, it well preserves the visual quality of clear images that do not contain secret information." %}
          {% assign pdf_path = "/files/publications/Removing_Hidden_Information_by_Geometrical_Perturbation_in_Frequency_Domain.pdf" %}

        {% elsif post.title contains "Robust image hiding" %}
          {% assign framework_image = "/images/publications/Robust image hiding network with Frequency and Spatial Attentions.jpg" %}
          {% assign authors = "Xiaobin Zeng, Bingwen Feng*, Zhihua Xia, et al." %}
          {% assign journal = "Pattern Recognition, 2024" %}
          {% assign abstract = "Convert Image Communication (CIC) is a promising technology to protect the privacy of images. Recently, the emergence of robust CIC resistant to JPEG compression has gained due to the widespread use of JPEG compression in image communication. This paper introduces a Robust image hiding network with Frequency and Spatial Attentions (RFSA) to implement robust CIC. RFSA can hide an image within another image with high robust. It incorporates multiple image attentions corresponding to imperceptibility, recovered image quality, and resistance to JPEG compression, which ensure that secret images are hidden within regions that cause little distortion and can well withstand JPEG compression. Additionally, two encoders, that is, a frequency encoder and a spatial encoder, are mixed to adaptively embed secret images across both frequency and spatial domains. Experimental results demonstrate that the proposed scheme not only maintains high image quality and capacity but also exhibits exceptional resistance to JPEG compression compared to other state-of-the-art image hiding methods. The average Peak Signal-to-Noise Ratio (PSNR) of the recovered image remains at 24.96 dB even under JPEG compression with a quality factor of 55." %}
          {% assign pdf_path = "/files/publications/Robust image hiding network with Frequency and Spatial Attentions.pdf" %}

        {% endif %}

        <!-- Display publication card -->
        <div class="publication-card">
          <div class="publication-image">
            <img src="{{ framework_image }}" alt="Framework for {{ post.title }}" data-title="{{ post.title }}" class="modal-trigger" title="点击查看大图">
          </div>
          <div class="publication-content">
            <div class="publication-title">
              {{ post.title }}
            </div>
            <div class="publication-authors">
              {{ authors }}
            </div>
            <div class="publication-abstract">
              <div class="abstract-content" id="abstract-{{ forloop.index }}">
                {{ abstract }}
              </div>
              <div class="abstract-toggle" data-index="{{ forloop.index }}">
                <span class="toggle-text">show all ▼</span>
              </div>
              <div class="publication-journal" id="journal-{{ forloop.index }}">
                {{ journal }}
              </div>
            </div>
            <div class="publication-links">
              <a href="{{ pdf_path }}" target="_blank">📄 PDF</a>
              <a href="https://github.com/" target="_blank" class="github-link">📁 GitHub</a>
            </div>
          </div>
        </div>

      {% endif %}
    {% endfor %}
  </div>

  <h3 class="subsection-title" style="font-size: 22px; color: #34495e; margin: 30px 0 20px 0; padding-bottom: 8px; border-bottom: 2px solid #e74c3c; display: inline-block;">Innovation Practice Projects</h3>
  
  <div class="practice-projects" style="margin: 25px 0;">
    <div class="project-item" style="background: #f8f9fa; border-left: 4px solid #4a5568; padding: 20px; margin: 15px 0; border-radius: 0 8px 8px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
      <h4 style="color: #2d3748; margin-bottom: 10px; font-size: 18px;">Generative Steganography Research</h4>
      <p style="color: #6c757d; margin: 0; line-height: 1.6;">Exploring generative information hiding techniques based on deep learning</p>
    </div>
    
    <div class="project-item" style="background: #f8f9fa; border-left: 4px solid #2d3748; padding: 20px; margin: 15px 0; border-radius: 0 8px 8px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
      <h4 style="color: #2d3748; margin-bottom: 10px; font-size: 18px;">Robust Hiding Algorithms</h4>
      <p style="color: #6c757d; margin: 0; line-height: 1.6;">Developing compression-resistant and attack-resistant information hiding methods</p>
    </div>
    
    <div class="project-item" style="background: #f8f9fa; border-left: 4px solid #4a5568; padding: 20px; margin: 15px 0; border-radius: 0 8px 8px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
      <h4 style="color: #2d3748; margin-bottom: 10px; font-size: 18px;">Multimedia Watermarking Technology</h4>
      <p style="color: #6c757d; margin: 0; line-height: 1.6;">Research on copyright protection for multimedia content such as images and videos</p>
    </div>
    
    <div class="project-item" style="background: #f8f9fa; border-left: 4px solid #2d3748; padding: 20px; margin: 15px 0; border-radius: 0 8px 8px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
      <h4 style="color: #2d3748; margin-bottom: 10px; font-size: 18px;">Covert Communication Systems</h4>
      <p style="color: #6c757d; margin: 0; line-height: 1.6;">Building secure communication platforms based on information hiding</p>
    </div>
  </div>
</div>

<!-- Course Materials Section -->
<div class="section-container" style="margin: 40px 0;">
  <h2 class="section-title" style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 3px solid #3498db; display: inline-block;">Course Materials</h2>



<div class="teaching-resources-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 20px 0; max-width: 1000px; margin-left: auto; margin-right: auto;">
  
  <!-- Course PPT Card -->
  <div class="resource-card" style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 10px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.3s ease, box-shadow 0.3s ease; display: flex; flex-direction: column; height: 100%;">
    <div style="text-align: center; margin-bottom: 15px; flex-shrink: 0;">
      <img src="/images/information_hide/course3.png" alt="Course PPT Materials" style="width: 100%; max-width: 250px; height: 180px; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
    </div>
    <div style="display: flex; flex-direction: column; flex-grow: 1;">
      <h4 style="color: #2c3e50; margin-bottom: 10px; text-align: center; font-size: 18px; min-height: 50px; display: flex; align-items: center; justify-content: center;">Course PPT</h4>
      <p style="color: #6c757d; text-align: center; margin-bottom: 20px; line-height: 1.5; flex-grow: 1; display: flex; align-items: center; justify-content: center; min-height: 60px;">Detailed course slide materials covering theoretical foundations to practical applications</p>
      <div style="text-align: center; margin-top: auto;">
        <a href="#" style="background: #87CEEB; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-size: 14px; display: inline-block; min-width: 120px;">Download PPT</a>
      </div>
    </div>
  </div>

  <!-- Course Videos Card -->
  <div class="resource-card" style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 10px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.3s ease, box-shadow 0.3s ease; display: flex; flex-direction: column; height: 100%;">
    <div style="text-align: center; margin-bottom: 15px; flex-shrink: 0;">
      <img src="/images/information_hide/course1.png" alt="Course Videos" style="width: 100%; max-width: 250px; height: 180px; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
    </div>
    <div style="display: flex; flex-direction: column; flex-grow: 1;">
      <h4 style="color: #2c3e50; margin-bottom: 10px; text-align: center; font-size: 18px; min-height: 50px; display: flex; align-items: center; justify-content: center;">Course Videos</h4>
      <p style="color: #6c757d; text-align: center; margin-bottom: 20px; line-height: 1.5; flex-grow: 1; display: flex; align-items: center; justify-content: center; min-height: 60px;">Recorded course lectures supporting online viewing and downloading</p>
      <div style="text-align: center; margin-top: auto;">
        <a href="#" style="background: #87CEEB; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-size: 14px; display: inline-block; min-width: 120px;">Watch Videos</a>
      </div>
    </div>
  </div>

  <!-- Online Reference Books Card -->
  <div class="resource-card" style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 10px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.3s ease, box-shadow 0.3s ease; display: flex; flex-direction: column; height: 100%;">
    <div style="text-align: center; margin-bottom: 15px; flex-shrink: 0;">
      <img src="/images/information_hide/course2.png" alt="Online Reference Books" style="width: 100%; max-width: 250px; height: 180px; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
    </div>
    <div style="display: flex; flex-direction: column; flex-grow: 1;">
      <h4 style="color: #2c3e50; margin-bottom: 10px; text-align: center; font-size: 18px; min-height: 50px; display: flex; align-items: center; justify-content: center;">Reference Books</h4>
      <p style="color: #6c757d; text-align: center; margin-bottom: 20px; line-height: 1.5; flex-grow: 1; display: flex; align-items: center; justify-content: center; min-height: 60px;">Online textbooks and reference materials related to information hiding</p>
      <div style="text-align: center; margin-top: auto;">
        <a href="#" style="background: #87CEEB; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-size: 14px; display: inline-block; min-width: 120px;">Read Online</a>
      </div>
    </div>
  </div>

  <!-- Deep Learning Resources Card -->
  <div class="resource-card" style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 10px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.3s ease, box-shadow 0.3s ease; display: flex; flex-direction: column; height: 100%;">
    <div style="text-align: center; margin-bottom: 15px; flex-shrink: 0;">
      <img src="/images/information_hide/cnn.png" alt="Deep Learning Resources" style="width: 100%; max-width: 250px; height: 180px; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
    </div>
    <div style="display: flex; flex-direction: column; flex-grow: 1;">
      <h4 style="color: #2c3e50; margin-bottom: 10px; text-align: center; font-size: 18px; min-height: 50px; display: flex; align-items: center; justify-content: center;">Deep Learning</h4>
      <p style="color: #6c757d; text-align: center; margin-bottom: 20px; line-height: 1.5; flex-grow: 1; display: flex; align-items: center; justify-content: center; min-height: 60px;">Learning materials on deep learning applications in information hiding</p>
      <div style="text-align: center; margin-top: auto;">
        <a href="#" style="background: #87CEEB; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-size: 14px; display: inline-block; min-width: 120px;">Explore AI</a>
      </div>
    </div>
  </div>

</div>

<style>
  /* Publication Card Styles */
  .publication-card {
    display: flex;
    margin: 30px 0;
    padding: 20px;
    border: 1px solid #e1e5e9;
    border-radius: 12px;
    background-color: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    min-height: 350px;
  }

  .publication-card:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  .publication-image {
    flex: 0 0 400px;
    margin-right: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .publication-image img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 8px;
    border: 1px solid #ddd;
    object-fit: contain;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .publication-image img:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .publication-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .publication-title {
    font-size: 1.4em;
    font-weight: bold;
    margin-bottom: 8px;
    color: #2d3748;
    line-height: 1.3;
  }

  .publication-authors {
    font-size: 1.1em;
    color: #666;
    margin-bottom: 15px;
    line-height: 1.4;
    font-style: italic;
  }

  .publication-journal {
    font-size: 0.95em;
    color: #555;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #e9ecef;
    font-weight: 500;
    font-style: italic;
    display: none;
  }

  .publication-journal.show {
    display: block;
  }

  .publication-abstract {
    flex: 1;
    margin-bottom: 60px;
    color: #555;
    line-height: 1.6;
    text-align: justify;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .abstract-content {
    max-height: 120px;
    overflow: hidden;
    transition: max-height 0.3s ease;
    flex: 1;
  }

  .abstract-content.expanded {
    max-height: none;
  }

  .abstract-toggle {
    position: absolute;
    bottom: 0;
    right: 0;
    background: linear-gradient(transparent, white 70%);
    padding: 10px 0 0 20px;
    cursor: pointer;
    color: #4299e1;
    font-size: 0.9em;
    font-weight: 500;
    margin-top: auto;
  }

  .abstract-toggle:hover {
    color: #2b6cb0;
  }

  .abstract-toggle.expanded {
    background: none;
    position: static;
    padding: 10px 0 0 0;
  }

  .publication-links {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .publication-links a {
    padding: 8px 16px;
    background-color: #4a5568;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-size: 0.85em;
    transition: background-color 0.3s ease;
    white-space: nowrap;
  }

  .publication-links a:hover {
    background-color: #2d3748;
  }

  .publication-links a.github-link {
    background-color: #718096;
  }

  .publication-links a.github-link:hover {
    background-color: #4a5568;
  }

  /* Image Modal Styles */
  .image-modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    animation: fadeIn 0.3s ease;
  }

  .image-modal.show {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    margin: auto;
    animation: zoomIn 0.3s ease;
  }

  .modal-image {
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  }

  .modal-close {
    position: absolute;
    top: -40px;
    right: 0;
    color: white;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;
  }

  .modal-close:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  .modal-title {
    position: absolute;
    bottom: -60px;
    left: 0;
    right: 0;
    color: white;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    padding: 10px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    margin: 0 20px;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes zoomIn {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
  }

  @media (max-width: 768px) {
    .publication-card {
      flex-direction: column;
      min-height: auto;
    }

    .publication-image {
      flex: none;
      margin-right: 0;
      margin-bottom: 15px;
    }

    .publication-content {
      position: static;
    }

    .publication-abstract {
      margin-bottom: 15px;
    }

    .publication-links {
      position: static;
      flex-direction: column;
      align-items: stretch;
    }

    .publication-links a {
      text-align: center;
    }
  }

  /* 2x2 Grid Layout */
  .teaching-resources-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 20px auto;
    max-width: 1000px;
  }
  
  /* Resource Card Base Styles */
  .resource-card {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  /* Responsive design for smaller screens */
  @media (max-width: 768px) {
    .teaching-resources-grid {
      grid-template-columns: 1fr;
      max-width: 400px;
    }
    
    .resource-card img {
      height: 160px !important;
    }
    
    .resource-card h4 {
      min-height: 40px !important;
      font-size: 16px !important;
    }
    
    .resource-card p {
      min-height: 50px !important;
    }
    
    .resource-card a {
      padding: 8px 16px !important;
      font-size: 13px !important;
      min-width: 100px !important;
    }
  }
  
  /* Hover effects for cards */
  .resource-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.2) !important;
  }
  
  /* Button hover effects */
  .resource-card a:hover {
    background-color: #5F9EA0 !important;
    opacity: 0.9;
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
  
  /* Image consistency */
  .resource-card img {
    width: 100%;
    max-width: 250px;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  }
  
  /* Title alignment */
  .resource-card h4 {
    color: #2c3e50;
    margin-bottom: 10px;
    text-align: center;
    font-size: 18px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Description alignment */
  .resource-card p {
    color: #6c757d;
    text-align: center;
    margin-bottom: 20px;
    line-height: 1.5;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
  }
  
  /* Button alignment */
  .resource-card a {
    background-color: #87CEEB !important;
    color: white !important;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 14px;
    display: inline-block;
    min-width: 120px;
    text-align: center;
  }
  
  /* Button hover effect */
  .resource-card a:hover {
    background-color: #5F9EA0 !important;
    opacity: 0.9;
    transform: scale(1.05);
    transition: all 0.3s ease;
  }

  /* New Styles for HTML Sections */
  .section-container {
    margin: 40px 0;
  }

  .section-title {
    font-size: 28px;
    color: #2d3748;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 3px solid #4299e1;
    display: inline-block;
    font-weight: bold;
  }

  .subsection-title {
    font-size: 22px;
    color: #2d3748;
    margin: 30px 0 20px 0;
    padding-bottom: 8px;
    border-bottom: 2px solid #4a5568;
    display: inline-block;
    font-weight: 600;
  }

  .project-item:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transition: all 0.3s ease;
  }

  .tool-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 35px rgba(0,0,0,0.25);
  }

  .tool-card a:hover {
    background: rgba(255,255,255,0.3) !important;
    transform: scale(1.05);
  }

  .account-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }

  .account-card a:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  }

  /* New styles for featured images in account cards */
  .account-image img:hover {
    transform: scale(1.02);
    transition: all 0.3s ease;
  }

  .account-header {
    text-align: center;
  }

  .account-header h4 {
    font-weight: 600;
    line-height: 1.3;
  }

  /* Responsive Design for New Sections */
  @media (max-width: 768px) {
    .tools-grid {
      grid-template-columns: 1fr !important;
    }
    
    .accounts-grid {
      grid-template-columns: 1fr !important;
    }
    
    .journals-grid {
      grid-template-columns: 1fr !important;
    }
    
    .section-title {
      font-size: 24px !important;
    }
    
    .subsection-title {
      font-size: 20px !important;
    }
  }
</style>

</div>

<!-- Practical Tools Section -->
<div class="section-container" style="margin: 40px 0;">
  <h2 class="section-title" style="font-size: 28px; color: #2c3e50; margin-bottom: 25px; padding-bottom: 10px; border-bottom: 3px solid #3498db; display: inline-block;">Practical Tools</h2>
  
  <div class="tools-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 30px 0;">
    
    <!-- Experimental Code Repository -->
    <div class="tool-card" style="background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%); border-radius: 12px; padding: 25px; color: white; box-shadow: 0 8px 25px rgba(0,0,0,0.15); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <h3 style="color: white; margin-bottom: 12px; font-size: 20px;">Experimental Code Repository</h3>
      <p style="color: rgba(255,255,255,0.9); margin-bottom: 20px; line-height: 1.6;">Course experiment code examples and implementation templates</p>
      <a href="#" style="background: rgba(255,255,255,0.2); color: white; padding: 10px 20px; border-radius: 25px; text-decoration: none; font-size: 14px; display: inline-block; border: 1px solid rgba(255,255,255,0.3); transition: all 0.3s ease;">Access Repository</a>
    </div>
    
    <!-- Datasets -->
    <div class="tool-card" style="background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%); border-radius: 12px; padding: 25px; color: white; box-shadow: 0 8px 25px rgba(0,0,0,0.15); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <h3 style="color: white; margin-bottom: 12px; font-size: 20px;">Datasets</h3>
      <p style="color: rgba(255,255,255,0.9); margin-bottom: 20px; line-height: 1.6;">Standard datasets and test samples for experiments</p>
      <a href="#" style="background: rgba(255,255,255,0.2); color: white; padding: 10px 20px; border-radius: 25px; text-decoration: none; font-size: 14px; display: inline-block; border: 1px solid rgba(255,255,255,0.3); transition: all 0.3s ease;">Download Data</a>
    </div>
    
    <!-- Evaluation Tools -->
    <div class="tool-card" style="background: linear-gradient(135deg, #4299e1 0%, #2b6cb0 100%); border-radius: 12px; padding: 25px; color: white; box-shadow: 0 8px 25px rgba(0,0,0,0.15); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <h3 style="color: white; margin-bottom: 12px; font-size: 20px;">Evaluation Tools</h3>
      <p style="color: rgba(255,255,255,0.9); margin-bottom: 20px; line-height: 1.6;">Performance evaluation and analysis tools for information hiding algorithms</p>
      <a href="#" style="background: rgba(255,255,255,0.2); color: white; padding: 10px 20px; border-radius: 25px; text-decoration: none; font-size: 14px; display: inline-block; border: 1px solid rgba(255,255,255,0.3); transition: all 0.3s ease;">Get Tools</a>
    </div>
    
  </div>
</div>

<!-- Extended Reading Section -->
<div class="section-container" style="margin: 40px 0;">
  <h2 class="section-title" style="font-size: 28px; color: #2c3e50; margin-bottom: 25px; padding-bottom: 10px; border-bottom: 3px solid #3498db; display: inline-block;">Extended Reading</h2>

  <!-- Professional WeChat Public Accounts -->
  <div class="reading-subsection" style="margin: 30px 0;">
    <h3 class="subsection-title" style="font-size: 22px; color: #34495e; margin-bottom: 20px; padding-bottom: 8px; border-bottom: 2px solid #4a5568; display: inline-block;">Professional WeChat Public Accounts</h3>
    

    
    <div class="accounts-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 25px; margin: 25px 0;">
      
      <!-- CSIG Account -->
      <div class="account-card" style="background: white; border: 1px solid #e0e0e0; border-radius: 12px; padding: 25px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.3s ease, box-shadow 0.3s ease;">
        <!-- Featured Image -->
        <div class="account-image" style="text-align: center; margin-bottom: 20px;">
          <img src="/images/information_hide/CSIG.png" alt="CSIG Featured Image" style="width: 100%; max-width: 350px; height: 200px; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
        </div>
        
        <div class="account-header" style="display: flex; align-items: center; margin-bottom: 15px; justify-content: center;">
          <h4 style="color: #2d3748; margin: 0; font-size: 22px; text-align: center;">China Society of Image and Graphics (CSIG)</h4>
        </div>
        
        <div class="account-content">
          <div class="info-item" style="margin: 15px 0;">
            <strong style="color: #34495e;">Introduction:</strong>
            <span style="color: #6c757d;">Official WeChat public account of China Society of Image and Graphics, publishing academic developments in image processing, computer vision and related fields</span>
          </div>
          <div class="info-item" style="margin: 15px 0;">
            <strong style="color: #34495e;">Content:</strong>
            <span style="color: #6c757d;">Academic conference announcements, research frontiers, technical sharing</span>
          </div>
          <div class="info-item" style="margin: 25px 0 10px 0; text-align: center;">
            <a href="https://mp.weixin.qq.com/s/RsypZCwTau7o5ozVSPCrbw" target="_blank" style="background: #4a5568; color: white; padding: 12px 30px; border-radius: 25px; text-decoration: none; font-size: 16px; display: inline-block; transition: all 0.3s ease; font-weight: 500;">Visit CSIG</a>
          </div>
        </div>
      </div>
      
      <!-- Steganography Alliance Account -->
      <div class="account-card" style="background: white; border: 1px solid #e0e0e0; border-radius: 12px; padding: 25px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.3s ease, box-shadow 0.3s ease;">
        <!-- Featured Image -->
        <div class="account-image" style="text-align: center; margin-bottom: 20px;">
          <img src="/images/information_hide/Steganography Alliance.png" alt="Steganography Alliance Featured Image" style="width: 100%; max-width: 350px; height: 200px; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
        </div>
        
        <div class="account-header" style="display: flex; align-items: center; margin-bottom: 15px; justify-content: center;">
          <h4 style="color: #2d3748; margin: 0; font-size: 22px; text-align: center;">Steganography Alliance</h4>
        </div>
        
        <div class="account-content">
          <div class="info-item" style="margin: 15px 0;">
            <strong style="color: #34495e;">Introduction:</strong>
            <span style="color: #6c757d;">Professional public account focusing on information hiding, steganography, digital watermarking and related fields</span>
          </div>
          <div class="info-item" style="margin: 15px 0;">
            <strong style="color: #34495e;">Content:</strong>
            <span style="color: #6c757d;">In-depth analysis of information hiding technologies, sharing of latest research achievements</span>
          </div>
          <div class="info-item" style="margin: 25px 0 10px 0; text-align: center;">
            <a href="https://mp.weixin.qq.com/s/nbpSEN1KkScjEVvrY-B6Xw" target="_blank" style="background: #2d3748; color: white; padding: 12px 30px; border-radius: 25px; text-decoration: none; font-size: 16px; display: inline-block; transition: all 0.3s ease; font-weight: 500;">Visit Alliance</a>
          </div>
        </div>
      </div>
      
    </div>
  </div>

  <!-- Recommended Journals and Conferences -->
  <div class="reading-subsection" style="margin: 40px 0;">
    <h3 class="subsection-title" style="font-size: 22px; color: #34495e; margin-bottom: 20px; padding-bottom: 8px; border-bottom: 2px solid #4a5568; display: inline-block;">Recommended Journals and Conferences</h3>
    
    <div class="journals-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 25px 0;">
      
      <!-- Journal 1 -->
      <div class="journal-card" style="background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%); border-radius: 12px; padding: 20px; color: white; box-shadow: 0 6px 20px rgba(0,0,0,0.15);">
        <h4 style="color: white; margin-bottom: 8px; font-size: 16px;">IEEE Transactions on Information Forensics and Security</h4>
        <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 14px;">Top-tier journal in information security</p>
      </div>
      
      <!-- Journal 2 -->
      <div class="journal-card" style="background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%); border-radius: 12px; padding: 20px; color: white; box-shadow: 0 6px 20px rgba(0,0,0,0.15);">
        <h4 style="color: white; margin-bottom: 8px; font-size: 16px;">ACM Transactions on Multimedia Computing, Communications, and Applications</h4>
        <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 14px;">Multimedia technology journal</p>
      </div>
      
      <!-- Conference 1 -->
      <div class="journal-card" style="background: linear-gradient(135deg, #4299e1 0%, #2b6cb0 100%); border-radius: 12px; padding: 20px; color: white; box-shadow: 0 6px 20px rgba(0,0,0,0.15);">
        <h4 style="color: white; margin-bottom: 8px; font-size: 16px;">International Workshop on Digital Watermarking (IWDW)</h4>
        <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 14px;">International workshop on digital watermarking</p>
      </div>
      
      <!-- Conference 2 -->
      <div class="journal-card" style="background: linear-gradient(135deg, #718096 0%, #4a5568 100%); border-radius: 12px; padding: 20px; color: white; box-shadow: 0 6px 20px rgba(0,0,0,0.15);">
        <h4 style="color: white; margin-bottom: 8px; font-size: 16px;">Media Watermarking, Security, and Forensics</h4>
        <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 14px;">SPIE multimedia security conference</p>
      </div>
      
    </div>
  </div>
</div>

---

<!-- Image Modal -->
<div id="imageModal" class="image-modal">
  <div class="modal-content">
    <span class="modal-close">&times;</span>
    <img id="modalImage" class="modal-image" src="" alt="">
    <div id="modalTitle" class="modal-title"></div>
  </div>
</div>

<script>
  // 使用事件委托代替内联事件处理器
  document.addEventListener('DOMContentLoaded', function() {
    // 摘要展开/fold功能
    document.addEventListener('click', function(e) {
      if (e.target.closest('.abstract-toggle')) {
        const element = e.target.closest('.abstract-toggle');
        const index = element.getAttribute('data-index');
        const abstractContent = document.getElementById('abstract-' + index);
        const journalElement = document.getElementById('journal-' + index);
        const toggleText = element.querySelector('.toggle-text');

        if (abstractContent && journalElement && toggleText) {
          if (abstractContent.classList.contains('expanded')) {
            // fold
            abstractContent.classList.remove('expanded');
            element.classList.remove('expanded');
            journalElement.classList.remove('show');
            toggleText.textContent = 'show all ▼';
          } else {
            // 展开
            abstractContent.classList.add('expanded');
            element.classList.add('expanded');
            journalElement.classList.add('show');
            toggleText.textContent = 'fold ▲';
          }
        }
      }
    });

    // 图片Modal功能
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('modal-trigger')) {
        const imgElement = e.target;
        const title = imgElement.getAttribute('data-title') || imgElement.alt;
        openImageModal(imgElement, title);
      }
    });

    // Modal关闭功能
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('modal-close') || e.target.id === 'imageModal') {
        closeImageModal();
      }
    });

    // 防止Modal内容区域点击时关闭
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('modal-content')) {
        e.stopPropagation();
      }
    });

    // 键盘ESC关闭modal
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closeImageModal();
      }
    });

    // 初始化页面状态
    initializePage();
  });

  function openImageModal(imgElement, title) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');

    if (modal && modalImg && modalTitle) {
      modal.classList.add('show');
      modalImg.src = imgElement.src;
      modalImg.alt = imgElement.alt;
      modalTitle.textContent = title;

      // 防止背景滚动
      document.body.style.overflow = 'hidden';
    }
  }

  function closeImageModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
      modal.classList.remove('show');
      // 恢复背景滚动
      document.body.style.overflow = 'auto';
    }
  }

  function initializePage() {
    // 防止图片加载失败时的错误处理
    const modalImg = document.getElementById('modalImage');
    if (modalImg) {
      modalImg.addEventListener('error', function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuWbvueJh+aXoOazleWKoOi9vTwvdGV4dD48L3N2Zz4=';
      });
    }

    // 初始化页面时确保期刊信息隐藏
    const allJournals = document.querySelectorAll('.publication-journal');
    allJournals.forEach(function(journal) {
      if (!journal.classList.contains('show')) {
        journal.style.display = 'none';
      }
    });

    // 确保所有展开按钮都有正确的初始状态
    const allToggles = document.querySelectorAll('.abstract-toggle');
    allToggles.forEach(function(toggle) {
      const toggleText = toggle.querySelector('.toggle-text');
      if (toggleText && !toggleText.textContent.includes('fold')) {
        toggleText.textContent = 'show all ▼';
      }
    });
  }
</script>

If you have any questions or need further learning resources, please feel free to contact us!