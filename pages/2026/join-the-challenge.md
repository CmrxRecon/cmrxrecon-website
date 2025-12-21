## Join the challenge
1. Sign up and apply to join the challenge on the website.
2. Submit your team information.

## Download the data
Download data here.

## Train the model
Participants are expected to train models in their local computational environments and to submit docker containers on Synapse platform. A leaderboard will be maintained on the Synapse platform during the validation phase.

## Code availability
We provide the code to facilitate the use of the data we release at .
A brief description of the provided package is as follows:

- CMRxReconDemo: contains parallel imaging reconstruction code
- ChallengeDataFormat: explains the challenge data and the rules for data submission
- CMRxReconMaskGeneration: contains code for varied undersampling mask generation in different tasks
- Evaluation: contains image quality evaluation code for validation and testing
- Submission: contains the structure for challenge submission

## Evaluation platform
Validation of the received docker on unseen test set will be performed on a cloud server with a configuration as follows:

- OS: Linux (RockyOS 9)
- CPU: 2.0GHz, 112 cores
- RAM: 64 GB
- GPU: A6000 (48 GB VRAM, single GPU)
- GPU Driver Version: 550
- CUDA Version: 12.4
- Time Limitation: 40 hours/team for each task.

## Publication references

You are free to use and/or refer to the CMRxRecon2025 challenge and datasets in your own research after the embargo period (Dec. 2025), provided that you cite the following manuscripts:

### Reference of the CMR imaging acquisition protocol

1. Wang C, Lyu J, Wang S, et al. CMRxRecon: A publicly available k-space dataset and benchmark to advance deep learning for cardiac MRI. *Scientific Data*. 2024;11(1):687.  
2. Wang Z, Wang F, Qin C, et al. CMRxRecon2024: A Multimodality, Multiview k-Space Dataset Boosting Universal Machine Learning for Accelerated Cardiac MRI. *Radiology: Artificial Intelligence*. 2025;7(2):e240443. doi:[10.1148/ryai.240443](https://pubs.rsna.org/doi/10.1148/ryai.240443)  
3. Lyu J, Qin C, Wang S, et al. The state-of-the-art in cardiac MRI reconstruction: Results of the CMRxRecon challenge in MICCAI 2023. *Medical Image Analysis*. 2025;101:103485. doi:[10.1016/j.media.2025.103485](https://doi.org/10.1016/j.media.2025.103485)  
4. Wang C, Li Y, Lv J, et al. Recommendation for Cardiac Magnetic Resonance Imaging-Based Phenotypic Study: Imaging Part. *Phenomics*. 2021;1(4):151-170.  
5. Wang S, Qin C, Wang C, et al. The Extreme Cardiac MRI Analysis Challenge under Respiratory Motion (CMRxMotion). arXiv preprint [arXiv:2210.06385](https://arxiv.org/abs/2210.06385). 2022.

### Reference for previously developed reconstruction algorithms

1. Wang C, Jang J, Neisius U, et al. Black blood myocardial T2 mapping. *Magnetic Resonance in Medicine*. 2019;81(1):153-166.  
2. Lyu J, Wang S, Tian Y, et al. STADNet: Spatial-Temporal Attention-Guided Dual-Path Network for cardiac cine MRI super-resolution. *Medical Image Analysis*. 2024;94:103142.  
3. Lyu J, Li G, Wang C, et al. Region-focused multi-view transformer-based generative adversarial network for cardiac cine MRI reconstruction. *Medical Image Analysis*. 2023;102760.  
4. Lyu J, Tian Y, Cai Q, Wang C, Qin J. Adaptive channel-modulated personalized federated learning for magnetic resonance image reconstruction. *Computers in Biology and Medicine*. 2023;165:107330.  
5. Qin C, Schlemper J, Caballero J, et al. Convolutional recurrent neural networks for dynamic MR image reconstruction. *IEEE Transactions on Medical Imaging*. 2018;38(1):280-290.  
6. Qin C, Duan J, Hammernik K, et al. Complementary time-frequency domain networks for dynamic parallel MR image reconstruction. *Magnetic Resonance in Medicine*. 2021;86(6):3274-3291.  
7. Lyu J, Tian Y, Cai Q, et al. Adaptive channel-modulated personalized federated learning for magnetic resonance image reconstruction. *Computers in Biology and Medicine*. 2023;165:107330.  
8. Lyu J, Tong X, Wang C. Parallel Imaging With a Combination of SENSE and Generative Adversarial Networks (GAN). *Quantitative Imaging in Medicine and Surgery*. 2020;10(12):2260-2273.  
9. Lyu J, Sui B, Wang C, et al. DuDoCAF: Dual-Domain Cross-Attention Fusion with Recurrent Transformer for Fast Multi-contrast MR Imaging. In: *International Conference on Medical Image Computing and Computer-Assisted Intervention*. Springer; 2022:474-484.
10. Ouyang C, Schlemper K, et al. Generalizing Deep Learning MRI Reconstruction across Different Domains, arXiv preprint arXiv: 1902.10815, 2019.
11. Wang Z, Qian C, Guo D, Sun H, Li R, Zhao B, Qu X, One-dimensional Deep Low-rank and Sparse Network for Accelerated MRI, IEEE Transactions on Medical Imaging, 42: 79-90, 2023. https://doi.org/10.1109/TMI.2022.3203312
12. Wang Z, et al., Deep Separable Spatiotemporal Learning for Fast Dynamic Cardiac MRI, arXiv preprint arXiv:2402.15939, 2024. https://arxiv.org/abs/2402.15939