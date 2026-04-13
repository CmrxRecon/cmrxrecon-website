---
title: FAQ
---

# FAQ

### 1. Is it possible to download the challenge dataset without participating in the challenge?

Yes, under controlled access, with additional restrictions to ensure the fairness of the MICCAI challenge.

To prevent potential leakage of paired data to participating teams and to preserve the integrity and fairness of the challenge evaluation, priority is given to the MICCAI challenge process. Therefore:

- Access requests from non-participating researchers will only be considered after the official release of the challenge results.

Researchers who do not intend to participate in the challenge but wish to use the dataset must submit a research proposal to the **MRIxFields Consortium** ([mrixfields@outlook.com](mailto:mrixfields@outlook.com)) for review. Access will be granted only upon approval by the Consortium.

All approved users are required to comply with the data usage agreement. In particular:

- Results derived from the dataset may only be published no earlier than **three months after the official end of the challenge**
- The **challenge paper** must be properly cited
- The **dataset source** must be explicitly acknowledged in any publication

In addition, prior to manuscript submission, users must notify the **MRIxFields Consortium** ([mrixfields@outlook.com](mailto:mrixfields@outlook.com)), providing:

- A description of how the dataset was used in the study
- A copy of the manuscript intended for submission

Furthermore, all resulting publications must include **“MRIxFields Consortium”** as a group author in the author list, typically listed at the end of the author list.

For the full consortium author list, please download the document <a href="./consortium_list.docx" download>here</a>.

### 2. Can other datasets or pre-trained models be used to develop the reconstruction algorithms?

Yes. Any publicly available datasets may be used for training. However, participants are not allowed to use their own private data in order to ensure the fairness of this challenge. Data augmentation based on the training dataset is allowed.

### 3. What is the maximum number of team members allowed?

Each team can consist of up to **6 people**.

### 4. Can we preprocess the data?

We do not restrict data preprocessing, and we only evaluate the final generation performance. However, the total running time for all data in each task cannot exceed **1 hour**.

### 5. Do we need to upload the training code?

We do not require teams to upload the training code. Only the **Docker image for the inference code** is required for participation.

### 6. Does the validation submission affect the final ranking?

No, the validation submission does **not** affect the final ranking.

### 7. How many submissions are allowed?

During the validation phase, each team is allowed to submit up to three times per day per task. In the test phase, each team can submit up to five Docker containers per task in total. The final ranking will be based on the results of the last submission.

### 8. Can we participate in only one task?

Yes, participants are free to join any single task. Of course, they are also welcome to participate in multiple or all tasks. Each task will be evaluated, ranked, and awarded independently.















# Rules

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



<div style="margin: 24px 0;">
  <img
    src="/alllogos.png"
    alt="Consortium logos"
    style="display: block; max-width: 60%; height: auto; margin: 0 auto;"
  />
</div>