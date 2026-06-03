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
      "FeelAttune is a life coaching platform that connects you with certified coaches who understand anxiety. Whether you're dealing with social pressure, financial stress, academic overwhelm, or simply the weight of everyday life. We offer personalized, one-on-one sessions designed to help you build real coping strategies and move forward with confidence.",
  },
  {
    id: "02",
    question: "How does it work?",
    answer:
      "Getting started is simple. Tell us a little about yourself and what you're navigating, we'll match you with the right life coach for your situation. You'll receive a booking link via email or SMS to schedule your session, then simply join the call and start moving forward.",
  },
  {
    id: "03",
    question: "Is this therapy?",
    answer:
      "No. FeelAttune offers one-on-one life coaching, not therapy or clinical treatment. Our life coaches don't diagnose or treat mental health conditions. What they do is create a judgment-free space to help you gain clarity, work through what's keeping you stuck, and build practical strategies to move forward whether you're navigating a life transition, managing stress, building confidence, improving relationships, or simply looking to grow into the best version of yourself. \n\n If you're experiencing severe distress or a clinical condition, we recommend seeking support from a qualified mental health professional. FeelAttune is here to complement, not replace, that care.",
  },
  {
    id: "04",
    question: "How much does it cost?",
    answer:
      "Our pricing is straightforward and affordable, with sessions starting at $60/mo through our Monthly Membership or $67/session with our 4-Session Pack. Whether you're looking for flexibility or ongoing support, we have a plan that works for you. Because we believe meaningful coaching should be accessible to everyone.",
  },
  {
    id: "05",
    question: "What if I don't connect with my life coach?",
    answer:
      "No problem. Finding the right fit matters, and we're here to make sure you get it. Simply reach out to us and we'll be happy to match you with a different coach that better suits your needs. Your comfort and progress always come first.",
  },
];

function FAQSection() {
  return (
    <section id="FAQs" className="bg-[#f4efea]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-5 py-12 md:gap-16 md:px-[114px] md:py-[80px]">
        <h2 className="text-center font-miniature text-[42px] font-bold leading-[50px] text-black md:text-[54px] md:leading-[62px]">
          Things People{" "}
          <span className="font-miniature italic text-[#FF6F61]">Ask</span>
        </h2>

        <Accordion
          type="single"
          collapsible
          defaultValue="01"
          className="flex w-full max-w-[1080px] flex-col gap-4"
        >
          {questions.map((question) => (
            <AccordionItem
              key={question.id}
              value={question.id}
              className="group overflow-hidden rounded-[24px] border-0 data-[state=closed]:border-b data-[state=closed]:border-black data-[state=closed]:bg-[#FBF9F7] data-[state=open]:bg-[#E5FF7D]"
            >
              <AccordionTrigger className="gap-4 px-4 py-4 hover:no-underline md:gap-12 md:px-5 md:py-5 [&[data-state=open]>svg]:bg-black [&[data-state=open]>svg]:text-white [&>svg]:size-12 [&>svg]:bg-white [&>svg]:p-[14px]">
                <div className="flex flex-1 items-start gap-4 md:gap-12">
                  <span className="w-[40px] shrink-0 text-center font-miniature text-[28px] font-bold leading-[1.2] text-[#95ADF0] transition-colors group-data-[state=open]:text-[#FF6F61] md:w-[66px] md:text-[40px]">
                    {question.id}
                  </span>
                  <span className="text-left text-[20px] font-bold leading-[28px] text-black md:text-[32px] md:leading-[40px]">
                    {question.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-0 md:px-5 md:pb-5">
                <p className="whitespace-pre-line pl-[56px] text-[16px] leading-[26px] text-[rgba(13,13,13,0.7)] md:pl-[114px] md:text-[18px] md:leading-[26px]">
                  {question.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQSection;
