---
id: about
title: SLU Open Project
custom_edit_url: null
---

## Overview

SLU Open Project is a web-based work management tool that enables shared service providers in universities and similar contexts. It was originally built to support the SLU Center for Additive Manufacturing (SLU-CAM), and is expanding to support a variety of use cases.

## Information

 - **Source Code:** [https://github.com/oss-slu/open-project//](https://github.com/oss-slu/open-project/) [<img src="/img/git-alt.svg" alt="git" width="25" height="25" />](https://github.com/oss-slu/open-project/)
- **Client** SLU Center for Additive Manufacturing
- **Current Tech Lead:** Lakshmi Prasanna Mamillapalli [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/lmamillapalli786) (https://www.linkedin.com/in/lakshmiprasana784/)
- **Developers:**

  - Colin Sepher [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/colinseper)  (https://www.linkedin.com/in/colin-seper/)

  - Thomas Macas [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/ThomasMacas) (https://www.linkedin.com/in/thomas-macas-3730a7251/)

  - Joi Laws [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/lawsj) 

- **Start Date:** Fall, 2025
- **Adoption Date:** January, 2025
- **Technologies Used:**
  - React
  - Vitest
  - Postgresql
- **Type:** Web application
- **License:** [Pick a License](https://opensource.org/license/yadda)

### User Guide
SLan open source project management platform for distributed manufacturing, processing, and toolshops within an organization. It was specifically designed for the Saint Louis University Center for Additive Manufacturing, but can be adapted for other organizations.

## Technical Information
SLU OPEN PROJECT is a react based project and Vitest is used for testing and the database used for implementation is Postgresql.

### Technical overview

The SLU Open Project is an open-source platform designed for managing distributed manufacturing, processing, and tool shops within an organization. It is built with a modern, scalable tech stack, emphasizing ease of use, maintainability, and adaptability for different organizational needs.

Tech Stack & Architecture

Frontend:

React with TypeScript: The frontend is built using React, providing an interactive and dynamic user interface. TypeScript enhances code quality and maintainability by providing static typing.

UI Kit: The platform utilizes the Tabler React UI Kit (tabler-react-2) for a consistent, responsive, and modern design.

Backend:

Express.js: The API is built with Express.js, a minimalist Node.js framework, to handle HTTP requests and provide a flexible routing structure.

File-based Routing: The backend implements file-based routing within the /routes directory, making it easy to add, modify, or scale routes as needed. API routes are prefixed with /api/ for clear distinction.

Authentication:

JWT-based Authentication: The platform uses JWT (JSON Web Tokens) to secure API endpoints. Tokens are automatically attached to requests to ensure secure communication.

SSO Integration: SLU's SAML-based Single Sign-On (SSO) is integrated for user authentication, with OKTA for identity management and session handling. This provides seamless authentication and user management.

Data Fetching:

Custom authFetch Utility: The frontend uses a custom authFetch function, which wraps around the native fetch API. It automatically attaches the JWT token to every request, ensuring secure and authorized data fetching.

Testing & Quality Assurance:

Vitest: Vitest is used for unit and integration testing, ensuring the platform is reliable and functions as intended.

Dockerized Postgres for Testing: The platform leverages a Dockerized PostgreSQL instance for isolated testing, ensuring that the development and production databases are not affected by tests.

Modular Structure:

Component-based Architecture: The project is organized into reusable, self-contained components located in the /app/src/components directory. Each component follows the PascalCase naming convention and is grouped by the resource it represents (e.g., User, Shop, Project).

Hooks: Custom hooks are used for data fetching and state management, promoting reusability and separation of concerns. All hooks are located in the /app/src/hooks directory.

Scalability & Adaptability: The modular structure allows the platform to be easily adapted for different organizational requirements. It also ensures that future features can be added without affecting existing functionality.

Deployment & Environment

The backend uses Docker for containerization, ensuring consistency across different environments (development, testing, production).



