"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time with no penalties. Your access continues until the end of the billing period.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add additional information such as VAT number, company name, and address to your invoices.",
  },
  {
    question: "How does billing work?",
    answer:
      "We bill monthly or annually depending on your chosen plan. You'll receive an invoice via email after each payment.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "You can update your email address in your account settings under the Profile section.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5F7F9] rounded-2xl px-10 py-14">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently asked <span className="text-[#ED3C6A]">questions</span>
            </h2>
            <p className="text-gray-500 text-sm mt-3">
              Everything you need to know about the product and billing.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-[#BF214A47]">
            {faqs.map((faq, i) => (
              <div key={faq.question} className="py-5">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex items-center justify-between text-left gap-4"
                >
                  <span className="text-sm font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <span className="flex items-center justify-center w-6 h-6 rounded-full border border-[#ED3C6A] text-[#ED3C6A] shrink-0">
                    {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                {openIndex === i && (
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
