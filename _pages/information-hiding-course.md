---
layout: archive-nosidebar
title: "Information Hiding Course"
permalink: /information-hiding-course/
author_profile: false
---

Welcome to the Information Hiding Course page! This course aims to explore the theoretical foundations and practical applications of information hiding technologies.

## Innovation Practice

### Related Research Papers

The following are the latest research achievements related to the information hiding course:

{% for post in site.publications %}
  {% assign title_lower = post.title | downcase %}
  {% if title_lower contains "steganography" or title_lower contains "hiding" or title_lower contains "watermark" %}
{% include archive-single.html %}
  {% endif %}
{% endfor %}

### Innovation Practice Projects

- **Generative Steganography Research** - Exploring generative information hiding techniques based on deep learning
- **Robust Hiding Algorithms** - Developing compression-resistant and attack-resistant information hiding methods
- **Multimedia Watermarking Technology** - Research on copyright protection for multimedia content such as images and videos
- **Covert Communication Systems** - Building secure communication platforms based on information hiding

## Course Materials

### Teaching Resources

<div class="teaching-resources-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 20px 0; max-width: 1000px; margin-left: auto; margin-right: auto;">
  
  <!-- Course PPT Card -->
  <div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 10px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.3s ease, box-shadow 0.3s ease; display: flex; flex-direction: column; height: 100%;">
    <div style="text-align: center; margin-bottom: 15px;">
      <img src="/images/information_hide/PPT.png" alt="Course PPT Materials" style="width: 100%; max-width: 250px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
    </div>
    <h4 style="color: #2c3e50; margin-bottom: 10px; text-align: center;">📊 Course PPT</h4>
    <p style="color: #6c757d; text-align: center; margin-bottom: 15px; line-height: 1.5; flex-grow: 1;">Detailed course slide materials covering theoretical foundations to practical applications</p>
    <div style="text-align: center; margin-top: auto;">
      <a href="#" style="background: #007bff; color: white; padding: 8px 16px; border-radius: 5px; text-decoration: none; font-size: 14px;">Download PPT</a>
    </div>
  </div>

  <!-- Course Videos Card -->
  <div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 10px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.3s ease, box-shadow 0.3s ease; display: flex; flex-direction: column; height: 100%;">
    <div style="text-align: center; margin-bottom: 15px;">
      <img src="/images/information_hide/course1.png" alt="Course Videos" style="width: 100%; max-width: 250px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
    </div>
    <h4 style="color: #2c3e50; margin-bottom: 10px; text-align: center;">🎥 Course Videos</h4>
    <p style="color: #6c757d; text-align: center; margin-bottom: 15px; line-height: 1.5; flex-grow: 1;">Recorded course lectures supporting online viewing and downloading</p>
    <div style="text-align: center; margin-top: auto;">
      <a href="#" style="background: #28a745; color: white; padding: 8px 16px; border-radius: 5px; text-decoration: none; font-size: 14px;">Watch Videos</a>
    </div>
  </div>

  <!-- Online Reference Books Card -->
  <div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 10px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.3s ease, box-shadow 0.3s ease; display: flex; flex-direction: column; height: 100%;">
    <div style="text-align: center; margin-bottom: 15px;">
      <img src="/images/information_hide/course2.png" alt="Online Reference Books" style="width: 100%; max-width: 250px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
    </div>
    <h4 style="color: #2c3e50; margin-bottom: 10px; text-align: center;">📚 Reference Books</h4>
    <p style="color: #6c757d; text-align: center; margin-bottom: 15px; line-height: 1.5; flex-grow: 1;">Online textbooks and reference materials related to information hiding</p>
    <div style="text-align: center; margin-top: auto;">
      <a href="#" style="background: #ffc107; color: #212529; padding: 8px 16px; border-radius: 5px; text-decoration: none; font-size: 14px;">Read Online</a>
    </div>
  </div>

  <!-- Deep Learning Resources Card -->
  <div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 10px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.3s ease, box-shadow 0.3s ease; display: flex; flex-direction: column; height: 100%;">
    <div style="text-align: center; margin-bottom: 15px;">
      <img src="/images/information_hide/course3.png" alt="Deep Learning Resources" style="width: 100%; max-width: 250px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
    </div>
    <h4 style="color: #2c3e50; margin-bottom: 10px; text-align: center;">🤖 Deep Learning</h4>
    <p style="color: #6c757d; text-align: center; margin-bottom: 15px; line-height: 1.5; flex-grow: 1;">Learning materials on deep learning applications in information hiding</p>
    <div style="text-align: center; margin-top: auto;">
      <a href="#" style="background: #dc3545; color: white; padding: 8px 16px; border-radius: 5px; text-decoration: none; font-size: 14px;">Explore AI</a>
    </div>
  </div>

</div>

<style>
  /* 2x2 Grid Layout */
  .teaching-resources-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 20px auto;
    max-width: 1000px;
  }
  
  /* Responsive design for smaller screens */
  @media (max-width: 768px) {
    .teaching-resources-grid {
      grid-template-columns: 1fr;
      max-width: 400px;
    }
  }
  
  /* Hover effects for cards */
  div[style*="background: #f8f9fa"]:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.2) !important;
  }
  
  /* Button hover effects */
  a[style*="background:"]:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
</style>

### Practical Tools

- **[Experimental Code Repository](#)** - Course experiment code examples and implementation templates
- **[Datasets](#)** - Standard datasets and test samples for experiments
- **[Evaluation Tools](#)** - Performance evaluation and analysis tools for information hiding algorithms

## Extended Reading

### Professional WeChat Public Accounts

Stay updated with the latest developments and research trends in the information hiding field:

#### China Society of Image and Graphics (CSIG)
- **Introduction**: Official WeChat public account of China Society of Image and Graphics, publishing academic developments in image processing, computer vision and related fields
- **Content**: Academic conference announcements, research frontiers, technical sharing
- **Link**: [Click to Visit](https://mp.weixin.qq.com/s/RsypZCwTau7o5ozVSPCrbw)

#### Steganography Alliance
- **Introduction**: Professional public account focusing on information hiding, steganography, digital watermarking and related fields
- **Content**: In-depth analysis of information hiding technologies, sharing of latest research achievements
- **Link**: [Click to Visit](https://mp.weixin.qq.com/s/nbpSEN1KkScjEVvrY-B6Xw)

### Recommended Journals and Conferences

- **IEEE Transactions on Information Forensics and Security** - Top-tier journal in information security
- **ACM Transactions on Multimedia Computing, Communications, and Applications** - Multimedia technology journal
- **International Workshop on Digital Watermarking (IWDW)** - International workshop on digital watermarking
- **Media Watermarking, Security, and Forensics** - SPIE multimedia security conference

---

If you have any questions or need further learning resources, please feel free to contact us!