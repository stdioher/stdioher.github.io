---
title: "A robust reversible watermarking scheme using DC prediction and histogram shifting"
collection: publications
category: manuscripts
permalink: /publication/2025-03-01-robust-reversible-watermarking
date: 2025-03-01
venue: 'Signal Processing'
citation: 'Jiancheng Xiao, Shuaichao Wu, Bingwen Feng*, et al. (2025). &quot;A robust reversible watermarking scheme using DC prediction and histogram shifting.&quot; <i>Signal Processing</i>.'
---

## Abstract

Robust Reversible Watermarking (RRW) not only ensures the resilience of watermarked images under various attacks but also enables the exact recovery of the original host images from these watermarked versions. However, many existing RRW methods suffer from compromised reversibility when subjected to attacks, preventing successful restoration of the host image. In this paper, we explore the dual robustness of RRW—simultaneously enhancing both watermark resilience and reversibility. We propose a JPEG compression-resistant histogram-shifting algorithm that withstands targeted compression and exhibits strong robustness against common image manipulations. Building on this algorithm, we introduce two RRW schemes: one embeds watermark bits into the AC coefficients, and the other embeds them into the prediction error of DC coefficients. Furthermore, we design a convolutional neural network (CNN)-based DC predictor to infer DC coefficients from AC coefficients. Experimental results demonstrate that our approach achieves superior robustness and watermarked image quality, while reliably preserving reversibility under various distortions.

## Framework

<img src="/images/publications/A Robust Reversible Watermarking scheme using DC prediction and histogram shifting.jpg" alt="Robust Reversible Watermarking Framework" style="width:100%; max-width:800px;">

## Download

[Download paper here]({{ base_path }}/files/publications/A Robust Reversible Watermarking scheme using DC prediction and histogram shifting.pdf)
