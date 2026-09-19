import banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="site-container grid min-h-[450px] grid-cols-1 items-center gap-10 py-14 md:grid-cols-2 lg:gap-12"
    >
      <div>
        <h1 className="font-display text-4xl leading-[1.1] font-extrabold text-ink sm:text-[44px]">
          Build Your Ideal
          <br />
          <span className="text-brand-gradient">Development Stack</span>
        </h1>

        <p className="mt-6 max-w-[450px] font-sans text-sm leading-6 text-copy">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="brand-gradient cursor-pointer rounded-md px-4 py-2.5 font-sans text-xs font-semibold text-white"
          >
            Explore Technologies
          </button>

          <button
            type="button"
            className="cursor-pointer rounded-md border border-line bg-white px-8 py-2.5 font-sans text-xs font-medium text-ink"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <img
          src={banner}
          alt="Development Stack Illustration"
          className="w-full max-w-[300px] object-contain lg:max-w-[270px]"
        />
      </div>
    </section>
  );
};

export default Hero;
