import {
  FaLinkedin,
  FaGithub,
  FaHouseUser,
  FaUserTie,
  FaBriefcase,
  FaAddressBook,
} from "react-icons/fa";

export const workData = [
  {
    websiteName: "Headwrites",
    techStack: [
      "react",
      "next js",
      "framer-motion",
      "Chakra-ui",
      "GraphQl",
      "Graph CMS",
    ],
    description:
      "Headwrites is a blog platform focused on programmers and the programmer's life. Headwrites is designed using mobile-first approach. It is a next js based web-application developed using Next Js at the front-end with high focus on SEO and accessibility which further follows the WCAG2.0 guidlines. GraphQL is used as a backend to produce and manage the content. ",
    previewLink: "https://headwrites.com/",
    githubLink: "https://github.com/parshantdhall/headwrites_frontend",
    image: "/headwrites.png",
  },
  {
    websiteName: "GKJ International",
    techStack: ["Wordpress", "Elementor"],
    description:
      "GKJ International is a local business website developed using Wordpress and Elementor. The website is highly focused on SEO to attract more clients. In addition to website development, content-development and logo development services were also provided.",
    previewLink: "https://gkjinternational.com.au/",
    image: "/gkj.png",
  },
  {
    websiteName: "BoldStree",
    techStack: [
      "react",
      "next js",
      "docker",
      "node js",
      "express",
      "jwt authentication",
      "REST Api",
      "Chakra-ui",
    ],
    description:
      "BoldStree is an ecommerce web application with full-stack service provided. The back-end and front-end for this web application is developed using scratch. The back-end is developed using node-js and express and the whole application is containerize using docker. On the front-end Next js is used with chakra-ui and is consuming rest-api from the backend.",
    githubLink: "https://github.com/parshantdhall/ecommerce",
    image: "/boldstree.png",
  },
  {
    websiteName: "Lifestyle Toppings",
    techStack: ["Wordpress", "Elementor"],
    description:
      "Lifestyle toppings is a lifestyle blog website developed using Wordpress and Elementor. The website is highly focused on SEO and accessibility. In additiont to website development SEO services, content development and content management services were also provided.",
    previewLink: "https://lifestyletoppings.com/",
    image: "/lifestyletoppings.png",
  },
];

export const socialLinks = [
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/parshant-dhall-0b29701a1/",
    icon: FaLinkedin,
  },
  {
    name: "github",
    link: "https://github.com/parshantdhall",
    icon: FaGithub,
  },
];

export const linksArr = [
  {
    name: "home",
    address: "#hero",
    icon: FaHouseUser,
  },
  {
    name: "about me",
    address: "#aboutme",
    icon: FaUserTie,
  },
  {
    name: "work",
    address: "#work",
    icon: FaBriefcase,
  },
  // {
  //   name: "writings",
  //   address: "#writings",
  // },
  {
    name: "contact",
    address: "#contact",
    icon: FaAddressBook,
  },
];
