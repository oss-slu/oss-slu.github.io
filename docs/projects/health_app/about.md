---
id: about
title: "TheHealthApp"
custom_edit_url: null
---

<!-- A header image is optional; if used should be no greater than 200x600 -->
<!--![Header Caption](header.png) -->

## Overview

TheHealthApp allows patients to securely log in, explore and choose health features, and provide personal information. Based on their inputs, the application integrates an ML-powered assessment model that analyzes responses and returns tailored suggestions (basic assessment). Patients can also request services, after which the system generates a report combining their details and assessment results. Reports are securely stored and shared with doctors, while administrators manage users, features, and audit logs. The platform incorporates load balancing, scalable services, encrypted storage, and continuous monitoring to ensure high availability, data protection, and smooth operation across web, mobile, and backend systems.

<!-- Screenshot -->
<!-- Clear description; 1-2 paragraphs -->
<!-- Demo/prview video -->

### Basic Information

- **Status:** New (greenfield this semester) <!-- Choose applicable: [Proposed (proposed by client), New (greenfield this semester), Active (and ongoing), External (ongoing third-party), -->
              <!-- Support (limited maintenance), Handoff (back to client), Archived (no further updates will be made)] -->
- **Platforms:** Web / Mobile
<!-- - **Website:** [URL](URL) -->
- **Source Code:** [https://github.com/oss-slu/TheHealthApp](https://github.com/oss-slu/TheHealthApp) [<img src="/img/git-alt.svg" alt="git" width="25" height="25" />](https://github.com/oss-slu/TheHealthApp)
<!-- - **Download/Deployment:** 
  - [URL](URL)
  - [URL](URL)
  - [URL](URL) -->

<!-- ### User Guide

<!-- Clear description; 1-2 paragraphs -->
<!-- Clear description of who should use this and how -->
<!-- Getting started steps or quick-start guide -->

<!-- **Quick Start:**
1. [Installation/Setup steps]
2. [Basic usage]
3. [Common workflows] -->

<!-- Link to comprehensive documentation -->
<!-- **Full User Guide:** [Link to detailed docs] -->

## Core Dev Team:

- **Client** Dr. Fardeen Dadan, Dr. Ashok Kumar Chidi
- **Track:** Client-driven Product
<!-- - **Staff Developer:** Staff Developer Name [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/username) [<img src="/img/linkedin.svg" alt="linkedin" width="25" height="25" />](https://www.linkedin.com/in/username/) -->
- **Current Tech Lead:** Sameer Maayiz Sirajudeen [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/Smagen12)
- **Developers:**

  - Hashir Hashir (capstone) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/mhashir03)
  - Zukai Sagan (capstone) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/ZukaiSagan)
  - Munazzah Rizwan Rakhangi (alumni, prior tech lead) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/Munazzah-Rakhangi)
  - Mohamed Naasir (volunteer)
  - Mujaina Begum (volunteer)
  - Mohammed Fazil (volunteer)
  - Harish (volunteer)

## Technical Information

### Additional Information

- **Start Date:** September, 2025
- **Adoption Date:** September, 2025
- **Technologies Used:**
  - Next.js, TypeScript
  – Python
  – PostgreSQL
  – Tailwind CSS
  – Docker (subject to change)
- **License:** Not yet established

### Technical Overview

<!-- ![Software Architecture](architecture.png) -->
The system enables clients, doctors, and administrators to log in securely through an Identity Provider. Requests are routed through the Client/Web App, then pass into an API Gateway protected by a Web Application Firewall (WAF). A Backend-for-Frontend (BFF) layer simplifies communication with the core backend. The Core Services manage business logic, interact with data stores, and call the ML Platform for health assessments. This architecture ensures secure authentication, reliable data management, and scalable support for all application features.

### Development Priorities

1. Secure login with role-based access (Client, Doctor, Admin).
2. Core workflows: onboarding, feature selection, and report generation.
3. Basic ML-driven health assessment.
4. Robust data storage with audit logging.
5. Simple CI/CD pipeline for both web app and backend.

Future Scope

- Mobile application (React Native or Flutter).

## Get Involved

<!-- Clear description; 1-2 paragraphs -->
<!-- Link to CONTRIBUTING.md -->