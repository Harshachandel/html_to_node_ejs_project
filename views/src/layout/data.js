// data/data.js

const servicesData = [
  {
    title: "Consulting",
    description: "Expert advice to help you make informed business decisions and improve operational efficiency.",
    image: "/images/consult-icon-image.jpg"
  },
  {
    title: "Project Management",
    description: "Complete project planning and execution to deliver results on time and within budget.",
    image: "/images/project-management-image.webp"
  },
  {
    title: "Technical Support",
    description: "Reliable IT and technical support to keep your systems running smoothly at all times.",
    image: "/images/tech-support-image.jpg"
  },
  {
    title: "Custom Solutions",
    description: "Tailored solutions designed specifically to meet your unique business requirements.",
    image: "/images/customer-services-icon-image.jpg"
  }
];

const projectsData = [
  {
    id: 1,
    name: "Amazon Clone",
    image: "/images/amazonclone-image.jpg",
    description: "E-commerce UI clone with product listing and cart flow."
  },
  {
    id: 2,
    name: "Netflix Clone",
    image: "/images/netflix-clone.webp",
    description: "Streaming platform UI clone with modern layout."
  }

];


// data/data.js

const aboutData = {
  hero: {
    title: "About Harsha",
    subtitle:
      "Full-stack developer from Nārnaund, Haryana crafting React experiences and n8n automations"
  },

  profile: {
    name: "Harsha Chandel",
    role: "Full-Stack Developer",
    image: "/images/image1-std.avif",
    description:
      "Building responsive React applications, n8n automation workflows, and seamless API integrations. Passionate about modern UI/UX design and creating polished digital experiences.",
    skills: ["React.js", "n8n", "APIs", "UI/UX"]
  },

  stats: [
    { value: "50+", label: "Projects Completed", color: "#3b82f6" },
    { value: "2+", label: "Years Experience", color: "#10b981" },
    { value: "100%", label: "Client Satisfaction", color: "#f59e0b" },
    { value: "24/7", label: "Support Available", color: "#ef4444" }
  ]
};

module.exports = {
  servicesData,
  projectsData,
  aboutData
};