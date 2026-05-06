---
id: about
title: "Mithridatium"
custom_edit_url: null
---

<!-- A header image is optional; if used should be no greater than 200x600 -->
<!--![Header Caption](header.png) -->

## Overview

Mithridatium is a set of tools that translates research on detecting and prevention of AI poisoning attacks into practical software solutions.The project focuses on identifying hidden backdoors in pretrained image classification models and helping users evaluate model integrity before deployment.

Mithridatium supports multiple backdoor detection methods and provides structured reports with verdicts, metrics, and relevant statistics. The goal is to make advanced AI security research more accessible to developers, researchers, and organizations working with pretrained models.

<!-- Screenshot -->
<!-- Clear description; 1-2 paragraphs -->
<!-- Demo/prview video -->

### Basic Information

- **Status:** Active (and ongoing)
- **Platforms:** Library / CLI
- **Source Code:** [https://github.com/oss-slu/mithridatium](https://github.com/oss-slu/mithridatium) [<img src="/img/git-alt.svg" alt="git" width="25" height="25" />](https://github.com/oss-slu/mithridatium)

### Project Resources

- **Project Website:** [Mithridatium Landing Page](https://mithridatium.vercel.app/)

- **Hugging Face Demo:** [Try Mithridatium Demo](https://huggingface.co/spaces/williamphoenix/Mithridatium)

- **Technical Blog Post:** [Building Mithridatium: Detecting Hidden Backdoors in AI Models](/news/building-mithridatium)

## Core Dev Team

- **Client** Dr. Reza Tourani
- **Track:** Client-driven Product
<!-- - **Staff Developer:** Staff Developer Name [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/username) [<img src="/img/linkedin.svg" alt="linkedin" width="25" height="25" />](https://www.linkedin.com/in/username/) -->
- **Current Tech Lead:** Pelumi Oluwategbe [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/pelumitegbe)
- **Developers:**
  - Payton Guffey [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/PGuffey)
  - Gustavo Lucca [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/GustavoLucca)
  - Will Phoenix [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/williamphoenix)

## Technical Information

### Additional Information

- **Start Date:** August 2025
- **Technologies Used:**
  - Python
  - PyTorch
  - Hugging Face
  - Streamlit / Gradio
  - AI/ML (poisoning attack detection and prevention)
- **License:** [MIT](https://opensource.org/license/mit)
- **Code of Conduct:** [CODE_OF_CONDUCT.md](https://github.com/oss-slu/mithridatium/blob/main/CODE_OF_CONDUCT.md)

### Supported Detection Methods

- **FreeEagle:** A white-box, data-free defense that analyzes internal model behavior for abnormal class bias.

- **STRIP:** A defense that mixes inputs with other images and checks whether the model’s predictions remain unusually stable.

- **MMBD:** A method that looks for abnormal dominance patterns across output classes.

- **AEVA:** A black-box style defense that perturbs input images and observes how the model’s predictions change.

### Development Priorities

- Research and implement AI poisoning attack detection techniques
- Translate academic research into practical, reusable software tools
- Build testing frameworks for evaluating model robustness against poisoning
- Document detection and prevention best practices

## Get Involved

If you would like to contribute to this project, please visit our [GitHub page](https://github.com/oss-slu/mithridatium) to create your own issues or pull requests.
