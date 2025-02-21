"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Globe,
  Twitter,
  MessageCircle,
  Mail,
} from "lucide-react";

const teamMembers = [
  {
    name: "Rafi Ahmad Zaini",
    position: "Team Leader, AI/ML Engineer",
    bio: "Expert in building AI and Machine Learning models.",
    image: "/assets/rafi.jpg",
    website: "https://example.com/@rafizaini",
    socials: {
      github: "https://github.com/rafizaini",
      linkedin: "https://linkedin.com/in/rafizaini",
      twitter: "https://twitter.com/rafizaini",
    },
  },
  {
    name: "Muhammad Qurtifa Wijaya",
    position: "DevOps Engineer, Server Administrator",
    bio: "Expert in managing servers and deploying applications.",
    image: "/assets/qurtifa.png",
    website: "https://qurtifa.me",
    socials: {
      github: "https://github.com/mamatqurtifa",
      linkedin: "https://linkedin.com/in/qurtifa",
      twitter: "https://twitter.com/qurtifa",
    },
  },
  {
    name: "Muhammad Farrel Rabbani",
    position: "Graphic Designer, Frontend Developer",
    bio: "Expert in creating beautiful and user-friendly interfaces.",
    image: "/assets/farrel.jpg",
    website: "https://frl.blue",
    socials: {
      github: "https://github.com/farrel",
      linkedin: "https://linkedin.com/in/farrel",
      twitter: "https://twitter.com/farrel",
    },
  },
  {
    name: "Rejaka Abimanyu Susanto",
    position: "Fullstack Developer, Database Engineer",
    bio: "Expert in building scalable and secure web applications.",
    image: "/assets/abim.png",
    website: "https://rejaka.me",
    socials: {
      github: "https://github.com/rejaka",
      linkedin: "https://linkedin.com/in/rejaka",
      twitter: "https://twitter.com/rejaka",
    },
  },
];

const SocialIcon = ({ icon: Icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-brn hover:text-softBrn transform hover:scale-110 transition-all duration-300"
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </a>
);

const Team = () => {
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
    <section className="py-24">
      <div className="container px-6 mx-auto">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-crm mb-6 relative inline-block">
            Meet Our Team
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-crm via-whiteCream to-crm bg-[length:200%_100%] animate-shimmer" />
          </h2>
          <p className="text-lg text-whiteCream/90">
            A passionate team of innovators dedicated to transforming your
            digital presence with cutting-edge solutions and creative
            excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => (cardsRef.current[index] = el)}
              className="opacity-0 translate-y-12"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="group relative overflow-hidden rounded-2xl">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-crm via-whiteCream to-crm opacity-20" />

                {/* Card Content */}
                <div className="relative m-[1px] rounded-2xl overflow-hidden">
                  {/* Glassmorphism Background */}
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-md" />

                  {/* Content Container */}
                  <div className="relative p-6">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                      {/* Image Container with Glow Effect */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-crm/30 rounded-full blur-xl scale-125 animate-pulse-slow" />
                        <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-crm/30 transform group-hover:scale-105 transition-transform duration-500">
                          <Image
                            className="object-cover w-full h-full"
                            src={member.image}
                            alt={member.name}
                            width={128}
                            height={128}
                          />
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-2xl font-bold text-brn mb-2 group-hover:text-softBrn transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-brn/90 font-medium mb-3">
                          {member.position}
                        </p>
                        <p className="text-brn/80 mb-4">{member.bio}</p>

                        {/* Social Links with Frosted Glass Effect */}
                        <div className="flex items-center justify-center sm:justify-start gap-4 mt-4">
                          <div className="flex space-x-4 bg-white/10 backdrop-blur-sm p-2 rounded-full">
                            <SocialIcon
                              icon={Globe}
                              href={member.website}
                              label={`Visit ${member.name}'s website`}
                            />
                            <SocialIcon
                              icon={Github}
                              href={member.socials.github}
                              label={`${member.name}'s GitHub`}
                            />
                            <SocialIcon
                              icon={Linkedin}
                              href={member.socials.linkedin}
                              label={`${member.name}'s LinkedIn`}
                            />
                            <SocialIcon
                              icon={Twitter}
                              href={member.socials.twitter}
                              label={`${member.name}'s Twitter`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
