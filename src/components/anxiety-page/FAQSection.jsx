import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const questions = [
  {
    id: "01",
    question: "What is FeelAttune?",
    answer:
      "FeelAttune is a life coaching platform that connects you with coaches who understand anxiety. Whether you're dealing with social pressure, financial stress, academic overwhelm, or simply the weight of everyday life. We offer personalized, one-on-one sessions designed to help you build real coping strategies and move forward with confidence.",
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
    answer:
      "No. FeelAttune offers one-on-one life coaching not therapy or clinical treatment. Our life coaches don't diagnose or treat mental health conditions. What they do is create a judgment-free space to help you understand your anxiety, work through what's keeping you stuck, and build practical strategies to move forward. If you're experiencing severe distress or a clinical condition, we recommend seeking support from a qualified mental health professional. FeelAttune is here to complement not replace that care.",
  },
  {
    id: "04",
    question: "How much does it cost?",
    answer:
      "Our pricing is affordable and based on the number of hours you use. You can choose from flexible plans that work for your needs, starting at just $39/session. We believe emotional support should be accessible to everyone.",
  },
  {
    id: "05",
    question: "What if I don't connect with my life coach?",
    answer:
      "No problem. Finding the right fit matters and we make it easy to switch. Simply browse our other life coaches and choose the one that feels right for you. Your comfort and progress always come first.",
  },
];

function FAQSection() {
  return (
    <div id="FAQs" className="bg-[#f4efea]">
      <div className="max-w-[1440px] mx-auto px-[130px] max-md:px-4 py-[107px] max-md:py-[60px] space-y-[74px] max-md:space-y-[32px]">
        <h1 className="font-miniature text-[76px] max-md:text-[40px] max-md:leading-[52px] text-center">
          Any Questions?
        </h1>

        <Accordion type="single" collapsible>
          {questions.map((question) => (
            <AccordionItem
              key={question.id}
              value={question.id}
              className={
                "px-[60px] max-md:px-4 py-[52px] max-md:py-[24px] data-[state=closed]:bg-[#f4efea] data-[state=open]:bg-[#e5ff7d] duration-200 border-black " +
                (question.id === "05" && "border-transparent")
              }
            >
              <AccordionTrigger className2="w-8 h-8">
                <div className="flex gap-[52px] max-md:gap-4 items-start">
                  <span className="text-[#95ADF0] text-[48px] max-md:text-[28px] font-bold leading-[50px] max-md:leading-[36px] shrink-0">
                    {question.id}
                  </span>
                  <span className="text-left text-[32px] max-md:text-[18px] font-bold leading-[38px] max-md:leading-[26px]">
                    {question.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="data-[state=open]:bg-[#e5ff7d] pl-[110px] max-md:pl-0 pb-0 text-[20px] max-md:text-[16px] leading-[28px] duration-150 max-w-[90%] max-md:max-w-full">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQSection;
