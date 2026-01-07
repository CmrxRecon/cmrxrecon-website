---
title: Tasks
---

# Tasks

The CMRxRecon2026 challenge includes two regular tasks (announced during MICCAI annual meeting) and two special tasks (announced during SCMR annual meeting). The tasks are awarded independently, so each team can choose to participate in any one of them. For each task, participants can submit one model each (which can be four different models, or they can submit just one model, but they must submit it separately for each task). Please note that for the four tasks, the training dataset we provide is the same; however, the validation and test datasets are different for each of the four tasks.

## Objective

To evaluate the model's generalization performance across diverse centers and scanners (Regular Task 1), diseases (Regular Task 2), magnetic fields (Special Task 1), and populations (Special Task 2).

<center>
  <img src="./public/tasks/datadetail.png"/>
</center>
<center>
  <img src="./public/tasks/003225f6-fe28-4725-aea8-35d46193fe63.png"/>
</center>
<center>
  <img src="./public/tasks/111.png"/>
</center>

## Regular Task 1: High-quality reconstruction under high acceleration factors (10x–50x)

This task focuses on developing algorithms capable of rapidly and accurately reconstructing 4D flow images under ultra-high acceleration factors, with a focus on evaluating both hemodynamic parameters and image quality.

### Metrics & Ranking

**Metrics**  
Performance will be assessed based on both image quality and hemodynamic accuracy within the segmented aortic region. The ranking will be determined by the combined performance across four metrics:

1. **Magnitude Image Quality**  
   - Normalized Root Mean Square Error (nRMSE)  
   - Structural Similarity Index Measure (SSIM)  

2. **Flow Velocity Field Accuracy**  
   - Relative Error (RelErr)  
   - Angular Error (AngErr)  

**Ranking methods**  
1. Algorithms will be ranked separately for each of the four metrics, and the ranks will be summed to produce a final composite score. The algorithm with the lowest composite score will be ranked the highest.  
2. Participating teams are required to submit docker containers and process all the cases in the test set on our server. For cases without valid output, the lowest value of the metric will be assigned.

---

## Regular Task 2: Fast reconstruction under limited computing resources (A6000 48G)

This task focuses on developing computationally efficient reconstruction algorithms that can process 4D Flow MRI data rapidly while maintaining a clinically acceptable level of quality. The main objective is to minimize reconstruction time on a standardized hardware platform, under the condition that reconstruction quality meets or exceeds a pre-defined benchmark.

### Metrics & Ranking

**Metrics**  
The evaluation follows a two-stage process that prioritizes efficiency after a quality standard has been met:

1. Quality check against FlowVN benchmark (Vishnevskiy et al., Nat Mach Intell. 2020)  
2. Evaluation metric: Complex Difference Error ($E_{complex}$) for magnitude and phase  
3. Only algorithms meeting or surpassing the benchmark qualify for final ranking

**Ranking methods**  
1. Qualified algorithms are ranked by reconstruction time per case  
2. Time is measured on a standardized platform: NVIDIA A6000 GPU (48GB VRAM)  
3. Shortest reconstruction time wins

---

## Special Task 1: Generalizability across new sites and diseases

This task focuses on evaluating the robustness of reconstruction algorithms when applied to data from previously unseen clinical sites or diseases.

- **Goal:** Maintain high image and hemodynamic accuracy on unseen data  
- **Challenge:** Overcome domain shift caused by scanner types, acquisition parameters, and disease variations  
- **Evaluation:** Using an undisclosed test set from new sites/diseases  
- **Impact:** Drive development of universally deployable AI reconstruction methods

---

## Special Task 2: Generalizability across different anatomical regions

This task evaluates model performance on cardiovascular regions not seen during training.

- **Goal:** Test aortic-trained algorithms on carotids, pulmonary arteries, renal arteries, etc.  
- **Challenge:** Adapt to new anatomy, flow patterns, and image contrasts  
- **Evaluation:** Validation set contains 2 unseen diseases; test set contains 5 unseen diseases (including the 2 from validation)  
- **Impact:** Develop “universal” 4D Flow reconstruction engines applicable across the cardiovascular system

---

## 🎖️ Awards

The top 5 winners in each task will receive monetary awards. The bonus distribution plan is shown in the table below.

<center>
  <img src="/tasks/7aa01a36-e354-479e-b0a2-e95f37fcef79.png" alt="Awards Overview" width="90%" style="max-width: 1100px; height: auto; margin-bottom: 20px;">
</center>

All submissions will be reported in the leaderboard. Each participating team can engage in any tasks or all four tasks. Prize-winning methods in Regular Task 1 and Task 2 will be announced publicly as part of a scientific session at the MICCAI annual meeting. Prize-winning methods in Special Task 1 and Task 2 will be announced publicly as part of a scientific session at the SCMR annual meeting.

---

## Task Submission

- Validation submission tutorial: [Synapse Wiki](https://www.synapse.org/#!Synapse:syn59814210/wiki/628454)  
- Test submission tutorial: [Synapse Wiki](https://www.synapse.org/#!Synapse:syn59814210/wiki/628454)  

---

## Challenge Platform

- Hosted on Synapse platform.  
- Visit the Synapse Project Page.

---

## Principal of Participation

<center>
  <img src="/tasks/e2b762a5-4366-4e7f-876d-131e4e28bd2d.png" alt="Principal of Participation" width="90%" style="max-width: 1100px; height: auto; margin-bottom: 20px;">
</center>

Note: Participants are not required to upload the complete training code. But teams willing to upload the original training code will be automatically entered into the code-sharing pool.

---

## Timeline

The schedule of the challenge is as follows. All deadlines are Pacific Standard Time (PST +11:59).

- [Mar. 1, 2026] Website opens for registration  
- [Mar. 1, 2026] Release training data  
- [Apr. 1, 2026] Release validation data  
- [Apr. 1, 2026] Submission system opens for validation  
- [Jun. 1, 2026] Submission system opens for testing  
- [Jun. 30, 2026] STACOM paper submission deadline  
- [Jul. 20, 2026] Testing docker submission deadline for regular tasks  
- [Sep. 20, 2026] Testing docker submission deadline for special tasks  
- [Sep. 27, 2026] Release final results of regular tasks during the MICCAI annual meeting  
- [Feb. 4-7, 2027] Release final results of special tasks during the SCMR annual meeting  

---

## Rules

1. It should be restricted to the data provided by the previous CMRxRecon challenge as well as data from the ‘fastMRI’ challenge, under the terms and conditions associated with the data usage.  
2. For each task, participants are allowed to train only one model to reconstruct various images at the aforementioned different undersampling scenarios.  

---

## Submission

The submission instructions will be released on the Synapse platform: [Synapse Wiki](https://www.synapse.org/#!Synapse:syn59814210/wiki/628454)