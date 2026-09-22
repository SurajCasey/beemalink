import { useEffect, useState } from "react";
import Logo from "../assets/beemalink.svg?react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Services", "Our Story", "FAQ", "Contact"];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className="
          relative z-40
          mx-auto w-full max-w-360
          px-6 pt-5
          sm:px-10
          md:px-12
          lg:px-16
          xl:px-24
        "
      >
        <div className="flex items-center justify-between">
          <Logo className="h-10 w-36 cursor-pointer text-primary" />

          {/* Desktop navigation */}
          <div className="hidden items-center gap-12 md:flex">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                className="navbuttons"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="
              flex h-10 w-10 cursor-pointer
              flex-col items-center justify-center
              gap-1.25
              md:hidden
            "
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="h-0.5 w-6 bg-heading" />
            <span className="h-0.5 w-6 bg-heading" />
            <span className="h-0.5 w-6 bg-heading" />
          </button>
        </div>
      </nav>

      {/* Mobile dark overlay */}
      <button
        type="button"
        aria-label="Close navigation menu"
        className={`
          fixed inset-0 z-60
          bg-black/40
          transition-opacity duration-300
          md:hidden

          ${
            isMenuOpen
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile side drawer */}
      <aside
        id="mobile-navigation"
        className={`
          fixed right-0 top-0 z-70
          h-dvh w-[78%] max-w-72
          bg-card shadow-2xl
          transition-transform duration-300 ease-in-out
          md:hidden

          ${
            isMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
        aria-hidden={!isMenuOpen}
      >
        {/* Close button */}
        <button
          type="button"
          className="
            absolute right-6 top-6
            flex h-10 w-10 cursor-pointer
            items-center justify-center
          "
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close navigation menu"
        >
          <span className="absolute h-0.5 w-6 rotate-45 bg-heading" />
          <span className="absolute h-0.5 w-6 -rotate-45 bg-heading" />
        </button>

        {/* Navigation options */}
        <div className="flex h-full flex-col px-6 pb-8 pt-24">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                className="
                  rounded-lg px-4 py-4
                  text-left font-medium text-heading
                  transition-colors duration-200
                  hover:bg-bg hover:text-secondary
                "
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;