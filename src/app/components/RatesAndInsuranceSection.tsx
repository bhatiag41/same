"use client";
import { useState } from "react";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  reason: "",
  contactTime: "",
  agree: false,
};

const RatesAndInsuranceSection = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Enter a valid email.";
    if (!form.reason.trim())
      newErrors.reason = "Please tell us what brings you here.";
    if (!form.contactTime.trim())
      newErrors.contactTime = "Preferred time is required.";
    if (!form.agree) newErrors.agree = "You must agree to be contacted.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      // Add your form submission logic here
      alert("Form submitted!");
      setForm(initialForm);
    }
  };

  return (
    <div className="w-full">
      <section className="bg-[#8fa7a3] py-20 px-4 text-center">
        <h2 className="font-serif font-semibold text-4xl mb-10 text-[#222]">
          Rates and Insurance
        </h2>
        <div className="text-lg text-[#222] max-w-4xl mx-auto">
          <p className="mb-2">Session Fee - $200</p>
          <p className="mb-2">Psychodiagnostic Evaluation - $225</p>
          <p className="mb-2">
            I accept both private pay and insurance. I am in-network with BCBS
            and Aetna.
          </p>
          <p className="mb-2">
            For out-of-network plans, I've partnered with Mentaya using{" "}
            <a
              href="https://app.mentaya.com/p/qiXNacRErRNrk7OjP7lg"
              target="_blank"
              className="underline hover:text-[#71acaf]"
            >
              this tool
            </a>{" "}
            to help you check your eligibility for reimbursement for my
            services.
          </p>
        </div>
      </section>
      <section className="flex justify-center items-center py-20 bg-[#f3f1e7]">
        <form
          onSubmit={handleSubmit}
          className="bg-white border-2 border-[#3a5a40] rounded-xl shadow-md max-w-xl w-full p-8 flex flex-col gap-6"
        >
          <h2 className="font-serif text-3xl font-bold text-[#234] text-center mb-2">
            Get In Touch
          </h2>
          <p className="text-center text-[#234] mb-2">
            Simply fill out the brief fields below and Dr. Norman will be in
            touch with you soon, usually within one business day. This form is
            safe, private, and completely free.
          </p>
          <label className="font-serif text-lg text-left">
            Name
            <input
              type="text"
              className={`w-full mt-1 p-2 border rounded-md bg-[#f9f9f6] ${
                errors.name ? "border-red-500" : "border-[#3a5a40]"
              }`}
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            {errors.name && (
              <span className="text-red-600 text-sm">{errors.name}</span>
            )}
          </label>
          <label className="font-serif text-lg text-left">
            Phone
            <input
              type="tel"
              className={`w-full mt-1 p-2 border rounded-md bg-[#f9f9f6] ${
                errors.phone ? "border-red-500" : "border-[#3a5a40]"
              }`}
              placeholder="(555) 234-5678"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
            {errors.phone && (
              <span className="text-red-600 text-sm">{errors.phone}</span>
            )}
          </label>
          <label className="font-serif text-lg text-left">
            Email
            <input
              type="email"
              className={`w-full mt-1 p-2 border rounded-md bg-[#f9f9f6] ${
                errors.email ? "border-red-500" : "border-[#3a5a40]"
              }`}
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            {errors.email && (
              <span className="text-red-600 text-sm">{errors.email}</span>
            )}
          </label>
          <label className="font-serif text-lg text-left">
            What brings you here?
            <textarea
              className={`w-full mt-1 p-2 border rounded-md bg-[#f9f9f6] ${
                errors.reason ? "border-red-500" : "border-[#3a5a40]"
              }`}
              placeholder="How can I help you?"
              value={form.reason}
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
              rows={3}
              required
            />
            {errors.reason && (
              <span className="text-red-600 text-sm">{errors.reason}</span>
            )}
          </label>
          <label className="font-serif text-lg text-left">
            Preferred time to reach you
            <input
              type="text"
              className={`w-full mt-1 p-2 border rounded-md bg-[#f9f9f6] ${
                errors.contactTime ? "border-red-500" : "border-[#3a5a40]"
              }`}
              placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
              value={form.contactTime}
              onChange={(e) =>
                setForm({ ...form, contactTime: e.target.value })
              }
              required
            />
            {errors.contactTime && (
              <span className="text-red-600 text-sm">{errors.contactTime}</span>
            )}
          </label>
          <label className="flex items-center gap-2 font-serif text-lg">
            <input
              type="checkbox"
              checked={form.agree}
              onChange={(e) => setForm({ ...form, agree: e.target.checked })}
              className={`accent-[#3a5a40] w-5 h-5 border rounded ${
                errors.agree ? "border-red-500" : "border-[#3a5a40]"
              }`}
              required
            />
            I agree to be contacted
          </label>
          {errors.agree && (
            <span className="text-red-600 text-sm -mt-4 mb-2">
              {errors.agree}
            </span>
          )}
         
          <button
            type="submit"
            className="mt-2 bg-[#3a5a40] text-white font-serif text-lg rounded-md py-3 hover:bg-[#234] transition"
          >
            Submit
          </button>
          <p className="text-xs text-[#234] text-center mt-2">
            <span className="mr-1">ⓘ</span>By clicking submit you consent to
            receive texts and emails from Dr. Marcia T. Norman
          </p>
          {submitted && (
            <p className="text-green-700 text-center mt-2">
              Thank you for your message!
            </p>
          )}
        </form>
      </section>
    </div>
  );
};

export default RatesAndInsuranceSection;
