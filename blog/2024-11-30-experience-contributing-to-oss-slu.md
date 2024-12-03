---
title: Experience contributing to OSS-SLU
slug: experience_contributing_to_oss-slu
authors: [anjali]
hide_table_of_contents: false
---

Recently, I undertook the challenge of updating the **'About'** page for open source with SLU at https://oss-slu.github.io/docs/about. This page includes **About Us** content alongside the profiles of the **Leadership Team**.

<!--truncate-->

### The Challenge 
The goal was to update the details of our **current** and **previous tech leads** within a markdown file. Originally, each tech lead was represented by individual `div` elements in a markdown file. As the number of tech leads grew, so did the length of the document.

![Current Tech Leads](./experience-contributing-to-oss-20241130/current-tech-leads.jpg)

![Previous Tech Leads](./experience-contributing-to-oss-20241130/previous-tech-leads.jpg)

### Initial Approach
To streamline this, I considered moving from plain **Markdown** to **MDX**, which allows embedding React components directly into markdown files. This switch required creating `next.config.js`, which essentially tells **Next.js** to support MDX. I crafted a `Profile` component in `src/components/people`, aiming for better maintainability by grouping react components by functionality. 

![Component Tree](./experience-contributing-to-oss-20241130/file-tree-outer.jpg)

I replaced each static `div` with this dynamic `Profile` component within the MDX file, which seemed promising. However, this transition didn't reduce the overall verbosity as I had hoped. To address this, I experimented using JSX and loops directly in the MDX files, aiming to replace multiple `Profile` components with a single loop that could dynamically render each tech lead. This approach intended to simplify the document further by minimizing repetitive code. Unfortunately, this method faced limitations when dealing with intricate functionalities, emphasizing the constraints of MDX with more complex logic.

### A Strategic Pivot
Realizing the limitations of directly using MDX for complex interactions, I shifted strategy. I created separate React components for the current and previous tech leads and sourced their data from JSON files — `currentGradTechLeads.json` and `prevGradTechLeads.json`. 

![JSON Data Tree](./experience-contributing-to-oss-20241130/json-data.jpg)

This approach allowed me to loop through the JSON data within these components, dynamically populating the `Profile` component. By consolidating all profiles under the CurrentTechLeads and PrevTechLeads components within the MDX file, I eliminated approximately 60-70 lines of code, simplifying the document structure and enhancing maintainability.

### Understanding MDX’s Power and Limitations
This experience highlighted MDX's strengths in enriching markdown files with interactive React elements and the ease of embedding JSX directly. However, it also revealed its limitations in executing more complex conditional rendering and iterative processes. For such dynamic functionalities, external JavaScript proved to be more effective, offering greater flexibility and control over the content management and interaction logic on the page.

### Final Touches
Ensuring the page's navigational elements remained intact was crucial, so I have tested to ensure all links and anchors functioned correctly, preserving the user experience. 

![Navigator on About Page](./experience-contributing-to-oss-20241130/navigator.jpg)

### Reflections and Takeaways
This project highlighted the evolving capabilities of web technologies like **MDX** and **React**, demonstrating their potential to transform content management. The use of MDX, coupled with React and external JSON data, provided a modular, maintainable approach that could easily be adapted or expanded by future developers.

Contributing to this project was an enriching experience, deepening my understanding of modern content management strategies and reinforcing the importance of adaptability in web development. Check out my work and contribute at [**OSS-SLU GitHub**](https://github.com/oss-slu/oss-slu.github.io).

