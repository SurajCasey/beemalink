import {
  CarFront,
  ClipboardCheck,
  HandHeart,
  HeartPulse,
  HouseIcon,
  PlaneIcon,
  type LucideIcon,
} from "lucide-react";

import Img1 from "../assets/car.jpg";
import Img2 from "../assets/nepal.jpg";
import Img3 from "../assets/family.jpg";

const Services = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-28 font-montserrat">
      <div
        className="
          mx-auto w-full max-w-360
          px-6
          sm:px-10
          md:px-12
          lg:px-16
          xl:px-24
        "
      >
        {/* Heading */}
        <h2 className="heading mb-10 md:mb-12">
          Services
        </h2>

        {/* Services */}
        <div
          className="
            grid grid-cols-1
            overflow-hidden
            md:grid-cols-3
          "
        >
          <ServicesColumn
            image={Img1}
            topIcon={CarFront}
            top="Motor Insurance"
            bottomIcon={HouseIcon}
            bottom="Property Insurance"
            overlayClass="bg-[#062F3A]/80"
            textClass="text-white"
          />

          <ServicesColumn
            image={Img2}
            topIcon={HandHeart}
            top="Compulsory Insurance"
            bottomIcon={PlaneIcon}
            bottom="Travel Insurance"
            overlayClass="bg-[#214C55]/60"
            textClass="text-white"
          />

          <ServicesColumn
            image={Img3}
            topIcon={HeartPulse}
            top="Health Insurance"
            bottomIcon={ClipboardCheck}
            bottom="Covid-19 Foreigners"
            overlayClass="bg-white/65"
            textClass="text-"
            darkDivider
          />
        </div>
      </div>
    </section>
  );
};

export default Services;


/* --------------------------------
   Service Item
--------------------------------- */

type ServiceItemProps = {
  Icon: LucideIcon;
  title: string;
  divider?: boolean;
  darkDivider?: boolean;
};

const ServiceItem = ({
  Icon,
  title,
  divider = false,
  darkDivider = false,
}: ServiceItemProps) => {
  return (
    <div
      className="
        relative
        flex items-center justify-center
        px-4
        text-center group cursor-pointer
      "
    >
      <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-200">
        <Icon
          className="h-4 w-4 shrink-0"
          strokeWidth={1.8}
        />

        <span className="text-sm font-medium">
          {title}
        </span>
      </div>

      {/* Horizontal divider */}
      {divider && (
        <div
          className={`
            absolute bottom-0 left-1/2
            h-px w-[72%]
            -translate-x-1/2
            ${
              darkDivider
                ? "bg-heading/40"
                : "bg-white/60"
            }
          `}
        />
      )}
    </div>
  );
};


/* --------------------------------
   Service Column
--------------------------------- */

type ServicesColumnProps = {
  image: string;
  topIcon: LucideIcon;
  top: string;
  bottomIcon: LucideIcon;
  bottom: string;
  overlayClass: string;
  textClass: string;
  darkDivider?: boolean;
};

const ServicesColumn = ({
  image,
  topIcon,
  top,
  bottomIcon,
  bottom,
  overlayClass,
  textClass,
  darkDivider = false,
}: ServicesColumnProps) => {
  return (
    <div
      className={`
        relative
        grid h-72 grid-rows-2
        overflow-hidden
        ${textClass}

        sm:h-80
        md:h-72
        lg:h-80
      `}
    >
      {/* Background image */}
      <div
        className="
          absolute inset-0
          bg-cover
          bg-center
          bg-no-repeat
          transition-transform
          duration-700
          hover:scale-105
        "
        style={{
          backgroundImage: `url(${image})`,
        }}
      />

      {/* Image overlay */}
      <div
        className={`
          absolute inset-0
          ${overlayClass}
        `}
      />

      {/* Top service */}
      <div className="relative z-10 grid cursor-pointer ">
        <ServiceItem 
          Icon={topIcon}
          title={top}
          divider
          darkDivider={darkDivider}
        />
      </div>

      {/* Bottom service */}
      <div className="relative z-10 grid">
        <ServiceItem
          Icon={bottomIcon}
          title={bottom}
        />
      </div>
    </div>
  );
};