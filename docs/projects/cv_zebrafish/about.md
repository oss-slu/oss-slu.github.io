---
id: about
title: CV Zebrafish
custom_edit_url: null
---

<!-- Optional header image -->
<!-- ![Header Alt Text](header.png) -->

## Overview

CV Zebrafish is a desktop application that automates the analysis of zebrafish movement data from DeepLabCut tracking outputs. It replaces a manual process that takes 2–3 hours per dataset with an automated pipeline that completes in roughly 5 minutes. The tool validates DeepLabCut CSV files, auto-generates analysis configurations, computes kinematic metrics (fin angles, head yaw, tail dynamics, swim bouts, spine angles), and renders interactive Plotly graphs — all through a guided PyQt desktop interface. It also supports cross-correlation analysis between body part movements and multi-dataset comparison.

### Information

- **Source Code:** [https://github.com/oss-slu/cv_zebrafish](https://github.com/oss-slu/cv_zebrafish) [<img src="/img/git-alt.svg" alt="git" width="25" height="25" />](https://github.com/oss-slu/cv_zebrafish)
- **Client:** Mohini Sengupta, Ph.D.
- **Track:** Client-driven Product
- **Current Tech Lead:** Madhuritha Alle [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/madhuritha22)
- **Developers:**
  - Bruce Miller (capstone) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/bruceamiller)
  - Kwabena Adjei Omanhene-Gyimah (capstone) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/Omanhene20)
  - Nilesh Gupta (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/ngup1)
  - Gihwan Jung (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/Jung0219)
  - Jacob Winter (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/jaywin2099)
- **Start Date:** Aug 11, 2025
- **Technologies Used:**
  - Python 3.10, PyQt5 (desktop GUI)
  - NumPy, Pandas, SciPy (data processing and kinematic calculations)
  - Plotly, Kaleido (interactive graphs and static image export)
  - OpenCV (computer vision utilities)
  - SQLite (session and run persistence)
  - Conda (environment management)
- **Type:** Desktop Application
- **License:** [MIT](https://opensource.org/license/mit)

## Technical Information

### Development Priorities

- Integrate multi-CSV comparison results and cross-correlation display into the Graph Viewer UI
- Add interactive graph controls (clickable points, local extrema capture)
- Validate angle calculations across new dataset formats
- Set up CI/CD pipeline with GitHub Actions
- Modernize application interface and interactivity

## Get Involved

If you would like to contribute to this project, please visit our [GitHub page](https://github.com/oss-slu/cv_zebrafish) to create issues or pull requests.
