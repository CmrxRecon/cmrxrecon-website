---
title: Tasks
---

# Tasks

The MRIxFields2026 challenge includes three complementary tasks. The tasks are evaluated and awarded independently, so each team can choose to participate in any one of them, or all three.


For each task, participants must submit their models separately as containerized inference pipelines via Docker images. Participants are allowed to make up to 3 formal submissions per task, and only the last run is officially counted to rank the results.


Please note that for all three tasks, the provided datasets are identical: consisting of about 1900+ unpaired cases (T1W, T2W, T2 FLAIR) and 45 paired cases (3 paired volunteers × 5 fields × 3 modalities) for training, 255 paired cases (17 paired volunteers × 5 fields × 3 modalities)  for validation, and 300 paired cases (20 paired volunteers × 5 fields × 3 modalities) for testing. However, the evaluation reference targets will vary depending on the specific task (e.g., using a fixed 7T reference for Task 1, versus dynamic field-conditioned targets for Task 3).

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

  - **Per-metric ranking:** Rank methods separately for each metric based on its mean performance:
    - Lower is better: nRMSE, LPIPS 
    - Higher is better: SSIM, Dice overlap, normalized volume consistency  

  - **Overall ranking:** Sum the per-metric ranks for each algorithm. Algorithms with the lowest composite scores achieve the highest final rank. 



---

🏆 **Task 3: Controllable Field-to-Field MRI Synthesis with a Unified Conditional Model**  

This track introduces controllable, generalizable field-to-field synthesis via explicit conditioning mechanisms. Unlike pairwise translation, the objective is to learn a generalizable representation that enables dynamic image generation conditioned on desired target field parameters.

- **Goal:** Perform controllable transformations between any pair of field strengths (e.g., 0.1T to 7T) using a single unified conditional model where both input and target fields are explicitly specified.

- **Core Challenge:** Scaling beyond isolated translation tasks, models must capture field-dependent variations in contrast behavior, noise, and spatial resolution across diverse and extreme transitions while adapting to user-specified field targets without compromising structural integrity.


- **Evaluation Metrics:** Computed conditioned on different target field specifications to explicitly assess controllability and field-awareness.
  - **Image Fidelity & Perceptual Quality:** Evaluated using Normalized Root Mean Square Error (nRMSE) for global intensity and contrast deviations, Structural Similarity Index Measure (SSIM) for preservation of anatomical structures, and Learned Perceptual Image Patch Similarity (LPIPS) for visual realism and anatomical plausibility. 

- **Ranking Method:**  
  - **Per-metric aggregation:** For each metric (nRMSE, SSIM, LPIPS), compute the average metric value across all test cases. 
 
  - **Per-metric ranking:** Rank methods separately for each metric:
    - Lower is better: nRMSE, LPIPS 
    - Higher is better: SSIM  
  - **Overall ranking:** For each method, sum its per-metric ranks to obtain a composite score. Algorithms with the lowest composite scores achieve the highest final rank.



---

## 🎖️ Awards

Each task will have 1 First Prize, 3 Second Prize and 5 Third Prize. We are actively finalizing the details with our sponsors, with a total prize pool of approximately **$21000**.
<center>
  <img src="/tasks/awards_index.png" alt="Awards Overview" width="100%" style="max-width: 1100px; height: auto; margin-bottom: 20px;">
</center>

All valid submissions will be reported in the public leaderboard. Prize-winning methods will be announced publicly as part of a scientific session at the MICCAI 2026 annual meeting. The inclusion of papers in the MICCAI conference proceedings and the selection of oral presentations will be determined and communicated through the paper review system.

For the authorship policy of the challenge summary paper: for each task, the first-place team may include up to three authors, the second-place team up to two authors, and the third-place team one author. If the same team ranks within the top nine (award-winning positions) in multiple tasks, the authorship allocation will be determined based on their highest-ranking result.

---



#### Challenge Platform
- Hosted on **Synapse** platform: https://www.synapse.org/Synapse:syn72060672


## Timeline
The schedule of the challenge is as follows. All deadlines are Pacific Standard Time (PST +11:59).

<div style="max-width: 700px; margin-top: 1rem;">
  <div style="padding: 10px 14px; background-color: #f5f7fa;">
    <strong>[Apr. 01, 2026]</strong> Website opens for registration
  </div>
  <div style="padding: 10px 14px; background-color: #ffffff;">
    <strong>[Apr. 10, 2026]</strong> Release training data
  </div>
  <div style="padding: 10px 14px; background-color: #ffffff;">
    <strong>[Apr. 20, 2026]</strong> Release validation data
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


1. All individuals who wish to participate in this challenge are required to register using their real name, affiliation details (including department, university/institute/company name in full, country), and affiliation emails. Incomplete and repetitive registrations will be removed without prior notice. Each team is permitted to have a maximum of six members.

2. During the validation and training phase, all participants must submit a complete solution to this challenge, which includes a Docker image and a qualified methodology paper (of at least 8 pages, in LNCS format). If you are downloading the data for purposes other than participating in the challenge, please refer to our explanation in the FAQ.

3. All participants must agree that their methodology can be made publicly available on the challenge website, and that organizers can use information provided by participants, including scores, predicted labels, and papers.

4. Participants are not allowed to register multiple teams or accounts. The MRIxFields Organizers reserve the right to disqualify such participants.

5. Redistribution or transfer of data or data links is prohibited. Participants must use the data solely for their own purposes.

6. Any publicly available datasets can be used for training. However, participants are not allowed to use their own private data to ensure the fairness of this challenge. Data augmentation based on the training dataset is allowed. No manual interventions, such as manual annotation of cases, are allowed.

7. For Task 1 and Task 2, participants may design separate models for different input field strengths (4 input field strengths) and different image contrasts (T1W, T2W, T2 FLAIR) to address field-dependent variations in noise, resolution, and contrast behavior. That is, you may provide 12 separate models for image generation. However, for Task 3, participants must utilize a single unified conditional model to enable dynamic image generation conditioned on desired target field parameters. You may use a prompt-based mechanism, but only one set of pretrained parameters is allowed to be stored for Task 3. If a participating team submits multiple models for Task 3, the submission will be disqualified and no score will be counted.

8. Participants may choose to use a single contrast (e.g., T1W) as input for model inference, or multiple contrasts (e.g., T1W + T2W + T2 FLAIR). The outputs can be either multi-contrast or single-contrast. We do not impose any restrictions on how participants use the provided data. However, please note that in the retrospective dataset, not every case includes all contrasts (T1W + T2W + T2 FLAIR).

   For matching across contrasts, please refer to the following:

   Retrospective data uses global sequential IDs from 0001 to 1056. Each field strength occupies a distinct ID range: 0.1T corresponds to 0001–0100 (100 volunteers), 1.5T to 0101–0328 (228 volunteers), 3T to 0329–0471 (143 volunteers), 5T to 0472–0737 (266 volunteers), and 7T to 0738–1056 (319 volunteers). Since each subject was scanned at only one field strength, data across different field strengths are unpaired.

   Prospective data uses IDs from 0001 to 0040. The same ID across all field strengths corresponds to the same volunteers. For example, P_T1W_0.1T_0006.nii.gz and P_T1W_7T_0006.nii.gz are from the same person scanned at 0.1T and 7T respectively. This enables paired training and evaluation across field strengths.

   For retrospective data (from different volunteers), we only performed rigid registration. If you are not satisfied with the cross-contrast alignment, you may perform your own registration.

   For prospective data (from the same volunteers), we applied deformable registration to achieve better spatial consistency across field strengths and contrasts.
9. During the validation phase, to ensure efficiency in image segmentation, participants are required to perform segmentation locally and upload the segmentation results along with their submissions to the validation platform. During the test phase, participants only need to submit their inference Docker container, and we will perform standardized segmentation and evaluation.

10. During the validation phase, each team is allowed to submit up to three times per day per task. In the test phase, each team can submit up to five Docker containers per task in total. The final ranking will be based on the results of the last submission.

11. For each task, during both the validation and test phases, you are required to generate the corresponding target field-strength images for all provided cases and all contrasts. Missing results will lead to the lowest possible score for that metric, which will in turn affect the overall score.

12. Detailed examples of the required output file structure will be provided on our GitHub: https://github.com/mrixfields .

--------

<div style="margin: 24px 0;">
  <img
    src="/alllogos.png"
    alt="Consortium logos"
    style="display: block; max-width: 60%; height: auto; margin: 0 auto;"
  />
</div>