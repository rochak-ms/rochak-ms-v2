import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  TravellerMate,
  MoodTracker,
  FindaMeal,
  Weather,
  Texteditor,
  Booksearch,
  web1,
  photoshop,
  graphic,
  westfield,
  sunbi,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "photoshop",
    icon: photoshop,
  },
];

const experiences = [
  {
    title: "Graphic Designer Intern",
    company_name: "GOGAZZAB Pvt. Ltd.",
    icon: graphic,
    iconBg: "#fff",
    date: "May 2016 - Jul 2016",
    points: [
      "Assisted in developing numerous marketing programs such as logos, brochures, infographics, and advertisement for social medias and posters, and ensures that they exceeded the expectation of the clients",
      "Created the design to make the information more intuitive and easier to present",
      "Assist office marketing and sales assistant with photo archiving, numerous office needs",
      "Retouch product photography and manipulate high resolution images",
      "Prepared conceptual illustrations based on verbal descriptions",
    ],
  },
  {
    title: "Front-End Web Designer",
    company_name: "Sunbi Design Studio Pvt. Ltd.",
    icon: sunbi,
    iconBg: "#E6DEDD",
    date: "Jan 2017 - Feb 2018",
    points: [
      "Worked with a team of other developers and designer to develop the website and applications",
      "Maintained a good development process and workflow, including identifying and implementing optimization",
      "Designed and created website layout/User interface by using standard HTML, CSS, JavaScript",
      "Cooperated with web designers to match visual design intent",
      "Created mockup design for web pages",
      "Maintained accuracy and attention in detail throughout the creative and development process",
      "Handled multiple projects simultaneously while ensuring all projects were completed with in due time",
      "Proactively reported to management regarding work",
      "Maintained confidentiality of the client’s information",
    ],
  },
  {
    title: "Security Night Supervisor",
    company_name: "Glad Group",
    icon: westfield,
    iconBg: "#fff",
    date: "Aug 2019 - Nov 2021",
    points: [
      "Taking control of Centre Alarm System",
      "Completing monthly Keys Audits",
      "Completing monthly incident summary and statistics",
      "CCTV monitoring and auditing",
    ],
  },
  {
    title: "Security Site Supervisor",
    company_name: "Scentre Group - Westfield Innaloo, WA",
    icon: westfield,
    iconBg: "#E6DEDD",
    date: "Jan 2017 - Present",
    points: [
      "Well- developed interpersonal and communication skills developed by interacting with clients from culturally, socio-economically, and demographically diverse background",
      "Displayed strong analytical skills by rolling over and reconciling 4- 5 shift reports and a day-end report daily -which displayed efficient use of site control systems like Building and contractor management system",
      "Resolved escalated client issues by working with an IT, Product Management and Operation to ensure customer satisfaction and safety, and update processes",
      "Applied strong leadership skills to maintain team efficiency, organize workflow, handle site roaster, and allocate roles to meet daily demands",
      "Well-developed compliance skills by conducting different audits for sites and for employees onsite",
      "Displayed strong accounting skills by processing salaries of onsite staffs through a company’s software (Power Force)",
      "Supervise and provided on-site training and briefing on company polices to new hires",
      "Taking control of Fire Indicator Panel during emergency",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Traveller Mate",
    description:
      "Web-based platform that let users to plan ahead of hteir travels. Once the user created an account, they can then create their own trips with customizable name and description. \t The user will then be presented with 2 buttons, allowing them to find flights and hotels they can book for their trip. The total will be calculated and the saved flight and hotels can be removed.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Bluestrap 4,6",
        color: "blue-text-gradient",
      },
    ],
    image: TravellerMate,
    source_code_link: "https://github.com/rochak-ms/traveller-mate.git",
    source_code_link_web: "https://traveller-mate.herokuapp.com/",
  },
  {
    name: "Mood Tracker",
    description:
      "Mood Tracker! is a free and open source web app app that aims to help you understand your emotion and feelings better. Track your emotional landscape, keep a mood journal,and gain new insights into yourself. This application gives you a option to add a comment about your current mood or feelings like Happy, Sad, Neutral, Unsure. After you done commenting and you choose a memoji respectively.",
    tags: [
      {
        name: "nodemailer",
        color: "blue-text-gradient",
      },
      {
        name: "sequelize",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mysql2",
        color: "orange-text-gradient",
      },
    ],
    image: MoodTracker,
    source_code_link: "https://github.com/rochak-ms/mood_tracker.git",
    source_code_link_web: "https://trackmymood.herokuapp.com/",
  },
  {
    name: "Find A Meal",
    description:
      "Find a meal project is made to provide the user the ability to find a meal they love to eat and provide them with the full ingredients and instructions so that any individual could be able to cook, even when they have never done cooking in their life. This project also provides nutritional details of the meal that the user will be searching for so the user know how much of nutritional values the chosen meal contains.",
    tags: [
      {
        name: "Edamam API",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
      {
        name: "MealDB",
        color: "green-text-gradient",
      },
      {
        name: "Bulma CSS",
        color: "pink-text-gradient",
      },
    ],
    image: FindaMeal,
    source_code_link: " https://github.com/rochak-ms/find-a-meal",
    source_code_link_web: "https://rochak-ms.github.io/find-a-meal/",
  },
  {
    name: "Weather Dashboard",
    description:
      "The weather dashboard that fetches data from the OpenWeatherMap API to dynamically update an HTML and CSS. This application is design to show the current weather forecast and 5 next days weather forecast indicating the temperature, humidity and wind speed.",
    tags: [
      {
        name: "OpenWeatherMap API",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: Weather,
    source_code_link: "https://github.com/rochak-ms/weather-dashboard",
    source_code_link_web: "https://rochak-ms.github.io/weather-dashboard/",
  },
  {
    name: "Text Editor",
    description:
      "A simple text editor app meets the PWA criteria that can function both online and offline. Needed to use a variety of data persistence options in order to ensure that data is not lost in any scenario. The application first looks to use the data in the indexedDB to populate the editor, then if it cannot access that it will use local storage. For use offline, this application can be downloaded to your desktop as an application. This application is helpful to developers because they can use this as a scratch pad for code snippets and coding ideas. This application is deployed on Heroku.",
    tags: [
      {
        name: "Heroku",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "PWA",
        color: "pink-text-gradient",
      },
    ],
    image: Texteditor,
    source_code_link: "https://github.com/rochak-ms/Text_Editor",
    source_code_link_web: "https://text---editor.herokuapp.com/",
  },
  {
    name: "Book Search",
    description:
      "This application uses MongoDB, Express, React, Node, and GraphQL to create a book search using Google's API. Using the Google Books API, this app allows users to search and save book titles and view photo and description info on the selected books. Originally built with a RESTful API, code has been refactored to instead use a GraphQL API with Apollo Server. This app uses React on the front-end, with the data stored in a remote MongoDB database.",
    tags: [
      {
        name: "Heroku",
        color: "blue-text-gradient",
      },
      {
        name: "GraphQL",
        color: "orange-text-gradient",
      },
      {
        name: "MERN",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: Booksearch,
    source_code_link: "https://github.com/rochak-ms/Book-Search-Engine-1",
    source_code_link_web: "https://booksearchh.herokuapp.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
