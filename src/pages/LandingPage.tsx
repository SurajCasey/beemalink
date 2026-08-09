import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
// import Testimonial from "../components/Testimonial";
import About from "../components/About";

import heroImg from "../assets/hero.png";
import Services from "../components/Services";
import Consultation from "../components/Consultation";
import Testimonial from "../components/Testimonial";

const LandingPage = () => {
  return (
    <>
      <main>
        <section
          className="
            relative isolate
            flex h-auto min-h-0 flex-col
            overflow-hidden
            bg-white
            shadow-2xl

            md:h-162.5
            lg:h-[clamp(650px,100svh,780px)]
          "
        >
          {/* Mobile background */}
          <div
            className="
              absolute inset-0 -z-30
              bg-no-repeat
              md:hidden
            "
            style={{
              backgroundImage: `url(${heroImg})`,
              backgroundSize: "180% auto",
              backgroundPosition: "84% bottom",
            }}
          />

          {/* Mobile readability overlay */}
          <div
            className="
              absolute inset-0 -z-20
              bg-linear-to-b
              from-white/45 from-0%
              via-white/15 via-35%
              to-transparent to-60%
              md:hidden
            "
          />

          {/* Tablet and desktop background */}
          <img
            src={heroImg}
            alt="Family standing together outside their home"
            className="
              absolute inset-0 -z-30
              hidden h-full w-full
              object-cover object-center
              md:block
            "
          />

          <Navbar />
          <Hero />
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