// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'AnnoraNg', 
  },
  base: '/dataanalystprofile/',
  projects: {
    github: {
      display: true, 
      header: 'Projects',
      mode: 'manual',
      manual: {
        projects: [
          'AnnoraNg/2Market',
          'AnnoraNg/BankOfEngland',
          'AnnoraNg/NHS',
          'AnnoraNg/ShinChanUniverse',
          'AnnoraNg/TurtleGames',
        ],
      },
    },
    external: {
      header: '',
      projects: [],
    },
  },
  seo: { title: 'Data Portfolio of Annora Ng', description: '', imageURL: '' },
  social: {
    linkedin: 'www.linkedin.com/in/annorang',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', 
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'anntentalus@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'SQL',
    'Python',
    'Excel',
    'Tableau',
    'Power BI',
    'Google Ads',
    'Meta Business Suite',
    'Data Analysis',
    'Digital Marketing',
  ],
  experiences: [
    {
      company: 'Publicis Groupe',
      position: 'Media Planning Intern',
      from: 'Feb 2024',
      to: 'July 2024',
      companyLink: 'https://www.publicisgroupe.com',
    },
    {
      company: 'Razer',
      position: 'Digital & Social Marketing Intern',
      from: 'May 2022',
      to: 'Nov 2022',
      companyLink: 'https://www.razer.com',
    },
  ],
  certifications: [
    {
      name: 'Data Analytics Career Accelerator',
      body: 'The London School of Economics and Political Science',
      year: 'June 2025',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'National University of Singapore',
      degree: 'BBA in Marketing',
      from: '2019',
      to: '2023',
    },
    {
      institution: 'Hwa Chong Junior College',
      degree: 'GCE A Levels',
      from: '2017',
      to: '2018',
    },
  ],
  publications: [],
  blog: {
    source: '', 
    username: '', 
    limit: 0, 
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
