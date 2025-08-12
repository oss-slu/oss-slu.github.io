---
id: about
title: Pi4Micronaut
custom_edit_url: null
---

![Pi4Micronaut-Header](header-pi4micronaut.png)

## Overview

Pi4Micronaut is an innovative Java library crafted for developers who aim to build Internet of Things (IoT) applications leveraging the Raspberry Pi platform. This software is designed to run directly on the Raspberry Pi, providing an interface between the high-level Micronaut framework and the low-level hardware control provided by Pi4J. It serves as a vital tool for Java developers who wish to create sophisticated IoT solutions that interact with various sensors and electronic components. By abstracting the complexity of hardware interactions, Pi4Micronaut allows developers to focus on crafting business logic and features, making it easier to bring IoT applications from concept to deployment rapidly.

The existence of Pi4Micronaut is justified by the need for a robust, scalable, and efficient way to bridge the gap between enterprise-grade software and the physical world of hardware. It is particularly valuable for projects that demand both the high-performance, microservices-oriented capabilities of the Micronaut framework and the versatile hardware interaction that the Raspberry Pi offers. Whether it's for home automation, industrial monitoring, or educational purposes, Pi4Micronaut empowers developers to deliver reliable and sophisticated IoT applications that can run headless on a Raspberry Pi or be managed remotely, providing convenience, control, and customization to the end-users.

### Information

- **Source Code:** [https://github.com/oss-slu/Pi4Micronaut/](https://github.com/oss-slu/Pi4Micronaut/) [<img src="/img/git-alt.svg" alt="git" width="25" height="25" />](https://github.com/oss-slu/Pi4Micronaut/)
- **Client** Jeff Brown - Unity Foundation
- **Current Tech Lead:** Leandru Martin [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/leandrumartin)
- **Developers:**
  - Yenkatarajalaxmimanohar (prior tech lead, alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/yrlmanoharreddy)
  - Ava Enke (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/avaenk)
  - Seyun Jeong (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/Ed0827)
  - Ralph Tan (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/RalphTan37)
  - Ruthvik Mannem (prior tech lead, alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/ruthvikm)
   - Leandru Martin (alumini) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/leandrumartin)
   - Thomas Macas (alumini) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/tmacas)
  - Adrian Swindle (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/SwindleA)
  - Alex Delgado (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/adelgadoj3)
  - Joe Folen (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/joefol)
  - John Yanev (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/jyanev)
  - Greih Murray (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/GreihMurray)
  - Austin Howard (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/austinjhoward)
  - Traison Diedrich (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/traison-diedrich)
  - Sinuo Liu (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/liusinuo2000)
- **Start Date:** August 2022
- **Adoption Date:** August 2022
- **Technologies Used:**
  - Java
  - Micronaut Framework
  - Pi4J Library
- **Type:** IOT (Raspberry Pi)
- **License:** [Apache License 2.0](https://opensource.org/license/apache-2-0/)

### User Guide

Pi4Micronaut is designed for Java developers who need to create IoT applications on the Raspberry Pi. To use this software, a developer would include the Pi4Micronaut library in their Java project, leveraging a build tool like Maven or Gradle for dependency management. The software facilitates interaction with the hardware peripherals of the Raspberry Pi via the GPIO pins, making use of the Micronaut framework's easy-to-use, compile-time dependency injection and aspect-oriented programming capabilities. To use it, developers include the Pi4Micronaut library in their Java project, write the application logic, and deploy it on the Raspberry Pi. The software abstracts the complexity of hardware interaction, allowing developers to focus on the application functionality and logic, thereby enabling the creation of efficient, scalable IoT solutions.

[Pi4Micronaut Documentation](https://oss-slu.github.io/Pi4Micronaut/index.html)

## Technical Information

### Technical Overview

Pi4Micronaut serves as a bridge between the JVM and the physical computing capabilities of Raspberry Pi. It's an integration framework that brings together the lightweight, reactive programming model of Micronaut with the comprehensive GPIO control provided by Pi4J. This combination allows developers to write Java applications that can directly control and respond to physical hardware events.

- Deep Dive into Pi4Micronaut's Architecture

  - **Micronaut Integration**: Pi4Micronaut integrates deeply with Micronaut's dependency injection and AOP capabilities, allowing developers to declaratively wire hardware control logic into their application components.

  - **Pi4J Core**: At the heart of Pi4Micronaut is the Pi4J library, which provides the necessary abstraction to communicate with the GPIO pins on the Raspberry Pi. Pi4Micronaut extends this functionality, making it available in a Micronaut-friendly way.

  - **Event-Driven Hardware Interaction**: Pi4Micronaut simplifies the process of handling hardware events. Using Micronaut's event listeners and Pi4J's GPIO callbacks, it orchestrates interactions between the application and the physical components attached to the Raspberry Pi.

Here is an overview of the software architecture.

![Software Architecture](architecture.png)

### Development Priorities

- Integrate new components
- Developing Test Suite
- Enhance existing component functionalities
- Fixing build errors
- Documentation for each component

## Get Involved

Contributing to the Pi4Micronaut Library involves a range of activities from bug fixes and feature enhancements to documentation improvements. To ensure that your contributions can be integrated smoothly, please review the [Contributors Guide](https://oss-slu.github.io/Pi4Micronaut/index.html#_contribute_to_the_pi4micronaut_library). This guide will cover the necessary steps, including understanding the project's scope, the types of contributions you can make, and the process for submitting your changes. Additionally, signing the Contributor License Agreement (CLA) is a crucial step that must be completed by all contributors. Your participation is invaluable, and we encourage you to join our community of developers in enhancing the Pi4Micronaut Library.
