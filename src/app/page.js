import Image from "next/image";
import HomeSection from "../components/Home";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Team from "../components/Team";
import Projects from "../components/Projects";
import AboutSection from "../components/CompanyDescription";
import ContactForm from "../components/MailForm";
import PricingSection from "../components/Pricing";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <Team />
      <Services />
      <Projects />
      <PricingSection />
      <ContactForm />
      <Footer />
    </div>
  );
}