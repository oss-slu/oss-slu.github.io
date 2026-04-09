---
id: about
title: "iperf3"
custom_edit_url: null
---

## Overview

This project contributes to iperf3, the widely-used open-source network bandwidth measurement tool developed by ESnet at Lawrence Berkeley National Laboratory. The OSS SLU team focuses on completing QUIC protocol integration into iperf3, including multi-stream support, automated testing infrastructure, and performance evaluation under controlled network conditions. This is upstream contribution work — changes are intended to be merged back into the official iperf3 project.

### Information

- **Source Code:** [https://github.com/oss-slu/iperf](https://github.com/oss-slu/iperf) [<img src="/img/git-alt.svg" alt="git" width="25" height="25" />](https://github.com/oss-slu/iperf)
- **Upstream:** [https://github.com/esnet/iperf](https://github.com/esnet/iperf)
- **Client:** ESnet / iperf3 Open Source Community
- **Track:** Client-driven Product
- **Current Tech Lead:** Mansi Gidugu [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/Mansi-SLU)
- **Developers:**
  - Revateesa Dammalapati (capstone) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/Reva335)
  - Leandru Martin (capstone) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/leandrumartin)
- **Start Date:** Jan, 2026
- **Technologies Used:**
  - C (primary language)
  - MsQuic (QUIC protocol implementation)
  - OpenSSL (authentication/TLS)
  - GNU Autotools (build system)
  - TCP, UDP, SCTP, QUIC protocols
- **Type:** CLI / Networking
- **License:** [BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)

## Technical Information

### Development Priorities

- Complete QUIC protocol integration with parallel stream and reverse mode support
- Build end-to-end test suites validating QUIC across main user scenarios
- Document reproducible testing workflows for controlled network conditions
- Develop distributed testbed automation for large-scale QUIC experiments
- Performance evaluation and visualization of QUIC vs TCP/UDP

## Get Involved

If you would like to contribute to this project, please visit our [GitHub page](https://github.com/oss-slu/iperf) to create your own issues or pull requests.
