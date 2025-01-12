import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const services = [
  {
    icon: 'bi-code-slash',
    title: 'Web Development',
    description: 'Building responsive and modern web applications.'
  },
  {
    icon: 'bi-robot',
    title: 'AI Chatbot Development',
    description: 'Creating intelligent chatbots for various applications.'
  },
  {
    icon: 'bi-palette',
    title: 'UI/UX Design',
    description: 'Designing user-friendly and visually appealing interfaces.'
  }
];

const Services = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
      <div className="flex flex-wrap justify-around">
        {services.map((service, index) => (
          <div key={index} className="w-full md:w-1/3 text-center mb-8 px-4">
            <i className={`bi ${service.icon} text-4xl mb-4`}></i>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;