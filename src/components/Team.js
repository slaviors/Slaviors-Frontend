import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Rafi Ahmad Zaini",
    position: "Team Leader, AI and Machine Learning Engineer",
    bio: "Expert in building AI and Machine Learning models.",
    image: "/assets/rafi.jpg",
    link: "https://xnxx.com/@rafizaini",
  },
  {
    name: "Muhammad Qurtifa Wijaya",
    position: "DevOps Engineer, Server Administrator",
    bio: "Expert in managing servers and deploying applications.",
    image: "/assets/qurtifa.png",
    link: "https://qurtifa.me",
  },
  {
    name: "Muhammad Farrel Rabbani",
    position: "Graphic Designer, Frontend Developer",
    bio: "Expert in creating beautiful and user-friendly interfaces.",
    image: "/assets/farrel.jpg",
    link: "https://frl.blue",
  },
  {
    name: "Rejaka Abimanyu Susanto",
    position: "Fullstack Developer, Database Engineer",
    bio: "Expert in building scalable and secure web applications.",
    image: "/assets/abimsukafemboy.png",
    link: "https://rejaka.me",
  },
];

const Team = () => {
  return (
    <section className="bg-brn">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-softBrn capitalize lg:text-3xl">
          Our <span className="text-whiteCream">Executive Team</span>
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-whiteCream">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div
              className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl border-whiteCream group bg-brn"
              key={index}
            >
              <div className="flex flex-col sm:-mx-4 sm:flex-row">
                <Image
                  className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-whiteCream"
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                />

                <div className="mt-4 sm:mx-4 sm:mt-0">
                  <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
                    {member.name}
                  </h1>

                  <p className="mt-2 text-gray-500 capitalize dark:text-whiteCream group-hover:text-whiteCream">
                    {member.position}
                  </p>

                  <a
                    href={member.link}
                    className="mt-4 text-gray-500 dark:text-whiteCream group-hover:text-whiteCream"
                  >
                    - {member.link}
                  </a>
                </div>
              </div>

              <p className="mt-4 text-gray-500 capitalize dark:text-whiteCream group-hover:text-whiteCream">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
