"use client";

import { useEffect, useRef } from "react";
import {
  Globe,
  MessageSquare,
  Users,
  Award,
  ArrowRight,
  Code,
  Bot,
  Palette,
  Sparkles,
} from "lucide-react";

const aboutData = [
  {
    title: "Our Mission",
    content:
      "We strive to create powerful and user-friendly platforms that help businesses, from small enterprises (MSMEs) to large corporations, establish their online presence effortlessly.",
    icon: Globe,
    gradient: "from-brn to-softBrn",
    delay: 0,
  },
  {
    title: "What We Do",
    content: [
      {
        title: "Web Development",
        description:
          "Custom, responsive, and high-performance websites tailored to your business needs.",
        icon: Code,
      },
      {
        title: "Chatbot Development",
        description:
          "Smart AI-powered chatbots to enhance customer engagement and automate interactions.",
        icon: Bot,
      },
      {
        title: "UI/UX Design",
        description:
          "Creating intuitive and visually appealing interfaces for a seamless user experience.",
        icon: Palette,
      },
    ],
    icon: MessageSquare,
    gradient: "from-softBrn to-brn",
    delay: 0.1,
  },
  {
    title: "Our Journey",
    content:
      "Born from the spirit of competition, our team first came together through programming contests. United by our shared passion for technology, we founded Slaviors to bring innovative solutions to businesses looking for a strong digital presence.",
    icon: Users,
    gradient: "from-brn to-softBrn",
    delay: 0.2,
  },
  {
    title: "Our Clients",
    content:
      "We serve a diverse range of clients, from UMKM businesses looking to grow online to large corporations seeking advanced digital solutions.",
    icon: Award,
    gradient: "from-softBrn to-brn",
    delay: 0.3,
  },
  {
    title: "Our Future",
    content:
      "Our vision is to grow into a well-recognized and trusted tech company, expanding our reach and helping more clients succeed in the digital world.",
    icon: ArrowRight,
    gradient: "from-brn to-softBrn",
    delay: 0.4,
  },
];

export default function AboutSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block relative">
            <Sparkles className="absolute -right-8 -top-6 w-6 h-6 text-crm animate-pulse" />
            <h2 className="text-5xl font-bold text-crm mb-6">
              About Us
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-crm via-whiteCream to-crm bg-[length:200%_100%] animate-shimmer" />
            </h2>
          </div>
          <p className="text-lg text-whiteCream/90 mt-4">
            Transforming ideas into digital reality since 2024
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutData.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="transform translate-y-12 opacity-0 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${item.delay}s` }}
            >
              <div
                className={`
                group relative rounded-2xl h-full 
                bg-gradient-to-br ${item.gradient}
                shadow-lg hover:shadow-xl transition-all duration-500 
                hover:-translate-y-2
                overflow-hidden
              `}
              >
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-crm via-whiteCream to-crm opacity-0 group-hover:opacity-10 transition-opacity duration-500 animate-shimmer" />

                {/* Content Container */}
                <div className="relative p-6">
                  {/* Card Header */}
                  <div className="flex items-center mb-6">
                    <div className="mr-4 p-3 rounded-xl bg-white/10 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      {<item.icon className="w-6 h-6 text-crm" />}
                    </div>
                    <h3 className="text-2xl font-bold text-crm">
                      {item.title}
                    </h3>
                  </div>

                  {/* Card Content */}
                  {Array.isArray(item.content) ? (
                    <div className="space-y-4">
                      {item.content.map((point, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300"
                        >
                          <div className="mt-1">
                            <point.icon className="w-5 h-5 text-whiteCream/80" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-crm mb-1">
                              {point.title}
                            </h4>
                            <p className="text-whiteCream/90 text-sm leading-relaxed">
                              {point.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-whiteCream/90 leading-relaxed">
                      {item.content}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
