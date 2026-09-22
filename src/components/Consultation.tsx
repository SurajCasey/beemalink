const Consultation = () => {
  return (
    <section className="bg-bg/60 py-16 md:py-20 lg:py-28 font-montserrat">
      <div
        className="
          mx-auto grid w-full max-w-360
          grid-cols-1 gap-14
          px-6
          sm:px-10
          md:px-12
          lg:grid-cols-2 lg:gap-24 lg:px-16
          xl:px-24
        "
      >
        {/* Left side */}
        <div className="flex flex-col">
          <h2 className="heading max-w-80">
            Get a free
            <span className="block">consultation</span>
          </h2>

          <p className="paragraph mt-6 max-w-80">
            Please fill out the form and experts will contact you shortly.
          </p>
        
        </div>

        {/* Form */}
        <form className="flex flex-col gap-8 ">
          {/* Full name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="fullName"
              className="text-sm font-semibold text-heading"
            >
              Full name <span className="text-red-500">*</span>
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Sumitra Bhandari"
              className="
                border-0 border-b border-border
                bg-transparent
                px-2 py-3
                text-bodytext
                outline-none
                transition-colors
                placeholder:text-bodytext/40
                focus:border-primary
              "
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="text-sm font-semibold text-heading"
            >
              Phone <span className="text-red-500">*</span>
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="9840000000"
              className="
                border-0 border-b border-border
                bg-transparent
                px-2 py-3
                text-bodytext
                outline-none
                transition-colors
                placeholder:text-bodytext/40
                focus:border-primary
              "
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-heading"
            >
              Email <span className="text-red-500">*</span>
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="sumitra.bhandari@gmail.com"
              className="
                border-0 border-b border-border
                bg-transparent
                px-2 py-3
                text-bodytext
                outline-none
                transition-colors
                placeholder:text-bodytext/40
                focus:border-primary
              "
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              mt-4 self-end
              cursor-pointer rounded-full
              border-2 border-primary
              bg-primary
              px-10 py-3.5
              font-semibold text-white
              transition-all duration-300

              hover:-translate-y-1
              hover:border-secondary
              hover:bg-secondary

              max-sm:w-full
            "
          >
            Quote term life
          </button>
        </form>
      </div>
    </section>
  );
};

export default Consultation;