---
title: FAQ
---

# FAQ

### 1. Is it possible to download the challenge dataset without participating in the challenge?

Yes, under controlled access.

Researchers who do not intend to participate in the challenge but wish to use the dataset must submit a research proposal to the MRIxFields Consortium (mrixfields@outlook.com) for review. Access to the dataset will be granted only upon approval by the MRIxFields Consortium.

All approved users are required to comply with the data usage agreement. In particular:

- Results derived from the dataset may only be published no earlier than **three months after the official end of the challenge**
- The **challenge paper** must be properly cited
- The **dataset source** must be explicitly acknowledged in any publication

In addition, prior to manuscript submission, users must **notify the MRIxFields Consortium** (mrixfields@outlook.com), providing:
- A description of how the dataset was used in the study
- A copy of the manuscript intended for submission

Furthermore, all resulting publications must include <a href="/2026/consortium_list.docx" target="_blank" rel="noopener noreferrer"><strong>“MRIxFields Consortium”</strong></a> <span style="opacity:0.75;">[Word member list]</span> as a group author in the author list (typically listed at the end of the author list).

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

1. All individuals who wish to participate in this challenge are required to register using their real name, affiliation details (including department, university /institute/company name in full, country), and affiliation E-mails. Incomplete and repetitive registrations will be removed without any prior notice. Each team is permitted to have a maximum of six members.

2.  During the validation and training phase, all participants must submit a complete solution to this challenge, which includes a Docker image and a qualified methodology paper (of at least 8 pages, in LNCS format).

3. All participants must agree that the short papers they submit can be made publicly available on the challenge website, and that organizers can use information provided by participants, including scores, predicted labels, and papers.

4. Participants are not allowed to register multiple teams or accounts.The MRIxFields Organizers reserve the right to disqualify such participants.

5. Redistribution or transfer of data or data links is prohibited. Participants must use the data solely for their own purposes.

6. Participants should develop fully automated methods based solely on the training set. To ensure the fairness of this challenge, you are only allowed to use the datasets provided by MRIxFields2026. Data augmentation based on the training dataset is allowed. No manual interventions (such as manual annotation of cases) are allowed.
