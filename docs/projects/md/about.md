---
id: about
title: MaterialDerailleur
custom_edit_url: null
---

## Overview

MaterialDerailleur shifts donations into drive for BWorks. A donated item may need to be received, inspected, categorized, repaired, stored, labeled, assigned to a program, and eventually distributed. When that work is tracked in paper logs, spreadsheets, informal messages, or memory, records can be lost or duplicated as an item's condition, location, and status change.

MaterialDerailleur brings donation records, donor details, item status history, barcode labels, and program information into one system. It gives staff and volunteers a shared view of each item from intake through distribution, while preserving the information BWorks needs to acknowledge donors and report on their contributions. The goal is to help the organization spend less time searching through disconnected records and more time serving its community.

### Information

- **Source Code:** [https://github.com/oss-slu/material-derailleur](https://github.com/oss-slu/material-derailleur) [<img src="/img/git-alt.svg" alt="git" width="25" height="25" />](https://github.com/oss-slu/material-derailleur)
- **Client:** BWorks Organization
- **Track:** Client-driven Product
- **Current Tech Lead:** [Mathew Shereni](https://mathewshereni.com/) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/MATHEW-SHERENI) [<img src="/img/linkedin.svg" alt="linkedin" width="25" height="25" />](https://www.linkedin.com/in/mathew-shereni-213130aa/)
- **Developers:**
  - Cole Patrick (capstone) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/colepatrick)
  - Tori Willis (capstone) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/twillis8)
  - Vinay Billa (alumni, prior tech lead) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/vinay-billa-slu) [<img src="/img/linkedin.svg" alt="linkedin" width="25" height="25" />](https://www.linkedin.com/in/vinay-billa-612757170/) [<img src="/img/portfolio.svg" alt="portfolio" width="25" height="25" />](https://billavinay.netlify.app/)
  - Gayatri Jawharkar (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/Gayatrinj)
  - Sarvesh Sonawane (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/Sarvesh-7777)
  - Lalith Adithya Reddy Avuthu (alumni, previous tech lead) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/alar12)
  - Sam Kann (capstone) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/dracpak)
  - Josheph Hansen (capstone) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/truffer11)
  - Sai Teja Dugyala (capstone) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/saidugyala)
  - AJ Ashgari (capstone) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/aasghari01)
  - Sai Kiran Reddy Beeram (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/saikiran0405) [<img src="/img/linkedin.svg" alt="linkedin" width="25" height="25" />](https://www.linkedin.com/in/sai-kiran-reddy-beeram-866075190/)
  - Mahaboob Pasha Mohammad (alumni) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/miabu-pashh) [<img src="/img/linkedin.svg" alt="linkedin" width="25" height="25" />](https://www.linkedin.com/in/mohammad-mahaboob-pasha/)
  - Anjali Putta (previous tech lead) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/Anjali0407-git/) [<img src="/img/linkedin.svg" alt="linkedin" width="25" height="25" />](https://www.linkedin.com/in/anjali-putta-278164227/) [<img src="/img/portfolio.svg" alt="portfolio" width="25" height="25" />](https://anjali-official.netlify.app/)
  - Siri Chandana Garimella (proof of concept) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/SiriChandanaGarimella)
  - Manohar Reddy YRL (proof of concept) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/yrlmanoharreddy)
  - Chirag Gupta (proof of concept) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/Chirag2x)
  - Abhi Stephen Rokkam (proof of concept) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/Abhi-Stephen)
  - Krishnakanth Burugu (proof of concept) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/krishnakanth-slu)
  - Brijitha Tialu (proof of concept) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/Brijitha1609)
  - Deepak PVSN (proof of concept) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/deepak-pvsn)
  - Maryam Moshrefizadeh (proof of concept) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/Moshrefi)
- **Start Date:** March 2024
- **Adoption Date:** March 2024
- **Technologies Used:**
  - React and TypeScript
  - Node.js, Express, and TypeScript
  - Prisma
  - PostgreSQL
  - Azure Blob Storage
- **Type:** Web application
- **License:** [MIT](https://opensource.org/license/mit)

## Donation and Inventory Workflow

MaterialDerailleur supports the full lifecycle of a donated item:

1. A donation is entered into the system and connected to its donor.
2. Each item is assigned a type, program, condition, and status.
3. A barcode label is generated for inventory tracking.
4. Staff or volunteers add status updates as the item is inspected, repaired, stored, or distributed.
5. The item's history remains connected to the donor for communication and reporting.

The donated-items dashboard provides a searchable inventory view. Users can search by item ID, name, or donor; filter by item type, program, or status; and access barcode tools for labeling and tracking.

![MaterialDerailleur donated-items dashboard with search, filters, and barcode actions](./donatedItem.png)

### Core Platform Capabilities

- Donation intake and donated-item tracking
- Donor profile and contact management
- Item status history
- Barcode and label generation
- Inventory search and filtering
- Program-based organization of donations
- Administrative workflows for reviewing and updating donated items

### User Guide

After logging in, users are directed to the homepage and can navigate to these sections:

- **Donations:** View, search, and filter donated items.
- **Donor Form:** Register a new donor.
- **Programs:** Create and manage programs that use donated items, and connect donations to those programs.
- **Item Details:** Review an item's history, update its status, upload photos, print its barcode, and send updates to its donor.

![MaterialDerailleur donated-item details page with status history, barcode, donor, and program information](./donatedItemDetails.png)

## Software Architecture

MaterialDerailleur separates the browser-based client, REST API, structured data, and uploaded files so each part can support a distinct part of the donation workflow.

![MaterialDerailleur software architecture overview](./architecture-overview.png)

- **Client application:** React and TypeScript support reusable forms, search and filtering controls, detail views, and barcode actions while keeping donation and status fields explicit in the interface.
- **REST API:** Node.js, Express, and TypeScript provide a central layer for authentication, role-based access, and donation, donor, inventory, and status workflows. Prisma maps those API operations to the database.
- **Data and file storage:** PostgreSQL stores related records such as donations, donors, item types, programs, statuses, and users. Azure Blob Storage keeps uploaded images and documents outside the relational database.

## Development Priorities

- Implement CRUD interfaces for donors, donated items, and programs.
- Develop backend APIs to support these operations.
- Improve the automatic email workflow so donors receive timely updates.
- Support importing donor and item details from external sources.
- Develop detailed documentation for application administrators.

## Get Involved

To contribute, visit the [MaterialDerailleur repository](https://github.com/oss-slu/material-derailleur) and open an issue or pull request.
