import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ibrahim Azhad | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, My name is',
  name: 'Ibrahim Azhad',
  subtitle: 'Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile3.jpg',
  paragraphOne: 'I have been developing softwares for more than 5 years because I enjoy making apps and websites with a focus on UI/UX.',
  paragraphTwo: 'So far i have been working with only one company - codeworks. My work there mainly is developing and deploying Ruby on Rails projects and iOS Projects. I also have experience in laravel, react, nextjs and vue.',
  paragraphThree: 'I am focused now is on learning other technologies like flutter, svelte, strapi and typescript.',
  resume: '/resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'zamzam-mobile.png',
    title: 'ZamZam Umra Umra App (Android & iOS)',
    info: 'Developed for ZamZam Hajj and Umra Group. This app gives the information about the steps, duas and other information related to Hajj and Umra trips. ',
    info2: 'Languages: Java for android, swift for iOS',
    url: 'https://play.google.com/store/apps/details?id=com.codeworks.zamzam_umra',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'moosun.png',
    title: 'Moosun App (iOS)',
    info: 'Weather Application developed for Maldives Meteorological Service which shows daily weather stats, alerts and other weather related information',
    info2: 'Developed using xcode with swift programming language',
    url: 'https://apps.apple.com/us/app/moosun/id1466050828',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'karaoke.png',
    title: 'karaoke.mv (web)',
    info: 'Dhivehi Karaoke website developed for a client.',
    info2: 'Developed using Ruby on Rails framework.',
    url: 'https://karaoke.mv/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'ib.azhad@gmail.com',
  btn: '',
  email: 'ib.azhad@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ib-azhad/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ib-azhad',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
