---
id: about
title: Rerum Playground
custom_edit_url: null
---

## Overview

This is a web space that uses the RERUM installation at the Walter J. Ong, S.J. Center for Digital Humanities to explore the possibilities of interoperable tools and standards. By using the Tiny Things sandbox, users can immediately create reusable JSON-LD objects that conform to IIIF and Web Annotation standards and find new ways to interact with them. It can use devstore (sandbox) Tinydev as a proxy server. The tools are helpful with transcription, annotation, Geolocator ( Providing a URI and picking point coordinates for that) etc.

### Information

- **Source Code:**  
    - https://github.com/oss-slu/rerum-playground [<img src="/img/git-alt.svg" alt="git" width="25" height="25" />](https://github.com/oss-slu/rerum-playground)
    
- **Client** 
    - Patrick Cuba [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/cubap)
    - Bryan Haberberger [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/thehabes)

- **Current Tech Lead:** Lalith Adithya Reddy Avuthu [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/alar12)[<img src="/img/linkedin.svg" alt="linkedin" width="25" height="25" />](https://www.linkedin.com/in/lalith-adithya-reddy-avuthu-1a409b192/)

- **Developers:**
    - Haneen AlSewari [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/haneenalsewari)
    - Hayden Karl [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/haydenkarl22)
    - Samuel Sheppard [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/sesheppard)
    - Bryan Haberberger [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/thehabes)  (alumni)
    - Patrick Cuba [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/cubap)  (alumni)

- **Start Date:**  June 2020
- **Adoption Date:**  Aug 2024
- **Technologies Used:**
    - Tech Stack: Web development (RERUM APIs)
    - Key Languages: JavaScript, HTML, CSS, Backend services (TBD)
- **Type:** Web application
- **License:** Primary Developers: Bryan Haberberger and Patrick Cuba © 2023 Research Computing Group at Saint Louis University

### User Guide

#### Rerum Playground

RERUM Playground is a web-based toolset enabling users to work with IIIF manifests and JSON-LD objects. Users can bring their own manifest or create one within the playground, then use the listed tools to visualize, edit, and redirect the manifest to other compatible applications.

#### Overview
This project allows users to create, interact with, and manage IIIF-compliant JSON-LD objects, with an intuitive interface.

#### Key Features
Manifest Handling: Import or create IIIF manifests.

Tool Integration: Choose tools to interact with manifests, redirecting to compatible applications. 

## Technical Information 

### Technical Overview

Overview of the software architecture.

![Architecture](./architecture.png)

The "RERUM Playground" project is a web application designed to interact with the RERUM API. It consists of various components organized into frontend, services, and static assets. The frontend includes HTML, CSS, and JavaScript files to display and manage the user interface, such as tools, manifests, and configurations. The project also uses services like manifest storage and tool management, ensuring smooth user interaction and functionality. Static assets such as images and styles are stored separately. The GitHub repository for this project is [here](https://github.com/oss-slu/rerum-playground), and it follows a well-structured approach to maintain all code and assets within designated folders like web/js for scripts and web/images for visuals. This structure ensures the application is modular, easy to maintain, and scalable. 

### Development Priorities

- A sharable playground. Every tool should have a link to share their work build with that. 
- An option to upload/fetch the users manifest files (If they want to edit/start a new manifest we are building a manifest editor for that).
- Rerum tools page.
- CI/CD Workflows

## Get Involved

If you would like to contribute to this project, please visit our [GitHub page](https://github.com/oss-slu/rerum-playground) to create your own issues or pull requests.
