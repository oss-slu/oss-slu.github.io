# CV Zebrafish

## Overview

The CV Zebrafish project aims to develop an interactive, user-friendly software tool to track and analyze zebrafish body parts and movements from high-resolution, high-speed imaging data. It will integrate with machine learning outputs like DeepLabCut to process large datasets and generate detailed metrics, including speed, fin angles, movement timing, phase synchronization, and behavior classification. The modular design will make it adaptable for researchers at SLU and beyond, supporting diverse movement analysis and visualization needs in aquatic behavioral studies

The project is part of the [Saint Louis University Open Source Software (OSS)](https://github.com/oss-slu) initiative and is being developed in collaboration with Mohini Sengupta, Ph.D.

---

## Features

<!-- - **Automated Zebrafish Tracking** – Detect and track single or multiple zebrafish in video recordings.
- **Behavioral Analysis** – Extract metrics such as swimming speed, direction changes, and grouping behavior.
- **Multi-Fish Support** – Accurate tracking even in group settings.
- **Data Visualization** – Generate plots and charts for movement patterns.
- **Exportable Results** – Save analysis outputs in CSV/JSON formats for further research.
- **Modular Design** – Extend functionality with custom behavioral metrics or machine learning models. -->

---

## Tech Stack

- **Programming Language:** Python
- **Core Libraries:** OpenCV, NumPy, Pandas, Matplotlib
- **Machine Learning Frameworks:** PyTorch / TensorFlow (planned)
- **Web Interface (optional):** Flask / React
- **Version Control:** Git & GitHub

---

## Getting Started

### Prerequisites
- Python 3.9+
- pip package manager
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/oss-slu/cv_zebrafish.git
cd cv_zebrafish

# Create a virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows

# Install dependencies
pip install -r requirements.txt
