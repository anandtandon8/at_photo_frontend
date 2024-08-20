import Image from "next/image";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Header from "@/app/components/Header"

export default function Home() {
  return (
    <main className="bg-white">
        <Header />
        <Navbar />
    </main>
  );
}
