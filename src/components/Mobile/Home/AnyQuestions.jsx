import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function AnyQuestions() {
    const questions = [
        {
            id: "01",
            question: "What is the Listener Program?",
            answer: "The Listener Program connects you with trained, non-judgmental individuals who provide emotional support through conversation. They are here to listen and help you navigate life’s challenges without the need for therapy or counseling.",
        },
        {
            id: "02",
            question: "How does it work?",
            answer: "You can connect with a Listener anytime, anywhere. Simply sign up, choose a Listener, and schedule your session. You can talk to them via text or voice—whatever makes you most comfortable.",
        },
    ]

  return (
    <div className="bg-white px-5 py-[30px] space-y-6">
      <h1 className="font-miniature text-[38px] text-center">Any Questions?</h1>

      <Accordion type="single" collapsible>
        {questions?.map((question) => (
        <AccordionItem key={question?.id} value={question?.id}>
          <AccordionTrigger className="">
            <div className="flex items-center gap-2">
                <span className="text-[#95ADF0] text-[24px] font-bold leading-[120%]">{question?.id}</span>
                <span className="text-[16px] font-bold leading-[22px]">{question?.question}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {question?.answer}
          </AccordionContent>
        </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default AnyQuestions;
