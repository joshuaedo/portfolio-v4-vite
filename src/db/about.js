import { calculateAge } from '@/lib/utils';

const birthYear = 2002;
const age = calculateAge(birthYear);

export const aboutData = [
  {
    color: 'purple',
    content: {
      imgSrc:
        'https://joshuaedo.sirv.com/joshuaedo/public/images/original/=).png',
      topHeight: '80px',
      topWidth: '80px',
      title: 'Labels',
      items: `${age} • he/him • designer • engineer • developer`,
      gifSrc: 'https://media4.giphy.com/media/hiJ9ypGI5tIKdwKoK2/giphy.gif',
    },
    avatar: true,
  },
  {
    color: 'green',
    content: {
      videoSrc:
        'https://joshuaedo.sirv.com/joshuaedo/public/videos/skills-2.mp4',
      topHeight: '18px',
      topWidth: '18px',
      title: 'Skills',
      items:
        'javascript • nextjs & reactjs • tailwind & css • attention to detail • fifa',
      gifSrc: 'https://media3.giphy.com/media/TibATeFWhd439Fhupc/giphy.gif',
    },
    isVideo: true,
  },
  {
    color: 'blue',
    content: {
      videoSrc: 'https://joshuaedo.sirv.com/joshuaedo/public/videos/likes.mp4',
      topHeight: '15px',
      topWidth: '15px',
      title: 'Stuff I Like',
      items: 'chess • pizza • chelsea • how i met your mother • dan brown',
      gifSrc: 'https://media4.giphy.com/media/n9nTs7W2sDc0WdQ8wR/giphy.gif',
    },
    isVideo: true,
  },
  {
    color: 'yellow',
    content: {
      topHeight: '40px',
      topWidth: '40px',
      title: 'Services',
      items:
        'blogs • portfolios • entertainment websites • e-commerce websites • custom websites',
      gifSrc: 'https://media2.giphy.com/media/eTQu5MrqHgo2dF9Y3q/giphy.gif',
    },
    headline: 'HAVE AN IDEA?',
    cta: { name: 'Get In Touch', link: 'mailto:joshua.edo01@gmail.com' },
  },
];
