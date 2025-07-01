import FocusAreaCard from "./FocusAreaCard";

const focusAreas = [
  {
    image: "https://ext.same-assets.com/3467442324/2358368129.jpeg",
    alt: "Therapy for Healthcare Providers and Students",
    title: "Therapy for Healthcare Providers and Students",
    description:
      "The care you provide for others may be driving you to seek therapy, whether due to burnout, compassion fatigue, imposter syndrome, people-pleasing tendencies, or perfectionism. Whether you're in pre-professional school, undergoing training, or reflecting on a long career in healthcare, we can address the unique stressors of your professional environment along with any challenges you may be facing in other areas of your life.",
  },
  {
    image: "https://ext.same-assets.com/3467442324/3565867675.jpeg",
    alt: "Therapy for Trauma and Grief",
    title: "Therapy for Trauma and Grief",
    description:
      "Life's challenges, whether a difficult childhood, a traumatic event or series of events, or the loss of someone or something deeply meaningful, can lead to profound experiences of trauma and grief. Therapy offers a supportive space to process these experiences, care for yourself amidst painful thoughts and emotions, and work toward a sense of grounding and meaning.",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/64d3ecd6f85a702f7881b802/eeca6997-7fd7-4376-b0a4-df60a0f368e5/pexels-polina-tankilevitch-8202906.jpg?format=1000w",
    alt: "Therapy for Second Generation Individuals In Immigrant Families",
    title: "Therapy for Second Generation Individuals In Immigrant Families",
    description:
      "Second-generation individuals in immigrant families, born in the U.S. to at least one parent born abroad, often navigate the complexities of multiple cultures and diverse expectations. This experience can bring challenges such as feeling like a foreigner in your own country and navigating strained family relationships. Therapy offers a supportive space to explore and process this unique aspect of your identity.",
  },
];

const FocusAreasSection = () => (
  <div className="text-center">
    <hr className="w-11/12 mx-auto border-t-1 border-[#7c7a6e] my-16" />
    <h2 className="text-4xl md:text-5xl font-serif font-bold m-16 text-[#7c7a6e]">
      Focus Areas
    </h2>
    <section className="bg-[#f3f1e7] py-28 px-3 grid grid-cols-1 md:grid-cols-3 gap-20 max-w-7xl mx-auto">
      {focusAreas.map((area, idx) => (
        <FocusAreaCard key={idx} {...area} />
      ))}
    </section>
  </div>
);

export default FocusAreasSection;
