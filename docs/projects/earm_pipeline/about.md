---
id: about
title: eARM HPC Workflow Deployment
custom_edit_url: null
---

## Overview

Standing up the **eARM molecular modeling workflow** on SLU’s HPC cluster.  
The eARM pipeline is a computational framework that screens rhodopsin-like photoreceptors for fluorescent mutants.  
It chains together multiple molecular modeling and simulation tools, all coordinated by **pyARM**, and runs them on the HPC system with SLURM job scheduling and cron automation.  


## Information

- **Source Code:** -[https://github.com/oss-slu/earm_pipeline](https://github.com/oss-slu/earm_pipeline) [<img src="/img/git-alt.svg" alt="git" width="25" height="25" />](https://github.com/oss-slu/earm_pipeline)
- **Client:** eARM Scientific Community
- **Current Tech Lead:** Vani Walvekar [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/vani-walvekar1494)
- **Developers:** Collaborators at SLU HPC team, with support from Filippo and Massimo
- **Start Date:** Aug, 2025
- **Technologies Used:**
  - Python (pyARM framework)
  - Modeller, pdb2pqr, Dowser, FPocket, VMD, GROMACS
  - Molcas + Tinker (QM/MM calculations)
  - Conda environments
  - SLURM job scheduler
  - Crontab automation
- **Type:** Scientific Workflow / HPC Deployment
- **License:** MIT (https://opensource.org/license/mit)

## Technical Information

### Workflow Summary

1. **Protein Preparation**
   - Use *Modeller* to complete missing structure pieces.  
   - Use *pdb2pqr* to set charges and protonation states.  
   - Add water molecules with *Dowser* and detect cavities with *FPocket*.  

2. **Mutation Setup**
   - Generate mutant proteins with *pyARM*.  

3. **Molecular Dynamics (MD)**
   - Simulate protein motion with *GROMACS*.  

4. **QM/MM Calculations**
   - Extract snapshots and compute fluorescence properties with *Molcas* (with Tinker).  

5. **Analysis & Ranking**
   - pyARM ranks mutants based on predicted fluorescence and stability.  

6. **Automation on HPC**
   - All steps are scheduled with *SLURM* and chained with *crontab*.  
   - Enables running many mutants in parallel on the cluster.  

### Development Priorities

- Configure and deploy **pyARM-based workflows** on SLU’s HPC cluster.  
- Install and manage dependencies (GROMACS, Molcas, Modeller, pdb2pqr, Dowser).  
- Automate job execution with SLURM + cron.  
- Provide reproducible modulefiles and configuration for cluster users.  
- Deliver working demonstrations and documentation for collaborators.  

## Get Involved

If you would like to contribute to this project, please visit our [GitHub page](https://github.com/oss-slu/earm_pipeline) to create your own issues or pull requests.