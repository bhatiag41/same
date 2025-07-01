const Footer = () => (
  <footer className="bg-[#f3f1e7] text-[#374d51] py-12 px-4 mt-10 border-t border-[#e5e9e6]">
    <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
      <div className="font-serif text-xl font-semibold text-center mb-2">
        Jennifer Hahm, Ph.D., Licensed Psychologist
      </div>
      <div className="text-center text-lg">
        <a
          href="mailto:jennifer@drjenniferhahm.com"
          className="underline hover:text-[#71acaf]"
        >
          jennifer@drjenniferhahm.com
        </a>{" "}
        |
        <a
          href="tel:+12489398150"
          className="underline hover:text-[#71acaf] ml-2"
        >
          (248) 939-8150
        </a>{" "}
        Fax: (248) 939-8190
      </div>
      <div className="text-center text-base">
        28175 Haggerty Rd, Novi, MI 48377
      </div>
      <div className="flex flex-wrap justify-center gap-6 text-base mt-2 mb-2">
        <a href="/home" className="underline hover:text-[#71acaf]">
          Home
        </a>
        <a href="/privacy-policy" className="underline hover:text-[#71acaf]">
          Privacy Policy
        </a>
        <a
          href="/good-faith-estimate"
          className="underline hover:text-[#71acaf]"
        >
          Good Faith Estimate
        </a>
        <a
          href="https://drjenniferhahm.sessionshealth.com/"
          target="_blank"
          className="underline hover:text-[#71acaf]"
        >
          Client Portal
        </a>
      </div>
      <div className="text-xs text-[#bdbab7] text-center mt-2">
        © 2025 Jennifer Hahm Ph.D. Psychological Services, PLLC. All rights
        reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
