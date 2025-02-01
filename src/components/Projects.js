import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Project One",
    description: "A brief description of Project One.",
    image: "https://images.squarespace-cdn.com/content/v1/5e4becf684e6d079db61533d/0630252b-ead5-4cf5-9206-845953deec7f/Squarespace-website-for-a-web-designer-03.png",
    link: "https://example.com/project-one",
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two.",
    image: "https://images.squarespace-cdn.com/content/v1/5e4becf684e6d079db61533d/0381780d-abf4-48be-b3ae-41b5caeedb63/feminine-squarespace-website-concepts.jpg",
    link: "https://images.squarespace-cdn.com/content/v1/5e4becf684e6d079db61533d/0381780d-abf4-48be-b3ae-41b5caeedb63/feminine-squarespace-website-concepts.jpg",
  },
  {
    title: "Project Three",
    description: "A brief description of Project Three.",
    image: "https://images.squarespace-cdn.com/content/v1/5e4becf684e6d079db61533d/f85d5a3a-aaba-4f4c-aa1e-c1e1dd16adc1/Squarespace-website-for-a-brand-manager-1.jpg",
    link: "https://images.squarespace-cdn.com/content/v1/5e4becf684e6d079db61533d/f85d5a3a-aaba-4f4c-aa1e-c1e1dd16adc1/Squarespace-website-for-a-brand-manager-1.jpg",
  },
  {
    title: "Project Four",
    description: "A brief description of Project Four.",
    image: "https://images.squarespace-cdn.com/content/v1/5e4becf684e6d079db61533d/1642706941297-9OOA2X3ZOL3UC8TMMDIL/Squarespace-website-for-a-meditation-coach-1.png",
    link: "https://images.squarespace-cdn.com/content/v1/5e4becf684e6d079db61533d/1642706941297-9OOA2X3ZOL3UC8TMMDIL/Squarespace-website-for-a-meditation-coach-1.png",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto my-8 px-6 flex flex-col">
      <h1 className="text-3xl font-bold text-center mb-8">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full justify-between sitems-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg"
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {project.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
