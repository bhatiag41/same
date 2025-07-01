import Image from "next/image";

const AboutSection = () => (
  <section className="max-w-6xl mx-auto mt-32 px-4 flex flex-col md:flex-row md:items-stretch gap-0 md:gap-16">
    {/* Text */}
    <div className="flex-1 md:pr-8 pt-0 md:pt-4">
      <h2 className="text-4xl md:text-4xl font-serif font-bold mb-8 text-[#7c7a6e]">
        About Dr. Serena Blake
      </h2>
      <p className="mb-7 text-[#7c7a6e] text-l leading-relaxed tracking-wide font-light">
        Finding time and opportunities to care for ourselves can be incredibly
        challenging in today's busy and demanding world. I believe therapy
        offers a dedicated space for self-care, providing the support and tools
        needed to improve this essential practice. Therapy can help individuals
        identify and clarify their goals, values, and the various elements that
        contribute to their well-being, recognizing that these aspects vary from
        person to person.
      </p>
      <p className="mb-7 text-[#7c7a6e] text-l leading-relaxed tracking-wide font-light">
        I am dedicated to supporting this journey by offering active listening,
        psychological knowledge, empathy, compassion, and insights into
        behavioral patterns and tendencies. I hold a master's degree in Clinical
        Psychology from the Michigan School of Psychology (2012) and a Ph.D. in
        Counseling Psychology from Western Michigan University (2018). My
        experience spans therapy and psychological assessment in psychiatric
        inpatient units, academic medical centers, universities, and outpatient
        practice settings.
      </p>
      <p className="mb-7 text-[#7c7a6e] text-l leading-relaxed tracking-wide font-light">
        My therapeutic approach is primarily psychodynamic and humanistic,
        enriched by influences from positive psychology, existentialism, family
        systems theory, acceptance and commitment concepts, and mindfulness
        practices.
      </p>
    </div>
    {/* Image */}
    <div className="flex-shrink-0 w-full md:w-[420px] lg:w-[480px] h-auto md:pl-0 md:pr-0 flex  justify-center md:justify-end">
      <Image
        src="https://quilted-libra-91f.notion.site/image/attachment%3Afcdeffc3-7fce-4ca7-a4ea-a0888f182399%3Aimage.png?table=block&id=21f4db5d-d615-8076-8a1c-fd184ea4e5df&spaceId=e434db5d-d615-814a-b090-0003034cd63a&width=2000&userId=&cache=v2"
        alt="Dr. Serena Blake"
        width={480}
        height={600}
        className="object-cover w-full h-auto md:h-[600px] md:w-[480px]"
        priority
      />
    </div>
  </section>
);

export default AboutSection;
