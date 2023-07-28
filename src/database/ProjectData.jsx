// tech: frameworks, api, semi-frameworks, stylers
const projects = [
  {
    title: 'Spotify',
    src: 'spotify',
    slug: 'spotify',
    code: 'spotify',
    color: '#FFF',
    tech: 'NextJs, Spotify API, Next-Auth, Recoil, Tailwind, Framer-Motion',
    href: 'https://stream.joshuaedo.com/',
    year: 2023,
    demo: 'https://youtu.be/RDafUnvD090',
    overview:
      'A recreation of the Spotify web app UI with some conditional functionality.',
    description:
      'Apart from rendering songs and playlists, the app also acts as a remote control for other devices where you are logged into your Spotify Account.',
    documentation: 'https://github.com/joshuaedo/spotify#readme',
    next: {
      title: 'Netflix',
      year: '2023',
      slug: 'netflix',
    },
  },
  {
    title: 'Netflix',
    src: 'netflix',
    slug: 'netflix',
    code: 'netflix',
    color: '#EFE8D3',
    tech: 'ReactJs, TMDB API, Redux, React-Router, Firebase, Lodash',
    // href: 'https://joshuaedo-binge.vercel.app/',
    year: 2023,
    demo: 'https://youtu.be/krHx-I6npkM',
    overview: 'A movie trailer app.',
    description:
      'Complete with Firebase × Google user sign-in authentication, this website shows proficiency in Rest API integration along with skeletonized page loading for slow networks.',
    documentation: 'https://github.com/joshuaedo/netflix/#readme',
    next: {
      title: 'Google',
      year: '2023',
      slug: 'google',
    },
  },
  {
    title: 'Google',
    src: 'google',
    slug: 'google',
    code: 'google',
    color: '#706D63',
    tech: 'NextJs, Google API, Recoil, Tailwind, Hero Icons.',
    href: 'https://search.joshuaedo.com/',
    year: 2023,
    demo: 'https://youtu.be/qO7OML8_Pnk',
    overview: "It's basically google.com but not quite.",
    description:
      "Utilizing the open source Google API, I recreated Google Search. To the casual user it's not immediately differentiable from the real website.",
    documentation: 'https://github.com/joshuaedo/google/#readme',
    next: {
      title: 'Apple',
      year: '2023',
      slug: 'apple',
    },
  },
  // {
  // title: 'Arese Sylvester',
  // src: "arese.png",
  // slug: "arese",
  // code: "https://github.com/omgitsarese/aresesylvester"
  // color: "#706D63",
  // href: 'https://www.aresesylvester.com/',
  // year: 2022,
  // demo: "https://drive.google.com/file/d/1DHGDV1PPAv0449WfFUwjy2BBQ3okfAQd/view?usp=drive_link",
  // overview: '',
  // description: '',
  // documentation: '',
  //},
  {
    title: 'Apple',
    src: 'apple',
    slug: 'apple',
    code: 'apple',
    color: '#FFF',
    tech: 'NextJs, Tailwind, React-Responsive-Carousel, Framer-Motion.',
    href: 'https://think-different.joshuaedo.com/',
    year: 2023,
    demo: 'https://twitter.com/thegr8joshua/status/1670077556521926656',
    overview: "Apple's landing page during the unveiling of the Vision Pro.",
    description: null,
    documentation: null,
    next: {
      title: 'Portfolio V3',
      year: '2023',
      slug: 'portfolio-v3',
    },
  },
  {
    title: 'Portfolio V3',
    src: 'portfolio-v3',
    slug: 'portfolio-v3',
    code: 'portfolio-v3',
    color: '#8C8C8C',
    tech: 'NextJs, JQuery, NodeMailer, Tailwind, React-Bootstrap, Framer-Motion.',
    href: 'https://v3.joshuaedo.com/projects',
    year: 2023,
    demo: null,
    overview: 'My third portfolio website.',
    description:
      'Built while making the transition from create-react-app to NextJs.',
    documentation: null,
    next: {
      title: 'Blog',
      year: '2023',
      slug: 'blog',
    },
  },

  {
    title: 'Blog',
    src: 'blog',
    slug: 'blog',
    code: 'my-blog',
    color: '#8C8C8C',
    tech: 'NextJs, GraphQL, Hygraph, OpenAI Model Playground.',
    href: 'https://blog.joshuaedo.com/',
    year: 2023,
    demo: null,
    overview:
      'This app was built to gain experience in the utilization of GraphQL and Headless CMS.',
    description: 'Disclaimer: The articles on this website are AI-generated.',
    documentation: null,
    next: {
      title: 'Cleander',
      year: '2022',
      slug: 'cleander',
    },
  },

  {
    title: 'Cleander',
    src: 'cleander',
    slug: 'cleander',
    code: 'cleander',
    color: '#FFF',
    tech: 'HTML, CSS, Bootstrap, Font-Awesome',
    href: 'https://cleander.joshuaedo.com/',
    year: 2022,
    demo: null,
    overview: 'Need a housekeeper?',
    description:
      'This is a landing page for a fictional website where users can hire housekeepers remotely. And yes Cleander is wordplay on cleaner and Tinder :}',
    documentation: null,
    next: {
      title: 'joshua-GPT',
      year: '2023',
      slug: 'joshua-gpt',
    },
  },
  {
    title: 'joshua-GPT',
    src: 'joshuaGPT',
    slug: 'joshua-gpt',
    code: null,
    color: '#8C8C8C',
    tech: 'NodeJs, ExpressJs, OpenAI API, Telegram API, Dotenv.',
    href: 'https://t.me/joshuaedo_bot',
    year: 2023,
    demo: 'https://youtu.be/yuroCFONrTo',
    overview: 'A multipurpose Telegram bot.',
    description:
      'Not only can it answer predefined questions about myself, this bot is also connected to the Open AI API, allowing it to function similarly to chatGPT.',
    documentation: null,
    next: {
      title: 'Style Your Div',
      year: '2023',
      slug: 'style-your-div',
    },
  },
  {
    title: 'Style Your Div',
    src: 'style-your-div',
    slug: 'style-your-div',
    code: 'style-your-div',
    color: '#FFF',
    tech: 'HTML, CSS',
    href: 'https://style-your-div.joshuaedo.com/',
    year: 2023,
    demo: 'https://twitter.com/thegr8joshua/status/1627770957971456001',
    overview: 'Edit text directly in the DOM to style the div.',
    description:
      'A CSS Playground that I personally think would be a great addition to W3schools.',
    documentation: 'https://github.com/joshuaedo/style-your-div#readme',
    next: {
      title: 'Ryter',
      year: '2022',
      slug: 'ryter',
    },
  },
  {
    title: 'Ryter',
    src: 'ryter',
    slug: 'ryter',
    code: 'ryter',
    color: '#EFE8D3',
    tech: 'HTML, Javascript, CSS, Font-Awesome.',
    href: 'https://ryter.joshuaedo.com/',
    year: 2022,
    demo: null,
    overview: 'A productivity app for writers.',
    description:
      'From note-taking to speech-to-text functionality, this website is an amalgamation of 5 separate web apps that could prove useful to the average writer.',
    documentation: 'https://github.com/joshuaedo/ryter/#readme',
    next: {
      title: 'Business Card',
      year: '2023',
      slug: 'business-card',
    },
  },
  {
    title: 'Business Card',
    src: 'business-card',
    slug: 'business-card',
    code: 'business-card',
    color: '#8C8C8C',
    tech: 'ReactJs, Font-Awesome.',
    href: 'https://card.joshuaedo.com/',
    year: 2023,
    demo: null,
    overview: null,
    description:
      "Aptly named, it is a demo business card, built while I was in the process of understanding how to harness React's code-splitting features.",
    documentation: null,
    next: {
      title: 'Drum',
      year: '2022',
      slug: 'drum',
    },
  },
  {
    title: 'Drum Kit',
    src: 'drum',
    slug: 'drum',
    code: 'Drum-Hero',
    color: '#EFE8D3',
    tech: 'HTML, JavaScript, CSS.',
    href: 'https://drum.joshuaedo.com/',
    year: 2022,
    demo: null,
    overview: 'Click and play.',
    description:
      'A single page, 100vh webpage that allows users to play drum sounds by clicking buttons on the screen or some designated keys on the keyboard.',
    documentation: null,
    next: {
      title: 'Dice Game',
      year: '2022',
      slug: 'dice',
    },
  },
  {
    title: 'Dice Game',
    src: 'dice',
    slug: 'dice',
    code: 'Dice-Game',
    color: '#706D63',
    tech: 'HTML, JavaScript, CSS.',
    href: 'https://dice.joshuaedo.com/',
    year: 2022,
    demo: null,
    overview:
      "If you're looking for a virtual coin toss then this should suffice.",
    description:
      "Using JavaScript's Math.random(), I ensured that with each refresh there's a new winner (or a draw in some cases).",
    documentation: null,
    next: {
      title: 'Portfolio V2',
      year: '2022',
      slug: 'portfolio-v2',
    },
  },
  {
    title: 'Portfolio V2',
    src: 'portfolio-v2',
    slug: 'portfolio-v2',
    code: 'portfolio-V2',
    color: '#EFE8D3',
    tech: 'HTML, CSS',
    href: 'https://v2.joshuaedo.com/',
    year: 2022,
    demo: null,
    overview: 'My second portfolio website.',
    description:
      "Not a fancy landing page by today's standards but greatly improved from the first.",
    documentation: null,
    next: {
      title: 'Portfolio V1',
      year: '2022',
      slug: 'portfolio-v1',
    },
  },
  {
    title: 'Portfolio V1',
    src: 'portfolio-v1',
    slug: 'portfolio-v1',
    code: 'portfolio-V1',
    color: '#706D63',
    tech: 'HTML',
    href: 'https://v1.joshuaedo.com/',
    year: 2022,
    demo: null,
    overview: 'My first ever attempt at a portfolio website.',
    description: "A grounding reminder of how far I've come.",
    documentation: null,
    next: null,
  },
];

export { projects };
