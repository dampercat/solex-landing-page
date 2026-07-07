import "./FAQ.css";
import { useState } from "react";

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="faq-item" onClick={onClick}>
      <div className="faq-question">
        <h4>{question}</h4>
        <span>{isOpen ? "-" : "+"}</span>
      </div>

      {isOpen && (
        <p className="faq-answer">{answer}</p>
      )}
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    {
      q: "Is Solex free?",
      a: "Yes — there will be a free version. Premium features may be added later for advanced productivity tools."
    },
    {
      q: "Is this only for students?",
      a: "Solex is designed for students, but anyone managing tasks and deadlines can benefit."
    },
    {
      q: "Do I need setup time?",
      a: "No. You can start using it immediately after signing up."
    },
    {
      q: "How is this different from Google Calendar?",
      a: "Solex combines planning, reminders, and productivity tracking in one unified system designed specifically for student burnout prevention."
    }
  ];

  return (
    <section className="faq" id="faq">

      <div className="container faq-content">

        <h2>Frequently Asked Questions</h2>

        <div className="faq-list">

          {data.map((item, index) => (
            <FAQItem
              key={index}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;