---
layout: home
pageClass: narrow-page


hero:
  name: "MRIxFields2026"
  text: "Official website for the MICCAI MRIxFields 2026 challenge"
  tagline: |
    A Benchmark for Cross-Field MRI Translation and Harmonization

features:
  - title: Unified Generative Modeling 
    details: A structured valuation protocol defining three complementary tasks. 7T-equivalent synthesis, ultra-low-field enhancement, and controllable any-to-any field-conditioned transformation.
  - title: Comprehensive Multi-Field Dataset 
    details: About 850 multi-center scans spanning 0.1T–7T, including 500 unpaired subjects and 200 (5 scanners) prospectively acquired travelling-volunteer paired scans for anatomically grounded cross-field evaluation.
  - title: Cross-Field MRI Harmonization
    details: Addressing field-strength heterogeneity as a structured full-spectrum benchmark (0.1T–7T) for principled cross-domain generalization and representation consistency. 

---

<div class="hero-date">April 01 – October 08, 2026</div>
<div class="hero-date">Total Prize Pool: $21,000</div>

![Slide 1](./public/home/index2.png)


## About Us

#### Welcome to the Generalizable Cross-Field MRI Translation and Harmonization Challenge (MRIxFields2026)


An integral part of the 29th International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI 2026), hosted in Abu Dhabi, United Arab Emirates, from October 4th to 8th, 2026. 

LEARN MORE (MICCAI 2026 - the 29th. International Conference On Medical Image Computing & Computer Assisted Intervention)


**🧠 MRIxFields2026: Cross-Field MRI Translation and Harmonization**

> Our Vision: To bridge ultra-low-field accessibility and ultra-high-field image quality within a single benchmark. By leveraging AI to encode and manipulate field-dependent imaging characteristics, we aim to catalyze the development of scalable, field-aware MRI synthesis methods to support reliable multi-center neuroscience research and the real-world clinical deployment of low-field MRI systems.


**🌟 What is Cross-Field MRI Harmonization? (Beyond Hardware: A Unified View of the Brain)**

Imagine taking a brain MRI from any hospital—whether on a portable, low-cost scanner or a high-end research machine—and instantly transforming it into a standardized, high-quality image. This is Cross-Field MRI Harmonization—breaking the physical limits of MRI scanners.


- **The Multi-Field Challenge**: Scanners range from ultra-low (0.1T) to ultra-high (7T) fields, creating massive variations in noise, resolution, homogeneity and contrast. These differences severely limit data comparability across different hospitals.
- **Beyond Hardware Limits**: Using advanced generative AI, we can 	computationally reconstruct 7T-equivalent high-field images from arbitrary scanners , and restore crucial tissue contrast from severely degraded 0.1T ultra-low-field scans.

- **Pivotal Clinical Value**: This technology enables seamless dataset harmonization for large-scale, multi-center neuroscience research. Crucially, it brings reliable, high-quality diagnostic imaging to low-resource and point-of-care settings without the need for expensive hardware.

<br/>
<center>
  <img src="./public/home/index.png" style="max-width: 900px; width: 100%; margin-top: 12px;" />
</center>

**🎯 Why This Challenge? (Pain Points & Opportunities)**

While MRI is a central tool for neuroscience research and clinical assessment, the vast diversity in scanning hardware creates significant, long-standing barriers for large-scale data integration.

- **The Clinical Pain Point: Field-Dependent Heterogeneity:** The rapidly expanding spectrum of MRI scanners (from 0.1T to 7T) introduces substantial heterogeneity in signal-to-noise ratio, contrast behavior, and spatial resolution. These differences fundamentally limit data comparability across hospitals and pose a major barrier to the clinical translation of AI-based MRI models.

- **The Technological Bottleneck: Narrow-Domain Limits:** Existing datasets and challenges are typically confined to narrow field ranges or single-domain settings. Because of this, conventional pipelines and current generative models often fail to generalize across realistic multi-field scenarios or struggle with severely degraded ultra-low-field acquisitions.

- **The Unique Opportunity of Multi-Field Datasets:** This challenge introduces the first publicly available MRI benchmark that systematically covers the entire clinically relevant magnetic field spectrum. By providing prospectively acquired cross-field paired scans, it offers a rare and rigorous foundation for directly evaluating anatomical consistency and cross-domain generalization.

- **The AI Opportunity: Breaking Hardware Barriers:** We seek innovative data-driven approaches capable of bridging these physical hardware gaps. Generative models have the potential to infer high-field-equivalent anatomical structures from low-field inputs , enabling uniform structural analysis and restoring diagnostic reliability without expensive hardware.


**The Core Goal:** MRIxFields2026 provides a rigorous testbed for assessing robustness, generalizability, and anatomical fidelity of generative models in heterogeneous multi-field MRI environments. By bridging ultra-low-field accessibility and ultra-high-field image quality within a single benchmark, we aim to catalyze scalable, field-aware MRI synthesis methods for real-world clinical deployment.


## MRIxFields2026 Challenge Overview



| Module | Description                                                                                                        |
|---|--------------------------------------------------------------------------------------------------------------------|
| Challenge Name | MRIxFields2026: A Generalizable Cross-Field MRI Translation and Harmonization Challenge                            |
| Field Strengths | 0.1T, 1.5T, 3T, 5T, 7T                                                                                             |
| Imaging Modality | Structural MRI                                                                                                     |
| Sequences / Contrasts | 3D T1-weighted, 2D/3D T2-weighted, 2D/3D T2-FLAIR                                                                  |
| Data Composition | Unpaired multi-field cohorts + travelling-volunteer paired cross-field cohort                                      |
| Total Cases | ~ 850 cases / modality (average)                                                                                   |
| Unpaired Cohort | ~ 650 cases / modality (average)                                                                                   |
| Paired Cohort | 200 cases / modality (40 voluneers × 5 field strengths)                                                            |
| Training Set | ~ 665 cases / modality (average; unpaired cohort + 3 paired subjects × 5 field strenghts)                          |
| Validation Set | 85 cases / modality (17 volunteers × 5 field strengths)                                                            |
| Test Set | 100 cases / modality (20 held-out volunteers × 5 field strengths)                                                  |
| Case Definition | One case is defined as a complete scan of a single subject acquired on one MRI system at a specific field strength |
| Paired Information | The travelling-volunteer cohort consists of the same subjects scanned across all five field strengths              |
| Primary Applications | Cross-field MRI synthesis, ultra-low-field enhancement, controllable field-to-field translation                    |
| Evaluation Reference | Ground-truth images at the target/high field strength from the paired cohort                                       |
| Evaluation Metrics | nRMSE, SSIM, LPIPS, Dice, normalized volume consistency                                                            |
| Scanners | 0.1T: piMR-820H; 1.5T: uMR 670; 3T: MAGNETOM Prisma; 5T: uMR Jupiter; 7T: MAGNETOM Terra                           |

To bridge the gap between heterogeneous clinical acquisitions and high-fidelity neuroscience research, the MRIxFields2026 challenge utilizes about 850 cases spanning 5 magnetic field strengths (0.1T to 7T) for each modality (average) to evaluate generative models across three specific tasks:


1. **Task 1: Ultra-High Field MRI Synthesis from Arbitrary Magnetic Field Strengths** – Targets the generation of high-field-equivalent MRI from arbitrary input field strengths, enabling models to recover fine anatomical details and quantitative properties associated with 7T imaging.
2. **Task 2: Higher-Field MRI Generation from Ultra-Low Magnetic Field Strengths** – Addresses a rapidly emerging global priority: enhancing 0.1T ultra-low-field MRI to restore clinically meaningful tissue contrast under severely degraded imaging conditions.
3. **Task 3: Controllable Field-to-Field MRI Synthesis with a Unified Conditional Model** – Introduces controllable, generalizable field-to-field synthesis via explicit conditioning mechanisms. This is crucial for harmonizing datasets across hospitals, reducing domain shift, and supporting large-scale clinical AI deployment.




## Awards
Each task will have 1 First Prize, 3 Second Prize and 5 Third Prize. We are actively finalizing the details with our sponsors, with a total prize pool of approximately **$21000**.

<center>
  <img src="/tasks/awards_index.png" alt="Awards Overview" width="100%" style="max-width: 1100px; height: auto; margin-bottom: 20px;">
</center>
All valid submissions will be reported in the public leaderboard. Prize-winning methods will be announced publicly as part of a scientific session at the MICCAI 2026 annual meeting. The inclusion of papers in the MICCAI conference proceedings and the selection of oral presentations will be determined and communicated through the paper review system.

For the authorship policy of the challenge summary paper: for each task, the first-place team may include up to three authors, the second-place team up to two authors, and the third-place team one author. If the same team ranks within the top nine (award-winning positions) in multiple tasks, the authorship allocation will be determined based on their highest-ranking result.


## Timeline
The schedule of the challenge is as follows. All deadlines are Pacific Standard Time (PST +11:59).

<div style="max-width: 700px; margin-top: 1rem;">
  <div style="padding: 10px 14px; background-color: #f5f7fa;">
    <strong>[Apr. 01, 2026]</strong> Website opens for registration
  </div>
  <div style="padding: 10px 14px; background-color: #ffffff;">
    <strong>[Apr. 10, 2026]</strong> Release training data
  </div>
  <div style="padding: 10px 14px; background-color: #ffffff;">
    <strong>[Apr. 20, 2026]</strong> Release validation data
  </div>
  <div style="padding: 10px 14px; background-color: #f5f7fa;">
    <strong>[May. 10, 2026]</strong> Submission system opens for validation
  </div>
  <div style="padding: 10px 14px; background-color: #ffffff;">
    <strong>[Jul. 01, 2026]</strong> Submission system opens for testing
  </div>
  <div style="padding: 10px 14px; background-color: #f5f7fa;">
    <strong>[Sept. 10, 2026]</strong> Registration and docker submission deadline
  </div>
  <div style="padding: 10px 14px; background-color: #f5f7fa;">
    <strong>[Oct. 08, 2026]</strong> Release final results during the MICCAI annual meeting
  </div>
</div>

--------------------------------

<div style="margin: 24px 0;">
  <img
    src="/alllogos.png"
    alt="Consortium logos"
    style="display: block; max-width: 60%; height: auto; margin: 0 auto;"
  />
</div>