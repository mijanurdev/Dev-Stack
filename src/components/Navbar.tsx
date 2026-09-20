import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="site-container relative flex h-18.5 items-center justify-between">
        <button
          type="button"
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="cursor-pointer text-2xl text-ink lg:hidden"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-brand-pink to-brand-violet text-xs font-semibold text-white">
            DS
          </div>

          <h2 className="font-display text-xl font-bold text-ink">
            Dev <span className="text-brand-pink">Stack</span>
          </h2>
        </div>

        <div className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center lg:hidden">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-brand-pink to-brand-violet text-xs font-semibold text-white">
            DS
          </div>
        </div>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link}
              type="button"
              className={`cursor-pointer font-sans text-sm font-medium ${
                link === "Home" ? "text-brand-pink" : "text-ink"
              }`}
            >
              {link}
            </button>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-5 lg:ml-0">
          <button
            type="button"
            className="cursor-pointer font-sans text-xs font-medium text-ink sm:text-sm"
          >
            Sign In
          </button>

          <button
            type="button"
            className="cursor-pointer rounded-full bg-[#D91383] px-3 py-2 font-sans text-xs font-medium text-white shadow-sm sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Sign Up
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className={`${menuOpen ? "block" : "hidden"} border-t border-line bg-white lg:hidden`}
      >
        <div className="mx-auto flex max-w-306 flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <button
              key={link}
              type="button"
              className={`cursor-pointer rounded-lg px-3 py-3 text-left font-sans text-sm font-medium ${
                link === "Home" ? "text-brand-pink" : "text-ink"
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
