---
layout: home

hero:
  name: "CMRxRecon2026"
  text: "Official website for CMRxRecon series competitions"
  tagline: Ultra-Fast 4D Flow MRI Reconstruction Challenge
  actions:
    - theme: alt
      text: Data
      link: /data
    - theme: alt
      text: FAQ
      link: /faq

features:
  - title: Ultra-Fast 4D Flow MRI
    details: Accelerating 4D Flow MRI acquisition and reconstruction toward routine clinical use.
  - title: Multi-center Clinical Dataset
    details: Over 200 cases from 5+ clinical centers covering diverse aortic pathologies.
  - title: AI-driven Reconstruction
    details: Extreme undersampling with reliable magnitude, phase, and hemodynamic recovery.
---


## Image Gallery

![Slide 1](./public/home/3e06a80e-ad33-452f-bbf5-f37543cae2a6.png)
![Slide 2](./public/home/7a1b2cef-6b8e-4207-9754-a2da99acf12c.png)

---

## Videos

<video controls width="100%" style="max-height:300px; object-fit:cover;">
  <source src="./public/home/eb4aa286348723b413c3ba6104c92cdf.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<video controls width="100%" style="max-height:300px; object-fit:cover;">
  <source src="./public/home/2e1f8b09a928f2f2ef773c17cece95ae.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## About Us

#### Welcome to the Cardiac MRI Reconstruction Challenge 2026 (CMRxRecon2026)

—an integral part of the 29th International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI 2026), hosted in Abu Dhabi, United Arab Emirates, from October 4th to 8th, 2026.  
LEARN MORE (MICCAI 2026 - 29. International Conference On Medical Image Computing & Computer Assisted Intervention)

🫀 CMRxRecon2026: Ultra-Fast 4D Flow MRI — Redefining the Future of Cardiovascular Imaging

> Our Vision: To challenge physical limits and leverage AI to dramatically accelerate complex 4D flow MRI acquisitions and reconstructions, transforming prolonged procedures into clinically viable rapid scans, and thereby ensuring every cardiovascular patient can benefit from advanced flow visualization.

🌟 What is 4D Flow MRI? (Beyond Images: A "Digital Twin" of Your Cardiovascular System)

Imagine not just taking a static "snapshot" of the heart, but creating a complete, dynamic replica of blood circulating within you in the digital world. This is 4D Flow MRI—building a precise cardiovascular "Digital Twin."

- 3D Space + 1D Time: 4D Flow MRI captures the intricate hemodynamic dynamics across the entire cardiac cycle, detailing every pulsation, swirl, and impact of blood flow in three-dimensional space.
- Beyond Anatomy: It quantitatively calculates critical hemodynamic parameters such as Flow Velocity, Wall Shear Stress (WSS), and Vorticity.
- Pivotal Clinical Value: Clinicians can use this "digital proxy" to precisely assess risks for aortic aneurysms, stenosis, or dissections, and simulate surgical planning.

🎯 Why This Challenge? (Pain Points & Opportunities)

While 4D Flow concept is powerful, its widespread routine clinical adoption faces significant, long-standing barriers.

- The Clinical Pain Point: Time Burden: Acquiring a comprehensive 4D Flow dataset typically demands 30–60 minutes of scanner time. This duration is not only physically demanding for patients, often leading to motion artifacts, but also imposes prohibitive time and cost burdens on hospital workflows.
- The Technological Bottleneck: Insufficient Acceleration: While existing acceleration techniques (such as parallel imaging or standard compressed sensing) have reduced scan times, they commonly yield results in 10–20 minutes. This remains significantly longer than the sub-5-minute window desired for integration into routine clinical MRI protocols.
- The Unique Acceleration Potential of 4D Flow: Unlike conventional 2D or 3D MRI, 4D Flow data inherently includes three spatial dimensions plus a temporal dimension, and multiple velocity encoding dimensions. This creates a massive data acquisition burden, but simultaneously offers a vast parameter space for intelligent undersampling. The redundant information across these multiple dimensions presents a unique and significant opportunity for AI-driven reconstruction to achieve unprecedented acceleration rates.
- The AI Opportunity: Breaking the Speed Limit: This challenge is our call to action. We seek innovative algorithms that leverage advanced deep learning and reconstruction methodologies to bridge this critical gap. By achieving high-fidelity hemodynamic information from extreme undersampling (10x–50x data reduction), we can dramatically accelerate 4D Flow MRI.

The Core Goal: To transform 4D Flow MRI from a specialized research tool into a widely accessible, routine clinical diagnostic technology, thereby bringing the cardiovascular "Digital Twin" to every patient.

---

## Evolution of the CMRxRecon Series

| CMRxRecon Series | Modalities | No. of Centers | No. of Scanners | Populations | Sampling Tratectory |
|---|---|---|---|---|---|
| 2023 | Cine, Mapping | 1 | 1 | Healthy | 2D Uniform |
| 2024 | Cine, T1 and T2 Mapping, Blackblood, Phase contrast, Tagging. | 1 | 1 | Healthy | 2D Uniform, 3D k-t Uniform, 3D k-t Gaussian，3D k-t Radial |
| 2025 | Cine, T1, T2 and T2* Mapping, T1w, T2w, T1rho, Blackblood, Phase contrast, LGE, Perfusion. | 5+ | 10+ | Hearthy individuals and patients with hypertrophic cardiomyopathy; dilated cardiomyopathy; myocardial infarction.; coronary artery disease; arrhythmias, etc. | 2D and 3D k-t Uniform, 2D and 3D k-t Gaussian，2D and 3D k-t Radial |
| 2026 | 4D Flow MRI | 5+ | 4+ | Patients with aortic pathologies (stenosis, regurgitation, aneurysm, dissection, coarctation) | 3D Cartesian (Gaussian) |

CMRxRecon2026 aims to bridge these gaps by advancing ultra-fast 4D flow MRI reconstruction. The challenge dataset will include over 200 cases from 5+ clinical centers, encompassing a diverse spectrum of cardiovascular diseases. Participants are invited to tackle two key objectives:

1. Accurate reconstruction under high acceleration: Develop algorithms capable of restoring high-quality magnitude and phase images from highly undersampled acquisitions while maintaining reliable hemodynamic measurements.
2. Fast and efficient reconstruction: Design resource-efficient methods that enable rapid reconstruction on limited hardware, facilitating practical clinical deployment of 4D flow MRI.

---

## Timeline

The schedule of the challenge is as follows. All deadlines are Pacific Standard Time (PST +11:59).
<style>
.timeline-box {
  width: 90%;
  margin: 20px auto;
  border-radius: 10px;
  overflow: hidden;
  font-size: 16px;
  line-height: 1.6;
}

.timeline-row {
  padding: 10px 15px;
}

.timeline-row:nth-child(odd) {
  background: #f5f7ff;
}

.timeline-row:nth-child(even) {
  background: #e9efff;
}

.timeline-row strong {
  color: #003399;
}
</style>

<div class="timeline-box">
  <div class="timeline-row"><strong>[Mar. 1, 2026]</strong> Website opens for registration</div>
  <div class="timeline-row"><strong>[Mar. 10, 2026]</strong> Release training data</div>
  <div class="timeline-row"><strong>[Apr. 15, 2026]</strong> Release validation data</div>
  <div class="timeline-row"><strong>[May. 15, 2026]</strong> Submission system opens for validation for regular tasks</div>
  <div class="timeline-row"><strong>[Jun. 10, 2026]</strong> Submission system opens for validation for special tasks</div>
  <div class="timeline-row"><strong>[Jun. 20, 2026]</strong> Submission system opens for testing</div>
  <div class="timeline-row"><strong>[Jul. 30, 2026]</strong> STACOM paper submission deadline</div>
  <div class="timeline-row"><strong>[Aug. 20, 2026]</strong> Testing docker submission deadline for regular tasks</div>
  <div class="timeline-row"><strong>[Sep. 27, 2026]</strong> Release final results of regular tasks during the MICCAI annual meeting</div>
  <div class="timeline-row"><strong>[Oct. 30, 2026]</strong> Testing docker submission deadline for special tasks</div>
  <div class="timeline-row"><strong>[Feb. 4–7, 2027]</strong> Release final results of special tasks during the SCMR annual meeting</div>
</div>