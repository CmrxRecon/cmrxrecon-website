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
<center>
  <img src="/data/table1.png" 
       alt="CMRxRecon2026 Data Details" 
       width="90%" 
       style="max-width: 600px; height: auto; margin-bottom: 20px;">
</center>

# Data sources

CMRxRecon2026 provides an extensive multi-center, multi-vendor k-space 4D Flow MRI dataset.

💾 **Data Overview: Scale & Diversity**

- **Total Volume:**  
  - Over 400 cases (volunteers and patients), including more than 300 aortic 4D Flow MRI cases.

- **Multi-channel k-space data from:**  
  - 10+ medical centers  
  - 4+ vendors: GE, Philips, Siemens, United Imaging  
  - 3 field strengths: 1.5T, 3T, 5T  
  - 6+ anatomical regions: Aorta, heart, brain, liver, kidney, carotid arteries

📊 **Acquisition Parameters**

- **Field of View (FOV):** 200 × 200 × 40 mm³ to 450 × 450 × 90 mm³  
- **Spatial Resolution:** 0.9 to 3.0 mm isotropic/anisotropic voxels  
- **Temporal Resolution:** 23 to 120 ms across cardiac phases  
- **Velocity Encoding (VENC):**  
  - Liver/Kidney/Brain: 40–100 cm/s  
  - Aorta/Carotid: 100–200 cm/s  
- **Sequence Type:** ECG-gated 3D Cartesian 4D Flow MRI  
  - Protocols include both retrospective gating and prospective gating

📊 **Anatomical Views**

- Aortic view  
- Oblique sagittal view  
- Sagittal view  
- Coronal view  
- Axial view

📊 **Diseases**

- Aortic stenosis  
- Pulmonary atresia  
- Tricuspid regurgitation  
- Ventricular septal defect  
- Pulmonary hypertension  
- Chronic kidney disease  
- Acute kidney injury  
- ...

📊 **Dataset Separation: Training, Validation, and Testing**  
The dataset is carefully divided to support a robust development and evaluation cycle:

### Regular Task 1 & 2
- **Training Set (138 Cases):**  
  - Fully sampled raw k-space data provided for each case. Serves as the "ground truth" input for deep learning models, allowing training from undersampled k-space to high-fidelity 4D Flow images.
  
- **Validation Set (32 Cases):**  
  - Undersampled raw k-space data (simulated with acceleration factors from 10x to 50x) derived from fully sampled data, without corresponding ground truth.
  
- **Test Set (43 Cases):**  
  - Final undisclosed dataset for challenge ranking. Consists of undersampled raw k-space data (with varying acceleration factors) and fully sampled references.

### Special Task 1: Generalizability across new sites and diseases
- **Validation Set (40 Cases):**  
  - Undersampled raw k-space data (simulated with acceleration factors from 10x to 50x) acquired from different centers than the training set and from patients with different diseases. No corresponding ground truth is provided.
  
- **Test Set (60 Cases):**  
  - Final undisclosed dataset for special task ranking. Undersampled raw k-space data (with acceleration factors from 10x to 50x) from different centers and patients with different diseases; fully sampled references are withheld.

### Special Task 2: Generalizability across different anatomical regions
- **Validation Set (40 Cases):**  
  - Undersampled raw k-space data (simulated with acceleration factors from 10x to 50x) from multiple anatomical regions:  
    - Cerebrovascular (10 cases)  
    - Portal Vein (10 cases)  
    - Renal Artery (10 cases)  
    - Carotid (10 cases)  
  - No corresponding ground truth is provided.
  
- **Test Set (80 Cases):**  
  - Final undisclosed dataset for special task ranking. Undersampled raw k-space data (with acceleration factors from 10x to 50x) from the same four anatomical regions:  
    - Cerebrovascular (20 cases)  
    - Portal Vein (20 cases)  
    - Renal Artery (20 cases)  
    - Carotid (20 cases)  
  - Fully sampled references are withheld for evaluation.

---

## Pre-processing

The raw k-space data exported from the scanner will be processed and transformed to '.mat' format using the script provided by each vendor. A readme file will be provided to describe the content and usage of the data.  

Details of data description and different undersampling masks:

| Filename                     | Dimension                 | Description                                                      |
|-------------------------------|---------------------------|------------------------------------------------------------------|
| `kdata_full.mat`             | (Nv, Nt, Nc, SPE, PE, FE)| Retrospectively fully sampled multi-channel k-space data        |
| `segmask.mat`                | (SPE, PE, FE)            | Segmentation mask for the region of interest                    |
| `coilmap.mat`                | (Nc, SPE, PE, FE)        | Coil sensitivity maps                                            |
| `usmask_ktGaussian{R}.mat`  | (1, Nt, 1, SPE, PE, 1)   | Gaussian k-t undersampling mask for $R\times$ acceleration      |
| `params.csv`                 | N/A                       | Acquisition and reconstruction metadata                          |


> **Note:** The Cartesian trajectory is used for k-space data sampling.  
> The readout direction (FE) is fully sampled, and undersampling occurs in the two phase-encoding directions (PE and SPE).  
> `#` represents varied acceleration factors (10x, 20x, 30x, 40x, 50x). ACS lines are not included for calculations.  
> If the data has no temporal dimension, the corresponding mask dimension becomes `(PE, SPE)`.

**Dimension Reference:** Both fully sampled and undersampled data share the standardized dimension order `(Nv, Nt, Nc, SPE, PE, FE)`

**Dimension definitions:**

- **FE (Frequency Encoding):** Image-space X axis (readout/frequency-encoding direction) sample count; affects FOV and resolution along X.
- **PE (Phase Encoding):** Image-space Y axis (phase-encoding direction) sample/step count; affects FOV and resolution along Y.
- **SPE (Slice Phase Encoding):** Image-space Z axis (slice phase-encoding / second phase-encoding direction); affects volumetric coverage and resolution along Z.
- **Nc (number of coils):** Number of receiver coil channels; each channel provides independent complex-valued measurements for SNR improvement and parallel imaging.
- **Nt (number of cardiac phases):** Number of time frames in the cardiac cycle; each frame corresponds to a specific cardiac phase.
- **Nv (number of velocity encodings):** Number of velocity-encoding conditions; used to compute velocity-induced phase and estimate velocity vectors.

Further background on 4D flow MRI:

- [4D Flow MRI Overview](https://mriquestions.com/4d-flow-imaging.html)  
- [CMRxRecon 4D Flow Data Overview](https://github.com/CmrxRecon/CMRx4DFlow2026/blob/main/ChallengeDataFormat/4DFlowDataOverview.md)

---


### Data Directory Structure

```text
ChallengeData
├─ Task
│  ├─ TrainSet
│  │  └─ Aorta
│  │     └─ Center001
│  │        └─ UIH_30T_uMR890
│  │           └─ P007
│  │              ├─ kdata_full.mat
│  │              ├─ coilmap.mat
│  │              ├─ segmask.mat
│  │              └─ params.csv
│  └─ ValidationSet
│     └─ Aorta
│        └─ Center002
│           └─ Siemens_30T_VIDA
│              └─ P007
│                 ├─ kdata_ktGaussian10.mat
│                 ├─ usmask_ktGaussian10.mat
│                 ├─ coilmap.mat
│                 ├─ segmask.mat
│                 └─ params.csv