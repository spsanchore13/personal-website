type Project = {
  name: string
  description: string
  link: string
  techStacks: string[]
  github: string
  live: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

export type Education = {
  institution: string
  degree: string
  start: string
  end: string
  link?: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'MyWealth',
    description:
      'MyWealth: Smart investment platform for tracking, managing, and growing wealth effortlessly.',
    link: 'https://mywealth.fabits.com/login',
    image: '/my-wealth.png',
    id: 'project1',
    techStacks: [
      'React',
      'JavaScript',
      'Material UI',
      'TailwindCSS',
      'Recoil',
      'shadcn/ui, Zustand',
    ],
    github: '',
    live: 'https://mywealth.fabits.com/login',
  },
  {
    name: 'Genius AI',
    description:
      'AI SaaS: Chat, code, images, music, videos, with Stripe payments and Crisp support.',
    link: 'https://next-js-ai-saas.vercel.app/',
    image: '/genius-ai.png',
    id: 'project2',
    techStacks: [
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'Node.js',
      'Clerk Auth',
      'Crisp Chat',
      'OpenAI',
      'DALL.E',
      'Replicate AI',
    ],
    github: 'https://github.com/spsanchore13/next-js-ai-saas',
    live: 'https://next-js-ai-saas.vercel.app/',
  },
  {
    name: 'Discord Clone',
    description:
      'Discord Clone: Create servers, channels, chat, call, and manage members with socket.io & Livkit SDK.',
    link: 'https://github.com/spsanchore13/next.js-discord-clone',
    image: '/genius-ai.png',
    id: 'project3',
    techStacks: [
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'Node.js',
      'Clerk Auth',
      'Socket.IO',
      'shadcn/ui',
    ],
    github: 'https://github.com/spsanchore13/next.js-discord-clone',
    live: '',
  },
  {
    name: 'CarHub',
    description:
      'Car Showcase: Interactive Next.js app to explore and display car models seamlessly.',
    link: 'https://next-js-cars-showcase.vercel.app/',
    image: '/car-hub.png',
    id: 'project4',
    techStacks: [
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'Headless UI',
      'Rapid Car API',
    ],
    github: 'https://github.com/yourusername/carhub',
    live: 'https://next-js-cars-showcase.vercel.app/',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Fabits',
    title: 'Front-end Developer',
    start: '2024',
    end: 'Present',
    link: 'https://fabits.com',
    id: 'work1',
  },
  {
    company: 'Masai School',
    title: 'Full Stack Developer (Problem Setter)',
    start: '2022',
    end: '2024',
    link: 'https://masaischool.com',
    id: 'work2',
  },
  // {
  //   company: 'Freelance',
  //   title: 'Front-end Developer',
  //   start: '2017',
  //   end: 'Present',
  //   link: 'https://ibelick.com',
  //   id: 'work3',
  // },
]

export const EDUCATION: Education[] = [
  {
    institution: 'Masai School',
    degree: 'Full Stack Web Development Program',
    start: '2022',
    end: '2023',
    link: 'https://www.masaischool.com',
    id: 'edu0',
  },
  {
    institution: 'Rajasthan Technical University',
    degree: 'Bachelor of Technology (B.Tech) in Computer Science',
    start: '2015',
    end: '2019',
    link: 'https://www.rtu.ac.in',
    id: 'edu1',
  },
  {
    institution: 'Gayatri Vidhya Mandir Sr Sec School Sanchore',
    degree: 'Class XII (Science Stream - PCM)',
    start: '2014',
    end: '2015',
    link: '',
    id: 'edu2',
  },
]

export const SKILLS: string[] = [
  // Languages
  'JavaScript (ES6+)',
  'TypeScript',
  'HTML5',
  'CSS3',

  // Frontend
  'React.js',
  'Next.js',
  'Tailwind CSS',
  'shadcn/ui',
  'Material UI (MUI)',
  'UI/UX Collaboration',
  // "Accessibility",

  // State Management
  'Redux',
  'Recoil',
  'Zustand',

  // Backend
  'Node.js',
  'Express.js',
  'MongoDB',
  'REST APIs',

  // Testing
  'Cypress',
  'Jest',
  'React Testing Library',

  // Tools & Deployment
  'Git & GitHub',
  'AWS (S3, CloudFront, EC2)',
  'Capacitor.js',
  'Cordova',
  'Xcode Deployment',
  'Android Studio',
  'Figma',

  // // Domain Knowledge
  // "Financial Applications Development",
  // "Mutual Fund Investing Platforms",
  // "SEO Optimization",
  // "AI Integration (LSTMs, Price Prediction)"
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description:
      'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/spsanchore13',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/spsanchore13',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/spsanchore13/',
  },
]

export const EMAIL = 'developer.shantilal@email.com'
