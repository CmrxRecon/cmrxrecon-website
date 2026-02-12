---
title: Tasks
---

# Tasks

<center>
  <img src="/tasks/newpic.png" 
       alt="CMRxRecon Tasks Overview" 
       width="100%" 
       style="max-width: 800px; height: auto; margin-bottom: 20px;">
</center>

<center>
  <img src="/tasks/image1.png" 
       alt="CMRxRecon Tasks Overview" 
       width="100%" 
       style="max-width: 800px; height: auto; margin-bottom: 20px;">
</center>

The CMRxRecon2026 challenge includes two regular tasks and two special tasks. The tasks are awarded independently, so each team can choose to participate in any one of them. For each task, participants can submit one model each (which can be four different models, or they can submit just one model, but they must submit it separately for each task). Please note that for the four tasks, the training dataset we provide is the same; however, the validation and test datasets may be different for each of the four tasks.

## Objective

To evaluate the models' capability for accurate reconstruction under ultra-high acceleration (Regular Task 1), rapid processing with limited computing resources (Regular Task 2), generalizability across new clinical sites and diseases (Special Task 1), and adaptability to different anatomical regions (Special Task 2).

---

🏆 **Regular Task 1: Accurate Reconstruction under High Acceleration**  

This track targets the fundamental challenge of recovering high-fidelity 4D Flow information from severely undersampled k-space data. Participants are tasked with developing advanced reconstruction algorithms capable of operating at extreme acceleration factors, directly addressing the current barrier of lengthy scan times.

- **Goal:** Reconstruct 4D Flow data under extreme acceleration factors (10x – 50x).  
- **Core Challenge:** The primary hurdle is to accurately recover not only the anatomical structure (represented by the magnitude image) but, critically, also the precise phase information that encodes the blood flow velocity. Errors in phase reconstruction directly translate to inaccurate hemodynamic parameters, undermining clinical utility.  

- **Evaluation Metrics:** Submissions will undergo a comprehensive assessment of reconstruction fidelity.
  - **Magnitude Image Quality:** Evaluated using standard metrics such as Normalized Root Mean Square Error (nRMSE) and Structural Similarity Index Measure (SSIM), focusing on the overall visual integrity and detail preservation of the reconstructed images.
  - **Flow Velocity Field Accuracy:** Evaluated using Relative Velocity Error (RelErr) and Angular Error (AngErr), comparing reconstructed velocity vectors against ground truth.

- **Ranking Method:**  
  - **Per-metric aggregation:** For each submission and each metric (nRMSE, SSIM, RelErr, AngErr), compute the average metric value across all test cases.  
  - **Per-metric ranking:** Rank methods separately for each metric:
    - Lower is better: nRMSE, RelErr, AngErr  
    - Higher is better: SSIM  
  - **Overall ranking:** For each method, sum its ranks across the four metrics to obtain a composite score. Methods with the lowest summed rank are ranked highest overall.

---

🏆 **Regular Task 2: Fast Reconstruction under Limited Computing Resources**  


This task prioritizes computational efficiency for routine clinical adoption. Participants develop algorithms that minimize reconstruction latency on standard workstation hardware, ensuring 4D Flow MRI is practical for high-throughput diagnostic workflows.

- **Goal:** Achieve the fastest possible reconstruction using limited computational resources (standardized on a single NVIDIA A6000 48G GPU).  
- **Core Challenge:** Reconstructing high-dimensional 4D Flow data within the computational limits of a single GPU, optimizing reconstruction efficiency while ensuring the diagnostic integrity of blood flow quantification.

- **Evaluation Process:** The evaluation for Task 2 follows a two-stage process designed to prioritize computational speed without compromising clinical diagnostic quality.
  - **Stage 1: Quality Qualification (Threshold Baseline)**
    - **Benchmark:** The FlowVN algorithm (Vishnevskiy et al., Nat Mach Intell. 2020) serves as the baseline for acceptable reconstruction quality.  
    - **Evaluation Metric:** Reconstruction quality is assessed using a unified metric, Complex Difference Error ($E_{complex}$), that evaluates the accuracy of the reconstructed complex-valued data, capturing both magnitude and phase information.  
    - **Qualification Requirement:** Only algorithms achieving an $E_{complex}$ value equal to or lower than the FlowVN baseline qualify for the final ranking.  

  - **Stage 2: Efficiency Ranking (Final Performance)**
    - **Standardized Platform:** After meeting the reconstruction quality threshold, algorithms are ranked based on their computational efficiency. Reconstruction time per case, measured in seconds, is evaluated on a single NVIDIA A6000 GPU with 48 GB VRAM.  
    - **Evaluation Metric:** Average Reconstruction Time – the mean end-to-end duration required to transform raw k-space input into final reconstructed images. The algorithm that delivers the shortest processing time per case achieves the highest rank.

- **Ranking Method:**  
  - **Quality gate (eligibility):** Submissions are first checked against a reconstruction-quality threshold benchmarked to FlowVN. Only methods that achieve quality equal to or better than FlowVN are eligible for ranking.  
  - **Time-based ranking:** Among eligible submissions, rank methods by reconstruction time (seconds per case) measured on the standardized hardware platform (single NVIDIA A6000, 48GB). Shorter time ranks higher.

---

🏆 **Special Task 1: Generalizability Across New Sites and Diseases**  

Real-world clinical data often varies significantly across different hospitals, scanner models, and patient populations, especially in challenging disease states. This task investigates the robustness and generalizability of your reconstruction algorithms when faced with unseen data characteristics.

- **Goal:** Develop reconstruction models that maintain high accuracy and quality when applied to 4D Flow data acquired from new, unseen clinical sites (e.g., different MRI scanner models) and/or new disease pathologies not explicitly represented in the primary training set.  

- **Core Challenge:** Overcoming domain shift. Algorithms must demonstrate resilience to variations in:
  - Signal-to-noise ratio  
  - Coil sensitivities  
  - Acquisition parameters  
  - Pathological manifestations  
  without retraining or fine-tuning on the new domain. This pushes the boundaries of robustness and true clinical applicability.

- **Evaluation Metrics:** Submissions will undergo a comprehensive assessment of reconstruction fidelity:
  - **Magnitude Image Quality:** Evaluated using standard metrics such as Normalized Root Mean Square Error (nRMSE) and Structural Similarity Index Measure (SSIM), focusing on the overall visual integrity and detail preservation of the reconstructed images.  
  - **Flow Velocity Field Accuracy:** Evaluated using Relative Velocity Error (RelErr) and Angular Error (AngErr), comparing reconstructed velocity vectors against ground truth.

- **Ranking Method:**  
  - **Per-metric aggregation:** For each submission and each metric (nRMSE, SSIM, RelErr, AngErr), compute the average metric value across all test cases.  
  - **Per-metric ranking:** Rank methods separately for each metric:
    - Lower is better: nRMSE, RelErr, AngErr  
    - Higher is better: SSIM  
  - **Overall ranking:** For each method, sum its ranks across the four metrics to obtain a composite score. Methods with the lowest summed rank are ranked highest overall.

---

🏆 **Special Task 2: Generalizability Across Different Anatomical Regions**  

While the primary regular tasks focus on aortic 4D Flow, the principles of blood flow imaging and reconstruction are broadly applicable to other critical vascular beds. This task explores the transferability of algorithms developed for aortic data to entirely different anatomical regions within the cardiovascular system.

- **Goal:** Evaluate how effectively reconstruction algorithms, primarily trained on aortic 4D Flow data, can generalize to other important vascular regions such as:
  - Portal venous system  
  - Renal arteries  
  - Cerebral vessels  
  - Cervical vessels  
  without significant architectural changes or specific training on these new regions.

- **Core Challenge:** Adapting to new anatomical geometries, flow patterns, and potential variations in image contrast and resolution inherent to different vascular territories. This tests the fundamental understanding of flow dynamics learned by the model, rather than just aortic-specific features.

- **Evaluation Metrics:** Submissions will undergo a comprehensive assessment of reconstruction fidelity:
  - **Magnitude Image Quality:** Evaluated using standard metrics such as Normalized Root Mean Square Error (nRMSE) and Structural Similarity Index Measure (SSIM), focusing on the overall visual integrity and detail preservation of the reconstructed images.  
  - **Flow Velocity Field Accuracy:** Evaluated using Relative Velocity Error (RelErr) and Angular Error (AngErr), comparing reconstructed velocity vectors against ground truth.

- **Ranking Method:**  
  - **Per-metric aggregation:** For each submission and each metric (nRMSE, SSIM, RelErr, AngErr), compute the average metric value across all test cases.  
  - **Per-metric ranking:** Rank methods separately for each metric:
    - Lower is better: nRMSE, RelErr, AngErr  
    - Higher is better: SSIM  
  - **Overall ranking:** For each method, sum its ranks across the four metrics to obtain a composite score. Methods with the lowest summed rank are ranked highest overall.


---

## 🎖️ Awards

The top 5 winners in each task will receive monetary awards. The bonus distribution plan is shown in the table below.

<center>
  <img src="/tasks/awards.png" alt="Awards Overview" width="100%" style="max-width: 1100px; height: auto; margin-bottom: 20px;">
</center>

All submissions will be reported in the leaderboard. Each participating team can engage in any tasks or all four tasks. Prize-winning methods will be announced publicly as part of a scientific session at the MICCAI annual meeting.

---


#### Task Submission

- **Validation submission tutorial:** [Synapse Wiki](https://www.synapse.org/Synapse:syn64545434/wiki/637610)  
- **Test submission tutorial:** [Synapse Wiki](https://www.synapse.org/Synapse:syn64545434/wiki/637611)  

#### Challenge Platform
- Hosted on **Synapse** platform: https://www.synapse.org/Synapse:syn64545434/wiki/

---



## Principal of Participation

<center>
  <img src="/tasks/e2b762a5-4366-4e7f-876d-131e4e28bd2d.png" alt="Principal of Participation" width="90%" style="max-width: 1100px; height: auto; margin-bottom: 20px;">
</center>

Note: Participants are not required to upload the complete training code. But teams willing to upload the original training code will be automatically entered into the code-sharing pool.

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

---

## Rules

1. It should be restricted to the data provided by the current and previous CMRxRecon challenge as well as data from the ‘fastMRI’ challenge (the most related public dataset), under the terms and conditions associated with the data usage.
2. For each task, participants are allowed to train only one model to reconstruct various images at the aforementioned different undersampling scenarios.  

---
