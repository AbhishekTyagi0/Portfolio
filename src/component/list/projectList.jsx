import airbnb from "./../../assets/Images/airbnb.png";
import acre from "./../../assets/Images/acre.png";
import advshiva from "./../../assets/Images/advshiva.png";
import shricode from "./../../assets/Images/shricode.png";
import cv_builder from "./../../assets/Images/cv.png";
import memory_game from "./../../assets/Images/memory-game.png";
import shoppingo from "./../../assets/Images/shoppingo.png";
import portfolio from "./../../assets/Images/portfolio.png";
import sunderAI from "./../../assets/Images/sunderAI.png";

export const projectList = [
  {
    id: 0,
    subject: "Airbnb Clone",
    src: airbnb,
    about: [
      `Developed a feature-rich Airbnb clone using React and TypeScript, replicating key functionalities of
        the popular accommodation booking platform.`,
      `Demonstrated proficiency in front-end development, state
        management, and TypeScript’s static type-checking for enhanced code quality and maintainability.`,
    ],
    code: "https://github.com/AbhishekTyagi0/Airbnb-Clone",
    live: "https://a-bnb-clone.vercel.app/",
  },
  {
    id: 1,
    subject: "1acre-Clone",
    src: acre,
    about: [
      `Built captivating single-page React project with API integration & state management, leveraging
        typescript for type-checking and tailwind css for a sleek, interactive UI.`,
      `Leveraged Hooks, component-based architecture, JSX, and props to enhance development efficiency and maintainability.`,
    ],
    code: "https://github.com/AbhishekTyagi0/gamyamProject",
    live: "https://1acre-clone.vercel.app/",
  },
  {
    id: 2,
    subject: "CV Builder",
    src: cv_builder,
    about: [
      "Built a user-friendly web app for effortless CV creation, empowering individuals to craft professional and visually appealing resumes.",
      "Leveraged Hooks, component-based architecture, JSX, and props to enhance development efficiency and maintainability.",
    ],
    code: "https://github.com/AbhishekTyagi0/CV-Builder",
    live: "https://cvbuilderr.netlify.app/",
  },
  {
    id: 3,
    subject: "Memory Card Game",
    src: memory_game,
    about: [
      "Built captivating single-page React memory game with Giphy API integration & state management, leveraging JSX for a sleek, interactive UI.",
      "Uses the async method to fetch the data and used it in the application.",
    ],
    code: "https://github.com/AbhishekTyagi0/React-Memory-Card-Game",
    live: "https://reactjs-memory-game0.netlify.app/",
  },
  {
    id: 4,
    subject: "Shopping Cart",
    src: shoppingo,
    about: [
      "Crafted an interactive shopping cart in ReactJS, showcasing front-end expertise and proficient React library usage.",
      "Seamlessly navigated user journey through React Router, enhancing engagement and simplifying online purchases with CRUD operations.",
    ],
    code: "https://github.com/AbhishekTyagi0/React-shopping-cart",
    live: "https://react-shoppingo.netlify.app/",
  },
  {
    id: 6,
    subject: "Portfolio",
    src: portfolio,
    about: [
      "Created my portfolio website using ReactJs, Tailwind CSS.",
      "It showcases all my current skills acquired as a frontend developer and some recent projects crafted using ReactJS.",
    ],
    code: "https://github.com/AbhishekTyagi0/Portfolio",
    live: "https://abhishek-tyagi-portfolio.vercel.app/",
  },
];

export const NextJsProjectList = [
  {
    id: 0,
    subject: "Shricode Blog Website",
    src: shricode,
    about: [
      `Developed a dynamic blog website using Next.js, TypeScript, Tailwind CSS, and MongoDB. Implemented AWS S3 for seamless image hosting and Tiptap for advanced text editing, enabling rich content creation and a smooth user experience.`,
      `Enhanced the user experience with a responsive and visually appealing design. Integrated Google Tag Manager and Google Analytics for comprehensive site performance tracking and insights, ensuring continuous improvement and user engagement.`,
    ],
    live: "https://shricode.com/",
  },
  {
    id: 1,
    subject: "SunderAI Headshots Generator",
    src: sunderAI,
    about: [
      `Introducing Sunder AI: a powerful platform that harnesses cutting-edge AI technology to create stunning, professional headshots in just minutes. `,
      `Upload your images, train your model, and elevate your professional presence with personalized portraits tailored to your needs.`,
    ],
    live: "https://www.sunderai.com/",
  },
  {
    id: 2,
    subject: "Advocate Landing Page",
    src: advshiva,
    about: [
      `Built a professional landing page for an advocate using Next.js and Tailwind CSS, ensuring a responsive and visually appealing design tailored to client needs.`,
      `Implemented a contact form with client-side validation using Nodemailer, enhancing user interaction and facilitating seamless communication with the advocate.`,
    ],
    live: "https://advshiva.vercel.app/",
  },
];
