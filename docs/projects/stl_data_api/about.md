---
id: about
title: STL Data API
custom_edit_url: null
---

## Overview

The STL Data API project aims to create a centralized, user-friendly platform that serves as a proxy for accessing and interacting with public data from various regional and municipal sources, particularly focused on the St. Louis region. The project addresses the challenges of inconsistent data formats, lack of standardization, and repetitive efforts in compiling datasets and reports by providing a RESTful API and a web portal for researchers, journalists, policy-makers, and data enthusiasts.

### Information

- **Source Code:** [https://github.com/oss-slu/stl_metro_dat_api](https://github.com/oss-slu/stl_metro_dat_api) [<img src="/img/git-alt.svg" alt="git" width="25" height="25" />](https://github.com/oss-slu/stl_metro_dat_api)
- **Client:** Dr. Sandoval, Sociology and Anthropology
- **Current Tech Lead:** Prem Kiran Polepalli [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/premkiran2)
- **Developers:**
- **Technologies Using:** 
  - TBD

- **Type:** Web application

### User Guide

The STL Data API simplifies access to St. Louis public data via a RESTful API and web portal. Register at the Rerum Users platform (Auth0/Okta) to get an API key. Browse datasets (e.g., income, health) on the web portal (URL TBD), filter and download as CSV, or use the API. Create and export charts in the “Visualize” tab or share interactive links. Save queries in “My Queries” for reuse. Subscribe to dataset updates via “Subscriptions” for notifications. Coordinators can manage data sources and announcements in the admin interface. Access API documentation at the docs endpoint (TBD). For support, use the portal’s feedback form.

## Technical Information

### Technical Overview

### Development Priorities

- Implement RESTful API with HTTPS endpoints for dataset access and aggregation.
- Develop static web portal using HTML/CSS/JavaScript for data browsing and visualization.
- Integrate Rerum Users (Auth0/Okta) for secure authentication and API key management.
- Set up RERUM repository for open data storage and cached aggregations.
- Configure MongoDB for private user data (profiles, saved queries).
- Create admin interface for coordinators to manage data sources and announcements.
- Enable dataset update subscriptions with email and webhook notifications.
- Support CSV and JSON data exports via API and web portal.
- Build visualization tools using Chart.js for interactive charts (bar, line, pie).
- Minimize dependencies to ensure durability and low maintenance.
- Provide comprehensive API and web portal documentation.

## Get Involved

If you would like to contribute to this project, please visit our [GitHub page](https://github.com/oss-slu/stl_metro_dat_api) to create your own issues or pull requests.
