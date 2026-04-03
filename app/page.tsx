import Hero from "./components/Hero";
import GettingStarted from "./components/GettingStarted";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Tools from "./components/Tools";
import Trusted from "./components/Trusted";
import WhyChoose from "./components/WhyChoose";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <Trusted />
      <Services />
      <Pricing />
      <Tools />
      <GettingStarted />
      <WhyChoose />
    </main>
  );
}
