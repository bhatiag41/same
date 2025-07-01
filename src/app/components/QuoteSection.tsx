const QuoteSection = () => (
  <section className="relative w-full mx-auto py-16 px-4 text-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0 w-full h-full z-0 ">
      <img
        src="https://media.istockphoto.com/id/1371256107/photo/the-turquoise-wave-water-background-of-summer-beach-at-the-seashore-and-beach-summer-pattern.jpg?s=612x612&w=0&k=20&c=IrLCBo9WbvwJzUpsy6UAxqaSSVAmHkEPRYXUnL04FXY="
        alt="Waves background aesthetic"
        className="w-full h-full object-cover object-center"
    
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
    {/* Quote content */}
    <div className="relative z-10 p-20">
      <blockquote className=" text-[#252525] italic font-serif text-2xl md:text-3xl mb-4">
        I have come to believe that caring for myself is not self-indulgent.
        <br />
        Caring for myself is an act of survival.
      </blockquote>
      <div className="text-base text-[#252525] font-serif">—Audre Lorde</div>
    </div>
  </section>
);

export default QuoteSection;
