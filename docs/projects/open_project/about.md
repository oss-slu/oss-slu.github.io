---
id: about
title: SLU Open Project
custom_edit_url: null
---

## Overview

SLU Open Project is a web-based work management tool that enables shared service providers in universities and similar contexts. It was originally built to support the SLU Center for Additive Manufacturing (SLU-CAM), and is expanding to support a variety of use cases.

## Information

- **Source Code:** [https://github.com/oss-slu/open-project/](https://github.com/oss-slu/open-project/) [<img src="/img/git-alt.svg" alt="git" width="25" height="25" />](https://github.com/oss-slu/open-project/)
- **Client** SLU Center for Additive Manufacturing
- **Current Tech Lead:** Jack Crane [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/jackcrane) [<img src="/img/linkedin.svg" alt="linkedin" width="25" height="25" />](https://www.linkedin.com/in/jackcranee/)
- **Developers:**

  - Lakshmi Prasanna Mamillapalli (alumni, tech lead) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/lmamillapalli786) [<img src="/img/linkedin.svg" alt="linkedin" width="25" height="25" />](https://www.linkedin.com/in/lakshmiprasana784/)

  - Colin Sepher (capstone) (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/colinseper) [<img src="/img/linkedin.svg" alt="linkedin" width="25" height="25" />](https://www.linkedin.com/in/colin-seper/)

  - Thomas Macas (capstone) (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/ThomasMacas) [<img src="/img/linkedin.svg" alt="linkedin" width="25" height="25" />](https://www.linkedin.com/in/thomas-macas-3730a7251/)

  - Joi Laws (capstone) (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/lawsj) [<img src="/img/linkedin.svg" alt="linkedin" width="25" height="25" />](https://www.linkedin.com/in/joijanaelaws/)

- **Start Date:** Fall, 2025
- **Adoption Date:** January, 2025
- **Technologies Used:**
  - React
  - Vitest
  - Postgresql
- **Type:** Web application
- **License:** [LGPL 3.0](https://opensource.org/license/lgpl-3-0)

### User Guide

**🚀 SLU Open Project** is an open-source platform designed to manage distributed manufacturing, processing, and tool shops within an organization. Built with a modern, scalable tech stack, it emphasizes ease of use, maintainability, and adaptability to meet diverse organizational needs.

SLU open source project management platform is designed for distributed manufacturing, processing, and toolshops within an organization. It was specifically designed for the Saint Louis University Center for Additive Manufacturing, but can be adapted for other organizations.

## Technical Information

### 📘 Overview

**SLU OPEN PROJECT** is an open-source platform developed with the following stack:

- **Frontend**: [React](https://reactjs.org/)
- **Testing Framework**: [Vitest](https://vitest.dev/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)

The project is designed to support distributed manufacturing, processing, and toolshop workflows within organizations such as Saint Louis University’s Center for Additive Manufacturing.

The stack enables fast, modern UI development, reliable unit/integration testing, and robust relational data storage.

### 🧱 Tech Stack & Architecture

#### 🌐 Frontend

- **React with TypeScript**
  Provides a dynamic, interactive UI with the added benefits of static typing for improved code quality and maintainability.
- **UI Kit**
  Utilizes **Tabler React UI Kit (tabler-react-2)** for a consistent, responsive, and modern design.

---

#### 🖥 Backend

- **Express.js**
  A minimalist Node.js framework used for building the API and handling HTTP requests.
- **File-based Routing**
  Routes are organized in the `/routes` directory with a clean, scalable structure. All API routes are prefixed with `/api/`.

---

#### 🔐 Authentication

- **JWT-based Authentication**
  Uses JSON Web Tokens to secure API endpoints, with automatic token attachment for secure communication.
- **SSO Integration**
  Integrates with **SLU’s SAML-based Single Sign-On (SSO)** and **OKTA** for identity and session management.

---

#### 🔄 Data Fetching

- **Custom `authFetch` Utility**
  A wrapper around the native `fetch` API that automatically attaches JWT tokens to all requests for secure data fetching.

---

#### ✅ Testing & Quality Assurance

- **Vitest**
  Used for unit and integration tests to ensure reliability and correctness.
- **Dockerized PostgreSQL for Testing**
  Provides an isolated environment for testing, safeguarding production data.

---

#### 🧩 Modular Structure

- **Component-Based Architecture**
  UI components are organized in `/app/src/components`, grouped by resource (e.g., `User`, `Shop`, `Project`) and follow PascalCase naming conventions.
- **Custom Hooks**
  Located in `/app/src/hooks`, used for state management and data fetching, promoting code reuse and separation of concerns.
- **Scalability & Adaptability**
  The modular design enables easy customization and future feature development without disrupting existing functionality.

---

### ⚙️ Deployment & Environment

- **Docker**
  The backend is containerized using Docker, ensuring consistency across development, testing, and production environments.
