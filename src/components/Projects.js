"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, GithubIcon } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description:
      "A brief description of Project One. This project showcases our expertise in web development and modern design principles.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5e4becf684e6d079db61533d/0630252b-ead5-4cf5-9206-845953deec7f/Squarespace-website-for-a-web-designer-03.png",
    link: "https://example.com/project-one",
    github: "https://github.com/example/project-one",
    tags: ["React", "Next.js", "TailwindCSS"],
    category: "Web Development",
  },
  {
    title: "Project Two",
    description:
      "A brief description of Project Two. An innovative approach to modern web design and user experience.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5e4becf684e6d079db61533d/0381780d-abf4-48be-b3ae-41b5caeedb63/feminine-squarespace-website-concepts.jpg",
    link: "https://example.com/project-two",
    github: "https://github.com/example/project-two",
    tags: ["UI/UX", "Figma", "Prototype"],
    category: "Design",
  },
  {
    title: "Project Three",
    description:
      "A brief description of Project Three. Implementing cutting-edge AI solutions for better user engagement.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5e4becf684e6d079db61533d/f85d5a3a-aaba-4f4c-aa1e-c1e1dd16adc1/Squarespace-website-for-a-brand-manager-1.jpg",
    link: "https://example.com/project-three",
    github: "https://github.com/example/project-three",
    tags: ["AI", "Machine Learning", "Python"],
    category: "AI Development",
  },
  {
    title: "Project Four",
    description:
      "A brief description of Project Four. Creating seamless and intuitive user experiences through modern design.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5e4becf684e6d079db61533d/1642706941297-9OOA2X3ZOL3UC8TMMDIL/Squarespace-website-for-a-meditation-coach-1.png",
    link: "https://example.com/project-four",
    github: "https://github.com/example/project-four",
    tags: ["React Native", "Mobile", "AWS"],
    category: "Mobile App",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl h-[300px] sm:h-[400px]">
      {" "}
      {/* Controlled height */}
      {/* Background Gradient - Made darker and more visible */}
      <div className="absolute inset-0 bg-gradient-to-br from-brn to-softBrn opacity-0 group-hover:opacity-95 transition-opacity duration-500" />
      {/* Project Image with blur effect on hover */}
      <div className="relative h-full w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={85}
          priority={false}
          className="object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
        />
        {/* Additional overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-brn/80 via-brn/40 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
      </div>
      {/* Content Overlay - Updated for better visibility */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4">
        {/* Category Tag */}
        <span className="inline-block px-3 py-1 bg-crm/30 backdrop-blur-md text-whiteCream text-sm rounded-full mb-4 w-fit">
          {project.category}
        </span>

        {/* Title and Description */}
        <h3 className="text-2xl font-bold text-whiteCream mb-2 drop-shadow-lg">
          {project.title}
        </h3>
        <p className="text-whiteCream/90 mb-4 line-clamp-2 drop-shadow-lg">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs bg-white/20 backdrop-blur-md rounded-full text-whiteCream shadow-lg"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons - Updated styling */}
        <div className="flex gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-crm backdrop-blur-md rounded-full text-whiteCream hover:bg-crm/80 transition-colors duration-300 shadow-lg"
          >
            <span>Visit</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-whiteCream hover:bg-white/30 transition-colors duration-300 shadow-lg"
          >
            <span>Code</span>
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-crm/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-whiteCream/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-crm mb-6 relative inline-block">
            Our Projects
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-crm via-whiteCream to-crm bg-[length:200%_100%] animate-shimmer" />
          </h2>
          <p className="text-lg text-whiteCream/90">
            Discover our latest works and innovations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="opacity-0 translate-y-12"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
