import Header from "@/app/components/Header"
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import AboutMe from "@/app/components/AboutMe";
import Contact from "@/app/components/Contact"
import Footer from "@/app/components/Footer"

export default function Home() {
  return (
    <main className="bg-white">
        <Header />
        <Navbar />
        <Hero />
        <AboutMe />
        <Contact />
        <Footer />
    </main>
  );
}
