---
title: Tasks
---

# Tasks

The MRIxFields2026 challenge includes three complementary tasks. The tasks are evaluated and awarded independently, so each team can choose to participate in any one of them, or all three.


For each task, participants must submit their models separately as containerized inference pipelines via Docker images. Participants are allowed to make up to 3 formal submissions per task, and only the last run is officially counted to rank the results.


Please note that for all three tasks, the provided datasets are identical: consisting of over 700 unpaired and 50 cases for training, 50 paired cases for validation, and 100 paired cases for testing. However, the evaluation reference targets will vary depending on the specific task (e.g., using a fixed 7T reference for Task 1, versus dynamic field-conditioned targets for Task 3).

<center>
  <img src="/tasks/3tasks.png" alt="Awards Overview" width="100%" style="max-width: 1100px; height: auto; margin-bottom: 20px;">
</center>

## Objective

To evaluate generative models' capability for high-field-equivalent MRI synthesis from arbitrary input field strengths (Task 1) , enhancement of severely degraded ultra-low-field MRI to restore clinically meaningful tissue contrast (Task 2) , and controllable, generalizable field-to-field synthesis via explicit conditioning mechanisms (Task 3).

---

🏆 **Task 1: Ultra-High Field MRI Synthesis from Arbitrary Magnetic Field Strengths**  

This track targets the generation of 7T-equivalent brain MRI from an arbitrary input field strength, establishing ultra-high-field imaging as a unified reference domain. Participants are tasked with reconstructing images that match the fidelity, contrast properties, and fine anatomical detail characteristic of true 7T acquisitions.


- **Goal:** Synthesize high-field-equivalent MRI from arbitrary input field strengths to recover fine anatomical details and quantitative properties associated with 7T imaging.
  
- **Core Challenge:** The primary hurdle is to bridge fundamental differences across magnetic field strengths while preserving anatomical fidelity and quantitative consistency. Models must handle field-dependent variations in noise, resolution, and contrast behavior to output a unified ultra-high-field representation. 


- **Evaluation Metrics:** Submissions will undergo a comprehensive assessment combining voxel-level similarity metrics with anatomically grounded segmentation measures.
  - **Image Fidelity & Perceptual Quality:** Evaluated using Normalized Root Mean Square Error (nRMSE) for global intensity and contrast deviations , Structural Similarity Index Measure (SSIM) for preservation of anatomical structures , and Learned Perceptual Image Patch Similarity (LPIPS) for visual realism and anatomical plausibility.
  - **Regional Structural Preservation:** Evaluated on 14 bilateral deep gray matter nuclei using mean Dice overlap to quantify spatial overlap and boundary consistency , and normalized volume consistency to capture relative volumetric deviation.


- **Ranking Method:**  
  - **Per-metric aggregation:** For each submission and each metric (nRMSE, SSIM, LPIPS, mean Dice overlap, and mean normalized volume consistency), compute the average metric value across all test cases.

  - **Per-metric ranking:** Rank methods separately for each metric based on its mean performance:

    - Lower is better: nRMSE, LPIPS 
 
    - Higher is better: SSIM, Dice overlap, Normalized volume consistency 

  - **Overall ranking:** For each method, sum its per-metric ranks to obtain a composite score. Algorithms with the lowest composite scores achieve the highest final rank.


---

🏆 **Task 2: Higher-Field MRI Generation from Ultra-Low Magnetic Field Strengths**  


This track addresses the global priority of enhancing ultra-low-field (0.1T) MRI. Participants are tasked with developing robust generative models capable of operating under extreme noise and resolution limitations to restore clinically meaningful tissue contrast. 


- **Goal:** Generate higher-field brain MRI from 0.1T inputs to enable clinically meaningful image quality and preserve structures critical for downstream neuroanatomical interpretation.  

- **Core Challenge:** Operating under fundamentally different signal and noise regimes, models must overcome severely reduced signal-to-noise ratio, limited spatial resolution, and diminished tissue separability where conventional reconstruction pipelines fail.


- **Evaluation Metrics:** Submissions will be assessed for translation accuracy, structural fidelity, and perceptual realism.
  - **Image Fidelity & Perceptual Quality:** Evaluated using Normalized Root Mean Square Error (nRMSE) for numerical reconstruction accuracy, Structural Similarity Index Measure (SSIM) for preservation of anatomically meaningful boundaries, and Learned Perceptual Image Patch Similarity (LPIPS) for visually plausible recovery.
  - **Regional Structural Preservation:**  Evaluated using mean Dice overlap and normalized volume consistency across 14 bilateral deep gray matter nuclei to assess spatial overlap and relative volumetric deviation under extreme degradation.
  

- **Ranking Method:**  
  - **Per-metric aggregation:** For each metric, compute the average value across all test cases.

  - **Per-metric ranking:** Rank methods independently for each metric. Lower values are preferred for nRMSE and LPIPS, while higher values are preferred for SSIM. 

  - **Overall ranking:** Sum the per-metric ranks for each algorithm. Algorithms with the lowest composite scores achieve the highest final rank. 



---

🏆 **Task 3: Controllable Field-to-Field MRI Synthesis with a Unified Conditional Model**  

This track introduces controllable, generalizable field-to-field synthesis via explicit conditioning mechanisms. Unlike pairwise translation, the objective is to learn a generalizable representation that enables dynamic image generation conditioned on desired target field parameters.

- **Goal:** Perform controllable transformations between any pair of field strengths (e.g., 0.1T to 7T) using a single unified conditional model where both input and target fields are explicitly specified.

- **Core Challenge:** Scaling beyond isolated translation tasks, models must capture field-dependent variations in contrast behavior, noise, and spatial resolution across diverse and extreme transitions while adapting to user-specified field targets without compromising structural integrity.


- **Evaluation Metrics:** Computed conditioned on different target field specifications to explicitly assess controllability and field-awareness.
  - **Image Fidelity & Perceptual Quality:** Evaluated using Normalized Root Mean Square Error (nRMSE) for global intensity differences, Structural Similarity Index Measure (SSIM) for preservation of anatomical structures, and Learned Perceptual Image Patch Similarity (LPIPS) for field-dependent textural differences. 
  
  - **Regional Structural Preservation:** Evaluated using mean Dice overlap for boundary consistency and normalized volume consistency for relative volumetric deviation across 14 bilateral deep gray matter nuclei. 


- **Ranking Method:**  
  - **Per-metric aggregation:** For each metric (nRMSE, SSIM, LPIPS, mean Dice overlap, and mean normalized volume consistency), compute the average metric value across all test cases. 
 
  - **Per-metric ranking:** Rank methods separately for each metric:
    - Lower is better: nRMSE, LPIPS 
    - Higher is better: SSIM, Dice overlap, Normalized volume consistency  
  - **Overall ranking:** For each method, sum its ranks across the four metrics to obtain a composite score. Methods with the lowest summed rank are ranked highest overall.



---

## 🎖️ Awards

The winners in each task will receive monetary awards. The bonus distribution plan is shown in the table below.

<center>
  <img src="/tasks/awards_index.png" alt="Awards Overview" width="100%" style="max-width: 1100px; height: auto; margin-bottom: 20px;">
</center>

All submissions will be reported in the leaderboard. Each participating team can engage in any tasks or all four tasks. Prize-winning methods will be announced publicly as part of a scientific session at the MICCAI annual meeting.

---


#### Task Submission

- **Validation submission tutorial:** [Synapse Wiki](https://www.synapse.org/Synapse:syn64545434/wiki/637610)  
- **Test submission tutorial:** [Synapse Wiki](https://www.synapse.org/Synapse:syn64545434/wiki/637611)  

#### Challenge Platform
- Hosted on **Synapse** platform: https://www.synapse.org/Synapse:syn64545434/wiki/


---

## Timeline
The schedule of the challenge is as follows. All deadlines are Pacific Standard Time (PST +11:59).

<div style="max-width: 700px; margin-top: 1rem;">
  <div style="padding: 10px 14px; background-color: #f5f7fa;">
    <strong>[Apr. 01, 2026]</strong> Website opens for registration
  </div>
  <div style="padding: 10px 14px; background-color: #ffffff;">
    <strong>[Apr. 10, 2026]</strong> Release training data and validation data
  </div>
  <div style="padding: 10px 14px; background-color: #f5f7fa;">
    <strong>[May. 10, 2026]</strong> Submission system opens for validation
  </div>
  <div style="padding: 10px 14px; background-color: #ffffff;">
    <strong>[Jul. 01, 2026]</strong> Submission system opens for testing
  </div>
  <div style="padding: 10px 14px; background-color: #f5f7fa;">
    <strong>[Sept. 10, 2026]</strong> Registration and docker submission deadline
  </div>
  <div style="padding: 10px 14px; background-color: #f5f7fa;">
    <strong>[Oct. 08, 2026]</strong> Release final results during the MICCAI annual meeting
  </div>
</div>

---

## Rules

1. Training data usage should be restricted to the data provided by the current MRIxFields2026 challenges, under the terms and conditions associated with the data usage.
2. For Task 1 and Task 2, participants may design separate models for different input field strengths (4 input field strengths) and different image contrast (T1w, T2w, T2Flair) to address field-dependent variations in noise, resolution, and contrast behavior. However, for Task 3, participants must utilize a single unified conditional model to enable dynamic image generation conditioned on desired target field parameters. You may use a prompt-based mechanism, but only one set of pretrained parameters is allowed to be stored for Task 3. If a participating team submits multiple models for Task 3, the submission will be disqualified and no score will be counted.
3. The algorithms assessed must be fully automatic.
4. Participating teams are allowed to make 3 formal submissions per task via Docker container through the Synapse platform. Only the last run submission is officially counted to rank challenge results.


--------

<div style="margin: 24px 0;">
  <img
    src="/alllogos.png"
    alt="Consortium logos"
    style="display: block; max-width: 60%; height: auto; margin: 0 auto;"
  />
</div>