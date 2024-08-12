import './mainpage.scss';
import ScrollUp from "../scrollUp/ScrollUp";
import Cursor from "../cursor/Cursor";
import Navbar from "../navbar/Navbar";
import Sidebar from '../navbar/sidebar/Sidebar';
import Hero from "../hero/Hero";
import About from "../about/About";
import Services from "../services/Services";
import Testimonials from "../testimonials/Testimonials";
import Footer from "../footer/Footer";

const MainPage = () => {
  return (
    <>
      <ScrollUp />
      <Sidebar />
      <Navbar />
      <Cursor />
      
      <section>
        <Hero />  
      </section>
      
      <section>
        <About />
      </section>
      
      <section>
        <Services/>
      </section>
      
      <section>
        <Testimonials />
      </section>

      <section>
        <Footer />
      </section>
    </>
  )
}

export default MainPage