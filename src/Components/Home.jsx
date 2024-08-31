import Navbar from "./Navbar";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Pricing />
        <Testimonial />
        <Faq />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
