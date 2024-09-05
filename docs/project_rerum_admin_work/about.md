---
id: about
title: Rerum Admin Work
custom_edit_url: null
---

## Overview

TinyNode is an open-source Node.js web application designed to integrate with the RERUM API, enabling developers to create client applications that leverage RERUM's backend capabilities. The project provides a foundation for developers to interact with digital humanities data, offering a streamlined interface to the RERUM API for storing, retrieving, and managing annotations and other related data.

### Core Features
- **RERUM API Integration**: Seamless connection to the RERUM API, allowing data manipulation and retrieval.
- **Environment Configuration**: Utilization of environment variables to manage API interactions securely.
- **CI/CD Pipelines**: Automated processes for testing and deploying the application in development and production environments.

### Target Audience
This project is aimed at developers who want to build or extend applications that require interaction with the RERUM API. It serves as a backend utility for those working on digital humanities projects or similar domains where data annotation and management are essential.

### Information

- **Source Code:**  
    - https://github.com/CenterForDigitalHumanities/TinyNode [<img src="/img/git-alt.svg" alt="git" width="25" height="25" />](https://github.com/CenterForDigitalHumanities/TinyNode)

- **Client** 
    - Patrick Cuba [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/cubap)

- **Current Tech Lead:** Lalith Adithya Reddy Avuthu [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/alar12)  

- **Developers:**
    - Bryan Haberberger [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/thehabes)
    - Patrick Cuba [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/cubap)

- **Start Date:**  March 2023
- **Adoption Date:**  Aug 2024
- **Technologies Used:**
    - Tech Stack: 
                  - Web development (Html, CSS, JavaScript), RESTful API Development (RERUM APIs)
                  - Node.js & JavaScript
                  - CI/CD Pipelines
- **Type:** Web application
- **License:** Primary Developers: Bryan Haberberger and Patrick Cuba © 2023 Research Computing Group at Saint Louis University

### User Guide

#### TinyNode

1. **Home Page**:
   - When you open the TinyNode web application, you will be directed to the Home page. This page provides an introduction to the application.

2. **Interacting with the API**:
   - Navigate through the interface to interact with the RERUM API.
   - You can perform basic API calls, retrieve data, and manage it directly through the application.

3. **Viewing Data**:
   - The application allows you to fetch data from the RERUM API.
   - After fetching, you can view and manage this data within the app.

4. **Development and Testing**:
   - Developers can use the application to test their API integrations and see how data management works. 


## Technical Information

[![Architecture](https://mermaid.ink/img/pako:eNqNUsty2jAU_RWNsuVly4bgRWewTBo6JcNgsqnIQrGvwcVIHklOoAz_XoOgNZnpQ6v7OvecI-mAE5kCDvBK8XKNFtFSoPro6tUWHpQUpj0Wqa2fzshhj4vp1y6N4-6XGE2EAZXxBF5Qu_0JjVz2rEHZMk9MLsVLA-vaIcJGswmivCj0pQtXig8CQp5sbvlDhz3VmjvfNYpBvYGyxKHLxrtSgdanzoPiW3iXatMgDy15aMnnsjKgm21i2x6bj-fPU3QaOrmodXxwEXp20mcRNxxNueAr2IIw__BCJ10a_V5DHfY5N4_VKxqd70lbI9RldIJmeQlFLqBBS61-Sti8EmgB2jTlUyufeiyCspB7ZCSK4A0KWTaknSetfOqzmZJpdeZGFvRnE6PL7Tg2Df3LQ9qU-jfdi2-zL6D-LijLiyK4y4ZZSxslNxDcEUIucfs9T806cMtdExReQcOs_98gegX1k78z4RbegtryPK0__uG0YonNun7BJQ7qMOVqs8RLcazneGVkvBcJDoyqoIWVrFZrHGS80HVWlSk3EOW8ft_tr2rJxTcpb3IcHPAOB21y3-mTQZ_0ie8Rz63DFt7jwHG9zr3TGw6cnt8bDIkzOLbwj_MO5_gTGNkQFA?type=png)](https://mermaid.live/edit#pako:eNqNUsty2jAU_RWNsuVly4bgRWewTBo6JcNgsqnIQrGvwcVIHklOoAz_XoOgNZnpQ6v7OvecI-mAE5kCDvBK8XKNFtFSoPro6tUWHpQUpj0Wqa2fzshhj4vp1y6N4-6XGE2EAZXxBF5Qu_0JjVz2rEHZMk9MLsVLA-vaIcJGswmivCj0pQtXig8CQp5sbvlDhz3VmjvfNYpBvYGyxKHLxrtSgdanzoPiW3iXatMgDy15aMnnsjKgm21i2x6bj-fPU3QaOrmodXxwEXp20mcRNxxNueAr2IIw__BCJ10a_V5DHfY5N4_VKxqd70lbI9RldIJmeQlFLqBBS61-Sti8EmgB2jTlUyufeiyCspB7ZCSK4A0KWTaknSetfOqzmZJpdeZGFvRnE6PL7Tg2Df3LQ9qU-jfdi2-zL6D-LijLiyK4y4ZZSxslNxDcEUIucfs9T806cMtdExReQcOs_98gegX1k78z4RbegtryPK0__uG0YonNun7BJQ7qMOVqs8RLcazneGVkvBcJDoyqoIWVrFZrHGS80HVWlSk3EOW8ft_tr2rJxTcpb3IcHPAOB21y3-mTQZ_0ie8Rz63DFt7jwHG9zr3TGw6cnt8bDIkzOLbwj_MO5_gTGNkQFA)

### **Architecture**
- **Backend**: The backend is built using Node.js, utilizing the Express.js framework for routing and API integration.
- **Frontend**: A minimal HTML and JavaScript interface is provided to demonstrate basic functionality.
- **Environment Management**: Environment variables are used to manage API keys and endpoints, ensuring secure and configurable deployment.

### **Dependencies**
- **Node.js**: The primary runtime environment.
- **Express.js**: For building the web server and handling routes.
- **PM2**: Process manager for managing the application in production.
- **GitHub Actions**: Used for CI/CD, automating testing and deployment processes.

### **CI/CD Pipelines**
- **Development Pipeline**:
  - Merges pull requests with the `main` branch.
  - Runs tests using `npm test`.
  - Deploys to a development server for testing.

- **Production Pipeline**:
  - Runs tests on each push to the `main` branch.
  - Deploys the application to a production server if tests pass.

### **Code Structure**
- **\`bin/\`**: Contains the entry point for the application.
- **\`routes/\`**: Defines the application routes.
- **\`public/\`**: Holds static assets like HTML and JavaScript files.
- **\`config/\`**: Configuration files for environment variables.

## Development Priorities

1. **API Feature Completion**:
   - Refine and optimize existing API integrations.
   - Implement additional API routes as required.

2. **Testing Expansion**:
   - Increase test coverage for all modules, focusing on edge cases and integration tests.
   - Integrate automated tests into the CI/CD pipeline.

3. **Documentation Update**:
   - Ensure all documentation, including the README and CONTRIBUTING guidelines, is up-to-date and comprehensive.
   - Add detailed API documentation and usage examples.

4. **Front-End Enhancement**:
   - Develop a more comprehensive user interface.
   - Implement responsive design and accessibility features.

## Get Involved

If you would like to contribute to this project, please visit our [GitHub page](https://github.com/oss-slu/TinyNode) to create your own issues or pull requests.