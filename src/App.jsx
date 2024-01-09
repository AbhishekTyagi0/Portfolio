import "./App.css";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Navigation from "./component/Navigation";
import Projects from "./component/Project";
import Skills from "./component/Skills";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
