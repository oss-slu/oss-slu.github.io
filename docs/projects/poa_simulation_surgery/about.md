---
id: about
title: 3D Visualization of Osteotomy Simulation Surgery
custom_edit_url: null
---

## Overview

This project focuses on creating a 3D visualization tool for CT DICOM files that can be manipulated to simulate different types of osteotomies. The tool will allow radiographic measurements to be made after simulating osteotomies. The ultimate vision is to expand capabilities to scan any bone, automatically segment it, simulate osteotomies (or other procedures), and calculate relevant radiographic measures.

By combining advanced 3D medical imaging, segmentation algorithms, and simulation capabilities, this tool aims to support surgeons, researchers, and students in orthopedic planning and education.

### Information

- **Source Code:** [https://github.com/oss-slu/pao_surgery_simulator](https://github.com/oss-slu/pao_surgery_simulator) [<img src="/img/git-alt.svg" alt="git" width="25" height="25" />](https://github.com/oss-slu/pao_surgery_simulator)

- **Client:** Vinieth Bijanki

- **Current Tech Lead:** Sri Ram Duvvuri [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/sriram1302) 

- **Developers:**
  

### User Guide

This application will enable surgeons and researchers to:
- Upload and visualize 3D CT DICOM datasets.
- Segment bones automatically or manually.
- Simulate different osteotomy procedures.
- Measure radiographic parameters post-surgery simulation.
- Export visualizations and measurements for further analysis.

**Project Phases:**
1. **Data Processing & 3D Rendering** – Parse and visualize CT DICOM files.
2. **Bone Segmentation** – Implement semi-automatic and automatic segmentation.
3. **Osteotomy Simulation** – Provide interactive tools for simulating procedures.
4. **Measurement Tools** – Enable radiographic parameter calculations.
5. **User Interface Development** – Build a responsive and intuitive front-end.
6. **Testing & Validation** – Validate results with clinical data.

## Technical Information

### Technical Overview (Might Change)

**Programming Languages:**
- Python: For image processing, simulation algorithms, and backend.
- JavaScript (React.js): For building the user interface.

**Libraries and Frameworks:**
- **Medical Imaging:** VTK, ITK, SimpleITK, pydicom.
- **3D Rendering:** VTK, three.js.
- **Web Development:** React.js for UI.
- **Data Storage:** MongoDB or PostgreSQL.

**3D & Imaging Processing:**
- VTK (Visualization Toolkit) for 3D rendering.
- ITK for medical image segmentation.
- NumPy & SciPy for numerical processing.

## Get Involved

We welcome contributions from developers, researchers, and medical professionals. Whether you can help with coding, testing, or providing domain expertise, your input will help create a powerful tool for orthopedic simulation.
