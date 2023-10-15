import {
  devops,
  worldCup,
  EAuth,
  ansible,
  aws,
  azure,
  jenkins,
  kubernetes,
  terraform,
  java,
  python,
  orange,
  mobile,
  backend,
  creator,
  web,
  react , 
  nodejs,
  git,
  carloc,
  docker,
  smartFactory,
  studynotion,
  carrent,
  jobit,
  tripguide,
  shoppingcart,
  image11,
  kavach,
  covide,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [

  {
    title: "software engineering ",
    icon: mobile,
  },
  {
    title: "Leetcode ",
    icon: web,
  },

  {
    title: "Open Source",
    icon: backend,
  },
  {
    title: "ML-Enthusiast" ,
    icon: creator,
  },
];
const technologies = [
  {
    name: "React JS",
    icon: react,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Ansible",
    icon: ansible,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Terraform",
    icon: terraform,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "MLops intern",
    company_name: "3D smart factory",
    icon: smartFactory,
    iconBg: "#E6DEDD",
    date: "June 2023 - July 2023",
    points: [
      "Developed the Production Pipeline and ensured Model Monitoring while managing AWS CloudWatch for infrastructure",
      "Collaborated e|ectively with team members on GitHub, created a Flask-based web application, and led AWS Deployment e|orts",
      "Meticulously monitored model performance and reduced downtime and Achieved 99% AWS uptime and reduced infrastructure costs by 20%",
      "Designed and developed a user-friendly Flask-based web app",
      " Improved code management and version control using GitHub",
    ],
  },
  {
    title: "FULL STACK DEVELOPER",
    company_name: "CARLOC MAROC",
    icon: carloc,
    iconBg: "#383E56",
    date: "March 2023 - June 2023",
    points: [
      "Designed and developed a Software as a Service (SaaS) for car rental using JavaScript, React, and Express frameworks, along with the REST protocol. The project also included managing static files using Google Cloud Object Storage.",
      "Implemented secure authentication by integrating Passport, JWT, and the Google Cloud Auth API, as well as OAuth 2.0 authentication through the Google Cloud Auth API and Facebook Auth API.",
      "Created server-side business logic with Express and the user interface with React, ensuring an efficient and user-friendly experience for customers.",
      "Utilized tools such as Figma, Jira, Git, and Scrum for effective collaboration with the team and to ensure the delivery of a high-quality product.",
      "Set up a metrics collection system, including user clicks on cars and pages viewed, to use in a car recommendation system.",
      "Implemented DevOps practices to facilitate collaboration among team members and ensure continuous project delivery.",
      "Employed WebSockets to develop a real-time chat service, enhancing user engagement and providing instant communication capabilities for users."
    ],
  },
  {
    title: "PROJECT INTERN",
    company_name: "ORANGE",
    icon: orange,
    iconBg: "#383E56",
    date: "Jan 2023 - Current",
    points: [
      "Conceived, designed, developed, and deployed a web/mobile application using Flutter and Django REST framework, providing an intuitive interface and features for users to manage their grades and assignments. Synchronized data across all devices.",
      "Continued development of the application, implementing new features and ensuring bug fixes, resulting in improved user experience and overall functionality.",
      "Completed a training course and mini project in DevOps and Android Studio, expanding knowledge and skills in the field.",
      "Utilized various tools, including FIGMA for user flow and wireframe, UML for design, GIT for version control, and DOCKER and Heroku for deployment. Applied Agile methodology to streamline the development process."
    ],
  },

  
  
];



const projects = [
  {
    "name": "COVID-19 Epidemic Modeling in Morocco",
    "description": "Initiated project during preparatory classes amidst the COVID-19 pandemic. Researched virus dynamics, used SIR model, gathered data from Moroccan High Commission, Johns Hopkins, and studied incubation period. Included international insights from Diamond Princess, NHK, and Ouest-France.",
    "tags": [
      {
        "name": "data science",
        "color": "blue-text-gradient"
      },
      {
        "name": "machine learning",
        "color": "pink-text-gradient"
      },
      {
        "name": "Epidemic Modeling",
        "color": "green-text-gradient"
      },
      {
        "name": "Research",
        "color": "blue-text-gradient"
      },
      {
        "name": "Data Analysis",
        "color": "pink-text-gradient"
      }
    ],
    "image": covide,
    "image2": "#",
    "source_code_link": "https://github.com/Omaraitbenhaddi/Mod-lisation-de-propagation-d-un-pid-mie"
  },
  {
    "name": "E-Authentication System Using QR Code & OTP",
    "description": "Created a secure online authentication system with QR codes, OTP, Django, React, Jira, Git. Employed encryption, Dockerization, and JWT for enhanced security and efficiency, delivering on-time, client-specified requirements.",
    "tags": [
      {
        "name": "Authentication",
        "color": "blue-text-gradient"
      },
       {
        "name": "IAM",
        "color": "blue-text-gradient"
      },
      {
        "name": "Security",
        "color": "pink-text-gradient"
      },
      {
        "name": "Django",
        "color": "green-text-gradient"
      },
      {
        "name": "React",
        "color": "blue-text-gradient"
      },
      {
        "name": "Jira",
        "color": "pink-text-gradient"
      }
    ],
    "image": EAuth,
    "image2": "#",
    "source_code_link": "https://github.com/Omaraitbenhaddi/E-Authentication-System-Using-QR-Code-OTP",
  },
  {
    "name": "WORLD CUP 2022 PREDICTIONS",
    "description": "I collected football data, conducted EDA, and used statistical modeling, machine learning, and feature engineering to create a predictive model for FIFA 2022 World Cup matches. Built an interactive Flask website hosted on AWS, all in Python.",
    "tags": [
      {
        "name": "Data Analysis",
        "color": "blue-text-gradient"
      },
      {
        "name": "Machine Learning",
        "color": "pink-text-gradient"
      },
      {
        "name": "Web Development",
        "color": "blue-text-gradient"
      },
      {
        "name": "AWS",
        "color": "pink-text-gradient"
      }
    ],
    "source_code_link": "https://github.com/Omaraitbenhaddi/ODC-World-Cup-2022-Predictions",
    "youtube_link": "https://youtu.be/klyiuyguzgQ",
    "image": worldCup,
    "image2": "#",

  },
  {
    "name": "AWS-Based DevOps Pipeline Implementation for Angular-Node.js",
    "description": "Utilized Jenkins for CI/CD pipeline to automate Angular and Node.js app deployment, used Docker for portability, AWS for infrastructure, GitLab for code management, Grafana for monitoring, and automated testing for reliability.",
    "tags": [
      {
        "name": "DevOps",
        "color": "blue-text-gradient"
      },
      {
        "name": "CI/CD",
        "color": "pink-text-gradient"
      },
      {
        "name": "Docker",
        "color": "green-text-gradient"
      },
      {
        "name": "AWS",
        "color": "blue-text-gradient"
      },
      {
        "name": "GitLab",
        "color": "pink-text-gradient"
      }
    ],
    image:devops,
    "tools_used": ["Jenkins", "Docker", "AWS", "GitLab", "Grafana"]
  }
  
 
];


// FUTURE PROJECT
const testimonials = [
  {
    project:"",
    testimonial:kavach,
    name: "",
    designation: "",
    company: " ",
    image: "",
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
