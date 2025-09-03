type Project = {
  name: string
  description: string
  link: string
  video: string
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
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://mywealth.fabits.com/login',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Genius AI',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
    {
    name: 'Discord Clone',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project3',
  },
    {
    name: 'CarHub',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project4',
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
  }
]

export const SKILLS: string[] = [
  // Languages
  "JavaScript (ES6+)",
  "TypeScript",
  "HTML5",
  "CSS3",

  // Frontend
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "shadcn/ui",
  "Material UI (MUI)",
  "UI/UX Collaboration",
  // "Accessibility",


  // State Management
  "Redux",
  "Recoil",
  "Zustand",

  // Backend
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",

  // Testing
  "Cypress",
  "Jest",
  "React Testing Library",

  // Tools & Deployment
  "Git & GitHub",
  "AWS (S3, CloudFront, EC2)",
  "Capacitor.js",
  "Cordova",
  "Xcode Deployment",
  "Android Studio",
  "Figma",

  // // Domain Knowledge
  // "Financial Applications Development",
  // "Mutual Fund Investing Platforms",
  // "SEO Optimization",
  // "AI Integration (LSTMs, Price Prediction)"
];



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
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
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
  }
 
]

export const EMAIL = 'developer.shantilal@email.com'
