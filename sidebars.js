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
      label: 'Programs & Initiatives',
      link: {type: 'doc', id: 'programs/programs'},
      items: [
        {
          type: 'category',
          label: 'Experiential Learning',
          link: {type: 'doc', id: 'programs/experiential_learning'},
          items: [
            {
              type: 'category',
              label: 'Opening Skills & Solutions',
              link: { type: 'doc', id: 'programs/oss/skills_solutions'},
              items: [
                { type: 'doc', id: 'programs/oss/how_it_works' },
                { type: 'doc', id: 'programs/oss/student_experience' },
                { type: 'doc', id: 'programs/oss/team_structure' },
                { type: 'doc', id: 'programs/oss/get_involved' },
              ]
            },
            {
              type: 'doc',
              id: 'programs/bolt'
            },
            {
              type: 'category',
              label: 'Industry Fellows',
              link: { type: 'doc', id: 'programs/fellows/overview'},
              items: [
                { type: 'doc', id: 'programs/fellows/process_dates' },
                { type: 'doc', id: 'programs/fellows/faq' },
                { type: 'doc', id: 'programs/fellows/apply' },
              ]
            },
            {
              type: 'doc',
              id: 'programs/open_source_in_service'
            }
          ]
        },
        {
          type: 'doc',
          id: 'programs/consulting',
        },
        {
          type: 'doc',
          id: 'programs/advocacy',
        }
      ]
    },
    {
      type: 'category',
      label: 'Projects & Products',
      items: [
        {
          type: 'doc',
          id: 'projects/portfolio',
        },
        {
          type: 'doc',
          id: 'projects/oss-across-slu',
        },
      ]
    },
    {
      type: 'category',
      label: 'Connect with OSS',
      items: [
        {
          type: 'category',
          label: 'Get involved as an individual',
          items: [
            {
              label: 'Participate',
              type: 'doc',
              id: 'connect_with/participants',
            },
            {
              label: 'Contribute',
              type: 'doc',
              id: 'connect_with/community'
            },
            {
              label: 'Experience',
              type: 'doc',
              id: 'connect_with/experience'
            },
            {
              label: 'Lead',
              type: 'doc',
              id: 'connect_with/leadership'
            },
            {
              label: 'Mentor',
              type: 'doc',
              id: 'connect_with/mentor'
            },
          ]
        },
        {
          type: 'category',
          label: 'Partner as an organization',
          items: [
            {
              label: 'Partner',
              type: 'doc',
              id: 'connect_with/partners',
            },
            {
              label: 'Engage Programs',
              type: 'doc',
              id: 'connect_with/engage'
            },
            {
              label: 'Develop Software',
              type: 'doc',
              id: 'connect_with/solutions'
            },
            {
              label: 'Discover Talent',
              type: 'doc',
              id: 'connect_with/talent'
            },
            {
              label: 'Sponsor',
              type: 'doc',
              id: 'connect_with/sponsor'
            },
          ]
        },
        {
          type: 'category',
          label: 'Consult with an expert',
          items: [
          { 
            type: 'doc',
            id: 'connect_with/consult',
          },
          {
            label: 'Research Software Consults',
            type: 'doc',
            id: 'connect_with/rse'
          },
          {
            label: 'Clinics and Workshops',
            type: 'doc',
            id: 'connect_with/training'
          },
          {
            label: 'Open Data Planning',
            type: 'doc',
            id: 'connect_with/data'
          },
          {
            label: 'Open Science',
            type: 'doc',
            id: 'connect_with/open_science'
          },
          ]
        },
        {
          label: 'Make a gift',
          type: 'doc',
          id: 'connect_with/donate',
        },
      ],
    },
    {
      type: 'category',
      label: 'Open Resources',
      items: [
        {
          type: 'doc',
          id: 'resources/open/open',
        },
        {
          type: 'doc',
          id: 'resources/playbooks/playbook',
        },
        {
          type: 'doc',
          id: 'resources/role_guides/role_guides',
        },
      ]
    },
    {
      type: 'category',
      label: 'People',
      items: [
        {
          label: 'Leadership',
          type: 'doc',
          id: 'people/leadership'
        },
        {
          label: 'Staff',
          type: 'doc',
          id: 'people/staff',
        },
        { 
          label: 'Contributors',
          type: 'doc',
          id: 'people/contributors'
        },
        { 
          label: 'Affiliations',
          type: 'doc',
          id: 'people/affiliations'
        },
      ],
    },
  ],
  //  */
  portfolioSidebar: [
    {
      type: 'ref',
      label: 'Programs & Initiatives',
      id: 'programs/programs',
    },
    {
      type: 'category',
      label: 'Projects & Products',
      items: [
        {
          type: 'category',
          label: 'Portfolio',
          items: [
            {
              type: 'category',
              label: 'Active Products & Projects',
              items: [
                {
                  type: 'doc',
                  id: 'projects/dads/about',
                },
                {
                  type: 'doc',
                  id: 'projects/digital_bone_box/about',
                },
                {
                  type: 'doc',
                  id: 'projects/droneworld/about',
                },
                {
                  type: 'doc',
                  id: 'projects/esp/about',
                },
                {
                  type: 'doc',
                  id: 'projects/enhancing_bioinformatics_research_through_LLM/about',
                },
                {
                  type: 'doc',
                  id: 'projects/innerpeacetime/about',
                },
                {
                  type: 'doc',
                  id: 'projects/iris/about',
                },
                {
                  type: 'doc',
                  id: 'projects/MDMA/about',
                },
                {
                  type: 'doc',
                  id: 'projects/meltshiny/about',
                },
                {
                  type: 'doc',
                  id: 'projects/mouser/about',
                },
                {
                  type: 'doc',
                  id: 'projects/open_energy_dashboard/about',
                },
                {
                  type: 'doc',
                  id: 'projects/open_project/about',
                },
                {
                  type: 'doc',
                  id: 'projects/pi4micronaut/about',
                },
                {
                  type: 'doc',
                  id: 'projects/pilot_data_synchronization/about',
                },
                {
                  type: 'link',
                  label: 'TBE support Liraries',
                  href: 'https://github.com/oss-slu/tbe',
                },
                {
                  type: 'doc',
                  id: 'projects/saltify/about',
                },
                {
                  type: 'doc',
                  id: 'projects/shelter_volunteers/about',
                },
                {
                  type: 'doc',
                  id: 'projects/step_time_biofeedback/about',
                },
                {
                  type: 'doc',
                  id: 'projects/tpeninterfaces/about',
                },
                {
                  type: 'doc',
                  id: 'projects/wheres_religion_desktop/about',
                },
                {
                  type: 'doc',
                  id: 'projects/wheres_religion_mobile/about',
                },
                {
                  type: 'doc',
                  id: 'projects/wheres_religion_mobile/about',
                }
              ]
            },
            {
              type: 'category',
              label: 'Inactive Projects',
              items: [
                {
                  type: 'doc',
                  id: 'projects/bubblescan/about',
                },
                {
                  type: 'link',
                  label: 'Congestion Control Emulator',
                  href: 'https://github.com/oss-slu/Congestion-control-emulator',
                },
                {
                  type: 'doc',
                  id: 'projects/deer/about-deer',
                },
                {
                  type: 'link',
                  label: 'Drone Swarm',
                  href: 'https://www.aircraft-lab.org/',
                },
                {
                  type: 'doc',
                  id: 'projects/gallery_of_glosses/about',
                },
                {
                  type: 'doc',
                  id: 'projects/ispraak/about',
                },
                {
                  type: 'link',
                  label: 'ML Code Generator',
                  href: 'https://github.com/oss-slu/ml_code_generator',
                },
                {
                  type: 'doc',
                  id: 'projects/rerum_geolocator/about',
                },
                {
                  type: 'doc',
                  id: 'projects/rerum_playground/about',
                },
                {
                  type: 'link',
                  label: 'Santiago',
                  href: 'https://github.com/oss-slu/Santiago',
                },
                {
                  type: 'doc',
                  id: 'projects/sib/about',
                },
              ]
            },
          ]
        },
        {
          type: 'ref',
          label: 'OSS across SLU',
          id: 'projects/oss-across-slu'
        },
        // {
        //   type: 'ref',
        //   label: 'Whitepapers',
        //   id: 'projects/oss-across-slu'
        // },
      ],
    },
    {
      type: 'ref',
      label: 'Connect with OSS',
      id: 'connect_with/oss',
    },
    {
      type: 'ref',
      label: 'Open Resources',
      id: 'resources/open/open',
    },
    {
      type: 'ref',
      label: 'People',
      id: 'people/leadership',
    },
  ],
};

module.exports = sidebars;
