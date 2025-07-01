import Image from "next/image";

const HeroSection = () => (
  <section className="relative md:mx-16  flex justify-center items-center min-h-[800px] bg-[#f3f1e7] overflow-hidden">
    {/* Background image fallback */}
    <div className="absolute inset-0 w-full h-full z-0">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        poster="https://videos.pexels.com/video-files/1918465/1918465-uhd_2560_1440_24fps.mp4"
      >
        <source src="https://videos.pexels.com/video-files/1918465/1918465-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        {/* Fallback for browsers that do not support the video tag */}
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/40" />
    </div>
    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-10 md:py-20 max-w-5xl mx-auto">
      <h1 className="font-serif font-bold text-white text-center mb-6 md:mb-14 drop-shadow-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
        Psychological Care for
      </h1>
      <h1 className="font-serif font-bold text-white text-center mb-6 drop-shadow-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
        Change, Insight, and Well-Being
      </h1>
      <h3 className="text-base sm:text-lg md:text-xl font-light text-white text-center mb-8 max-w-5xl drop-shadow">
        Offering individual psychotherapy for adults via telehealth in Michigan
        and{" "}
        <a
          href="https://psypact.org/mpage/psypactmap"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#71acaf] text-white text-decoration-none"
        >
          most U.S. states
        </a>{" "}
        through PSYPACT participation
      </h3>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeVPdE8FDjGrnmAJ8kAXzXUTrOz780udwG6noNWHbShZuuIgw/viewform?usp=sf_link"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-2/3 sm:w-auto px-8 py-4 text-lg md:text-2xl  bg-[#8fa7a3] text-white font-semibold hover:bg-[#71acaf] hover:text-white transition shadow-lg tracking-wide uppercase no-underline text-center"
        style={{ letterSpacing: "0.05em" }}
      >
        Schedule a Consultation
      </a>
    </div>
  </section>
);

export default HeroSection;
