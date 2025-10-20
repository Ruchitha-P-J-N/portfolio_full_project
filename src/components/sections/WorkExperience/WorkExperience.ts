import { ref } from 'vue'

export const experiences = ref([
  {
    title: 'Full Stack Developer',
    company: 'SpeakUp B.V',
    duration: 'August 2022 – August 2024',
    location: 'Bangalore, India',
    link: 'https://www.speakup.com/?utm_feeditemid=&utm_device=c&utm_term=anonymous%20reporting%20system%20for%20employees&utm_source=google&utm_medium=ppc&utm_campaign=US_Generic_FC&hsa_cam=22647273034&hsa_grp=180646711196&hsa_mt=b&hsa_src=g&hsa_ad=756541228492&hsa_acc=4335334335&hsa_net=adwords&hsa_kw=anonymous%20reporting%20system%20for%20employees&hsa_tgt=kwd-1424546212738&hsa_ver=3&gad_source=1&gad_campaignid=22647273034&gbraid=0AAAAAD84gA-eXRHIWdBVDORLWOmuBtE36&gclid=Cj0KCQjwjL3HBhCgARIsAPUg7a5XeuxfaRzIlVLvezI7gfho1uDNPRUHhgJQm9q9eJjh4ScKAkl8SfsaAobmEALw_wcB',
    details: [
      'Developed and maintained user-facing web apps using Vue.js, TypeScript, and Node.js for 10K+ users.',
      'Collaborated with UX designers to create responsive UI components, improving usability by 22%.',
      'Implemented REST APIs and AWS Lambda functions, reducing latency by 30%.',
      'Integrated AWS S3 for static assets with 99.9% uptime.',
      'Automated CI/CD via GitLab and Jenkins, reducing release errors by 40%.'
    ],
    skills: [
      'Vue.js', 'TypeScript', 'Node.js', 'AWS Lambda', 'GitLab CI/CD', 'S3', 'Responsive Design'
    ]
  },
  {
    title: 'Software Developer Intern',
    company: 'ACIK Enterprises (OPC) Pvt Ltd',
    duration: 'May – July 2021',
    location: 'Bangalore, India',
    link: 'https://www.linkedin.com/company/acik-inc/?originalSubdomain=in',
    details: [
      'Created interactive dashboards using JavaScript and CSS, improving insights by 18%.',
      'Built and tested web modules integrating APIs with PostgreSQL backend.',
      'Automated SQL validation, improving data accuracy by 20%.',
      'Optimized UX and reduced page load time by 15%.'
    ],
    skills: [
      'JavaScript', 'PostgreSQL', 'HTML5', 'CSS3', 'Data Visualization', 'API Integration'
    ]
  },
  {
    title: 'Blockchain & Machine Learning Intern',
    company: 'CADD Center',
    duration: 'July – September 2019',
    location: 'Bangalore, India',
    link: 'https://caddcentre.com/',
    details: [
      'Implemented a private blockchain using Hyperledger for secure transaction logging.',
      'Built ML pipelines with Python and SQL for medical image segmentation, reducing training time by 20%.',
      'Contributed to sprint planning, testing, and deployment reviews in Agile teams.'
    ],
    skills: [
      'Python', 'Machine Learning', 'SQL', 'Hyperledger', 'Agile', 'Data Analysis'
    ]
  }
])

export const activeIndex = ref(0)


