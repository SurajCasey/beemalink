import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
// import Testimonial from "../components/Testimonial";
import About from "../components/About";

import heroImg from "../assets/hero-desktop.webp";
import heroMobile from "../assets/hero-mobile.webp";
import Services from "../components/Services";
import Consultation from "../components/Consultation";
import Testimonial from "../components/Testimonial";

const LandingPage = () => {
  return (
    <>
      <main>
        <section className="landing-hero relative isolate overflow-hidden bg-white shadow-2xl">
          <Navbar />
          <Hero />
          <div className="landing-hero-media">
            <picture>
              <source media="(max-width: 639px)" srcSet={heroMobile} />
              <img
              src={heroImg}
              fetchPriority="high"
              loading="eager"
              alt=""
              className="landing-hero-image"
            />
            </picture>
          </div>
        </section>
        <About />
        <Services/>
        <Consultation/>
        <Testimonial/>
      </main>

      <Footer />
    </>
  );
};

export default LandingPage;