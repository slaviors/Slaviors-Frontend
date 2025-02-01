import { Check, AlertCircle, Zap } from "lucide-react"

const webPlans = [
  {
    name: "Static",
    price: 11.99,
    features: [
      "Responsive design",
      "Basic SEO optimization",
      "Start from 1 month of support",
    ],
    cta: "Get Started",
  },
  {
    name: "Dynamic",
    price: 69.99,
    features: [
      "Up to 5 pages",
      "Content Management System",
      "Advanced SEO package",
      "E-commerce integration",
      "3 rounds of revisions",
      "3 months of support",
    ],
    cta: "Choose Plan",
  },
  {
    name: "Advanced",
    price: null,
    features: [
      "Tailored to your business needs",
      "Custom functionality",
      "Scalable architecture",
      "Advanced integrations",
      "Comprehensive security",
      "Extended support plans",
    ],
    cta: "Contact for Custom Quote",
  },
]

export default function PricingSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          Our Services & Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {webPlans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">{plan.name}</h3>
                {plan.name !== "Advanced" && (
          <p className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">Price starts from</p>
        )}
                {plan.price ? (
                  <p className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                    ${plan.price}
                    <span className="text-base font-normal text-gray-600 dark:text-gray-400">/project</span>
                  </p>
                ) : (
                  <div className="flex items-center justify-center mb-6 text-gray-600 dark:text-gray-300">
                    <AlertCircle className="h-5 w-5 mr-2 text-blue-600" />
                    Custom pricing
                  </div>
                )}
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600 dark:text-gray-300">
                      {plan.price ? (
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      ) : (
                        <Zap className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                      )}
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full font-bold py-3 px-4 rounded transition duration-300 ${
                    plan.price
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-green-600 hover:bg-green-700 text-white"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">AI Chatbot Services</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Elevate your customer service with our cutting-edge AI chatbots. Tailored solutions to fit your unique
            business needs.
          </p>
          <div className="flex items-center justify-center mb-6 text-gray-600 dark:text-gray-300">
            <AlertCircle className="h-5 w-5 mr-2 text-blue-600" />
            Custom pricing based on your requirements
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded transition duration-300">
            Contact for Custom Quote
          </button>
        </div>
      </div>
    </section>
  )
}