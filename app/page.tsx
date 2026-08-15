import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Sponsors from "@/components/Sponsors";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Courses />
      <Sponsors />
      <Donate />
      <Footer />
    </main>
  );
}
