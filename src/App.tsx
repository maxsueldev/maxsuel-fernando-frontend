import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Journey from "./sections/Journey";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bg text-foreground">
      <Navbar />

      <main id="conteudo-principal" tabIndex={-1}>
        <Hero />
        <TechStack />
        <Projects />
        <Journey />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
