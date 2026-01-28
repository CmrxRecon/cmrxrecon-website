---
title: FAQ
---

# FAQ



**14. How to apply the undersampling mask to fully-sampled training data?**  
To replicate the undersampled data for validation and test, please refer to matlab version:  
[Matlab Undersample Demo](https://github.com/CmrxRecon/CMRxRecon2024/tree/main/CMRxReconDemo/undersampleDemo)  
Or the python version:  
[Python ShowCase Notebook](https://github.com/CmrxRecon/CMRxRecon2024/blob/main/ReconTutorial/ShowCase.ipynb)

**13. How can we perform model computation using the sensitivity map?**  
Our original data does not provide a sensitivity map, but the central 16 lines (ny) or the 16×16 of our k-space are fully sampled and can be used as calibration lines for GRAPPA reconstruction. Alternatively, you can use the "demo_myESP_SENSEmap.m" code provided at [GitHub link](https://github.com/CmrxRecon/CMRxRecon2024/tree/main/CMRxReconDemo/csmDemo)

**12. Should we compute the evaluations after cropping the images? Specifically, should we evaluate the entire image or only the cardiac region?**  
Please follow the Submission example we provided and save the results in `.mat` format, with the data dimensions consistent with the original data (without the coil dimensions). During the validation phase, to reduce file size, please use the `run4Ranking.m` code provided to crop the image data and save it with the same directory structure. All file names should match the original data names. For more details, please refer to [Submission repo](https://github.com/CmrxRecon/CMRxRecon2024/tree/main/Submission)

**11. What should we do if the k-space sizes are not uniform?**  
We recommend zero-padding the k-space data to a consistent size for reconstruction, and then cropping them back to its original dimensions.

**10. Does the validation submission affect the final ranking?**  
No, the validation submission does not affect the final ranking.

**9. How should we aggregate evaluations for different acceleration factors and sampling patterns?**  
For all the tasks regarding the sampling patterns and accelerations, all paired data are assigned equal weight when calculating the final ranking metrics.

**8. Do we need to upload the training code?**  
We do not require teams to upload the training code. Only the inference code's Docker image is needed for participation.

**7. Can we preprocess the data?**  
We do not restrict any data preprocessing, and we only evaluate the final reconstruction effect. However, the total running time for all data in each task cannot exceed 20 hours.

**6. Is motion correction between different frames necessary?**  
No, it can be done but is not mandatory.

**5. Is it necessary to introduce data fidelity terms?**  
It can be done but is not mandatory. We only evaluate the test results and do not have specific requirements for the process.

**4. Is it mandatory to perform calculations in the complex domain?**  
It is not mandatory.

**3. What is the maximum number of team members allowed?**  
Each team can consist of up to 6 people. The authors in the submitted paper should be the same as the team member list.

**2. Can other datasets or pre-trained models be used to develop the reconstruction algorithms?**  
Yes. But to ensure the fairness of this challenge, you are only allowed to use the datasets provided by CMRxRecon2023,CMRxRecon2024, CMRxRecon2025 and CMRxRecon2026. Data augmentation based on the training dataset is allowed.

**1. Is it possible to download the challenge dataset without participating in the challenge?**  
Yes. However, all results generated based on this dataset can only be published three months after the end of the challenge. According to our agreement, it is required to cite our provided article and acknowledge the data source when referencing the results.

# Rules

1. All individuals who wish to participate in this challenge are required to register using their real name, affiliation details (including department, university/institute/company name in full, country), and affiliation E-mails. Incomplete and repetitive registrations will be removed without any prior notice. Each team is permitted to have a maximum of six members.

2. During the validation and training phase, all participants must submit a complete solution to this challenge, which includes a Docker image and a qualified methodology paper (of at least 8 pages, in LNCS format).

3. All participants must agree that the short papers they submit can be made publicly available on the challenge website, and that organizers can use information provided by participants, including scores, predicted labels, and papers.

4. Participants are not allowed to register multiple teams or accounts. The CMRxRecon Organizers reserve the right to disqualify such participants.

5. Redistribution or transfer of data or data links is prohibited. Participants must use the data solely for their own purposes.

6. Participants should develop fully automated methods based solely on the training set. To ensure the fairness of this challenge, you are only allowed to use the datasets provided by CMRxRecon2023, CMRxRecon2024, CMRxRecon2025 and CMRxRecon2026. Data augmentation based on the training dataset is allowed. No manual interventions (such as manual annotation of cases) are allowed.