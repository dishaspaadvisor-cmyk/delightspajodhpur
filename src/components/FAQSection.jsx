import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import "../style/faq.css";

export default function FAQSection({ data }) {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId((currentId) =>
      currentId === id ? null : id
    );
  };

  return (
    <section className="faq-section">

      <div className="faq-container">

        {/* =========================
            HEADING
        ========================= */}
        <div className="faq-heading">

          <p className="faq-eyebrow">
            {data?.eyebrow || "FAQ"}
          </p>

          <h2>
            {data?.title || "Frequently Asked Questions"}
          </h2>

          <p className="faq-description">
            {data?.description ||
              "Find answers to some of the most common questions."}
          </p>

        </div>


        {/* =========================
            FAQ LIST
        ========================= */}
        <div className="faq-list">

          {data?.items?.map((item) => {

            const isOpen = activeId === item.id;

            return (
              <div
                className={`faq-item ${
                  isOpen ? "faq-item-open" : ""
                }`}
                key={item.id}
              >

                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                >

                  <span>
                    {item.question}
                  </span>

                  <span className="faq-icon">

                    {isOpen ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}

                  </span>

                </button>


                <div
                  className={`faq-answer ${
                    isOpen ? "faq-answer-open" : ""
                  }`}
                >

                  <div className="faq-answer-inner">
                    {item.answer}
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}