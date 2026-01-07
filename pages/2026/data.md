---
title: Data
---

<!-- 开头图片 -->
<center>
  <img src="/data/e6f8ddff-f9c6-4942-9b71-ae13f6c2edf8.png" 
       alt="CMRxRecon2026 Data Overview" 
       width="90%" 
       style="max-width: 600px; height: auto; margin-bottom: 20px;">
</center>

# Data sources

The CMRxRecon2026 challenge is proud to offer participants access to an unparalleled and uniquely valuable dataset: one of the largest raw k-space 4D Flow MRI datasets of the human aorta, sourced from real-world, multi-center, multi-vendor clinical environments worldwide. This robust and diverse dataset is designed to provide a realistic and challenging foundation for developing cutting-edge reconstruction algorithms.

💾 **Data Overview:**  

- **Unprecedented Scale & Diversity:**
  - Total Volume: The dataset comprises 200 real patient cases of aortic 4D Flow MRI, xxx, xxx, ........
  - Multi-channel k-space data from:
    - 10+ Medical centers  
    - 4+ Vendors from GE, Philips, Siemens, United Imaging  
    - 3 Field strengths  
    - 6+ Regions  
- **Acquisition Parameters:**
  - Field of View (FOV): Approximately 270×270×60−90 mm³  
  - Spatial Resolution: 2-3 mm isotropic voxels  
  - Temporal Resolution: Ranges from 29 to 35 ms across cardiac phases  
  - Velocity Encoding (VENC): Set between 150-300 cm/s  
  - Sequence Type: Retrospective ECG-gated 4D flow MRI using GRAPPA (R=2)  
- **Diseases Covered:**
  - Aortic stenosis  
  - Aortic regurgitation  
  - Aortic aneurysm  
  - Coarctation of the aorta  
  - Aortic dissection  
  - ...  

📊 **Dataset Separation: Training, Validation, and Testing**

The dataset is carefully divided to support a robust development and evaluation cycle:

- **Training Set (130 Cases):**  
  - Fully sampled raw k-space data provided for each case. Serves as "ground truth" input for deep learning models, allowing training from undersampled to high-fidelity 4D Flow images.  

- **Validation Set (30 Cases):**  
  - Undersampled raw k-space data (simulated with acceleration factors from 10x to 50x) derived from fully sampled data, without corresponding ground truth.  

- **Test Set (40 Cases):**  
  - Final, undisclosed dataset for official challenge ranking. Consists of undersampled raw k-space data with varying acceleration factors.  

---

## Pre-processing

The raw k-space data exported from the scanner will be processed and transformed to `.h5` format using the script provided by each vendor. A readme file will be provided to describe the content and usage of the data.  

Details of data description and different undersampling masks:

| Filename | Dimension | Description |
| -------- | -------- | ----------- |
| gt_imdata.mat | (nx, ny, nz, nt, vencs) | Reference image from CS reconstruction of densely-sampled data |
| rawdata_full.mat | (nx, ny, nz, nt, nc, vencs) | Prospectively / retrospectively fully sampled multi-coil k-space data |
| segmentation_full.mat | (nx, ny, nz, nt) | Time-resolved segmentation of aorta, cerebrovasculature and xxxx |
| coilmap_full.mat | (nx, ny, nz, nc) | Coil sensitivity maps estimated using BART |
| retro_mask_#.mat | (ny, nz, nt, vencs) | Mask for retrospective uniform undersampling of different acceleration factors, central 20 lines (ny) as ACS |
| matrix.mat | | Files containing scanner parameters (e.g., field strength, ....) |

> **Note:**  
> - Undersampled and fully sampled data share the same dimensions.  
> - nx, ny, nz: matrix size in the x, y, and z axes (k-space)  
> - nt: cardiac phase number (temporal frame)  
> - nc: coil array number  
> - nv: velocity encoding number (typically 4: one flow-compensated reference + three directional encodings)  
> - Cartesian trajectory is used; readout direction fully sampled, undersampling in ny and nz directions.  
> - `#` represents varied acceleration factors (10x, 30x, 50x); ACS not included for calculations.  
> - If data has no temporal dimension, mask dimension becomes (ny, nz).  

---

### 1) Data in folder `FullSample`: rawdata_full.mat

**Variable name:** `kspace` for fully sampled k-space  
- Data type: complex k-space data with dimensions (nx, ny, nz, nt, nc, vencs)  
- nx: matrix size in x-axis (phase-encoding direction)  
- ny: matrix size in y-axis (phase-encoding direction)  
- nz: matrix size in z-axis (readout direction)  
- nt: temporal frame  
- nc: coil array number  
- vencs: velocity encoding number