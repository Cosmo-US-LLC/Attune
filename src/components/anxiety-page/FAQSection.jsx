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
      "FeelAttune is a platform that connects you with trained Life Coaches who provide compassionate, non-judgmental support for anxiety and everyday mental health challenges.",
  },
  {
    id: "02",
    question: "How does it work?",
    answer:
      "Sign up, browse available Life Coaches, and book a session. Sessions are conducted via video call at a time that works for you.",
  },
  {
    id: "03",
    question: "Is this therapy?",
    answer:
      "No. Our Life Coaches are not therapists. They provide guidance, coping strategies, and emotional support - not clinical diagnosis or treatment.",
  },
  {
    id: "04",
    question: "How much does it cost?",
    answer:
      "Sessions start from $39 CAD. We offer single sessions, 4-session bundles, and weekly plans.",
  },
  {
    id: "05",
    question: "What if I don't connect with my life coach?",
    answer:
      "That's completely okay. You can switch to a different Life Coach at any time at no extra cost.",
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
