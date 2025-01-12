import Image from "next/image";
import HomeSection from "../components/Home";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Team from "../components/Team";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <Team />
      <Services />
      <Projects />
      <Footer />
    </div>
  );
}