---
id: about
title: "Rerum Server"
custom_edit_url: null
---

## Overview

Rerum Server is the RERUM API v1 — a JSON-LD annotation and digital object storage system that stores Web Annotations, SharedCanvas/IIIF objects, FOAF Agents, and any valid JSON objects. It provides full versioning, immutable release management, and Auth0-based authorization. The server is deployed at [store.rerum.io](https://store.rerum.io) and serves as the backend for the RERUM ecosystem of digital humanities tools.

### Information

- **Source Code:** [https://github.com/oss-slu/rerum_server_nodejs](https://github.com/oss-slu/rerum_server_nodejs) [<img src="/img/git-alt.svg" alt="git" width="25" height="25" />](https://github.com/oss-slu/rerum_server_nodejs)
- **Client:** Walter J. Ong Center for Digital Humanities
- **Track:** Client-driven Product
- **Current Tech Lead:** Reshma Dudekula [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/allenbakki)
- **Developers:**
  - Joel Aikkarakudiyil Joby (capstone) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/joeljoby02)
  - Mehul Antony (capstone) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/Mehulantony)
- **Start Date:** Jan, 2026
- **Technologies Used:**
  - Node.js 22+, Express (API framework)
  - MongoDB (document store)
  - Auth0 / OAuth2 JWT (authentication)
  - JSON-LD, IIIF (linked data standards)
  - Jest, Supertest (testing)
  - GitHub Actions (CI/CD)
- **Type:** API Server
- **License:** [MIT](https://opensource.org/license/mit)

## Technical Information

### Development Priorities

- Expand test coverage across route handlers and controllers
- Fix HTTP/HTTPS URL matching inconsistencies in Gallery of Glosses endpoints
- Add pagination support for large query result sets
- Implement database connection health checks
- Improve bulk operation slug assignment

## Get Involved

If you would like to contribute to this project, please visit our [GitHub page](https://github.com/oss-slu/rerum_server_nodejs) to create your own issues or pull requests.
