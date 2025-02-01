import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-whiteCream rounded-t-3xl shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 space-x-3 rtl:space-x-reverse"
            >
              <Image
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Slaviors Logo"
                width={32}
                height={32}
                className="h-8 invert"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">
                Slaviors
              </span>
            </a>
            <p className="text-sm text-gray-600 mb-4">
              Empowering businesses with innovative digital solutions. From web
              development to AI-powered chatbots, we&apos;re here to elevate your
              online presence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="text-sm font-medium text-gray-500">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Projects
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Contact Us
            </h3>
            <ul className="text-sm text-gray-500">
              <li className="flex items-center mb-2">
                <Mail size={16} className="mr-2" />
                <a href="mailto:info@slaviors.com" className="hover:underline">
                  info@slaviors.com
                </a>
              </li>
              <li className="flex items-center mb-2">
                <Phone size={16} className="mr-2" />
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start mb-2">
                <MapPin size={16} className="mr-2 mt-1" />
                <span>123 Tech Street, Innovation City, 12345, Country</span>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="block text-sm text-gray-500 sm:text-center">
            © {new Date().getFullYear()}{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Slaviors
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-4 sm:mt-0 text-sm font-medium text-gray-500">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
