---
title: Join the Challenge
---

# Join The Challenge!

### Join the challenge!
1. Sign up and apply to join the challenge on the Synapse platform: [Synapse Project Page](https://www.synapse.org/Synapse:syn64545434/wiki/) (`https://www.synapse.org/Synapse:syn64545434/wiki/`)
2. Submit your team information here: [WJX Form](https://www.wjx.top/vm/rkAd42X.aspx#) (`https://www.wjx.top/vm/rkAd42X.aspx#`)

### Download the data
Download mimic data here (for testing)[Data](https://www.synapse.org/Synapse:syn73710887) (`https://www.synapse.org/Synapse:syn73710887`)

Download full data here (for the challenge) [Data](https://www.synapse.org/Synapse:syn64545434/wiki/638361) (`https://www.synapse.org/Synapse:syn64545434/wiki/638361`)

### Train the model
Participants are expected to train models in their local computational environments and submit docker containers on the Synapse platform.  
A leaderboard will be maintained on the Synapse platform during the validation phase.

---

### Code Availability
We provide the code to facilitate the use of the 4D Flow data we release: [GitHub Repository](https://github.com/CmrxRecon/CMRx4DFlow2026) (`https://github.com/CmrxRecon/CMRx4DFlow2026`).

A brief description of the provided package is as follows:

- `ChallengeDataFormat/`: Provides an overview of the 4D Flow MRI dataset and a detailed description of the data format used in the challenge.
- `CMRx4DFlowMaskGeneration/`: Contains code to generate undersampling masks for training, validation, and test data.
- `CMRx4DFlowReconDemo/`: Includes demos for undersampling, Compressed Sensing reconstruction, FlowVN reconstruction, post-processing, and evaluation.
- `Submission/`: Provides instructions for submitting your final results.

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

### Publication References
You are free to use and/or refer to the CMRx4DFlow2026 challenge and datasets in your own research after the embargo period (Dec. 2026), provided that you cite the following manuscripts:

**References of the CMRx Series Dataset**
1. Wang C, Lyu J, Wang S, et al. *CMRxRecon: A publicly available k-space dataset and benchmark to advance deep learning for cardiac MRI*. Scientific Data, 2024, 11(1): 687. [DOI](https://doi.org/10.1038/s41597-024-03525-4)  
2. Wang Z, Wang F, Qin C, et al. *CMRxRecon2024: A Multimodality, Multiview k-Space Dataset Boosting Universal Machine Learning for Accelerated Cardiac MRI*, Radiology: Artificial Intelligence, 2025, 7(2): e240443. [DOI](https://doi.org/10.1148/ryai.240443)  
3. Wang Z, Huang M, Shi Z, et al. *Enabling Ultra-Fast Cardiovascular Imaging Across Heterogeneous Clinical Environments with a Generalist Foundation Model and Multimodal Database*. arXiv preprint arXiv:2512.21652, 2025. [DOI](https://doi.org/10.48550/arXiv.2512.21652)  

**CMRx Series Challenge Summary Papers**
1. Lyu J, Qin C, Wang S, et al. *The state-of-the-art in cardiac MRI reconstruction: Results of the CMRxRecon challenge in MICCAI 2023*. Medical Image Analysis, 2025, 101: 103485. [DOI](https://doi.org/10.1016/j.media.2025.103485)  
2. Wang K, Qin C, Shi Z, et al. *Extreme cardiac MRI analysis under respiratory motion: Results of the CMRxMotion Challenge*. Medical Image Analysis, 2025: 103883. [DOI](https://doi.org/10.1016/j.media.2025.103883)  
3. Wang F, Wang Z, Li Y, et al. *Towards Modality-and Sampling-Universal Learning Strategies for Accelerating Cardiovascular Imaging: Summary of the CMRxRecon2024 Challenge*. IEEE Transactions on Medical Imaging, 2025. [DOI](https://doi.org/10.1109/TMI.2025.3641610)  

**References for Previously Developed Algorithms by Organizers**
1. Wang C, Li Y, Lv J, et al. *Recommendation for Cardiac Magnetic Resonance Imaging-Based Phenotypic Study: Imaging Part*. Phenomics. 2021, 1(4): 151-170. [DOI](https://doi.org/10.1007/s43657-021-00018-x)  
2. Lyu J, Li G, Wang C, et al. *Region-focused multi-view transformer-based generative adversarial network for cardiac cine MRI reconstruction*. Medical Image Analysis, 2023: 102760. [DOI](https://doi.org/10.1016/j.media.2023.102760)  
3. Lyu J, Tian Y, Cai Q, et al. *Adaptive channel-modulated personalized federated learning for magnetic resonance image reconstruction*. Computers in Biology and Medicine, 2023, 165: 107330. [DOI](https://doi.org/10.1016/j.compbiomed.2023.107330)  
4. Wang Z, Qian C, Guo D, et al. *One-dimensional Deep Low-rank and Sparse Network for Accelerated MRI*, IEEE Transactions on Medical Imaging, 42: 79-90, 2023. [DOI](https://doi.org/10.1109/TMI.2022.3203312)  
5. Qin C, Schlemper J, Caballero J, et al. *Convolutional recurrent neural networks for dynamic MR image reconstruction*. IEEE Transactions on Medical Imaging, 2018, 38(1): 280-290. [DOI](https://doi.org/10.1109/TMI.2018.2863670)  
6. Lyu J, Wang S, Tian Y, et al. *STADNet: Spatial-Temporal Attention-Guided Dual-Path Network for cardiac cine MRI super-resolution*. Medical Image Analysis, 2024, 94: 103142. [DOI](https://doi.org/10.1016/j.media.2024.103142)  
7. Wang Z, Xiao M, Zhou Y, et al. *Deep separable spatiotemporal learning for fast dynamic cardiac MRI*. IEEE Transactions on Biomedical Engineering, 2025. [DOI](https://doi.org/10.1109/TBME.2025.3574090)  
8. Huang J, Yang L, Wang F, et al. *Enhancing global sensitivity and uncertainty quantification in medical image reconstruction with Monte Carlo arbitrary-masked mamba*. Medical Image Analysis, 2025, 99: 103334. [DOI](https://doi.org/10.1016/j.media.2024.103334)  
9. Wang Z, Yu X, Wang C, et al. *One for multiple: Physics-informed synthetic data boosts generalizable deep learning for fast MRI reconstruction*. Medical Image Analysis, 2025, 103: 103616. [DOI](https://doi.org/10.1016/j.media.2025.103616)  
10. Lyu J, Wang G, Wang Z, et al. *Diffusion-prior based implicit neural representation for arbitrary-scale cardiac cine MRI super-resolution*. Information Fusion, 2025: 103510. [DOI](https://doi.org/10.1016/j.inffus.2025.103510)  

**References of the images cited on this website**
1. [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=53001321)  
2. Sandino, Christopher M., et al. *Accelerated abdominal 4D flow MRI using 3D golden-angle cones trajectory.* Proceedings of the Proc Ann Mtg ISMRM, Honolulu, HI, USA (2017): 22-27.  
3. Rice J, et al. *In Vitro 4D Flow MRI for the Analysis of Aortic Coarctation.* Proc. Intl. Soc. Mag. Reson. Med. 30 (2022): 0088. [DOI](https://doi.org/10.58530/2022/0088)  
4. Peper, Eva S., et al. *10-fold accelerated 4D flow in the carotid arteries at high spatiotemporal resolution in 7 minutes using a novel 15 channel coil.* Proceedings of the 24th Annual Meeting of ISMRM, Singapore. 2016.  
