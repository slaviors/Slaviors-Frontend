import "bootstrap-icons/font/bootstrap-icons.css"

const services = [
  {
    icon: "bi-code-slash",
    title: "Web Development",
    description:
      "Building responsive and modern web applications tailored to your business needs. We create seamless user experiences across all devices.",
  },
  {
    icon: "bi-robot",
    title: "AI Chatbot Development",
    description:
      "Creating intelligent chatbots for various applications. Enhance customer support and engagement with our cutting-edge AI solutions.",
  },
  {
    icon: "bi-palette",
    title: "UI/UX Design",
    description:
      "Designing user-friendly and visually appealing interfaces. We craft intuitive designs that delight users and drive conversions.",
  },
]

const Services = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="p-8">
                <div className="text-center mb-6">
                  <i className={`bi ${service.icon} text-5xl text-blue-600 dark:text-blue-400`}></i>
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">{service.description}</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services