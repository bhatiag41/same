import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#f3f3ea] text-[#374d51] min-h-screen font-normal">
      {/* Header/Nav */}
      <header className="flex flex-col items-center pt-10 pb-5">
        <a href="/">
          <Image
            src="https://ext.same-assets.com/3467442324/144095289.png"
            alt="Jennifer Hahm Ph.D. Psychological Services PLLC"
            width={160}
            height={60}
            priority
          />
        </a>
      </header>
      {/* Hero title/body */}
      <section className="flex flex-col items-center text-center px-3 lg:px-0">
        <h1 className="text-4xl md:text-5xl font-semibold font-serif mb-1 mt-4">Psychological Care for</h1>
        <h1 className="text-4xl md:text-5xl font-semibold font-serif mb-1">Change, Insight, and Well-Being</h1>
        <h3 className="text-lg md:text-xl font-light mt-2 mb-5 max-w-2xl">
          Offering individual psychotherapy for adults via telehealth in Michigan and{' '}
          <a href="https://psypact.org/mpage/psypactmap" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#71acaf]">most U.S. states</a> through PSYPACT participation
        </h3>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeVPdE8FDjGrnmAJ8kAXzXUTrOz780udwG6noNWHbShZuuIgw/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-8 py-3 text-lg rounded-full bg-[#374d51] text-white font-semibold hover:bg-[#71acaf] transition"
        >
          Schedule a Consultation
        </a>
      </section>

      {/* About section */}
      <section className="max-w-2xl mx-auto mt-12 px-3 text-lg">
        <h2 className="text-2xl font-semibold mb-4">About Dr. Jennifer Hahm</h2>
        <p className="mb-5">
          Finding time and opportunities to care for ourselves can be incredibly challenging in today's busy and demanding world. I believe therapy offers a dedicated space for self-care, providing the support and tools needed to improve this essential practice. Therapy can help individuals identify and clarify their goals, values, and the various elements that contribute to their well-being, recognizing that these aspects vary from person to person.
        </p>
        <p className="mb-5">
          I am dedicated to supporting this journey by offering active listening, psychological knowledge, empathy, compassion, and insights into behavioral patterns and tendencies. I hold a masters degree in Clinical Psychology from the Michigan School of Psychology (2012) and a Ph.D. in Counseling Psychology from Western Michigan University (2018). My experience spans therapy and psychological assessment in psychiatric inpatient units, academic medical centers, universities, and outpatient practice settings.
        </p>
        <p className="mb-5">
          My therapeutic approach is primarily psychodynamic and humanistic, enriched by influences from positive psychology, existentialism, family systems theory, acceptance and commitment concepts, and mindfulness practices.
        </p>
        <p className="italic border-l-4 border-[#71acaf] pl-4 text-base py-2">
          Therapy can be a space where you invest in yourself—one of the highest forms of self-care.
        </p>
      </section>

      {/* Focus areas */}
      <section className="max-w-5xl mx-auto py-10 mt-6 px-3 grid md:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div className="rounded-xl bg-white shadow border border-[#bdbab7] p-4 flex flex-col min-h-[440px]">
          <Image
            className="rounded-lg object-cover mb-4"
            src="https://ext.same-assets.com/3467442324/3999864454.jpeg"
            alt="Therapy for Healthcare Providers and Students"
            width={400}
            height={250}
            style={{ width: '100%', height: 180, objectFit: 'cover' }}
          />
          <h3 className="font-semibold text-xl mb-2">Therapy for Healthcare Providers and Students</h3>
          <p className="text-base flex-1">
            The care you provide for others may be driving you to seek therapy, whether due to burnout, compassion fatigue, imposter syndrome, people-pleasing tendencies, or perfectionism. Whether you're in pre-professional school, undergoing training, or reflecting on a long career in healthcare, we can address the unique stressors of your professional environment along with any challenges you may be facing in other areas of your life.
          </p>
        </div>
        {/* Card 2 */}
        <div className="rounded-xl bg-white shadow border border-[#bdbab7] p-4 flex flex-col min-h-[440px]">
          <Image
            className="rounded-lg object-cover mb-4"
            src="https://ext.same-assets.com/3467442324/2358368129.jpeg"
            alt="Therapy for Trauma and Grief"
            width={400}
            height={250}
            style={{ width: '100%', height: 180, objectFit: 'cover' }}
          />
          <h3 className="font-semibold text-xl mb-2">Therapy for Trauma and Grief</h3>
          <p className="text-base flex-1">
            Life's challenges, whether a difficult childhood, a traumatic event or series of events, or the loss of someone or something deeply meaningful, can lead to profound experiences of trauma and grief. Therapy offers a supportive space to process these experiences, care for yourself amidst painful thoughts and emotions, and work toward a sense of grounding and meaning.
          </p>
        </div>
        {/* Card 3 */}
        <div className="rounded-xl bg-white shadow border border-[#bdbab7] p-4 flex flex-col min-h-[440px]">
          <Image
            className="rounded-lg object-cover mb-4"
            src="https://ext.same-assets.com/3467442324/3565867675.jpeg"
            alt="Therapy for Second Generation Individuals In Immigrant Families"
            width={400}
            height={250}
            style={{ width: '100%', height: 180, objectFit: 'cover' }}
          />
          <h3 className="font-semibold text-xl mb-2">Therapy for Second Generation Individuals In Immigrant Families</h3>
          <p className="text-base flex-1">
            Second-generation individuals in immigrant families, born in the U.S. to at least one parent born abroad, often navigate the complexities of multiple cultures and diverse expectations. This experience can bring challenges such as feeling like a foreigner in your own country and navigating strained family relationships. Therapy offers a supportive space to explore and process this unique aspect of your identity.
          </p>
        </div>
      </section>

      {/* Rates and Insurance */}
      <section className="bg-[#e5e9e6] py-10 mt-8 text-center">
        <h2 className="font-semibold text-2xl mb-4">Rates and Insurance</h2>
        <div className="text-lg">
          <p>Session Fee - $200</p>
          <p>Psychodiagnostic Evaluation - $225</p>
          <p>I accept both private pay and insurance. I am in-network with BCBS and Aetna.</p>
          <p>For out-of-network plans, I've partnered with Mentaya using <a href="https://app.mentaya.com/p/qiXNacRErRNrk7OjP7lg" target="_blank" className="underline hover:text-[#71acaf]">this tool</a> to help you check your eligibility for reimbursement for my services.</p>
          <p className="mt-4 font-semibold text-[#965f4e]">Unable to accept new clients at this time.</p>
        </div>
      </section>

      {/* Quotation */}
      <section className="max-w-2xl mx-auto py-12 px-4 text-center">
        <blockquote className="italic text-xl text-[#939391] mb-2">I have come to believe that caring for myself is not self-indulgent. Caring for myself is an act of survival.</blockquote>
        <div className="text-sm text-[#bdbab7]">Audre Lorde</div>
      </section>

      {/* Footer */}
      <footer className="bg-[#374d51] text-[#f3f3ea] py-8 px-4 mt-10">
        <div className="max-w-3xl mx-auto flex flex-col gap-2">
          <div className="flex flex-col md:flex-row justify-between items-center mb-2 text-lg">
            <span>Jennifer Hahm, Ph.D., Licensed Psychologist</span>
            <span>
              <a href="mailto:jennifer@drjenniferhahm.com" className="underline hover:text-[#71acaf]">jennifer@drjenniferhahm.com</a> |
              <a href="tel:+12489398150" className="underline hover:text-[#71acaf] ml-2">(248) 939-8150</a> Fax: (248) 939-8190
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-base mb-2">
            <span>28175 Haggerty Rd, Novi, MI 48377</span>
            <span className="flex gap-4 mt-2 md:mt-0">
              <a href="/home" className="underline hover:text-[#71acaf]">Home</a>
              <a href="/privacy-policy" className="underline hover:text-[#71acaf]">Privacy Policy</a>
              <a href="/good-faith-estimate" className="underline hover:text-[#71acaf]">Good Faith Estimate</a>
              <a href="https://drjenniferhahm.sessionshealth.com/" target="_blank" className="underline hover:text-[#71acaf]">Client Portal</a>
            </span>
          </div>
          <div className="text-xs text-[#bdbab7] text-center mt-1">© 2025 Jennifer Hahm Ph.D. Psychological Services, PLLC. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
