import {
  ChevronRight,
  Mail,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import type { ReactNode } from "react";

import Logo from "../assets/beemalink.svg?react";


const Footer = () => {
  const insuranceServices = [
    "Home Insurance",
    "Car Insurance",
    "Life Insurance",
    "Health Insurance",
  ];

  return (
    <footer className="bg-primary text-white">
      <div
        className="
          mx-auto w-full max-w-360
          px-6 py-14

          sm:px-10

          md:px-12 md:py-16

          lg:px-16 lg:py-20

          xl:px-24
        "
      >
        {/* Main footer content */}
        <div
          className="
            grid grid-cols-1 gap-12

            md:grid-cols-2

            lg:grid-cols-[1.5fr_0.8fr_1fr]
            lg:gap-16
          "
        >

          {/* -------------------------
              Logo + Newsletter
          -------------------------- */}
          <div>
            {/* Logo */}
            <div className="w-fit rounded-md px-2 py-1 group cursor-pointer">
              <Logo className="h-auto w-38 group-hover:scale-105 transition-transform duration-200" />
            </div>

            <p className="mt-4 text-sm text-white/80">
              Protecting what matters the most.
            </p>

            {/* Newsletter */}
            <div className="mt-10">
              <p className="mb-4 text-sm font-medium">
                Updates right to your inbox
              </p>

              <form
                className="
                  flex max-w-md flex-col gap-3
                  sm:flex-row
                "
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  required
                  className="
                    min-h-12 w-full
                    rounded-full
                    border border-white/70
                    bg-transparent
                    px-5
                    text-sm text-white
                    outline-none
                    transition-colors

                    placeholder:text-white/60

                    focus:border-white
                  "
                />

                <button
                  type="submit"
                  className="
                    min-h-12
                    cursor-pointer
                    rounded-full
                    bg-white
                    px-8
                    text-sm font-medium
                    text-primary
                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:bg-bg
                  "
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>


          {/* -------------------------
              Insurance Services
          -------------------------- */}
          <div>
            <h3 className="mb-5 text-sm font-semibold">
              Insurance Services
            </h3>

            <ul className="space-y-3">
              {insuranceServices.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="
                      group flex w-fit
                      items-center gap-1
                      text-sm text-white/80
                      transition-colors
                      duration-300

                      hover:text-white
                    "
                  >
                    <ChevronRight
                      size={15}
                      strokeWidth={2}
                      className="
                        transition-transform
                        duration-300

                        group-hover:translate-x-1
                      "
                    />

                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* -------------------------
              Contact
          -------------------------- */}
          <div>
            <h3 className="mb-5 text-sm font-semibold">
              Contact Us
            </h3>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:beemalinknepal@gmail.com"
                className="
                  flex items-center gap-3
                  text-sm text-white/80
                  transition-colors

                  hover:text-white
                "
              >
                <Mail
                  size={17}
                  strokeWidth={1.8}
                  className="shrink-0"
                />

                <span className="break-all">
                  beemalinknepal@gmail.com
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+9779800000000"
                className="
                  flex items-center gap-3
                  text-sm text-white/80
                  transition-colors

                  hover:text-white
                "
              >
                <Phone
                  size={17}
                  strokeWidth={1.8}
                  className="shrink-0"
                />

                +977 9800000000
              </a>
            </div>


            {/* Social media */}
            <div className="mt-10 flex items-center gap-4">
              <SocialLink
                href="#"
                label="Facebook"
                icon={<FaFacebookF size={15} />}
              />

              <SocialLink
                href="#"
                label="LinkedIn"
                icon={<FaLinkedinIn size={15} />}
              />

              <SocialLink
                href="#"
                label="Instagram"
                icon={<FaInstagram size={16} />}
              />

              <SocialLink
                href="#"
                label="X"
                icon={<FaXTwitter size={15} />}
              />
            </div>
          </div>
        </div>


        {/* -------------------------
            Bottom footer
        -------------------------- */}
        <div
          className="
            mt-14
            flex flex-col gap-4
            border-t border-white/20
            pt-6
            text-xs text-white/75

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © Beemalink {new Date().getFullYear()}
          </p>

          <div className="flex flex-wrap gap-x-7 gap-y-3">
            <a
              href="#"
              className="
                transition-colors
                hover:text-white
              "
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="
                transition-colors
                hover:text-white
              "
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



// --------------------------------
// Social Link component
// --------------------------------

interface SocialLinkProps {
  href: string;
  label: string;
  icon: ReactNode;
}

const SocialLink = ({
  href,
  label,
  icon,
}: SocialLinkProps) => {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex h-8 w-8
        items-center justify-center
        rounded-full
        bg-white
        text-primary
        transition-all
        duration-300

        hover:-translate-y-1
        hover:scale-105
        hover:bg-bg
      "
    >
      {icon}
    </a>
  );
};