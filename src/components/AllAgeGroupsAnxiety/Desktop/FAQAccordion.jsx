"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

function FAQAccordion() {
  const questions = [
    {
      id: "01",
      question: "What is FeelAttune?",
      answer:
        "FeelAttune is a life coaching platform that connects you with certified coaches who specialize in anxiety. Whether you're dealing with social pressure, financial stress, academic overwhelm, or simply the weight of everyday life, we offer personalized, one-on-one sessions designed to help you build real coping strategies and move forward with confidence.",
    },
    {
      id: "02",
      question: "How does it work?",
      answer:
        "Getting started is simple. Tell us a little about yourself and what you're navigating, we'll match you with the right life coach for your situation. You'll receive a booking link via email or SMS to schedule your session then simply join the call and start moving forward.",
    },
    {
      id: "03",
      question: "Is this therapy?",
      answer: (
        <>
          No. Attune offers one-on-one life coaching, not therapy or clinical
          treatment.
          <br />
          <br />
          Our life coaches don&apos;t diagnose or treat mental health conditions. What
          they do is create a judgment-free space to help you understand your
          anxiety, work through what&apos;s keeping you stuck, and build practical
          strategies to move forward.
          <br />
          <br />
          If you&apos;re experiencing severe distress or a clinical condition, we
          recommend seeking support from a qualified mental health professional.
          Attune is here to complement not replace that care.
        </>
      ),
    },
    {
      id: "04",
      question: "How much does it cost?",
      answer: (
        <>
          Our pricing is affordable and based on the number of hours you use.
          You can choose from flexible plans that work for your needs,{" "}
          <span className="font-bold">starting at just $40/session</span>. We
          believe emotional support should be accessible to everyone.
        </>
      ),
    },
    {
      id: "05",
      question: "What if I don't connect with my life coach?",
      answer:
        "No problem. Finding the right fit matters and we make it easy to switch. Simply browse our other life coaches and choose the one that feels right for you. Your comfort and progress always come first.",
    },
  ];

  return (
    <div id="FAQs" className="bg-[#F4EFEA]">
      <div className="max-w-[1440px] mx-auto  px-[130px] py-[107px] space-y-[74px]">
        <h1 className="font-miniature text-[76px] text-center">
          Any Questions?
        </h1>

        <Accordion type="single" collapsible>
          {questions?.map((question) => (
            <AccordionItem
              key={question?.id}
              value={question?.id}
              className={
                "px-[60px] py-[52px] data-[state=closed]:bg-[#f4efea] data-[state=open]:bg-[#e5ff7d] duration-200 border-black " +
                (question?.id == "05" && "border-transparent")
              }
            >
              <AccordionTrigger className2="w-8 h-8">
                <div className="flex gap-[52px] items-start">
                  <span className="text-[#95ADF0] text-[48px] font-bold leading-[50px]">
                    {question?.id}
                  </span>
                  <span className="text-left text-[32px] font-bold leading-[38px]">
                    {question?.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="data-[state=open]:bg-[#e5ff7d] pl-[110px] pb-0 text-[20px] leading-[28px] duration-150 max-w-[90%]">
                {question?.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQAccordion;

