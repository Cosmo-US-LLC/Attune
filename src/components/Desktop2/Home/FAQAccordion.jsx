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
      question: "What is Attune?",
      answer:
        "Attune is a mental wellness platform connecting individuals with empathetic Listeners for judgment-free, personalized support. Available anytime, it offers a user-friendly interface, voice or video calls, and affordable, stigma-free emotional support for everyday challenges.",
    },
    {
      id: "02",
      question: "How does it work?",
      answer:
        "You can connect with a Listener anytime, anywhere. Simply sign up, choose a Listener, and schedule your session. You can talk to them via text or voice—whatever makes you most comfortable.",
    },
    {
      id: "03",
      question: "Is this therapy?",
      answer: (
        <>
          The Listeners offer a supportive and judgment-free space to share your
          thoughts and feelings. Listeners can help you: <br /> <br />
          <ul className="list-disc pl-7">
            <li className="pl-3">
              Reframe experiences and gain fresh perspective and clarity about
              your challenges.
            </li>
            <li className="pl-3">
              Set and achieve personal goals, such as improving confidence or
              managing life transitions.
            </li>
            <li className="pl-3">
              Explore strategies to enhance emotional well-being and motivation.
            </li>
            <li className="pl-3">Build resilience and navigate toward your desired outcomes.</li>
          </ul>
          <br />
          However, it's important to note that Listeners are not licensed mental
          health professionals. They do not diagnose, treat mental illnesses, or
          provide clinical interventions. If you're experiencing severe
          emotional distress, trauma, or clinical conditions such as anxiety,
          depression, or addiction, we recommend seeking support from a
          qualified therapist or counselor.
          <br /> <br />
          Listeners is here to complement—not replace—professional mental health
          care, offering empathetic support for everyday challenges.
        </>
      ),
    },
    {
      id: "04",
      question: "How much does this cost?",
      answer: (
        <div>
          Our pricing is affordable and based on the number of hours you use. You can choose from flexible plans that work for your needs,{" "}
          <span className="font-bold">starting at just $30/hr</span>. We believe emotional support should be accessible to everyone.
        </div>
      ),
    },
    {
      id: "05",
      question: "What if I don’t feel a connection with my Listener?",
      answer:
        "No problem! Our platform allows you to easily switch to a different Listener at any time. Finding someone you connect with is important, and we’re here to ensure you feel comfortable and supported throughout your journey. Simply browse other Listeners and choose the one that feels right for you.",
    },
  ];

  return (
    <div className="bg-[#F4EFEA]" id="FAQs">
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
