import banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="site-container grid grid-cols-1 items-center gap-6 py-10 md:min-h-[450px] md:grid-cols-2 md:gap-10 md:py-14 lg:gap-12"
    >
      <div className="min-w-0 text-center md:text-left">
        <h1 className="font-display text-[26px] leading-[1.15] font-extrabold text-ink sm:text-4xl md:text-[44px] md:leading-[1.1]">
          Build Your Ideal
          <br />
          <span className="text-brand-gradient">Development Stack</span>
        </h1>

        <p className="mx-auto mt-5 max-w-[450px] font-sans text-sm leading-6 text-copy md:mx-0 md:mt-6">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-9 md:justify-start">
          <button
            type="button"
            className="brand-gradient cursor-pointer rounded-md px-3 py-3 font-sans text-[11px] font-semibold text-white sm:text-xs md:px-4 md:py-2.5"
          >
            Explore Technologies
          </button>

          <button
            type="button"
            className="cursor-pointer rounded-md border border-line bg-white px-6 py-3 font-sans text-[11px] font-medium text-ink sm:text-xs md:px-8 md:py-2.5"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="flex min-w-0 justify-center md:justify-end">
        <img
          src={banner}
          alt="Development Stack Illustration"
          className="w-full max-w-[320px] object-contain md:max-w-[300px] lg:max-w-[270px]"
        />
      </div>
    </section>
  );
};

export default Hero;
