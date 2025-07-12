---
title: "JPEG Compression-Resistant Generative Image Hiding Utilizing Cascaded Invertible Networks"
collection: publications
category: manuscripts
permalink: /publication/2025-02-01-jpeg-compression-resistant
date: 2025-02-01
venue: 'IEEE Transactions on Information Forensics and Security'
citation: 'Tiewei Qin, Bingwen Feng*, Bingbing Zhou, et al. (2025). &quot;JPEG Compression-Resistant Generative Image Hiding Utilizing Cascaded Invertible Networks.&quot; <i>IEEE Transactions on Information Forensics and Security</i>.'
---

## Abstract

Generative steganography is renowned for its exceptional undetectability. However, prevalent generative methods often have insufficient capacity for concealing secret images. Furthermore, the sensitivity of commonly utilized generative models exacerbates the challenge of ensuring robustness against channel distortions such as JPEG compression. In this paper, we introduce a generative image hiding network that employs two invertible generators to transform secret images into stego images within a disparate image domain. Additionally, we seamlessly integrate an up-and-down sampling module (UDM) within these generators to facilitate efficient decoupling of the intermediate representations obtained by each generator. The UDM serves multiple purposes: preserving coherence between the intermediate representations, enhancing resilience against JPEG compression, and safeguarding the confidentiality of the concealed images. To address the complexity of mapping both uncompressed and compressed stego images to a unified intermediary representation, we implement two distinct flows for the forward and backward processes of the generator associated with the stego images. The experimental results show that our scheme offers concurrent advantages in terms of full-size image hiding ability, undetectability, confidentiality, and robustness.

## Framework

<img src="/images/publications/JPEG Compression-Resistant Generative Image.gif" alt="JPEG Compression-Resistant Framework" style="width:100%; max-width:800px;">

## Download

[Download paper here]({{ base_path }}/files/publications/JPEG_Compression-Resistant_Generative_Image_Hiding_Utilizing_Cascaded_Invertible_Networks.pdf)
