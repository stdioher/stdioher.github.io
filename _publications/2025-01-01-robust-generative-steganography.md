---
title: "Robust Generative Steganography for Image Hiding Using Concatenated Mappings"
collection: publications
category: manuscripts
permalink: /publication/2025-01-01-robust-generative-steganography
date: 2025-01-01
venue: 'IEEE Transactions on Information Forensics and Security'
citation: 'Liyan Chen, Bingwen Feng*, Zhihua Xia, et al. (2025). &quot;Robust Generative Steganography for Image Hiding Using Concatenated Mappings.&quot; <i>IEEE Transactions on Information Forensics and Security</i>.'
---

## Abstract

Generative steganography stands as a promising technique for information hiding, primarily due to its remarkable resistance to steganalysis detection. Despite its potential, hiding a secret image using existing generative steganographic models remains a challenge, especially in lossy or noisy communication channels. This paper proposes a robust generative steganography model for hiding full-size image. It lies on three reversible concatenated mappings proposed. The first mapping uses VQGAN with an order-preserving codebook to compress an image into a more concise representation. The second mapping incorporates error correction to further convert the representation into a robust binary representation. The third mapping devises a distribution-preserving sampling mapping that transforms the binary representation into the latent representation. This latent representation is then used as input for a text-to-image Diffusion model, which generates the final stego image. Experimental results show that our proposed scheme can freely customize the stego image content. Moreover, it simultaneously attains high stego and recovery image quality, high robustness, and provable security.

## Framework

<img src="/images/publications/Robust Generative Steganography for Image Hiding.gif" alt="Robust Generative Steganography Framework" style="width:100%; max-width:800px;">

## Download

[Download paper here]({{ base_path }}/files/publications/Robust_Generative_Steganography_for_Image_Hiding_Using_Concatenated_Mappings.pdf)
