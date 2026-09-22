import Img1 from "../assets/drive.webp";
import Img2 from "../assets/nepal.webp";
import Img3 from "../assets/family.webp";

const About = () => {
  return (
    <section className="bg-bg/60 py-16 md:py-20 lg:py-33.5">
      <div
        className="
          mx-auto grid w-full max-w-360
          grid-cols-1 items-center gap-12
          px-6
          sm:max-w-205 sm:px-10
          md:px-12
          lg:max-w-360 lg:grid-cols-2 lg:gap-20 lg:px-16
          xl:px-24
        "
      >
        {/* Text content */}
        <div
          className="
            mx-auto w-full max-w-145.5
            text-left     
            lg:mx-0 lg:text-left
          "
        >
          <h2 className="heading">
            About Company
          </h2>

          <p
            className="
              paragraph
              mx-auto mt-10
              max-w-145.5
              lg:mx-0 lg:mt-15.75
            "
          >
            <span className="font-bold">Beemalink</span> is Nepal's trusted
            insurance aggregation platform. Compare, choose, and access
            insurance solutions with ease. Making insurance simple,
            transparent, and accessible.

            <br />
            <br />

            Our consistent and reliable business approach allows the company to
            increase its pool of customers and maintain the reputation of a
            reliable financial partner from year to year. In the Annual Report
            2019, you can read about the financial and operating performance of
            BeemaLink Nepal.
          </p>
        </div>

        {/* Image collage */}
        <div
          className="
            mx-auto w-full max-w-127.5
            lg:mx-0 lg:justify-self-end
          "
        >
          {/* Top two images */}
          <div className="grid grid-cols-2 gap-2">
            <div className="aspect-[1.2/1] overflow-hidden">
              <img
                loading="lazy"
                decoding="async"
                src={Img1}
                alt="Person driving along a mountain road"
                className="
                  h-full w-full
                  object-cover object-center
                  transition-transform duration-500
                  hover:scale-105
                "
              />
            </div>

            <div className="aspect-[1.2/1] overflow-hidden">
              <img
                loading="lazy"
                decoding="async"
                src={Img2}
                alt="Mountain landscape in Nepal"
                className="
                  h-full w-full
                  object-cover object-center
                  transition-transform duration-500
                  hover:scale-105
                "
              />
            </div>
          </div>

          {/* Bottom image */}
          <div className="mt-4 aspect-2.25/1 overflow-hidden sm:mt-6">
            <img
              loading="lazy"
              decoding="async"
              src={Img3}
              alt="Family spending time together"
              className="
                h-full w-full
                object-cover object-[50%_50%]
                transition-transform duration-500
                hover:scale-105
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;