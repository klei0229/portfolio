import About from "./About";
import Education from "./Education";
import Projects from "./Projects";

import capstone from './images/capstone.png'

export const summary = {
  name: "Kevin Lei",
  subheading: "Software Engineer | Based In NYC",
  description:
    "Computer Engineering and Software Bootcamp Graduate with experience building web applications using JavaScript, NodeJS, ReactJS, ReduxJS and PostgreSQL",
};

export const about = {
  text: "<p>I'm a recent Software Bootcamp Graduate, starting to look for roles as a junior software engineer.</p> <p>I first got into programming as a computer engineering student at <a href='https://www.ccny.cuny.edu/compeng'>The City College of New York</a>. As part of my curriculum, I took courses in the computer science department. The core classes I took here focused on Java, C++ & Python and taught me core computer fundamentals including topics like data structures, algorithms, & object-oriented programming. </p> <p> In June 2022, I enrolled into <a href='https://www.fullstackacademy.com/'>Fullstack Academy</a> to learn more about web development technologies. There, I learned and utilized JavaScript, Node.js, the React/Redux framework & PostgreSQL to build and deploy code for two team & one solo web application projects. </p> <p>As of December 2022, I graduated from Fullstack Academy, and I’m excited to continue the learning process so I can build bigger and more complex applications. <p> Here are some of the technologies I've been using recently:</p>",
};

export const about2 = {
  text:'<h1>Hello</h1>'
};

export const skills = [
  { name: "JavaScript" },
  { name: "ReactJs" },
  { name: "ReduxJs" },
  { name: "NodeJs" },
  { name: "ExpressJs" },
  { name: "PostgreSQL" },
  { name: "Sequelize" },
  { name: "MaterialUI" },
];

export const collegeCourses = [
  "Software Design Lab",
  "Algorithms",
  "Data Structures",
  "Discreate Mathematics",
  "Probability and Statistics",
  "Assembly Language",
  "Engineering Economics",
  "Computer Organization",
  "Digital Integrated Circuits",
  "Web Design",
  "Operating Systems",
  "Image Processing",
];
export const education = [
  {
    icon: "",
    title: "The City College of New York",
    subheading: "B.Eng in Computer Engineering",
    description:
      "4 Year Computer Engineering program that focuses on computer science and electrical engineering topics. \n Software Engineering Related Coursework include:",
    courses: collegeCourses,
  },
  {
    icon: "",
    title: "Fullstack Academy",
    subheading: "Web Development Bootcamp",
    description:
      "A 28-week immersive software engineering program based in New York City, centered on full-stack JavaScript development, including Node.js, Express, Sequelize ORM for PostgreSQL databases, React and Redux; along with HTML & CSS, and CS fundamentals.",
  },
];

export const projects = [
  {
    name: "Snack Club",
    subheading: "Ecommerce Project",
    description:
      "A curated snack bundle subscription e-commerce website that implemented common ecommerce site functionality including user sign up and login, product searching, shopping cart, and order payment with Stripe.",
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "Express",
      "PostgreSql",
      "MaterialUI",
      "Sequelize",
      "Stripe",
    ],
    role: "Met regularly to plan out the scope of the project. Helped wireframe website layout and model ecommerce data. Pair programmed the Sequelize models to be used with PostgreSQL and set up the API routes. Created several UI elements using React and Material UI that resulted in completion of the landing page and product detail",
    difficulties:
      "The challenge with this project was getting familiar with Material and creating working elements in a rather short period of time. Because of this, I ended up writing many inline style declarations for components.\nIf I was to improve on my code, I would aim to adopt the DRY principle by reduce redundant inline style code.",
    demoLink: "https://snackclub-commerce.herokuapp.com/",
    githubLink: "https://github.com/klei0229/acme-shopping-2207-FSA-PT_self",
  },
  {
    name: "Quick Menu Builder",
    subheading: "Stackathon Project",
    description:
      "An application that allows local restaurant businesses to generate and customize a digital version of their menu by parsing in menu data via a CSV file.",
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "Express",
      "PostgreSql",
      "MaterialUI",
      "Sequelize",
    ],
    role: "My role was to create an MVP of the menu builder in a week’s time. This included creating the database using Sequelize, setting up the API routes, implementing the ability for users to upload CSV sheets, and building out a user interface that lets users toggle several visual components including text font, typography, and color on their menu.",
    difficulties:
      "The challenge with this project was controlling the state of the React application. Due to the time constraint and scale of the project, I opted to not use Redux and as a result I ended up having a hard time scaling the project. I ended up having to tediously pass props from a parent react component down to the nested child components tree to complete the project.\n To improve on this project, I can commit to restructuring the project and use Redux to control the state of the application.",
    demoLink: "https://menu-builder-stackathon.herokuapp.com/",
    githubLink: "https://github.com/klei0229/acme_menus_1",
  },
  {
    name: "Restaurant Menu Management App",
    subheading: "Capstone Project",
    description:
      "An expansion of the Quick Menu Builder individual project that elaborates on the function of helping local restaurant businesses manage and design their digital menus.",
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "Express",
      "PostgreSql",
      "MaterialUI",
      "Sequelize",
    ],
    role: "Refactored the initial code base from the previous project (Quick Menu Builder) to implement Redux to manage the state of the application. This allowed the application to be maintainable as we included more functionality on the user interface.\n I also implemented the React Dnd API to create a custom drag and drop user interface that allows users to move items on their menu and ultimately customize the layout of their menu and how menu items appear.",
    difficulties:
      "The challenge for this project was learning how the React Dnd API works and then building the drag and drop system. It was a very time consuming process learning how the API worked and then finding what I could use in the API for the project needs. Ultimately, I had to construct roughly 10 different react components for the system to work. \n To improve the project, I can write code to allow visual components that are found on the menu to be draggable (ex: text, images).",
    demoLink: "https://menu-builder-capstone.herokuapp.com/",
    githubLink: "https://github.com/klei0229/fullstack-capstone-team-6-self",
    image:capstone
  },
];

export const nav = [
  { id:1, name: "About", link: "/about" , component:<About/>},
  { id:2, name: "Education", link: "/education",component:<Education/> },
  { id:3, name: "Projects", link: "/projects",component:<Projects/> },
];


export const links = {
  linkedin:"https://www.linkedin.com/in/kevin-lei-cs/",
  github:"https://github.com/klei0229",
}


