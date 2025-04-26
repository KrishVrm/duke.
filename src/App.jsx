import { useState } from "react";
import "./styles/main.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Header />
      <Hero />
      <Work />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
