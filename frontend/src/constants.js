// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';


// Education Section Logo's
import iit from './assets/education_logo/IITG.png'
import jpgs from './assets/education_logo/JPGS.jpg'
import mps from './assets/education_logo/MPS.png'

// Project Section Logo's

import Amazon from './assets/work_logo/Amazon.png'
import Employee from './assets/work_logo/Employee.png'
import Game from './assets/work_logo/Tic-Tac-Toe.png'

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: iit,
      school: "IIT Guwahati , Guwahati , Assam",
      date: "July 2023 - present",
      grade: "8.55 CGPA (currently)",
      desc: "Currently pursuing my B.Tech in Electronics and Electrical Engineering at IIT Guwahati. Here, I’ve developed a strong interest in full-stack web development, problem-solving, and exploring real-world applications of software and hardware systems. My academic journey is complemented by active participation in technical projects and coding communities",
      degree: "Btech. Electronics and Electrical Engineering",
    },

    {
      id: 1,
      img: jpgs,
      school: "Jayshree Periwal Global School",
      date: "Apr 2021 - Apr 2023",
      grade: "86.4%",
      desc: "I completed my class 12 education from Jayshree Periwal Global  School, Jaipur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) .",
      degree: "CBSE(XII) - PCM ",
    },
    {
      id: 2,
      img: mps,
      school: "Maheshwari Public School",
      date: "Apr 2019 - March 2021",
      grade: "97.3%",
      desc: "I completed my class 10 education from Maheshwari Public School, Jaipur , under the CBSE board, where I studied Science with Computer and Information technology.",
      degree: "CBSE(X) - with addional subject IT",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Employee Management App",
      description:
        "A full-stack web application to manage employees, built with the MERN stack. It includes features such as real-time form handling, employee CRUD operations, department assignments, leave and salary management. Designed for HR teams or small businesses, the app supports efficient tracking and management of workforce data with a dynamic, fully functional interface.",
      image: Employee,
      tags: [ "Tailwind CSS", "JavaScript", "React JS", "API" , "Node JS", "Express JS",  "MongoDB"],
      github: "https://github.com/ishaaniitg/Employee_Management_System",
      webapp: "https://employee-management-system-snowy-two.vercel.app/login",
    },
    {
      id: 1,
      title: "Amazon Clone",
      description:
        "A responsive front-end clone of Amazon's homepage built using HTML and CSS. It replicates the layout, navigation bar, product listings, and design aesthetics of the original site. This project focuses on mastering layout structuring, Flexbox/Grid usage, and UI design consistency across screen sizes.",
      image: Amazon,
      tags: ["HTML", "CSS"],
      github: "https://github.com/ishaaniitg/Amazon_clone",
      webapp: "https://ishaaniitg.github.io/Amazon_clone/",
    },
    {
      id: 2,
      title: "Tic-Tac-Toe Game",
      description:
        "A classic Tic Tac Toe game built with HTML, CSS, and JavaScript. It supports two players, features simple win-checking logic, and uses intuitive design for a smooth gaming experience.",
      image: Game,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ishaaniitg/Tic_Tac_Toe",
      webapp: "https://ishaaniitg.github.io/Tic_Tac_Toe/",
    },
  ];  