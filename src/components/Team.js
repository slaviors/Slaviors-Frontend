import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Rafi Ahmad Zaini',
    position: 'Team Leader, AI and Machine Learning Engineer',
    bio: 'Expert in building AI and Machine Learning models.',
    image: '/assets/rafi.jpg',
    link: 'https://xnxx.com'
  },
  {
    name: 'Muhammad Qurtifa Wijaya',
    position: 'DevOps Engineer, Server Administrator',
    bio: 'Expert in managing servers and deploying applications.',
    image: '/assets/qurtifa.png',
    link: 'https://qurtifa.my.id'
  },
  {
    name: 'Muhammad Farrel Rabbani',
    position: 'Graphic Designer, Frontend Developer',
    bio: 'Expert in creating beautiful and user-friendly interfaces.',
    image: '/assets/farrel.jpg',
    link: 'https://frl.blue'
  },
  {
    name: 'Rejaka Abimanyu Susanto',
    position: 'Fullstack Developer, Database Engineer',
    bio: 'Expert in building scalable and secure web applications.',
    image: '/assets/abimsukafemboy.png',
    link: 'https://rejaka.me'
  }
];

const Team = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-crm shadow-lg rounded-lg overflow-hidden"
          >
            <a href={member.link} target="_blank" rel="noopener noreferrer">
              <div className="flex justify-center pt-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full shadow-md"
                />
              </div>
            </a>
            <div className="p-6 text-center">
              <h2 className="text-[19px] text-brn font-bold mb-2">{member.name}</h2>
              <h3 className="text-md text-gray-500 italic mb-4">{member.position}</h3>
              <p className="text-gray-700 mb-4">{member.bio}</p>
              <a
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-softBrn font-bold relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-softBrn after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
              >
                {member.link.replace(/^https?:\/\//, '')}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
