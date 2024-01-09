import { useState } from "react";
import "./App.css";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Navigation from "./component/Navigation";
import Projects from "./component/Project";
import Skills from "./component/Skills";

function App() {
  const [nav, setNav] = useState(false);

  return (
    <>
      <Navigation nav={nav} setNav={setNav} />
      <Home nav={nav} />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
