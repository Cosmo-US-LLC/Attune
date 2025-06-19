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
      question: "What is FeelAttune?",
      answer: "FeelAttune is a mental wellness platform connecting individuals with empathetic Listeners for judgment-free, personalized support. Available anytime, it offers a user-friendly interface, voice or video calls, and affordable, stigma-free emotional support for everyday challenges.",
    },
    {
      id: "02",
      question: "How does it work?",
      answer: "You can connect with a Listener anytime, anywhere. Simply sign up, choose a Listener, and schedule your session. You can talk to them via voice or video—whatever makes you most comfortable. ",
    },
    {
      id: "03",
      question: "Is this therapy?",
      answer: (
        <div>
          <p>The Listeners offer a supportive and judgment-free space to share your thoughts and feelings. Listeners can help you:</p>
          <ul className="pl-6 mt-2 list-disc">
            <li>Reframe experiences and gain fresh perspective and clarity about your challenges.</li>
            <li>Set and achieve personal goals, such as improving confidence or managing life transitions.</li>
            <li>Explore strategies to enhance emotional well-being and motivation.</li>
            <li>Build resilience and navigate toward your desired outcomes.</li>
          </ul>
          <p className="mt-4">
           However, it’s important to note that Listeners are not licensed mental health professionals. They do not diagnose, treat mental illnesses, or provide clinical interventions. If you’re experiencing severe emotional distress, trauma, or clinical conditions such as anxiety, depression, or addiction, we recommend seeking support from a qualified therapist or counselor. <br/> Listeners is here to complement—not replace—professional mental health care, offering empathetic support for everyday challenges.
          </p>
        </div>
      ),
    },
    
    
    {
      id: "04",
      question: "How much does this cost?",
      answer: (
        <div>
         Our pricing is affordable and based on the number of hours you use. You can choose from flexible plans that work for your needs,
          <span className="font-bold"> starting at just $40/session</span>. We believe emotional support should be accessible to everyone.
        </div>
      ),
    },
    
    {
      id: "05",
      question: "What if I don’t feel a connection with my Listener?",
      answer: "No problem! Our platform allows you to easily switch to a different Listener at any time. Finding someone you connect with is important, and we’re here to ensure you feel comfortable and supported throughout your journey. Simply browse other Listeners and choose the one that feels right for you.",
    },
  ]

  return (
    <div className="bg-[#F4EFEA] px-5 py-[30px] space-y-6" id="mobile-FAQs">
      <h1 className="font-miniature text-[38px] text-center">Any Questions?</h1>

      <Accordion type="single" collapsible>
        {questions?.map((question) => (
          <AccordionItem
            key={question?.id}
            value={question?.id}
            className={
              "px-[14px] data-[state=open]:bg-[#e5ff7d] duration-200 border-black " +
              (question?.id == "05" && "border-transparent")
            }
          >
            <AccordionTrigger className="">
              <div className="flex items-center gap-2">
                <span className="text-[#6FE0D1] text-[24px] font-bold leading-[120%]">
                  {question?.id}
                </span>
                <span className="text-left text-[16px] font-bold leading-[22px]">
                  {question?.question}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="data-[state=open]:bg-[#e5ff7d] duration-150">
              {question?.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default AnyQuestions;
