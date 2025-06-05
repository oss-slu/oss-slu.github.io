---
id: playbook
description: "Playbook: Operating an Open Source Program Office (OSPO) at a University"
custom_edit_url: null
---

# Playbook: Operating an Open Source Program Office (OSPO) at a University

## Introduction

This playbook describes an approach for operating an [Open Source Program Office (OSPO)](https://github.com/todogroup/ospodefinition.org) at a university, with a focus on actively building and maintaining research and community software tools. The OSPO serves as a hub for fostering open-source software development, collaboration, and knowledge-sharing within the university community and beyond. This OSPO also coordinates and contributes work on open source software projects, what some people call a ["muscular OSPO"](https://mospo.io/).

The primary goals of the OSPO are:

1. Provide students with hands-on experience in software development through open-source projects.
2. Develop and maintain software solutions that support research and community needs.
3. Promote the principles and practices of open-source software development.
4. Foster collaboration between the university, industry partners, and the broader open-source community.

## Resources Needed

1. **Project-based Courses:** Courses that primarily rely on hands-on software development projects as a teaching mechanism, such as senior capstone courses or software engineering courses.

2. **Tech Leads:** Experienced developers or mentors who can guide and oversee the project teams, provide technical expertise, and ensure adherence to best practices.

3. **Program Director:** A dedicated program director to manage the OSPO, coordinate activities, and oversee the overall operation, with a budget to support their salary.

4. **Computing Resources:** Appropriate computing resources (e.g., servers, cloud infrastructure) for projects that require more resources or specific environments.

5. **Software Project Requests:** A mechanism for faculty, researchers, or community members to submit software project requests or proposals aligning with their needs.

6. **Collaborators (Faculty, Researchers, Industry Partners):** Faculty members or researchers who need software solutions, as well as industry partners willing to sponsor projects or collaborate with the OSPO.

7. **Collaboration Tools:**
   - A GitHub organization account with teacher benefits for managing source code and collaboration.
   - A Slack instance (or similar communication platform) for team communication and coordination.
   - Physical space for meetings, workshops, and collaborative development sessions.

## Processes

### 1. Project Selection, Delivery, and Support

#### Project Selection Rubric

We have developed a [rubric](https://oss-slu.github.io/docs/about/software) for project selection. Since the majority of developers on the selected projects come from computer science project courses, the rubric evaluates projects based on their value to students, value to the research community, and value to promoting Open Source at the university. The rubric is applied to all submitted projects, and the number of 'yes' responses counts as the project score. Projects with higher scores are offered to students, who submit their rank-ordered lists of interest.

#### Statement of Work

Before engaging the development team, the OSPO staff creates a brief (1-2 pages) statement of work for each selected project. The statement of work includes a project overview, known high-level requirements, desired outcomes, expected deliverables, and success criteria. The statement of work serves as the starting point for the team, with the understanding that consistent communication with all stakeholders is necessary to ensure the end result is valuable.

#### Client Feedback and Iterations

Client feedback is solicited on various iterations of the project. The working functionality is presented to the client, who has the opportunity to try it out and report on what is working, what is not working, and what is lacking. This feedback is used to plan future efforts and ensure the project remains aligned with the client's needs.

#### Deployment and Support

We emphasize that the OSPO builds and maintains software and can help with deploying the software as necessary. We help clients develop a deployment plan and deploy the software for them. However, we do not commit to providing operational support for monitoring deployed services and ensuring they are available and accessible.

#### Known Challenges

Our clients have varying levels of technical knowledge, expectations, and needs. While we have defined a standard process for building software through our dedicated GitHub organization, some clients already have source code that they either wish for us to build upon or integrate with. In these cases, the challenge comes from understanding how to properly define the process that brings the most value to the client while providing a consistent experience for our student developers.

Additionally, we have encountered situations where clients want the code from our repository to be merged into their existing codebase, which can lead to challenges in maintaining contribution history and collaboration workflows.

From these non-standard examples, it becomes apparent that we need to define a clear collaboration process for technical clients who are involved in various aspects of project development.

#### Success Metrics

1. Number of projects actively used by clients.
2. Number of clients interested in continuing to work with us after collaborating for one academic year.

### 2. Software Development with Enrolled Students

#### Overview of the Capstone Course

The two-semester Computer Science senior capstone course serves as a platform where students transition from being learners to active contributors in the open-source domain. Beyond imparting technical skills, the course focuses on refining collaborative abilities and cultivating a shared understanding of building upon collective knowledge.

#### Team Formation

At the start of the semester, students are presented with project options and asked to rank-order all projects based on their interest and preferences. The course instructor uses these rank orders to form teams, which becomes a multi-objective optimization problem with the following objectives:

1. Keep team size between 2 and 4 people.
2. Maximize students' project interest.
3. Balance the overall team skill level.

While objectives 1 and 2 can be programmed, objective 3 is subjective and relies heavily on the instructor's familiarity with students' skills. In our case, team formation is done manually, but in the future, this process can be improved by programmatically assigning students to teams based on the identified objectives.

Once tentative teams are formed, all students interview with project-specific tech leads. This serves several purposes: enrolled students practice their interviewing skills, tech leads meet members of their team and can voice concerns, and tech leads practice being interviewers. Interview feedback allows the instructor to make team adjustments if necessary.

#### Development Process (Sprints, Pull Requests, Code Reviews)

Prior to the project start, tech leads create GitHub issues describing various development tasks that need to be completed. Once teams are formed, software development commences. The work is divided into 2-week sprints. During each sprint, each developer is responsible for resolving one issue in their GitHub repository.

We utilize "trunk-based" development to keep the process simple and manageable for the students. Each student creates a branch from the main branch of their project repository and works on their selected issue in that branch, pushing their branch to the remote repository occasionally.

At the end of week 1, each student is required to submit a draft pull request, demonstrating their progress. At the end of week 2, the work-in-progress pull request is converted to a pull request. The tech lead and other teammates review the pull request, providing comments and requesting changes if needed. Once all comments are addressed, the tech lead merges the pull request into the main branch. To earn credit for week 2, the student's pull request must be merged into the main branch by the deadline.

#### Known Challenges

1. **Fair Work Distribution:** The assessment of students' progress and accomplishments is based on the successful resolution of one issue during the 2-week sprint, with demonstrable progress at the end of week 1. Therefore, the issues/tasks need to be scoped to roughly equivalent amounts of work to keep the work distribution fair across teammates. Occasionally, a task may be too challenging to resolve within one 2-week sprint. Timely communication between all involved parties becomes a primary tool for identifying these cases. In such cases, the task continues into the next sprint, and the student receives credit for their effort.

2. **Team Mentality:** Our approach highlights individual accountability toward a common goal, and initially, students working on their individual tasks may not feel like a team. Most students are focused on getting their task completed to receive class credit for their work. Over time, students start reaching out to each other for help, as observed in our Slack workspace. There may also be in-person interactions that help create a sense of teamwork. To encourage and support students in helping each other, we have created an awards system: once a month, I recognize students nominated by their tech leads for their above-and-beyond contributions to team progress. This is an in-class recognition, where the student receives a recognition certificate and a coupon that can be redeemed for extra credit or a prize at the end of the semester.

#### Success Metrics

1. **Grades:** Grades are based on students' contributions, making them a valuable success metric.
2. **Student Feedback Survey:** We have developed a student survey where students rate various aspects of the process. While subjective, these ratings provide useful perspectives on which aspects of the process are more successful than others. The specific areas students are asked to rate include:
    - Clarity of project goals
    - Team communication
    - Tech leads
    - Value of the course
    - Their own involvement in the course

The Spring 2024 student survey report is available [here](https://slu.az1.qualtrics.com/reports/public/c2x1LTY2MzdmMzQ4MWZhNTA1MDAwOGU1NjJmYy1VUl8wd2h1M2Q1eFpaR2lkelU=).

### 3. Software Development with Volunteers

#### Overview of the Volunteer Contribution Process

Students often approach faculty looking for opportunities to get involved in research and development. While many seek paid work, some are interested in opportunities that will help them grow their skills and resumes. The OSPO's mission aligns with providing realistic software development experience through open-source contributions, making it an excellent way to involve such students. We refer to these students as volunteers.

Volunteers contact us in person and by email, asking how they can get involved. We direct them to our current project descriptions and ask them to identify a project they would like to contribute to. Once they select a project, we coach volunteers through the standard open-source contribution practice:

1. Create a fork of the repository
2. Run the code in the development environment
3. Select an issue they would like to work on (typically marked as a 'good first issue')
4. Make a comment in that issue, requesting to be assigned to it

#### Integrating Volunteers with the Core Team

The project tech lead assigns the issue to the volunteer, who works on the issue in their fork. Once completed, the volunteer submits a pull request to merge the code from their forked repository to the main branch of the original repository. The team (people with write access to the original repository) reviews the pull request, makes comments (asks for changes if appropriate), and addresses all comments. After all comments are addressed, the tech lead merges the pull request into the main branch, and the volunteer becomes an official contributor to the project.

We invite our volunteers to join the OSPO's Slack workspace and their specific project channel within that workspace. Slack provides volunteers with a faster way to communicate with the main development team and feel more integrated with the project.

#### Using Projects for Technical Interviews

In addition to student volunteers looking to grow their skills, we have used OSPO projects as a basis for technical interviews for graduate assistant jobs and postdoctoral positions offered by various faculty through their grant funds. We invite the job candidate to select a 'good first issue' from any of the ongoing projects and resolve the issue (using the same process as student volunteers). This is a valuable tool that helps us evaluate the candidate's development skills, and it is a service we provide for the faculty in our department. Successful contributions get merged into the main branch of the candidate-selected repository, which benefits the OSPO.

#### Known Challenges

1. **Finding Interested Volunteers:** It is challenging to find student developers interested in serving as 'volunteer' contributors. Many students seek monetary compensation for their work and lose interest when they learn this is a 'volunteer' role.

2. **Integrating External Developers:** Integrating external developers with the internal team is also a challenge. We need a better process to help external developers feel like they are part of the team.

3. **Retaining Volunteers:** We've had difficulty keeping external developers interested; they typically join by resolving one 'good first issue' and then we never hear back from them. Better engagement with external developers could help overcome this challenge.

#### Success Metrics

1. Number of issues resolved by external developers.
2. Number of issues resolved per external developer.

### 4. Community Training

#### Formal Training (In-Class)

Formal training occurs in courses that use OSPO projects as the basis for class assignments. This formal training takes place in class through lectures, hands-on exercises, and personal reflections on the learning experiences. Topics covered in class lectures and exercises include:

- Version control systems
- Git workflow
- Code reviews
- Presenting work to technical and non-technical audiences
- Software testing
- Continuous integration
- Secure software development
- Bash scripting
- Regular expressions
- System modeling
- Software performance

These topics are general enough to be applicable to all projects.

#### Semi-Formal Training (Workshops)

Semi-formal training focuses on specific tools applicable to a subset of projects. This training is led by OSPO graduate students as workshops open to the entire university community. Information about all past workshops is available [here](https://oss-slu.github.io/news).

#### Informal Training (Slack, Online Interactions)

Informal training takes the form of in-person and online interactions via the OSPO's Slack workspace, which is open to the public. We invite all interested community members (within and outside the university) to join us. Information about how to become part of our community is provided in the [Community section](https://oss-slu.github.io/docs/about/community) of our website.

#### Known Challenges

The breadth of projects makes it challenging to provide formal in-class training on relevant project-specific technologies because many teams use different technologies. This puts the responsibility for technology-specific training on the community itself. Ultimately, being able to learn new technologies independently is an important skill, and our program helps students develop this skill. Making this expectation clear and more intentional is a way to overcome this challenge.

#### Success Metrics

1. **Student Engagement Level:** The number of issues students resolve beyond the minimal course requirements.

### 5. Faculty Outreach

#### Overview

Faculty outreach is a crucial aspect of the OSPO's operations, as it helps identify potential research and development projects that can benefit from the OSPO's resources and expertise. The OSPO actively engages with faculty members across various departments to raise awareness about the services and support available through the program.

#### Strategies for Engaging Faculty

We have applied the following strategies to engage faculty in our OSPO:

1. **Presentations and Workshops:** The OSPO organizes presentations and workshops to introduce faculty members to the program, showcase successful projects, and highlight the benefits of collaborating with the OSPO.

2. **Individual Meetings:** OSPO representatives schedule individual meetings with faculty members to understand their specific research needs, discuss potential projects, and explore opportunities for collaboration.

3. **Departmental Meetings:** OSPO representatives attend departmental meetings to promote the program and solicit project proposals from faculty members.

4. **Networking Events:** The OSPO participates in university-wide networking events, such as research symposiums or faculty meetings, to raise awareness and connect with potential collaborators.

#### Preliminary Results support for Grant Applications

The success of faculty grant applications increases if they have done some preliminary work on the porposed research and have some preliminary results. This often becomes a "chicken and egg" problme - faculty need funding to do the preliminary research, but funding agencies require to show preliminary work and results. Open Source with SLU serves as a technology resource for the preliminary work - we help faculty create software tools they need to get their preliminary results, which they can use to enhance their grant applications. 

#### Including OSPO in Grant Budgets

The OSPO encourages faculty members to include the program's services in their grant proposals and budgets. By allocating funds for the OSPO's involvement, faculty can leverage the program's resources and expertise to develop and maintain software solutions that support their research projects.

#### Known Challenges

1. **Awareness and Understanding:** Many faculty members may not be aware of the OSPO's existence or may not fully understand the benefits of collaborating with the program.

2. **Competing Priorities:** Faculty members often have multiple responsibilities, including teaching, research, and administrative duties, which can make it challenging to allocate time for engaging with the OSPO.

3. **Funding Constraints:** Limited research budgets or grant restrictions may make it difficult for faculty members to include the OSPO's services in their funding proposals.

#### Success Metrics

1. Number of faculty members engaged with the OSPO.
1. Number of projects initiated through faculty collaborations.
1. Number of faculty grant applications that include prelimiary work/results empowered by our software tools.
1. Amount of funding secured for OSPO involvement in research projects.

### 6. Industry Outreach

#### Overview

Industry outreach is an essential component of the OSPO's operations, as it fosters collaboration between the university and industry partners. By engaging with industry, the OSPO can identify potential projects, secure funding, and provide students with real-world software development experiences that align with industry needs.

#### Strategies for Engaging Industry Partners

We have identified the following strategies and will be implementing these strategies in the near future.

1. **Industry Advisory Board:** Establish an industry advisory board comprising representatives from various companies and organizations. This board can provide valuable insights, identify potential collaboration opportunities, and help align the OSPO's efforts with industry needs.

2. **Industry Events and Conferences:** Participate in industry events, conferences, and networking opportunities to showcase the OSPO's capabilities and connect with potential partners.

3. **Targeted Outreach:** Identify companies and organizations that align with the OSPO's focus areas and conduct targeted outreach efforts to explore potential collaborations or sponsorship opportunities.

4. **Alumni Network:** Leverage the university's alumni network to connect with industry professionals and identify potential partners or sponsors.

#### Sponsoring Projects and Collaboration

Industry partners can sponsor specific projects or collaborate with the OSPO in various ways:

1. **Project Sponsorship:** Companies can sponsor projects that align with their business needs or areas of interest. This can involve providing funding, technical guidance, or access to proprietary tools or data.

2. **Internships and Co-op Programs:** Collaborate with the OSPO to offer internship or co-op opportunities for students, allowing them to gain practical experience while working on industry-relevant projects.

3. **Knowledge Sharing:** Industry partners can contribute to the OSPO's community training efforts by providing subject matter experts to lead workshops or seminars on industry-specific technologies or best practices.

4. **Mentorship Programs:** Establish mentorship programs where industry professionals can provide guidance and support to student developers working on OSPO projects.

#### Known Challenges

1. **Competing Priorities:** Industry partners may have competing priorities or limited resources, making it challenging to secure long-term commitments or significant investments.

2. **Intellectual Property Concerns:** Companies may be hesitant to collaborate on open-source projects due to concerns over intellectual property rights or the potential disclosure of proprietary information.

3. **Alignment of Goals:** Ensuring that the goals and objectives of the OSPO and industry partners are well-aligned can be a challenge, as they may have different priorities or expectations.

#### Success Metrics

1. Number of industry partners engaged with the OSPO.
2. Amount of funding or in-kind contributions secured from industry partners.
3. Number of students placed in internships, co-op programs, or full-time jobs through industry collaborations.
4. Number of industry-led workshops, seminars, or mentorship programs facilitated by the OSPO.

## 7. Case Studies

### Successful Projects

#### Where's Religion

Where's Religion project is a combination of a [desktop (web browser based) application](https://oss-slu.github.io/docs/project_wheres_religion_desktop/about) and a [mobile app](https://oss-slu.github.io/docs/project_wheres_religion_mobile/about) for ethnographic work. This project was developed for the SLU Center on Lived Religion (COLR), which studies how people experience religion outside of traditional places of worship. These applications allow ethnogrophers (people who study customs of people and cultures), or students who are learning about ethnography, to create and access notes, videos, photos, and audio recordings from their field work. These records are stored in the same place, are connected to each other, and can be shared with other users. The initial development of the mobile application was funded by the client - COLR paid an hourly rate for student developers to build a proof of concept application in the Spring 2023 semester. Open Source with SLU provided a tech lead for this team, at no cost to COLR. In the Fall 2023, the mobile app development transitioned to the capstone course student team, as described in the [Software Development with Enrolled Students](#2-software-development-with-enrolled-students) section of this playbook. An additional team from the same course began development of the companion desktop application, which provided users with more features for accessing and editing the notes, photos, videos, and audio recordings they have collected with the mobile app.

This project was successful based on the following success metrics (as described in this playbook):

- The project is actively used by the client (success metric from the [Project Selection, Deliveray, and Support](#1-project-selection-delivery-and-support) section)
- All students working on these projects received top grades (success metric from the [Software Development with Enrolled Students](#2-software-deveopment-with-enrolled-students) section)
- COLR staff applied for an NEH Digital Humanities Advancement Grant to continue their studies, based on the preliminary tools we built (success metric from the [Faculty Outreach](#5-faculty-outreach) section)
- Tech lead from this project received a job offer from COLR (success metric from the [Industry Outreach](#6-industry-outreach) section)

#### MeltShiny

MeltShiny allows computational chemists to perform the analysis of the aminoacid melting temperatures without the need for programming knowledge. It's a web browser based user interface that interacts with the [MeltR](https://github.com/JPSieg/MeltR) library. The application is deployed [here](https://oss-slu.shinyapps.io/MeltShiny/) and can be accessed by anyone with a web browser.

This project was successful based on the following success metrics (as described in this playbook):

- The client is intersted in continuing to work with us (after two years of collaboration). There are a few fixes that remain to be done to get this application to the state when it can be actively used by clients. (success metric from the [Project Selection, Deliveray, and Support](#1-project-selection-delivery-and-support) section)
- All students working on this rpoject recieved top grades. (success metric from the [Software Development with Enrolled Students](#2-software-deveopment-with-enrolled-students) section)
- We secured $25K in internal funding to continue development of this application. (success metric from the [Faculty Outreach](#5-faculty-outreach) section)

### Failed Project - Santiago

A request was submitted by a neuroscience lab for a desktop application for 3D imaging macroscopy data. An existing open source MatLab library was identified in the original request, but the lab did not have anyone with software development skills. The project was accepted on its scientific merits and with the expectation that the MatLab library coud be used as an engine for a desktop app. Early on risks were identified regarding a hard dependency on the upstream library with a sole developer, limited MatLab experience amongst available developers, and engineering challenges using MatLab as a procesing engine for a desktop based app. Ultimately the team faced significant challenges creating a performant application that could handle the volume of data in the 3D point clouds that MatLab was generating, and various team members expressed concern that the upstream library did not seem be getting maintenance updates.

There are several lessons learned from this project:

- The project selection rubric must weigh risk factors and either de-prioritize or find alternative approaches to projects with excessive risks.
- When considering open source libraries or dependencies, prioritize those with active development communities, frequent updates, and robust documentation, or find ways to engage with single-developer dependencies to begin building communities around their projects.
- Identify alternative means for supporting research software needs, including helping researchers with training or referrals to developers with more experience in a required tech stack.
