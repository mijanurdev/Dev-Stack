

const Footer = () => {
  return (
    <footer className="border-t border-line bg-white font-display">
      <div className="site-container grid grid-cols-2 gap-10 py-12 md:grid-cols-4 lg:grid-cols-[1.5fr_repeat(3,0.833fr)]">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-pink to-brand-violet text-xs font-bold text-white">
              DS
            </div>

            <h2 className="text-xl font-bold text-ink">
              Dev <span className="text-brand-pink">Stack</span>
            </h2>
          </div>

          <p className="mt-4 max-w-[300px] text-sm leading-6 text-copy">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="mt-5 flex items-center gap-5">
            <span className="cursor-pointer text-sm font-semibold text-copy hover:text-brand-pink">
              GitHub
            </span>

            <span className="cursor-pointer text-sm font-semibold text-copy hover:text-brand-pink">
              Twitter
            </span>

            <span className="cursor-pointer text-sm font-semibold text-copy hover:text-brand-pink">
              LinkedIn
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-ink">PRODUCT</h3>

          <div className="mt-5 flex flex-col items-start gap-3 text-sm text-copy">
            <button type="button" className="hover:text-brand-pink">
              Home
            </button>

            <button type="button" className="hover:text-brand-pink">
              Technologies
            </button>

            <button type="button" className="hover:text-brand-pink">
              Projects
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-ink">COMPANY</h3>

          <div className="mt-5 flex flex-col items-start gap-3 text-sm text-copy">
            <button type="button" className="hover:text-brand-pink">
              About
            </button>

            <button type="button" className="hover:text-brand-pink">
              Contact
            </button>

            <button type="button" className="hover:text-brand-pink">
              Careers
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-ink">LEGAL</h3>

          <div className="mt-5 flex flex-col items-start gap-3 text-sm text-copy">
            <button type="button" className="hover:text-brand-pink">
              Privacy Policy
            </button>

            <button type="button" className="hover:text-brand-pink">
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="site-container flex flex-col items-center justify-between gap-4 py-6 text-xs text-copy sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <button type="button" className="hover:text-brand-pink">
              Privacy
            </button>

            <span>·</span>

            <button type="button" className="hover:text-brand-pink">
              Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
