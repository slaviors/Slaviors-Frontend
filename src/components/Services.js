"use client";

import { useEffect, useRef } from "react";
import { Code, Bot, Palette, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building responsive and modern web applications tailored to your business needs. We create seamless user experiences across all devices.",
    features: ["Responsive Design", "Modern Architecture", "SEO Optimized"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    hoverGradient: "group-hover:from-blue-500/30 group-hover:to-cyan-500/30",
  },
  {
    icon: Bot,
    title: "AI Chatbot Development",
    description:
      "Creating intelligent chatbots for various applications. Enhance customer support and engagement with our cutting-edge AI solutions.",
    features: [
      "Natural Language Processing",
      "24/7 Support",
      "Custom Training",
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
    hoverGradient: "group-hover:from-purple-500/30 group-hover:to-pink-500/30",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Designing user-friendly and visually appealing interfaces. We craft intuitive designs that delight users and drive conversions.",
    features: ["User Research", "Interactive Prototypes", "Design Systems"],
    gradient: "from-orange-500/20 to-yellow-500/20",
    hoverGradient:
      "group-hover:from-orange-500/30 group-hover:to-yellow-500/30",
  },
];

const Services = () => {
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
    <section className="py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-crm/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-whiteCream/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-crm mb-6 relative inline-block">
            Our Services
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-crm via-whiteCream to-crm bg-[length:200%_100%] animate-shimmer" />
          </h2>
          <p className="text-lg text-whiteCream/90">
            Transforming ideas into reality with cutting-edge solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="opacity-0 translate-y-12"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div
                className={`
                group relative rounded-2xl transition-all duration-500 hover:-translate-y-2
                backdrop-blur-[2px] hover:backdrop-blur-md
              `}
              >
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-crm/20 via-whiteCream/20 to-crm/20 animate-shimmer opacity-60" />

                {/* Card Content */}
                <div
                  className={`
                  relative m-[1px] p-8 rounded-2xl overflow-hidden
                  bg-white/5 backdrop-blur-sm
                  transition-colors duration-500
                  ${service.gradient} ${service.hoverGradient}
                `}
                >
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-crm/20 blur-xl rounded-full scale-150 animate-pulse-slow" />
                    <div className="relative bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500">
                      <service.icon className="w-8 h-8 text-crm" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-crm mb-4">
                    {service.title}
                  </h3>
                  <p className="text-whiteCream/80 mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-whiteCream/70"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-crm mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <button className="group/btn flex items-center space-x-2 text-crm hover:text-whiteCream transition-colors duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
