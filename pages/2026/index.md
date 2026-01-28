---
layout: home

hero:
  name: "CMRx4DFlow2026"
  text: "Website of CMRx series challenges"
  tagline: Ultra-Fast 4D Flow MRI Reconstruction Challenge

features:
  - title: Ultra-Fast 4D Flow MRI
    details: Accelerating 4D Flow MRI acquisition and reconstruction toward routine clinical use.
  - title: Multi-center Clinical Dataset
    details: Over 500 cases from 10+ clinical centers covering diverse aortic pathologies.
  - title: AI-driven Reconstruction
    details: Extreme undersampling with reliable magnitude, phase, and hemodynamic reconstruction.
---


## Image Gallery

![Slide 1](./public/home/image1.png)


---

## About Us

#### Welcome to the 4D Flow MRI Reconstruction Challenge 2026 (CMRx4DFlow2026)

—an integral part of the 29th International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI 2026), hosted in Abu Dhabi, United Arab Emirates, from October 4th to 8th, 2026.  
LEARN MORE (MICCAI 2026 - 29. International Conference On Medical Image Computing & Computer Assisted Intervention)

🫀 CMRx4DFlow2026: Ultra-Fast 4D Flow MRI

> Our Vision: To challenge physical limits and leverage AI to dramatically accelerate 4D flow MRI acquisitions and reconstructions, transforming prolonged procedures into clinically viable rapid scans, and thereby ensuring every patient can benefit from advanced flow visualization.

🌟 What is 4D Flow MRI? (Beyond Images: A "Digital Twin" of Your Cardiovascular System)

Imagine not just taking a static "snapshot" of the heart, but creating a complete, dynamic replica of blood circulating within you in the digital world. This is 4D Flow MRI—building a precise cardiovascular "Digital Twin."

- 3D Space + 1D Time: 4D Flow MRI captures the intricate hemodynamic dynamics across the entire cardiac cycle, detailing every pulsation, swirl, and impact of blood flow in three-dimensional space.
- Beyond Anatomy: It quantitatively calculates critical hemodynamic parameters such as Flow Velocity, Wall Shear Stress (WSS), and Vorticity.
- Pivotal Clinical Value: Clinicians can use this "digital proxy" to precisely assess risks for aortic aneurysms, stenosis, or dissections, and simulate surgical planning.
<br/>
<center>
  <img src="./public/home/towardsclinicaladoption.gif" style="max-width: 600px; margin-top: 12px;" />
</center>
🎯 Why This Challenge? (Pain Points & Opportunities)

While 4D Flow concept is powerful, its widespread routine clinical adoption faces significant, long-standing barriers.

- The Clinical Pain Point: Time Burden: Acquiring a comprehensive (high resolution) 4D Flow dataset typically demands 30–60 minutes of scanner time. This duration is not only physically demanding for patients, often leading to motion artifacts, but also imposes prohibitive time and cost burdens on hospital workflows.
- The Technological Bottleneck: Insufficient Acceleration: While existing acceleration techniques (such as parallel imaging or standard compressed sensing) have reduced scan times, they commonly yield results in 10–20 minutes with low to medium spatial resolution. This remains significantly longer than the sub-5-minute window desired for integration into routine clinical MRI protocols.
- The Unique Acceleration Potential of 4D Flow: Unlike conventional 2D or 3D MRI, 4D Flow data inherently includes three spatial dimensions plus a temporal dimension, and multiple velocity encoding dimensions. This creates a massive data acquisition burden, but simultaneously offers a vast parameter space for intelligent undersampling. The redundant information across these multiple dimensions presents a unique and significant opportunity for AI-driven reconstruction to achieve unprecedented acceleration rates.
- The AI Opportunity: Breaking the Speed Limit: This challenge is our call to action. We seek innovative algorithms that leverage advanced deep learning and reconstruction methodologies to bridge this critical gap. By achieving high-fidelity hemodynamic information from extreme undersampling (10x–50x data reduction), we can dramatically accelerate 4D Flow MRI.

The Core Goal: CMRx4DFlow2026 provides a standardized benchmark to accelerate the clinical adoption of 4D Flow MRI. We promote reconstruction algorithms that balance high-fidelity accuracy with computational efficiency, ensuring robust performance across diverse scanners and patient populations

---

## Evolution of the CMRxRecon Series

| CMRxRecon Series | Modalities | No. of Centers | No. of Scanners | Populations | Sampling Trajectory | No. of Subjects |
|------------------|------------|----------------|------------------|-------------|---------------------|-----------------|
| 2023 | Cine, Mapping | 1 | 1 | Healthy individuals | 2D Uniform | ~300 |
| 2024 | Cine, T1 and T2 Mapping, Blackblood, Phase contrast, Tagging | 1 | 1 | Healthy individuals | 2D Uniform, 3D k-t Uniform, 3D k-t Gaussian, 3D k-t Radial | ~300 |
| 2025 | Cine, T1, T2 and T2* Mapping, T1w, T2w, T1rho, Blackblood, Phase contrast, LGE, Perfusion | 5+ | 10+ | Healthy individuals and patients with hypertrophic cardiomyopathy; dilated cardiomyopathy; myocardial infarction; coronary artery disease; arrhythmias, etc. | 2D and 3D k-t Uniform, 2D and 3D k-t Gaussian, 2D and 3D k-t Radial | ~600 |
| 2026 | 4D Flow MRI | 10+ | 10+ | Healthy individuals; patients with multi-organ diseases (heart, brain, aorta, kidney, liver, carotid artery) | 3D Cartesian (k-t Gaussian) | ~400 |


To bridge the gap between research and clinical deployment, the 2026 challenge utilizes over 400 cases from 10+ centers to evaluate reconstruction performance across four specific dimensions:

1. Regular Task 1: Accurate Reconstruction under High Acceleration – To evaluate the robustness and generalization performance of reconstruction models under high (10x-50x) acceleration factors across different clinical centers and various scanners.
2. Regular Task 2: Fast Reconstruction under Limited Computing Resources – To evaluate the clinical performance and computational efficiency of reconstruction models across standardized hardware (NVIDIA A6000).
3. Special Task 1: Generalizability across new sites and diseases – To evaluate the hardware robustness and cross-site generalization performance of reconstruction models across different magnetic field strengths (1.5T, 3T, and 5T) and diverse clinical scenarios.
4. Special Task 2: Generalizability across different anatomical regions – To evaluate the universality and cross-organ generalization performance of reconstruction models across multiple anatomical regions (e.g., brain, liver, kidney, and carotid arteries).


---

## Timeline
The schedule of the challenge is as follows. All deadlines are Pacific Standard Time (PST +11:59).

<div style="max-width: 700px; margin-top: 1rem;">
  <div style="padding: 10px 14px; background-color: #f5f7fa;">
    <strong>[Feb. 01, 2026]</strong> Website opens for registration
  </div>
  <div style="padding: 10px 14px; background-color: #ffffff;">
    <strong>[Mar. 01, 2026]</strong> Release training data and validation data
  </div>
  <div style="padding: 10px 14px; background-color: #f5f7fa;">
    <strong>[May. 01, 2026]</strong> Submission system opens for validation
  </div>
  <div style="padding: 10px 14px; background-color: #ffffff;">
    <strong>[Jul. 01, 2026]</strong> Submission system opens for testing
  </div>
  <div style="padding: 10px 14px; background-color: #f5f7fa;">
    <strong>[Jul. 30, 2026]</strong> STACOM paper submission deadline
  </div>
  <div style="padding: 10px 14px; background-color: #ffffff;">
    <strong>[Aug. 20, 2026]</strong> Testing docker submission deadline
  </div>
  <div style="padding: 10px 14px; background-color: #f5f7fa;">
    <strong>[Oct. 08, 2026]</strong> Release final results during the MICCAI annual meeting
  </div>
</div>
