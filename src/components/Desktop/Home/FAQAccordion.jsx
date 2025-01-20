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
      question: "What is the Listener Program?",
      answer: "The Listener Program connects you with trained, non-judgmental individuals who provide emotional support through conversation. They are here to listen and help you navigate life’s challenges without the need for therapy or counseling.",
    },
    {
      id: "02",
      question: "How does it work?",
      answer: "You can connect with a Listener anytime, anywhere. Simply sign up, choose a Listener, and schedule your session. You can talk to them via text or voice—whatever makes you most comfortable.",
    },
    {
      id: "03",
      question: "Is this therapy?",
      answer: "No, our Listeners are not therapists. They are trained individuals who provide supportive listening and a safe space for you to express your feelings. If you need professional therapy, we recommend seeking a licensed therapist.",
    },
    {
      id: "04",
      question: "How much does this cost?",
      answer: "Our pricing is affordable and based on the number of hours you use. You can choose from flexible plans that work for your needs, starting at just $30/hr. We believe emotional support should be accessible to everyone",
    },
    {
      id: "05",
      question: "What if I don’t feel a connection with my Listener?",
      answer: "You can always choose a new Listener who better fits your needs.",
    },
  ]

  return (
    <div className="bg-white px-[130px] py-[107px] space-y-[74px]">
          <h1 className="font-miniature text-[76px] text-center">Any Questions?</h1>
    
          <Accordion type="single" collapsible>
            {questions?.map((question) => (
              <AccordionItem key={question?.id} value={question?.id} className={"px-[60px] py-[52px] data-[state=closed]:bg-[#fbf9f7] data-[state=open]:bg-[#e5ff7d] duration-200 border-black " + (question?.id == "05" && "border-transparent")}>
                <AccordionTrigger className2="w-8 h-8">
                  <div className="flex gap-[52px] items-start">
                    <span className="text-[#95ADF0] text-[48px] font-bold leading-[50px]">{question?.id}</span>
                    <span className="text-left text-[32px] font-bold leading-[38px]">{question?.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="data-[state=open]:bg-[#e5ff7d] pl-[110px] pb-0 text-[20px] leading-[28px] duration-150 max-w-[90%]">
                  {question?.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
  );
}

export default FAQAccordion;
