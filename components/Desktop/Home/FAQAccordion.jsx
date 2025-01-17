"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: 1,
    question: "What is the Listener Program?",
    answer:
      "The Listener Program connects you with trained, non-judgmental individuals who provide emotional support through conversation. They are here to listen and help you navigate life’s challenges without the need for therapy or counseling.",
    bgColor: "bg-lime-200",
  },
  {
    id: 2,
    question: "How does it work?",
    answer:
      "It’s simple! Sign up, create your profile, and select a Listener who resonates with your needs. Start talking at your convenience.",
    bgColor: "bg-white",
  },
  {
    id: 3,
    question: "Is this therapy?",
    answer:
      "No, this is not therapy. Our Listeners are here to provide a compassionate and supportive ear, not professional counseling.",
    bgColor: "bg-white",
  },
  {
    id: 4,
    question: "How much does it cost?",
    answer:
      "The basic services are free, but additional premium features may involve charges.",
    bgColor: "bg-white",
  },
  {
    id: 5,
    question: "What if I don’t feel a connection with my Listener?",
    answer:
      "You can always select another Listener. We encourage finding someone who truly understands you and makes you feel heard.",
    bgColor: "bg-white",
  },
];

function FAQAccordion() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Any Questions?</h1>
      <Accordion type="single" collapsible className="space-y-2">
        {faqData.map((faq, index) => (
          <AccordionItem key={faq.id} value={`faq-${faq.id}`}>
            <AccordionTrigger
              className={`flex items-center justify-between py-4 px-6 rounded-lg text-lg font-semibold ${
                index === 0 ? faq.bgColor : "bg-white"
              }`}
            >
              <div className="flex items-center">
                <span
                  className={`mr-4 text-2xl font-bold ${
                    index === 0 ? "text-gray-900" : "text-gray-400"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`${
                    index === 0 ? "text-gray-900" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
              </div>
              {/* <span
                className={`text-xl font-bold text-gray-700 accordion-icon ${
                  index === 0 ? "text-gray-900" : "text-gray-400"
                }`}
              >
                +
              </span> */}
            </AccordionTrigger>
            <AccordionContent
              className={`px-6 py-4 ${
                index === 0 ? "bg-lime-200" : "bg-gray-50"
              }`}
            >
              <p className="text-gray-800">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default FAQAccordion;
