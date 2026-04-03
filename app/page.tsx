import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Trusted from "./components/Trusted";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <Trusted />
    </main>
  );
}
