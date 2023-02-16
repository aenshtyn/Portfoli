import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
    title: 'Mohamed | Software Developer', // e.g: 'Name | Developer'
    lang: 'en, tr, ks', // e.g: en, es, fr, jp
    description: 'Welcome to my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
    title: 'Hello! My name is ',
    name: 'Mohamed',
    subtitle: 'A Full Stack Software Developer ',
    cta: '',
};

// ABOUT DATA
export const aboutData = {
    img: 'profile.jpg',
    paragraphOne: 'With about 4 years experience building, maintaining and testing applications of different scales, i have in the software development . ',
    paragraphTwo: 'I am proficient in Python - Django, Javascript - Angular and Vue and, Elixir.',
    paragraphThree: "I am more than capable to handle a project of any size.",
    resume: 'https://drive.google.com/file/d/1BCb9VUMWTrm-YtKMBxAg7jmoJkWgNhmf/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [{
        id: nanoid(),
        img: 'regal.jpg',
        title: 'Regal Studios',
        info: 'An interactive single page website that shows the creative works of the Regal group',
        info2: '',
        url: 'https://aenshtyn.github.io/regalstudios/',
        repo: 'https://github.com/aenshtyn/regalstudios', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: 'tito.jpg',
        title: 'Tito & Associates',
        info: 'A webapp built on Angular and Django that provides info to a law firms clients and analytics to the firm. Project ongoing',
        info2: '',
        url: 'https://titolaw.netlify.app/',
        repo: 'https://github.com/aenshtyn/Tito', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: 'kalima.jpg',
        title: 'Kalima',
        info: 'This is an ongoing project for a cooperative in in Kajiado. The application is to help and support the farmers in marketting and selling their produce. ',
        info2: '',
        url: 'https://aenshtyn.github.io/Kalima2/',
        repo: 'https://github.com/aenshtyn/Kalima2', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: 'regal.jpg',
        title: 'Regal Studios',
        info: 'An interactive single page website that shows the creative works of the Regal group',
        info2: '',
        url: 'https://aenshtyn.github.io/regalstudios/',
        repo: 'https://github.com/aenshtyn/regalstudios', // if no repo, the button will not show up
    },
];

// CONTACT DATA
export const contactData = {
    cta: '',
    btn: '',
    email: '',
    tel: '+254 714 347 036',
};

// FOOTER DATA
export const footerData = {
    networks: [{
            id: nanoid(),
            name: 'twitter',
            url: 'https://twitter.com/aenshtyn',
        },
        {
            id: nanoid(),
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/aenshtyn/',
        },
        {
            id: nanoid(),
            name: 'github',
            url: 'http://github.com/aenshtyn',
        },
    ],
};

// Github start/fork buttons
export const githubButtons = {
    isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};