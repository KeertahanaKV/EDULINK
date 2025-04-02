import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    { question: "How do I share my own resource?", answer: "You can submit resources from your profile page." },
    { question: "Are these courses free?", answer: "Yes, all resources on EduLink are free." }
  ];

  return (
    <section className="py-16 px-6">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b">
            <button onClick={() => toggleFAQ(index)} className="w-full text-left py-3 font-semibold">
              {faq.question}
            </button>
            {open === index && <p className="text-gray-600 px-3">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
