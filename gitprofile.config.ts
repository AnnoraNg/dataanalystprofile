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
  seo: { title: 'Data Portfolio of Annora Ng', description: 'Data Analyics Projects by Annora Ng', imageURL: 'https://raw.githubusercontent.com/AnnoraNg/dataanalystprofile/main/seo-cover.png' },
  social: {
    linkedin: 'annorang',
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
      'https://drive.google.com/file/d/1bMkkivrEbs5fuaOiMR29GCS4Zw01STLf/view?usp=sharing', 
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
    id: 'G-FDDCQ535SJ', 
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

    // Available themes. 
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

  enablePWA: true,
};

export default CONFIG;
