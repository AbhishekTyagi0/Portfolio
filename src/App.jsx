import "./App.css";
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
    </>
  );
}

export default App;
