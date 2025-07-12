---
layout: archive
title: "Information Hiding Course"
permalink: /information-hiding-course/
author_profile: true
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

- **[Course PPT](#)** - Detailed course slide materials covering theoretical foundations to practical applications
- **[Course Videos](#)** - Recorded course lectures supporting online viewing and downloading
- **[Online Reference Books](#)** - Online textbooks and reference materials related to information hiding
- **[Deep Learning Resources](#)** - Learning materials on deep learning applications in information hiding

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