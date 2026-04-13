---
title: Data
---
# Data

<!-- 开头图片 -->
<center>
  <img src="/data/image1.png" 
       alt="CMRxRecon2026 Data Overview" 
       width="90%" 
       style="max-width: 600px; height: auto; margin-bottom: 20px;">
</center>

## Data sources
MRIxFields2026 provides a large-scale multi-field MRI dataset spanning 0.1T to 7T, integrating unpaired multi-center cohorts with prospectively acquired travelling-volunteer paired data.

💾 **Data Overview: Scale & Diversity**

- **Total Volume:**  
  - Total Volume: The dataset comprises approximately unpaired ~ 650 retrospective cases for each modality (average, scanned at all 5 field strengths ) and 40 prospectively acquired travelling-volunteer cases (paired, scanned at all 5 field strengths), yielding 200 cross-field paired scans for each modality.

- **Multi-field structural brain MRI data featuring:5 Field Strengths: 0.1T, 1.5T, 3T, 5T, 7T systems.**  
  - 3 Modalities: 3D T1-Weighted (T1W), 2D/3D T2-Weighted (T2W), 2D/3D T2-FLAIR.
  - 3 Manufacturers: Siemens Healthineers, United Imaging Healthcare, Point Imaging. 

| Field Strength | Prospective T1w (paired) | Prospective T2w (paired) | Prospective T2 FLAIR (paired) | Retrospective T1w (unpaired) | Retrospective T2w (unpaired) | Retrospective T2 FLAIR (unpaired) | Scanners | Manufacturer |
|---|---:|---:|---:|-----------------------------:|-----------------------------:|----------------------------------:|---|---|
| 0.1T | 40 (3D) | 40 (3D) | 40 (3D) |                     100 (3D) |                     100 (3D) |                           99 (2D) | piMR-820H | Point Imaging |
| 1.5T | 40 (3D) | 40 (3D) | 40 (3D) |                     104 (3D) |                     221 (2D) |                          221 (2D) | uMR 670 | United Imaging Healthcare |
| 3T | 40 (3D) | 40 (3D) | 40 (3D) |                     143 (3D) |                     142 (3D) |                          143 (2D) | MAGNETOM Prisma | Siemens Healthineers |
| 5T | 40 (3D) | 40 (3D) | 40 (3D) |                     121 (3D) |                      43 (3D) |                          102 (2D) | uMR Jupiter | United Imaging Healthcare |
| 7T | 40 (3D) | 40 (3D) | 40 (3D) |                     235 (3D) |                      81 (3D) |                           84 (2D) | MAGNETOM Terra | Siemens Healthineers |


📊 **Dataset seperation: Training, Validation, and Testing**

### Overall Split

- Training set: About 665 cases for each modality (average), consisting of the retrospective unpaired cohort together with paired data from 10 travelling volunteers × 5 field strengths
- Validation set: 85 cases, corresponding to 17 volunteers × 5 field strengths
- Test set: 100 cases, corresponding to 20 held-out volunteers × 5 field strengths

The precise role of each split varies across tasks, depending on whether the task is driven primarily by unpaired learning, paired target-domain supervision, or controllable conditional generation.


### Task 1: Ultra-High-Field MRI Synthesis from Arbitrary Input Field Strengths

- **Training Set (N ≈ 665 for each modality in average)**  
  - The training set consists primarily of the retrospective unpaired cohort **(N ≈ 650 cases)**, supplemented with paired data from **3 travelling volunteers (N = 15 cases).**

  This yields a total of more than **665 training cases**, covering all five field strengths and multiple structural contrasts.

- **Validation Set (N = 85 for each modality in average):**  
  - The validation set consists of **17 travelling volunteers scanned across five field strengths (17 × 5 = 85 cases).**

  These paired data enable controlled within-subject validation against corresponding 7T targets.

- **Test Set (N = 100 for each modality in average):**  
  - The test set includes **20 held-out travelling volunteers scanned across five field strengths (20 × 5 = 100 cases).**

  Paired 7T references are withheld and used exclusively for final evaluation.

### Task 2: Higher-Field MRI Generation from Ultra-Low-Field MRI

- **Training Set (N ≈ 665 for each modality in average)**  
  - The training set includes all retrospective unpaired data **(N ≈ 650 cases)**, with emphasis on **0.1T inputs**, and paired data from **3 travelling volunteers (N = 15 cases).**

  In total, the training set contains about **665 cases**, spanning ultra-low-field to higher-field domains.

- **Validation Set (N = 85 for each modality in average):**  
  - The validation set consists of **17 travelling volunteers (N = 85 cases)**, including paired **0.1T and higher-field scans** for within-subject evaluation.

- **Test Set (N = 100 for each modality in average):**  
  - The test set consists of **20 held-out travelling volunteers (N = 100 cases).**

  The 0.1T images serve as inputs, while higher-field references are withheld for evaluation.

### Task 3: Controllable Field-to-Field MRI Synthesis with a Unified Conditional Model

- **Training Set (N ≈ 665 for each modality in average)**  
  - The training set includes the full retrospective unpaired cohort **(N ≈ 650 cases)** and paired data from **3 travelling volunteers (N = 15 cases).**

  This results in about **665 training cases**, covering all field strengths and supporting many-to-many translation learning.

- **Validation Set (N = 85 for each modality in average):**  
  - The validation set consists of **17 travelling volunteers (N = 85 cases)**, enabling evaluation across all possible field-to-field translation directions.

- **Test Set (N = 100 for each modality in average):**  
  - The test set consists of **20 held-out travelling volunteers (N = 100 cases).**

All target-domain references are withheld and used only for final ranking.

## Pre-processing

To ensure anatomical consistency across field strengths while preserving realistic cross-field variability, we designed a unified yet cohort-specific preprocessing pipeline. The pipeline treats the **prospective travelling-volunteer paired cohort** and the **retrospective unpaired multi-field cohort** differently, reflecting their distinct roles in training and evaluation.

### 1. Spatial Registration

#### 1.1 Prospective Travelling-Volunteer Cohort (Paired Data)

For the paired dataset, we adopted a **subject-specific, 3T-anchored registration strategy** to preserve within-subject anatomical correspondence across field strengths while minimizing artificial deformation.

##### Step 0: Intra-subject multi-contrast alignment
For each subject, **T2-weighted** and **T2-FLAIR** images were first rigidly registered to the corresponding **T1-weighted** image to ensure within-subject cross-contrast alignment.

##### Step 1: Skull stripping
Skull stripping was then performed using **HD-BET** on the **T1-weighted** images, and the resulting brain masks were propagated to **T2-weighted** and **T2-FLAIR** images.

##### Step 2: Reference definition
The skull-stripped **3T T1-weighted** image was rigidly registered to the **MNI152 (0.5 mm, skull-off) template**, establishing a subject-specific reference in standard space.

##### Step 3: Cross-field alignment
T1-weighted images from all other field strengths (**0.1T, 1.5T, 5T, and 7T**) were rigidly registered to the **subject-specific 3T T1 image in MNI space**, ensuring consistent global alignment across fields.

##### Step 4: Nonlinear refinement (optional)
For cases with residual misalignment, **SyN nonlinear registration (ANTs)** was applied as a refinement step to improve local anatomical correspondence.

##### Multi-contrast propagation
The estimated transformations from **T1-weighted** images were propagated to the corresponding **T2-weighted** and **T2-FLAIR** images. When necessary, additional **SyN-based refinement** was applied to these modalities to correct residual mismatch.

#### 1.2 Retrospective Multi-Field Cohort (Unpaired Data)

For the retrospective dataset, **0.1T images** were first skull-stripped using **HD-BET**, after which all modalities were registered to the **MNI152 template (0.5 mm, skull-off)**.

### 2. Bias Field Correction and Intensity Normalization

After spatial registration, **N4 bias field correction** was applied to mitigate intensity inhomogeneity.

All images were then normalized to the range of **(0, 1)** using **min-max scaling**.

### 3. 2D-to-3D Super-Resolution Reconstruction

For acquisitions with inherently anisotropic resolution (i.e., **2D scans**), we employed a learning-based super-resolution strategy to reconstruct volumetric 3D data. Specifically, a pre-trained super-resolution network was used to perform slice-to-volume reconstruction, transforming 2D inputs into isotropic 3D volumes. This approach enables recovery of through-plane structural information and improves cross-plane consistency, which is critical for subsequent cross-field analysis and synthesis tasks.

### 4. Quality Control

All data underwent **expert-guided quality control**, including:

- Removal of scans with severe motion artifacts
- Exclusion of images with incomplete brain coverage
- Verification of registration accuracy across field strengths and modalities

This process ensures high data quality and reliable anatomical alignment across the dataset.

### 5. Data Organization

All processed data are organized according to the **BIDS (Brain Imaging Data Structure)** standard, with consistent metadata across subjects, field strengths, and acquisition sites.

#### Reference Information

- **ANTs registration**: [GitHub](https://github.com/antsx/ants)
- **Super-resolution**: [GitHub](https://github.com/csguoh/MambaIR)
- **HD-BET**: [GitHub](https://github.com/BrainLesion/HD-BET)

## Post-processing

To enable anatomically informed downstream analysis, we incorporated a post-processing step based on automated brain segmentation.

### 1. Automated Segmentation

All processed MRI volumes were segmented using **SynthSeg**, a deep learning-based whole-brain segmentation framework. SynthSeg was selected due to its robustness to variations in image contrast, resolution, and acquisition conditions, making it particularly suitable for multi-field MRI data.

Segmentation was applied uniformly to all images after preprocessing, without additional manual intervention.

### 2. Structural Feature Extraction

Based on the segmentation outputs, regional structural measures were derived for each subject, including:

- Regional brain volumes for deep gray matter structures
- Bilateral measurements across anatomical regions

The primary structures include:

- Thalamus
- Caudate
- Putamen
- Pallidum
- Hippocampus
- Amygdala
- Accumbens

These regions are consistently identifiable across field strengths and are suitable for downstream quantitative analysis.

### 3. Quality Control of Segmentation

To ensure robustness of the segmentation outputs:

- SynthSeg was applied under a unified configuration across all datasets
- Outputs were visually inspected for gross failures or anatomical inconsistencies
- Cases with severe segmentation artifacts were flagged during the quality control stage

### 4. Role in the Pipeline

This post-processing step provides anatomically meaningful representations of the MRI data, enabling:

- Standardized structural characterization across field strengths
- Region-wise quantitative analysis
- Compatibility with downstream evaluation and analysis pipelines

### Reference Information

- **SynthSeg**: [GitHub Repository](https://github.com/BBillot/SynthSeg)
- **Paper**: *SynthSeg: Segmentation of brain MRI scans of any contrast and resolution without retraining*

---


### Data Directory Structure

``` text
ChallengeData
├── Training_retrospective/          # Training (unpaired, different subjects)
│   ├── 3D_T1W/
│   │   ├── 0.1T/*.nii.gz
│   │   ├── 1.5T/*.nii.gz
│   │   ├── 3T/*.nii.gz
│   │   ├── 5T/*.nii.gz
│   │   └── 7T/*.nii.gz
│   ├── 3D_T2W/
│   │   ├── 0.1T/*.nii.gz
│   │   ├── 1.5T/*.nii.gz
│   │   ├── 3T/*.nii.gz
│   │   ├── 5T/*.nii.gz
│   │   └── 7T/*.nii.gz
│   └── 3D_T2_Flair/
│       ├── 0.1T/*.nii.gz
│       ├── 1.5T/*.nii.gz
│       ├── 3T/*.nii.gz
│       ├── 5T/*.nii.gz
│       └── 7T/*.nii.gz
├── Training_prospective/            # Training (paired, travelling volunteers)
│   ├── 3D_T1W/ {0.1T, 1.5T, 3T, 5T, 7T}
│   ├── 3D_T2W/
│   └── 3D_T2_Flair/
├── Validating_prospective/          # Validation (paired)
│   ├── 3D_T1W/{0.1T, 1.5T, 3T, 5T, 7T}
│   ├── 3D_T2W/
│   └── 3D_T2_Flair/
└── Testing_prospective/             # Test (paired)
    ├── 3D_T1W/{0.1T, 1.5T, 3T, 5T, 7T}
    ├── 3D_T2W/
    └── 3D_T2_Flair/
```

For each individual NIfTI file, our naming convention is “field strength_ID”, for example, “5T_002”. Please note that the same ID corresponds to the same subject, while different IDs correspond to different subjects. Therefore, if you plan to use multi-contrast data for training, you will need to match the IDs accordingly.

For retrospective data (from different subjects), we only performed rigid registration. If you are not satisfied with the cross-contrast alignment, you may perform your own registration. For prospective data (from the same subject), we applied deformable registration to achieve better spatial alignment across field strengths and contrasts. However, some degree of mismatch is unavoidable. If you identify any severe misalignment issues in the data, please contact us at: mrixfields@outlook.com.


--------------------------------

<div style="margin: 24px 0;">
  <img
    src="/alllogos.png"
    alt="Consortium logos"
    style="display: block; max-width: 60%; height: auto; margin: 0 auto;"
  />
</div>