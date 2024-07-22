import "./app.scss";
import Cursor from "./components/cursor/Cursor";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Test from "./Test";

const App = () => {
  return <div>
    <Cursor/>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    {/*<section><Parallax type="about"/></section>
    <section><About/></section>*/}
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contact">
      <Contact/>
    </section>
  </div>;
};

export default App;
