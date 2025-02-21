"use client"
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";

const StatCard = ({ number, label, delay }) => (
  <div 
    className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 
               transition-all duration-500 border border-white/10 hover:border-white/20 
               hover:transform hover:-translate-y-1 hover:shadow-2xl"
    style={{ animation: `fadeInUp 0.5s ease-out ${delay}s both` }}
  >
    <div className="text-2xl font-bold text-crm animate-pulse">{number}</div>
    <div className="text-sm text-crm-light">{label}</div>
  </div>
);

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full blur-xl animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${Math.random() * 10 + 15}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 md:pt-24 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {/* Left Content */}
            <div className={`space-y-12 max-w-xl mx-auto lg:max-w-none transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-crm font-Jakarta tracking-tight leading-tight">
                  Create Future,{" "}
                  <span className="relative inline-block group">
                    <span className="absolute inset-x-0 bottom-2 h-6 md:h-8 bg-softBrn opacity-30 
                                   transform transition-all duration-300 group-hover:h-full group-hover:opacity-20"></span>
                    <span className="relative text-whiteCream animate-pulse">
                      with Slaviors
                    </span>
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-whiteCream leading-relaxed opacity-90 
                             transform transition-all duration-500 hover:opacity-100">
                  Experience the future of digital innovation. We blend human creativity 
                  with cutting-edge technology to create solutions that transform businesses 
                  and enhance user experiences.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold 
                           text-brn transition-all duration-300 bg-crm hover:bg-crm-light 
                           focus:ring-2 focus:ring-offset-2 focus:ring-crm rounded-xl shadow-soft 
                           hover:shadow-hover w-full sm:w-auto relative overflow-hidden"
                  role="button"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 
                                transform scale-x-0 group-hover:scale-x-100 transition-transform 
                                duration-500 origin-left"></div>
                </a>
                
                <div className="flex items-center gap-6">
                  {[
                    { icon: FaGithub, href: "https://github.com/mamatqurtifa", label: "GitHub" },
                    { icon: FaLinkedin, href: "https://linkedin.com/in/mamatqurtifa", label: "LinkedIn" }
                  ].map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-crm hover:text-crm-light transform hover:scale-110 
                               transition-all duration-300 hover:rotate-6"
                      aria-label={`Visit our ${social.label}`}
                      style={{ animationDelay: `${0.2 * (index + 1)}s` }}
                    >
                      <social.icon className="w-7 h-7" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <StatCard number="25+" label="Projects" delay="0.3" />
                <StatCard number="100%" label="Success Rate" delay="0.5" />
                <StatCard number="24/7" label="Support" delay="0.7" />
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className={`relative lg:ml-4 transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-2xl group">
                <img
                  src="https://botika.online/assets/images/home/humanAI.webp?v=1.3"
                  alt="AI and Human Collaboration"
                  className="w-full h-full object-cover transform transition-transform duration-700 
                           ease-out group-hover:scale-105 filter brightness-100 group-hover:brightness-110"
                  loading="eager"
                />
                
                {/* Interactive overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brn/20 to-transparent 
                               mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-crm/20 to-softBrn/20 
                               rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity 
                               duration-700 animate-pulse"></div>
              </div>
              
              {/* Decorative elements with enhanced animations */}
              <div className="absolute -top-6 -right-6 w-12 h-12 border-4 border-crm rounded-lg 
                            opacity-50 animate-float hover:rotate-45 transition-transform duration-500"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 border-4 border-softBrn 
                            rounded-full opacity-50 animate-float delay-500 hover:scale-110 
                            transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;