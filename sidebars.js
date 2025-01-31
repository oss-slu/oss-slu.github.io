/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  // /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'About Us',
      items: [
        {
          type: 'doc',
          id: 'about/about'
        },
        {
          type: 'doc',
          id: 'about/software'
        },
        {
          type: 'doc',
          id: 'about/students'
        },
        {
          type: 'doc',
          id: 'about/community'
        },
        {
          type: 'doc',
          id: 'about/partners'
        },
        {
          type: 'doc',
          id: 'about/internships'
        },
      ],
    },
    'portfolio',
    'oss-across-slu'
  ],
  //  */
};

module.exports = sidebars;
