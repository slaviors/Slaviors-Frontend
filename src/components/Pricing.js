"use client";

import { useEffect, useRef } from "react";
import {
  Check,
  AlertCircle,
  Zap,
  Code,
  Layout,
  Database,
  Search,
  Clock,
  Server,
  Globe,
  Boxes,
  Shield,
  Cpu,
  MessageSquare,
  Sparkles,
  Rocket,
} from "lucide-react";

const webPlans = [
  {
    name: "Static",
    price: 11.99,
    icon: Layout,
    gradient: "from-crm/20 via-whiteCream/20 to-softBrn/20",
    buttonGradient: "from-brn to-softBrn",
    features: [
      {
        text: "Front-end development only",
        icon: Code,
        detail: "Clean and efficient code implementation",
      },
      {
        text: "Responsive design",
        icon: Layout,
        detail: "Works on all devices",
      },
      {
        text: "Vanilla, React, NextJS",
        icon: Globe,
        detail: "Modern framework options",
      },
      {
        text: "Basic SEO optimization",
        icon: Search,
        detail: "Essential search engine optimization",
      },
      {
        text: "1 month of support",
        icon: Clock,
        detail: "Technical assistance and maintenance",
      },
      {
        text: "Price does not include hosting, domain, and database server",
        icon: Server,
        detail: "External services not included",
      },
    ],
    cta: "Choose Plan",
  },
  {
    name: "Dynamic",
    price: 69.99,
    icon: Database,
    gradient: "from-softBrn/20 via-crm/20 to-brn/20",
    buttonGradient: "from-softBrn to-brn",
    features: [
      {
        text: "Full-stack development",
        icon: Boxes,
        detail: "Complete solution architecture",
      },
      {
        text: "Content Management System",
        icon: Database,
        detail: "Easy content updates",
      },
      {
        text: "Responsive design",
        icon: Layout,
        detail: "Professional and adaptive layouts",
      },
      {
        text: "React, NextJS, NodeJS, Express, NestJS",
        icon: Code,
        detail: "Advanced technology stack",
      },
      {
        text: "Advanced SEO package",
        icon: Search,
        detail: "Comprehensive optimization",
      },
      {
        text: "4 months of support",
        icon: Clock,
        detail: "Extended technical assistance",
      },
      {
        text: "Price does not include hosting, domain, and database server",
        icon: Server,
        detail: "External services not included",
      },
    ],
    cta: "Choose Plan",
    popular: true,
  },
  {
    name: "Advanced",
    price: null,
    icon: Rocket,
    gradient: "from-brn/20 via-softBrn/20 to-crm/20",
    buttonGradient: "from-brn to-softBrn",
    features: [
      {
        text: "Tailored to your business needs",
        icon: Boxes,
        detail: "Custom solution development",
      },
      {
        text: "Custom functionality",
        icon: Cpu,
        detail: "Specialized features",
      },
      {
        text: "Scalable architecture",
        icon: Database,
        detail: "Future-proof solutions",
      },
      {
        text: "Advanced integrations",
        icon: Shield,
        detail: "Third-party services integration",
      },
      {
        text: "Comprehensive security",
        icon: Shield,
        detail: "Enterprise-grade protection",
      },
      {
        text: "Extended support plans",
        icon: Clock,
        detail: "Long-term maintenance",
      },
    ],
    cta: "Contact",
  },
];

const PlanCard = ({ plan, isPopular }) => {
  return (
    <div className="relative group">
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-brn to-softBrn text-whiteCream px-4 py-1 rounded-full text-sm font-semibold z-10">
          Most Popular
        </div>
      )}

      {/* Card Container */}
      <div
        className={`
        relative rounded-2xl transition-all duration-500 
        backdrop-blur-[2px] group-hover:backdrop-blur-md
        ${isPopular ? "ring-2 ring-crm/20" : ""}
      `}
      >
        {/* Background with blur effect */}
        <div className="absolute inset-0 rounded-2xl bg-white/5" />

        {/* Gradient Border */}
        <div
          className={`
          absolute inset-0 rounded-2xl bg-gradient-to-r ${plan.gradient}
          opacity-60 group-hover:opacity-80 transition-opacity duration-500
        `}
        />

        {/* Content Container */}
        <div className="relative m-[1px] p-8 rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
              <plan.icon className="w-6 h-6 text-crm" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-crm">{plan.name}</h3>
              {plan.price ? (
                <div className="text-whiteCream/90">
                  From <span className="text-2xl font-bold">${plan.price}</span>
                  <span className="text-sm">/project</span>
                </div>
              ) : (
                <div className="flex items-center text-whiteCream/90">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  Custom pricing
                </div>
              )}
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-4 mb-8">
            {plan.features.map((feature, idx) => (
              <li
                key={idx}
                className="group/item flex items-start gap-3 text-whiteCream/80 hover:text-whiteCream transition-colors duration-300"
              >
                <feature.icon className="w-5 h-5 mt-0.5 text-crm" />
                <div>
                  <div className="font-medium">{feature.text}</div>
                  <div className="text-sm opacity-0 group-hover/item:opacity-70 transition-opacity duration-300">
                    {feature.detail}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            className={`
            w-full py-3 px-4 rounded-xl font-semibold
            bg-gradient-to-r ${plan.buttonGradient}
            text-whiteCream transform transition-all duration-300
            hover:scale-[1.02] hover:shadow-lg hover:shadow-crm/20
            active:scale-[0.98]
          `}
          >
            {plan.cta}
          </button>
        </div>
      </div>
    </div>
  );
};

const ChatbotSection = () => (
  <div className="relative mt-16 rounded-2xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-brn/20 via-softBrn/20 to-crm/20 opacity-60" />

    <div className="relative p-8 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-crm mb-4 flex items-center gap-2">
            <MessageSquare className="w-6 h-6" />
            AI Chatbot Services
          </h3>
          <p className="text-whiteCream/90 mb-6">
            Elevate your customer service with our cutting-edge AI chatbots.
            Tailored solutions to fit your unique business needs.
          </p>
          <div className="flex items-center text-whiteCream/80 mb-6">
            <Sparkles className="w-5 h-5 mr-2 text-crm" />
            Custom pricing based on your requirements
          </div>
        </div>

        <button className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-brn to-softBrn text-whiteCream transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-crm/20 active:scale-[0.98]">
          Get Started
        </button>
      </div>
    </div>
  </div>
);

export default function PricingSection() {
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-crm/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-softBrn/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-crm mb-6 relative inline-block">
            Our Services & Pricing
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-crm via-whiteCream to-crm bg-[length:200%_100%] animate-shimmer" />
          </h2>
          <p className="text-lg text-whiteCream/90">
            Choose the perfect plan for your project needs
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {webPlans.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} isPopular={plan.popular} />
          ))}
        </div>

        {/* Chatbot Section */}
        <ChatbotSection />
      </div>
    </section>
  );
}
