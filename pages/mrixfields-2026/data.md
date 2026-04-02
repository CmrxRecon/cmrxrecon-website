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


💾 **Data Overview: Scale & Diversity**

- **Total Volume:**  
  - The dataset comprises approximately 650 retrospective cases (unpaired, ~100 cases per magnetic field strength) and 40 prospectively acquired travelling-volunteer cases (paired, scanned at all 5 field strengths), yielding 200 cross-field paired scans.
- **Multi-field structural brain MRI data featuring:5 Field Strengths: 0.1T, 1.5T, 3T, 5T, 7T systems.**  
  - 3 Modalities: 3D T1-Weighted (T1W), 2D/3D T2-Weighted (T2W), 2D/3D T2-FLAIR.
  - 3 Manufacturers: Siemens Healthineers, United Imaging Healthcare, Point Imaging. 

| Field Strength | Prospective T1w (paired) | Prospective T2w (paired) | Prospective T2 FLAIR (paired) | Retrospective T1w (unpaired) | Retrospective T2w (unpaired) | Retrospective T2 FLAIR (unpaired) | Scanners | Manufacturer |
|---|---:|---:|---:|---:|---:|---:|---|---|
| 0.1T | 40 (3D) | 40 (3D) | 40 (3D) | 100 (3D) | 100 (3D) | 100 (2D) | piMR-820H | Point Imaging |
| 1.5T | 40 (3D) | 40 (3D) | 40 (3D) | 104 (3D) | 221 (2D) | 221 (2D) | uMR 670 | United Imaging Healthcare |
| 3T | 40 (3D) | 40 (3D) | 40 (3D) | 143 (3D) | 144 (3D) | 143 (2D) | MAGNETOM Prisma | Siemens Healthineers |
| 5T | 40 (3D) | 40 (3D) | 40 (3D) | 122 (3D) | 44 (3D) | 103 (2D) | uMR Jupiter | United Imaging Healthcare |
| 7T | 40 (3D) | 40 (3D) | 40 (3D) | 236 (3D) | 106 (3D) | 84 (2D) | MAGNETOM Terra | Siemens Healthineers |


📊 **Dataset seperation: Training, Validation, and Testing**

**Overall Split**
- **Training set**: About 700 cases, consisting of the retrospective unpaired cohort together with paired data from 10 travelling volunteers × 5 field strengths
- **Validation set:** 50 cases, corresponding to 10 volunteers × 5 field strengths
- **Test set:** 100 cases, corresponding to 20 held-out volunteers × 5 field strengths


The precise role of each split varies across tasks, depending on whether the task is driven primarily by unpaired learning, paired target-domain supervision, or controllable conditional generation


### Task 1: Ultra-High-Field MRI Synthesis from Arbitrary Input Field Strengths
- **Training Set (N ≈ 750+)**  
  - The training set consists primarily of the retrospective unpaired cohort **(N = 650 cases)**, supplemented with paired data from **10 travelling volunteers (N = 50 cases).**
  
  This yields a total of more than 750 training cases, covering all five field strengths and multiple structural contrasts.

- **Validation Set (N = 50):**  
  - The validation set consists of **10 travelling volunteers scanned across five field strengths (10 × 5 = 50 cases).**
  
  These paired data enable controlled within-subject validation against corresponding 7T targets.

- **Test Set ((N = 100):**  
  - The test set includes **20 held-out travelling volunteers scanned across five field strengths (20 × 5 = 100 cases).**
  
  Paired 7T references are withheld and used exclusively for final evaluation.

### Task 2: Higher-Field MRI Generation from Ultra-Low-Field MRI
- **Training Set (N ≈ 750+)**  
  - The training set includes all retrospective unpaired data **(N = 650 cases)**, with emphasis on **0.1T inputs**, and paired data from **10 travelling volunteers (N = 50 cases).**

  In total, the training set contains more than 750 cases, spanning ultra-low-field to higher-field domains.

- **Validation Set (N = 50):**  
  - The validation set consists of **10 travelling volunteers (N = 50 cases)**, including paired **0.1T and higher-field scans** for within-subject evaluation.


- **Test Set ((N = 100):**  
  - The test set consists of **20 held-out travelling volunteers (N = 100 cases).**
  
  The 0.1T images serve as inputs, while higher-field references are withheld for evaluation.

### Task 3: Controllable Field-to-Field MRI Synthesis with a Unified Conditional Model
- **Training Set (N ≈ 750+)**  
  - The training set includes the full retrospective unpaired cohort **(N = 650 cases)** and paired data from **10 travelling volunteers (N = 50 cases).**

  This results in **more than 750 training cases**, covering all field strengths and supporting many-to-many translation learning.

- **Validation Set (N = 50):**  
  - The validation set consists of **10 travelling volunteers (N = 50 cases)**, enabling evaluation across all possible field-to-field translation directions.


- **Test Set ((N = 100):**  
  - The test set consists of **20 held-out travelling volunteers (N = 100 cases)**.
  
  All target-domain references are withheld and used only for final ranking.


## Pre-processing

To ensure anatomical consistency across field strengths while preserving realistic cross-field variability, we designed a unified yet cohort-specific preprocessing pipeline. The pipeline treats the **prospective travelling-volunteer paired cohort** and the **retrospective unpaired multi-field cohort** differently, reflecting their distinct roles in training and evaluation.

### 1. Spatial Registration

#### 1.1 Prospective Travelling-Volunteer Cohort (Paired Data)

For the paired dataset, we adopted a **subject-specific, 3T-anchored registration strategy** to preserve within-subject anatomical correspondence across field strengths while minimizing artificial deformation.

##### Step 1: Reference definition
For each subject, the **3T T1-weighted image** was rigidly registered to the **MNI152 (1 mm, skull-on) template**, establishing a subject-specific reference in standard space.

##### Step 2: Cross-field alignment
T1-weighted images from all other field strengths (**0.1T, 1.5T, 5T, and 7T**) were rigidly registered to the **subject-specific 3T T1 image in MNI space**, ensuring consistent global alignment across fields.

##### Step 3: Nonlinear refinement (optional)
For cases with residual misalignment, **SyN nonlinear registration (ANTs)** was applied as a refinement step to improve local anatomical correspondence.

##### Multi-contrast propagation
The estimated transformations from **T1-weighted images** were propagated to the corresponding **T2-weighted** and **T2-FLAIR** images.  
When necessary, additional **SyN-based refinement** was applied to these modalities to correct residual mismatch.

#### 1.2 Retrospective Multi-Field Cohort (Unpaired Data)

For the unpaired dataset, a **global normalization strategy** was adopted to enable large-scale model training under heterogeneous conditions:

- All modalities (**T1w, T2w, and T2-FLAIR**) were registered directly to the **MNI152 template**
- A combination of **affine** and **SyN nonlinear registration (ANTs)** was used to ensure robust inter-subject alignment

This approach provides a consistent anatomical reference space while accommodating substantial variability across scanners, protocols, and subjects.

This strategy preserves true cross-field anatomical correspondence while avoiding unnecessary nonlinear distortions that could bias downstream evaluation.

### 2. Skull Stripping

Skull stripping was performed after spatial registration using **HD-BET**, with different strategies for paired and unpaired data to balance consistency and robustness.

#### 2.1 Paired Cohort

- Skull stripping was performed only on the **3T T1-weighted images** using **HD-BET**
- The resulting brain mask was propagated to **all other field strengths and modalities** for the same subject

This design ensures:

- Consistent brain boundaries across field strengths
- Elimination of mask-induced variability in paired comparisons
- Preservation of true anatomical differences across fields

#### 2.2 Unpaired Cohort

- Skull stripping was performed independently for each modality using **HD-BET**

This approach ensures robustness across heterogeneous datasets without relying on cross-modal or cross-field correspondence.

### 3. 2D-to-3D Super-Resolution Reconstruction

For acquisitions with inherently anisotropic resolution, that is, **2D scans**, we employed a **learning-based super-resolution strategy** to reconstruct volumetric 3D data.

Specifically, a **pre-trained super-resolution network** was used to perform **slice-to-volume reconstruction**, transforming 2D inputs into isotropic 3D volumes. This approach enables recovery of through-plane structural information and improves cross-plane consistency, which is critical for subsequent cross-field analysis and synthesis tasks.

Unlike conventional interpolation-based resampling, this method leverages **data-driven priors** to enhance spatial resolution while preserving anatomical fidelity. The resulting 3D volumes are therefore more suitable for downstream processing, including:

- registration
- cross-field translation
- quantitative evaluation

### 4. Quality Control

All data underwent **expert-guided quality control**, including:

- Removal of scans with severe motion artifacts
- Exclusion of images with incomplete brain coverage
- Verification of registration accuracy across field strengths and modalities

This process ensures high data quality and reliable anatomical alignment across the dataset.

### 5. Intensity Standardization

A conservative intensity normalization strategy was applied to reduce scanner-dependent scaling differences while preserving intrinsic field-dependent contrast characteristics.

Importantly, preprocessing avoids aggressive normalization or histogram matching that could remove meaningful differences between field strengths, thereby maintaining the integrity of cross-field learning and evaluation.

### 6. Data Organization

All processed data are organized according to the **BIDS (Brain Imaging Data Structure)** standard, with consistent metadata across subjects, field strengths, and acquisition sites.



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

--------------------------------

<center>
  <img src="./public/alllogos.png" style="height:160px; margin-bottom: 20px;" />
</center>