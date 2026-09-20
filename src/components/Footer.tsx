import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { toast } from "react-toastify";

const Footer = () => {
  const handleFooterLink = (name: string) => {
    if (name === "Home" || name === "Technologies") {
      document.getElementById(name.toLowerCase())?.scrollIntoView({
        behavior: "smooth",
      });
      return;
    }

    toast.info(`${name} is not available yet.`);
  };

  return (
    <footer className="border-t border-line bg-white font-display">
      <div className="site-container grid grid-cols-1 gap-10 py-10 md:grid-cols-4 md:py-12 lg:grid-cols-[1.5fr_repeat(3,0.833fr)]">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-brand-pink to-brand-violet text-xs font-bold text-white">
              DS
            </div>
            <h2 className="text-xl font-bold text-ink">
              Dev <span className="text-brand-pink">Stack</span>
            </h2>
          </div>

          <p className="mx-auto mt-4 max-w-90 text-sm leading-6 text-copy md:mx-0 md:max-w-75">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="mt-5 hidden items-center gap-5 md:flex">
            <span
              onClick={() => handleFooterLink("GitHub")}
              className="cursor-pointer text-sm font-semibold text-copy hover:text-brand-pink"
            >
              GitHub
            </span>

            <span
              onClick={() => handleFooterLink("Twitter")}
              className="cursor-pointer text-sm font-semibold text-copy hover:text-brand-pink"
            >
              Twitter
            </span>

            <span
              onClick={() => handleFooterLink("LinkedIn")}
              className="cursor-pointer text-sm font-semibold text-copy hover:text-brand-pink"
            >
              LinkedIn
            </span>
          </div>

          <div className="mt-5 flex items-center justify-center gap-6 md:hidden">
            <span
              onClick={() => handleFooterLink("GitHub")}
              className="cursor-pointer text-copy hover:text-brand-pink"
            >
              <FiGithub size={20} />
            </span>

            <span
              onClick={() => handleFooterLink("Twitter")}
              className="cursor-pointer text-copy hover:text-brand-pink"
            >
              <FiTwitter size={20} />
            </span>

            <span
              onClick={() => handleFooterLink("LinkedIn")}
              className="cursor-pointer text-copy hover:text-brand-pink"
            >
              <FiLinkedin size={20} />
            </span>
          </div>
        </div>

        <div className="hidden md:block">
          <h3 className="text-sm font-bold text-ink">PRODUCT</h3>

          <div className="mt-5 flex flex-col items-start gap-3 text-sm text-copy">
            <button
              type="button"
              onClick={() => handleFooterLink("Home")}
              className="hover:text-brand-pink"
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => handleFooterLink("Technologies")}
              className="hover:text-brand-pink"
            >
              Technologies
            </button>

            <button
              type="button"
              onClick={() => handleFooterLink("Projects")}
              className="hover:text-brand-pink"
            >
              Projects
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          <h3 className="text-sm font-bold text-ink">COMPANY</h3>

          <div className="mt-5 flex flex-col items-start gap-3 text-sm text-copy">
            <button
              type="button"
              onClick={() => handleFooterLink("About")}
              className="hover:text-brand-pink"
            >
              About
            </button>

            <button
              type="button"
              onClick={() => handleFooterLink("Contact")}
              className="hover:text-brand-pink"
            >
              Contact
            </button>

            <button
              type="button"
              onClick={() => handleFooterLink("Careers")}
              className="hover:text-brand-pink"
            >
              Careers
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          <h3 className="text-sm font-bold text-ink">LEGAL</h3>

          <div className="mt-5 flex flex-col items-start gap-3 text-sm text-copy">
            <button
              type="button"
              onClick={() => handleFooterLink("Privacy Policy")}
              className="hover:text-brand-pink"
            >
              Privacy Policy
            </button>

            <button
              type="button"
              onClick={() => handleFooterLink("Terms of Service")}
              className="hover:text-brand-pink"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="site-container flex items-center justify-between gap-2 py-6 text-[9px] text-copy sm:text-xs md:gap-4">
          <p className="whitespace-nowrap">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex shrink-0 items-center gap-3 sm:gap-4">
            <span
              onClick={() => handleFooterLink("Privacy")}
              className="cursor-pointer hover:text-brand-pink"
            >
              Privacy
            </span>

            <span
              onClick={() => handleFooterLink("Terms")}
              className="cursor-pointer hover:text-brand-pink"
            >
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
