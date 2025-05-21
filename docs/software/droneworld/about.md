---
id: about
title: Drone World
custom_edit_url: null
---

## Overview
Drone World, developed by Dr. Ankit Agrawal and his team, is an advanced simulation platform for testing small unmanned aerial systems (sUAS). 
It enables users to configure detailed test scenarios by specifying environmental conditions (e.g., weather, terrain), sUAS capabilities (e.g., sensors, hardware), and mission objectives. 
The platform generates a realistic 3D simulation environment and monitors data to ensure safety and detect issues, producing comprehensive test reports with detailed analysis.

By automating and streamlining the testing process, Drone World improves safety, reliability, and efficiency for drone developers. 
It allows comprehensive pre-flight testing in ultra-realistic environments, helping developers refine their systems and iterate more rapidly on complex missions. 
Our team at OSS is dedicated to enhancing Drone World’s capabilities, including refining environmental settings, drone configurations, and integrating new features.

### Information

- **Source Code:**  https://github.com/oss-slu/DroneWorld [<img src="/img/git-alt.svg" alt="git" width="25" height="25" />](https://github.com/oss-slu/DroneWorld)
- **Client:** [Dr. Ankit Agrawal](https://www.slu.edu/science-and-engineering/academics/computer-science/faculty-and-staff/ankit-agrawal.php) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/ankyAgrawal)
- **Current Tech Lead:** Rakesh Ranga Buram [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/Rakesh-Ranga-Buram)
- **Developers:**
    - Darweshi Amerson (capstone) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/damerson1)
    - Noah Guzinski (capstone) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/nguzinski) 
    - Valerie Galiano (capstone) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/Hoshi-Okami)
    - Mohammad Al-Hanoosh (prior tech lead) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/mohamdlog)
    - Yashaswini Shivalingaiah (alumni, prior tech lead) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/yashaswini-slu)
    - Hebron Bekele (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/hebronh)
    - Kaleb Yu (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/kalyus)
    - Szymon Rostkowski (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/sr259)
     
- **Start Date:** 9th Feb 2023
- **Adoption Date:** 25 Aug 2023
- **Technologies Used:**
    - Key Languages: Python, TypeScript, JavaScript
    - Key Technologies: React (Frontend), Flask (Backend APIs), Unreal Engine with AirSim (Simulation)
    - Storage Services: Google Cloud Storage
    - Critical Dependencies: PX4, ArduPilot, Unreal Engine
- **Type:** Desktop
- **License:** [MIT](https://opensource.org/license/mit)

### User Guide

The user sets up a test scenario via the web interface by specifying the number of drones, their sensors, mission objectives, and operating environment. 
They also define critical safety properties, such as minimum separation distances between drones, based on system requirements or regulations. 
After the test, Drone World provides a comprehensive report that includes logs, telemetry data, property violation analysis, and visualizations of key metrics. 
For a more comprehensive guide, [see the Simulation Guide](https://github.com/oss-slu/DroneWorld/wiki/Simulation-Guide).

## Technical Information

### Technical Overview

![Architecture](DroneWorld%20Architecture.png)

The test scenario uses the "DRV Testbed" which includes sensor models, GPS models, plugins, and shadow models. First, configure the environment and define the tests. The "Configure Environment" box sets system properties, settings, and features. The "Configure Application & Define Tests" box sets drone parameters, simulation settings, and safety/test properties.

Next, execute the test scenario with the "Execute Test Scenario" box. This runs the tests and collects monitoring data on humans, drones, and the environment. After the tests are complete, consolidate and analyze the monitoring data using the "Consolidate & Analyze Monitoring Data" box. This helps diagnose the system and generate the "Acceptance Test Result."

### Development Priorities

- Implement UI changes to enhance the display of simulation responses, including images and graphs.
- Add a new property for monitoring drone torque battery.
- Develop Unreal Engine support for various drone types.

## Get Involved

To get involved and contribute to this project, please check out our [contribution guide.](https://github.com/oss-slu/DroneWorld/wiki/Contributing-Guide)