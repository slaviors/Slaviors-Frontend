import { Globe, MessageSquare, Users, Award, ArrowRight } from "lucide-react"

const aboutData = [
  {
    title: "Our Mission",
    content:
      "We strive to create powerful and user-friendly platforms that help businesses, from small enterprises (MSMEs) to large corporations, establish their online presence effortlessly.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "What We Do",
    content: [
      "Web Development – Custom, responsive, and high-performance websites tailored to your business needs.",
      "Chatbot Development – Smart AI-powered chatbots to enhance customer engagement and automate interactions.",
      "UI/UX Design – Creating intuitive and visually appealing interfaces for a seamless user experience.",
    ],
    icon: <MessageSquare className="w-6 h-6" />,
  },
  {
    title: "Our Journey",
    content:
      "Born from the spirit of competition, our team first came together through programming contests. United by our shared passion for technology, we founded Slaviors to bring innovative solutions to businesses looking for a strong digital presence.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Our Clients",
    content:
      "We serve a diverse range of clients, from UMKM businesses looking to grow online to large corporations seeking advanced digital solutions.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: "Our Future",
    content:
      "Our vision is to grow into a well-recognized and trusted tech company, expanding our reach and helping more clients succeed in the digital world.",
    icon: <ArrowRight className="w-6 h-6" />,
  },
]

export default function AboutSection() {
  return (
    <section className="py-16 bg-gradient-to-l from-crm to-whiteCream">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-brn">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutData.map((item) => (
            <div
              key={item.title}
              className="bg-brn rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 text-crm">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{item.title}</h3>
              </div>
              {Array.isArray(item.content) ? (
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  {item.content.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}