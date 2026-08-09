import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Card from "../modal/Card";

import Person1 from "../assets/Person1.jpg";
import Person2 from "../assets/Person2.jpg";
import Person3 from "../assets/Person3.jpg";

interface TestimonialItem {
  picture: string;
  name: string;
  text: string;
}
const testimonials: TestimonialItem[] = [
  {
    picture: Person1,
    name: "Ashok Shrestha",
    text: "Comparing insurance plans was very easy with Beemalink. I received clear information and helpful guidance to choose the right plan.",
  },
  {
    picture: Person2,
    name: "Sumana Karki",
    text: "I was confused about the insurance process, but the Beemalink team explained everything clearly. The service was quick and reliable.",
  },
  {
    picture: Person3,
    name: "Prakriti Adhikari",
    text: "Beemalink helped me find a suitable insurance plan for my family. The whole process was simple, transparent, and trustworthy.",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((previous) =>
      previous === testimonials.length - 1 ? 0 : previous + 1
    );
  };

  const previousSlide = () => {
    setCurrent((previous) =>
      previous === 0 ? testimonials.length - 1 : previous - 1
    );
  };

  return (
    <section className="bg-white py-16 md:py-20 lg:py-28">
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
        <h2 className="heading mb-12">
          What people say
        </h2>

        {/* Desktop */}
        <div className="relative hidden md:block">
          <div className="grid grid-cols-3 gap-1">
            <Card
              picture={testimonials[0].picture}
              name={testimonials[0].name}
              text={testimonials[0].text}
              variant="dark"
            />

            <Card
              picture={testimonials[1].picture}
              name={testimonials[1].name}
              text={testimonials[1].text}
              variant="blue"
            />

            <Card
              picture={testimonials[2].picture}
              name={testimonials[2].name}
              text={testimonials[2].text}
              variant="light"
            />
          </div>

          {/* Left arrow */}
          <button
            type="button"
            onClick={previousSlide}
            className="
              absolute
              -left-14
              top-1/2
              -translate-y-1/2
              cursor-pointer
              text-[#365E64]
              transition-transform
              hover:-translate-x-1
            "
            aria-label="Previous testimonial"
          >
            <ChevronLeft
              size={42}
              strokeWidth={1.5}
            />
          </button>

          {/* Right arrow */}
          <button
            type="button"
            onClick={nextSlide}
            className="
              absolute
              -right-14
              top-1/2
              -translate-y-1/2
              cursor-pointer
              text-[#365E64]
              transition-transform
              hover:translate-x-1
            "
            aria-label="Next testimonial"
          >
            <ChevronRight
              size={42}
              strokeWidth={1.5}
            />
          </button>
        </div>

        {/* Mobile carousel */}
        <div className="relative md:hidden">
          <Card
            picture={testimonials[current].picture}
            name={testimonials[current].name}
            text={testimonials[current].text}
            variant={
              current === 0
                ? "dark"
                : current === 1
                  ? "blue"
                  : "light"
            }
          />

          {/* Mobile arrows */}
          <div className="mt-5 flex items-center justify-between">
            <button
              type="button"
              onClick={previousSlide}
              className="cursor-pointer text-heading"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={30} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="cursor-pointer text-heading"
              aria-label="Next testimonial"
            >
              <ChevronRight size={30} />
            </button>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`
                h-3 w-3 cursor-pointer rounded-full
                transition-all duration-300

                ${
                  current === index
                    ? "bg-[#365E64]"
                    : "bg-gray-300"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;