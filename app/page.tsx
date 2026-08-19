import Hero from "./components/hero";
import About from "./components/about";
import Training from "./components/training";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-950">
      <Hero />
      <About />
      <Training />
      <Contact />
    </main>
  );
}
