'use client'
import React, { useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is our website?",
      answer: "-"
    },
    {
      question: "How does it work?",
      answer: "-"
    },
    {
      question: "Is my information safe?",
      answer: "Yes, we prioritize the confidentiality and security of your personal and relatives information."
    },
    {
      question: "Do I need insurance?",
      answer: "-"
    }
  ];

  return (
    <>
      {/* <!-- ===== FAQs Start ===== --> */}
      <section id="faqs" className="py-20 lg:py-25 xl:py-30 bg-gray-100">
        <div className="mt-20 mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "FAQs",
              subtitle: "",
              description: "Find answers to commonly asked questions about ZipHealth.",
            }}
          />
          {/* <!-- FAQs Content Start --> */}
          <div className="mt-10">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6">
                <button
                  className="text-xl font-semibold mb-3 focus:outline-none border-b-2 border-transparent transition-colors duration-300 hover:border-blue-500"
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-700"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          {/* <!-- FAQs Content End --> */}
        </div>
      </section>
      {/* <!-- ===== FAQs End ===== --> */}
    </>
  );
};

export default FAQs;
