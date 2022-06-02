import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About"
import 'antd/dist/antd.min.css'



function App() {
  return (
      <div className="App">
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
  );
}

export default App;
