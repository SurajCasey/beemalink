const Hero = () => {
  return (
    <header
      className="landing-hero-content relative z-10 mx-auto w-full max-w-360 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-24"
    >
      <div className="landing-hero-copy">
        <h1
          className="landing-hero-title font-montserrat font-bold tracking-tight text-heading"
        >
          PROTECT WHAT
          <span className="block">
            MATTERS <span className="text-primary">MOST</span>
          </span>
        </h1>

        <p
          className="paragraph mt-6 max-w-125
          "
        >
          <span className="font-bold text-heading">Beemalink</span> helps
          individuals, families, and businesses find the right insurance
          solutions with trusted advice and personalised service.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            className="min-h-14 w-full cursor-pointer rounded-full border-2 border-primary
              bg-primary px-8 font-semibold text-white transition-all duration-300 
              hover:bg-secondary hover:border-secondary sm:w-auto sm:min-w-39.5
              hover:-translate-y-1
            "
          >
            Get a Quote
          </button>

          <button
            type="button"
            className="  min-h-14 w-full cursor-pointer  rounded-full  border-2 border-primary
              bg-white/90  px-8 font-semibold text-primary  transition-all duration-300
              hover:bg-primary hover:text-white sm:w-auto sm:min-w-39.5 hover:-translate-y-1
              hover:shadow-lg hover:border-primary/20
            "
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;