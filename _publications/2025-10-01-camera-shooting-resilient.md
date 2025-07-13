---
title: "Camera-shooting resilient watermarking on image instance level"
collection: publications
category: manuscripts
permalink: /publication/2025-10-01-camera-shooting-resilient
date: 2025-10-01
venue: 'IEEE Transactions on Circuits and Systems for Video Technology'
citation: 'Lin He, Bingwen Feng*, Zecheng Peng, et al. (2024). &quot;Camera-shooting resilient watermarking on image instance level.&quot; <i>IEEE Transactions on Circuits and Systems for Video Technology</i>.'
---

## Abstract

Capturing displayed images using portable cameras has become familiar among multimedia pirates, necessitating the urgent requirement of camera-shooting resilient watermarking schemes. In this paper, we consider the stealers who only record parts of images, and propose a robust watermarking scheme at the image instance level. This scheme consists of an encoding end, a noise layer, and a decoding end. The encoding end first selects specific watermarking regions associated with segmented image instances. Afterwards, an encoder is employed to embed watermark sequences into the RGB color model of these watermarking regions. At last, templates are embedded to product the final watermarked images. Specifically, our suggested template-based resynchronization comprises a template embedding module at the encoding end and a geometric correction module at the decoding end. The former embeds templates by a correlation-aware multiplicative spread spectrum with an adaptive amplitude, while the latter learns a calibrator to estimate the perspective projection. Experiments on both simulation and real-world scenarios support that the proposed scheme effectively resists camera-shooting attacks with various shooting conditions, regardless of whether the entire displayed images have been captured.

## Framework

<img src="/images/publications/Camera-Shooting Resilient Watermarking on.gif" alt="Camera-Shooting Resilient Watermarking Framework" style="width:100%; max-width:800px;">

## Download

[Download paper here]({{ base_path }}/files/publications/Camera-Shooting_Resilient_Watermarking_on_Image_Instance_Level.pdf)
