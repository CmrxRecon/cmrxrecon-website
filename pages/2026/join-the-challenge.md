---
title: Join the Challenge
---

# Join The Challenge!

## Join the challenge!
1. Sign up and apply to join the challenge on the Synapse [website](https://www.synapse.org/#!Synapse:syn59814210/wiki/628454).  
2. Submit your team information [here](https://www.wjx.top/vm/trF8ZHH.aspx#).  

---

## Download the data
Download data [here](https://www.synapse.org/Synapse:syn59814210/wiki/631023).  

---

## Train the model
Participants are expected to train models in their local computational environments and to submit docker containers on Synapse platform. A leaderboard will be maintained on the Synapse platform during the validation phase.

---

## Code availability
We provide the code to facilitate the use of the 4D flow data we release at [GitHub](https://github.com/CmrxRecon/CMRxRecon).  
A brief description of the provided package is as follows:  
- **CMRxReconDemo:** contains parallel imaging reconstruction code  
- **ChallengeDataFormat:** explains the challenge data and the rules for data submission  
- **CMRxReconMaskGeneration:** contains code for varied undersampling mask generation in different tasks  
- **Evaluation:** contains image quality evaluation code for validation and testing  
- **Submission:** contains the structure for challenge submission  

---

## Evaluation platform
Validation of the received docker will be performed on a cloud server with the following configuration:  

- **OS:** Linux (RockyOS 9)  
- **CPU:** 2.0GHz, 112 cores  
- **RAM:** 64 GB  
- **GPU:** A6000 (48 GB VRAM, single GPU)  
- **GPU Driver Version:** 550  
- **CUDA Version:** 12.4  
- **Time Limitation:** 20 hours/team for each task  

---

## Publication references
You are free to use and/or refer to the CMRxRecon2026 challenge and datasets in your own research after the embargo period (Dec. 2026), provided that you cite the following manuscripts:

### Reference of the CMR imaging acquisition protocol:
1. Wang C, Lyu J, Wang S, et al. *CMRxRecon: A publicly available k-space dataset and benchmark to advance deep learning for cardiac MRI*. Scientific Data, 2024, 11(1): 687.  
2. Wang C, Lyu J, Wang S, et al. *CMRxRecon: An open cardiac MRI dataset for the competition of accelerated image reconstruction*. arXiv preprint arXiv:2309.10836, 2023.  
3. Wang Z, Wang F, Qin C, et al. *CMRxRecon2024: A Multi-Modality, Multi-View K-Space Dataset Boosting Universal Machine Learning for Accelerated Cardiac MRI*. arXiv preprint arXiv:2406.19043, 2024.  
4. Lyu J, Qin C, Wang S, et al. *The state-of-the-art in Cardiac MRI Reconstruction: Results of the CMRxRecon Challenge in MICCAI 2023*. arXiv preprint arXiv:2404.01082, 2023.  
5. Wang C, Li Y, Lv J, et al. *Recommendation for Cardiac Magnetic Resonance Imaging-Based Phenotypic Study: Imaging Part*. Phenomics. 2021, 1(4): 151-170.  
6. Wang S, Qin C, Wang C, et al. *The Extreme Cardiac MRI Analysis Challenge under Respiratory Motion (CMRxMotion)*. arXiv preprint arXiv:2210.06385, 2022.  

### Reference for previously developed reconstruction algorithms:
1. Wang C, Jang J, Neisius U, et al. *Black blood myocardial T2 mapping*. Magnetic Resonance in Medicine. 2019, 81(1): 153-166.  
2. Lyu J, Wang S, Tian Y, Zou J, Dong S, Wang C, Aviles-Rivero AI, Qin J. *STADNet: Spatial-Temporal Attention-Guided Dual-Path Network for cardiac cine MRI super-resolution*. Medical Image Analysis. 2024;94:103142.  
3. Lyu J, Li G, Wang C, et al. *Region-focused multi-view transformer-based generative adversarial network for cardiac cine MRI reconstruction*. Medical Image Analysis. 2023: 102760.  
4. Lyu J, Tian Y, Cai Q, Wang C*, Qin J. *Adaptive channel-modulated personalized federated learning for magnetic resonance image reconstruction*. Computers in Biology and Medicine. 2023, 165: 107330.  
5. Qin C, Schlemper J, Caballero J, et al. *Convolutional recurrent neural networks for dynamic MR image reconstruction*. IEEE Transactions on Medical Imaging. 2018, 38(1): 280-290.  
6. Qin C, Duan J, Hammernik K, et al. *Complementary time-frequency domain networks for dynamic parallel MR image reconstruction*. Magnetic Resonance in Medicine. 2021, 86(6): 3274-3291.  
7. Lyu J, Tian Y, Cai Q, et al. *Adaptive channel-modulated personalized federated learning for magnetic resonance*