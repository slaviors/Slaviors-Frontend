import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    image: '/path/to/project-one-image.jpg',
    link: 'https://example.com/project-one'
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    image: '/path/to/project-two-image.jpg',
    link: 'https://example.com/project-two'
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Three.',
    image: '/path/to/project-three-image.jpg',
    link: 'https://example.com/project-three'
  },
  {
    title: 'Project Four',
    description: 'A brief description of Project Four.',
    image: '/path/to/project-four-image.jpg',
    link: 'https://example.com/project-four'
  }
];

const Projects = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Projects</h1>
      <div className="flex flex-wrap justify-around">
        {projects.map((project, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </a>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;