---
title: Join the Challenge
---

# Join The Challenge!

## Join the challenge!
1. Sign up and apply to join the challenge on the [Synapse website](https://www.synapse.org/Synapse:syn72060672/wiki/636549).
2. Submit your team information [here](https://www.wjx.top/vm/Yf5nmWW.aspx#).
  - > After clicking the Submit button, the password for extracting the data will be displayed upon submission, as shown in the figure on the right. Please save it carefully. 

### Download the data
- **Mimic data (for testing):** [Download here](https://www.synapse.org/Synapse:syn74313976.draft/datasets/)
- **Full challenge data:** [Download here](https://www.synapse.org/Synapse:syn72060672/wiki/639758)

### Train the model
Participants are expected to train models in their local computational environments and submit docker containers on the Synapse platform.  
A leaderboard will be maintained on the Synapse platform during the validation phase.

---

## Code Availability
We provide the code to facilitate participation in the **MRIxFields2026** challenge at [GitHub](https://github.com/mrixfields).

A brief description of the provided package is as follows:

- **Baseline/**: Contains baseline models (**CUT, CycleGAN, and StarGAN v2**), training and inference scripts, and configuration files for all three tasks.
- **Tutorial/**: Jupyter notebooks for data exploration, preprocessing pipeline demonstration, and baseline training walkthrough.
- **Evaluation/**: Standalone evaluation code for computing all five metrics (**nRMSE, SSIM, LPIPS, Dice, and Volume Consistency**) as well as **SynthSeg**-based brain segmentation.
- **Submission/**: Docker submission template, output format specification, and hardware requirements.

---

## Evaluation platform
Validation of the received docker will be performed on a cloud server with the following configuration:  

- **OS:** Linux (RockyOS 9)  
- **CPU:** 2.0GHz, 112 cores  
- **RAM:** 64 GB  
- **GPU:** A6000 (48 GB VRAM, single GPU)  
- **GPU Driver Version:** 575 
- **CUDA Version:** 12.9  
- **Time Limitation:** 1 hours/team for each task  

---

## Publication References
You are free to use and/or refer to the MRIxFields2026 challenge and datasets in your own research after the embargo period (Dec. 2026), provided that you cite the following manuscripts:

**Reference from the organizers**
1.	Dai, Y. et al. Leveraging Deep Learning to Enhance MRI for Brain Disorders. Preprint at: https://doi.org/10.1101/2025.02.10.25321126 (2025).
2. Dai, Y., Wang, C. & Wang, H. Deep compressed sensing MRI via a gradient-enhanced fusion model. Med Phys 50, 1390–1405 (2023).
3.	Wang, F. et al. Multiple B-Value Model-Based Residual Network (MORN) for Accelerated High-Resolution Diffusion-Weighted Imaging. IEEE J Biomed Health Inform 26, 4575–4586 (2022).
4.	Wang, C. et al. Protocol for Brain Magnetic Resonance Imaging and Extraction of Imaging-Derived Phenotypes from the China Phenobank Project. Phenomics 3, 642–656 (2023).
5.	Tang, W. et al. Aleatoric-Uncertainty-Aware Maximum Intensity Projection-Based GAN for 7T-Like Generation From 3T TOF-MRA. IEEE J Biomed Health Inform 29, 6664–6677 (2025).
6.	Lee, P. K., Qiu, Y., Wang, C. & Zhang, Z. Multiband Fast Spin Echo on portable low-field systems. Magn Reson Med 95, 188–203 (2026).
7.	Lee, P. K., Qiu, Y., Chen, S., Wang, C. & Zhang, Z. Diffusion Weighted Fast Spin Echo With RF-Encoded Slabs for Portable Low-Field MRI Systems. Magn Reson Med (2026). https://doi.org/10.1002/mrm.70292
8.	Qiu, Y., Dai, K., Zhong, S. et al. Spatiotemporal encoding MRI in a portable low-field system. Magn Reson Med 92, 1011–1021 (2024).
9.	Wang, Y., Xiong, H., Sun, K., Bai, S., Dai, L., Ding, Z., Liu, J., Wang, Q., Liu, Q. & Shen, D. Towards general text-guided multimodal brain MRI synthesis for diagnosis and medical image analysis. Cell Rep Med (2025).

**References from others**
1. Obusez, E. C. et al. 7T MR of intracranial pathology: Preliminary observations and comparisons to 3T and 1.5T. Neuroimage 168, 459–476 (2018).
2. Maranzano, J. et al. Comparison of Multiple Sclerosis Cortical Lesion Types Detected by Multicontrast 3T and 7T MRI. AJNR Am J Neuroradiol 40, 1162–1169 (2019).
3. Cosottini, M. et al. Comparison of 3T and 7T susceptibility-weighted angiography of the substantia nigra in diagnosing Parkinson disease. AJNR Am J Neuroradiol 36, 461–466 (2015).
4. Li, S. et al. Synthetizing SWI from 3T to 7T by generative diffusion network for deep medullary veins
visualization. Neuroimage 320, 121475 (2025).
5. Lv, J. et al. Transfer learning enhanced generative adversarial networks for multi-channel MRI reconstruction. Comput Biol Med 134, 104504 (2021).
6. Qu, L., Zhang, Y., Wang, S., Yap, P.-T. & Shen, D. Synthesized 7T MRI from 3T MRI via deep learning in spatial
and wavelet domains. Med Image Anal 62, 101663 (2020).
7. Duan, C. et al. Synthesized 7T MPRAGE From 3T MPRAGE Using Generative Adversarial Network and Validation in Clinical Brain Imaging: A Feasibility Study. J Magn Reson Imaging 59, 1620–1629 (2024).
8. Eidex, Z. et al. High-resolution 3T to 7T ADC map synthesis with a hybrid CNN-transformer model. Med Phys51, 4380–4388 (2024).
9. Bahrami, K., Rekik, I., Shi, F. & Shen, D. Joint Reconstruction and Segmentation of 7T-like MR Images from 3T MRI Based on Cascaded Convolutional Neural Networks. Med Image Comput Comput Assist Interv 10433, 764–772 (2017).
10. Sun, Y., Wang, L., Li, G., Lin, W. & Wang, L. A foundation model for enhancing magnetic resonance images and
downstream segmentation, registration and diagnostic tasks. Nat Biomed Eng 9, 521–538 (2025).
11. Billot, B. et al. SynthSeg: Segmentation of brain MRI scans of any contrast and resolution without retraining[J]. Medical image analysis, 86: 102789(2023).


<div style="margin: 24px 0;">
  <img
    src="/alllogos.png"
    alt="Consortium logos"
    style="display: block; max-width: 60%; height: auto; margin: 0 auto;"
  />
</div>