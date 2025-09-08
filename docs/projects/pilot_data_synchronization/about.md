---
id: about
title: Pilot Data Synchronization
custom_edit_url: null
---


## Overview

The Flight Simulator Data Synchronization Project is a research initiative aimed at developing a real-time data synchronization channel between flight simulators and the iMotions human behavior research platform. This project will be conducted in two phases: a planning and design phase, followed by a testing phase. The goal is to enable the seamless transmission of critical flight data such as altitude, airspeed, and control surface deflections from Flight Simulation Training Devices (FSTDs) to iMotions, facilitating the real-time analysis of pilot workload, attention, and task management.

This interdisciplinary project involves collaboration between Aeronautics students, who will act as system analysts, and Computer Science students, who will serve as software developers. The students will gain hands-on experience in both software design and validation. The project addresses a significant challenge identified in previous research at the Department of Aviation Science, where post-hoc synchronization of flight simulator data with biometric signals was time-consuming and inefficient. By establishing a Transmission Control Protocol (TCP) connection and leveraging advanced software tools, this project seeks to create a stand-alone multimodal physiological test battery for primary flight training. This will enable the aviation training community to better understand and improve pilot training effectiveness by visualizing and measuring the synergy between task management, attention, and workload in real-time.

### Information
- **Source Code:**  https://github.com/oss-slu/PilotDataSynchronization [<img src="/img/git-alt.svg" alt="git" width="25" height="25" />](https://github.com/oss-slu/PilotDataSynchronization)
- **Client** Gajapriya Tamilselvan - Aviation Science
- **Current Tech Lead:** Vamsi Brahmadevi [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/vbrahmadevi)
- **Developers:**
  - Devi Priya Kolla (alumni, prior tech lead) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/DeviPriya-Kolla)
  - Ali Elnour (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/aelnourSLU) 
  - Carly Hoover (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/carlyrhoover)
  - Henry Meiners (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/hrmeiners) 
  - Harshita Thota (alumni, prior tech lead) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/harshitha-thota)

- **Start Date:** August 2024
- **Adoption Date:** August 2024

- **Technologies Used:**
  - Rust
  - C++
  - X-Plane SDK (future compatibility with Prepar3D SDK)

- **Type:** TBD
- **License:** [LGPL](https://opensource.org/license/lgpl-2-0)

## Technical Information

### Technical Overview

The Pilot Data Synchronization Project enables real-time synchronization of flight simulator data to the iMotions human behavior research platform. By leveraging the X-Plane SDK and establishing a TCP connection, the project ensures that key flight parameters such as altitude, airspeed, and heading are transmitted seamlessly for real-time analysis of pilot performance and behavior.

- Pilot Data Synchronization Architecture

  - **Flight Simulator SDK Integration**: The project utilizes the Flight Simulator SDK to access real-time flight data such as altitude, airspeed, heading, and vertical airspeed. Data is extracted through predefined simulator data references (datarefs).

  - **TCP Communication**: A reliable TCP connection is established between the flight simulator and the iMotions platform. This connection ensures the continuous and accurate flow of flight data to the research platform for behavior analysis.

  - **iMotions Platform Integration**: The iMotions platform receives the flight data in real-time and correlates it with physiological data to provide insights into pilot workload and decision-making.

### Development Priorities

- Real-time Data Extraction
- TCP Connection Setup
- Data Synchronization Module
- Error Handling and Reliability
- Documentation and Testing

## Get Involved

If you would like to contribute to this project, please visit our [GitHub page](https://github.com/oss-slu/PilotDataSynchronization) to create your own issues or pull requests.
