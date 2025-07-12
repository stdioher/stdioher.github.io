---
title: "Conditional image hiding network based on style transfer"
collection: publications
category: manuscripts
permalink: /publication/2024-06-01-conditional-image-hiding
date: 2024-06-01
venue: 'Information Sciences'
citation: 'Fenghua Zhang, Bingwen Feng*, Zhihua Xia, et al. (2024). &quot;Conditional image hiding network based on style transfer.&quot; <i>Information Sciences</i>.'
---

## Abstract

Various data hiding methods have been suggested to hide secret images within stego images. However, many of them could be easily detected by steganalytic tools due to their large hidden information. In this paper, we enhance the undetectability of image hiding network by mapping latent representation conditional on secret information. We extend the idea of image generation-based steganography and propose a Transformer-based image hiding network, which can hide secret images of the same size as the target image. The proposed scheme uses style transfer to help map the latent representation. The proposed scheme's hiding network includes three modules: encoding module, transfer module, and synthesis module. The encoding module extracts latent representations from the content image and the secret image, the transfer module stylizes intermediate representations conditional on secret information, and the synthesis module fuses the stylized features and the secret image features to synthesize the target image with the secret image hidden in it. A new synthesis module and corresponding extraction network are developed to improve recovery accuracy. The proposed scheme shows high image quality on both target images and recovered secret images. Furthermore, it is robust to steganalytic tools, thus providing good security.

## Framework

<img src="/images/publications/Conditional image hiding network based on style transfer.jpg" alt="Conditional Image Hiding Network Framework" style="width:100%; max-width:800px;">

## Download

[Download paper here]({{ base_path }}/files/publications/Conditional image hiding network based on style transfer.pdf)
