import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "item-1",
    num: "01",
    question: "What is FeelAttune?",
    answer:
      "FeelAttune is a life coaching platform that connects you with certified coaches who understand anxiety. Whether you're dealing with social pressure, financial stress, academic overwhelm, or simply the weight of everyday life. We offer personalized, one-on-one sessions designed to help you build real coping strategies and move forward with confidence.",
  },
  {
    id: "item-2",
    num: "02",
    question: "How does it work?",
    answer:
      "You start by taking a short quiz to help us understand what you're going through. From there, you're matched with a certified life coach who specializes in your area of focus. Sessions are held virtually — at a time that works for you — and are designed to be practical, forward-looking, and tailored to your goals.",
  },
  {
    id: "item-3",
    num: "03",
    question: "Is this therapy?",
    answer:
      "No. Life coaching is different from therapy. Therapy typically focuses on diagnosing and treating mental health conditions, often exploring past trauma. Coaching is future-focused — it's about helping you gain clarity, build confidence, and take action toward the life you want. If you're dealing with a clinical mental health condition, we'll always point you toward the right professional support.",
  },
  {
    id: "item-4",
    num: "04",
    question: "How much does it cost?",
    answer:
      "We offer flexible plans to suit different needs and budgets. You can start with a single session to try it out, or choose a package for ongoing support. Visit our Pricing page for a full breakdown. We also offer a money-back guarantee — if you're not satisfied after your first session, we'll make it right.",
  },
  {
    id: "item-5",
    num: "05",
    question: "What if I don't connect with my life coach?",
    answer:
      "That's completely okay — and we make it easy to switch. If your first session doesn't feel like the right fit, just let us know and we'll match you with someone new at no extra cost. Finding the right coach is part of the process, and we're committed to making sure you get the support that works for you.",
  },
];

function FAQsPage() {
  return (
    <div className="bg-white w-full">
      {/* Header */}
      <div className="flex flex-col items-center gap-[28px] px-[60px] pt-[60px] pb-[40px]">
        <div className="bg-[#e5ff7d] px-[21px] py-[18px] rounded-[39px]">
          <span className="font-semibold text-[#0d0d0d] text-[16px] tracking-[0.72px] uppercase">
            ✦ FAQs
          </span>
        </div>
        <p className="font-miniature text-[55px] leading-[83px] text-black text-center max-w-[1081px]">
          You might be{" "}
          <span className="italic text-[#ff6f61]">wondering...</span>
        </p>
      </div>

      {/* Desktop accordion */}
      <div className="max-w-[1081px] mx-auto px-[60px] pb-[60px] max-lg:hidden">
        <Accordion type="single" defaultValue="item-1" collapsible className="flex flex-col gap-[15px]">
          {faqs.map(({ id, num, question, answer }) => (
            <AccordionItem
              key={id}
              value={id}
              className="group rounded-[38px] overflow-hidden border-black
                data-[state=open]:bg-[#e5ff7d] data-[state=open]:border-0
                data-[state=closed]:bg-[#fbf9f7] data-[state=closed]:border"
            >
              <AccordionTrigger
                className="flex gap-[52px] items-center px-[20px] py-[20px] hover:no-underline w-full"
                className2="size-[48px] rounded-[24px] bg-white text-black"
              >
                <div className="flex items-center gap-[52px] flex-1 text-left">
                  <span className="font-bold text-[40px] leading-[1.2] tracking-[0.25px] w-[66px] shrink-0 group-data-[state=open]:text-[#ff6f61] group-data-[state=closed]:text-[#95adf0]">
                    {num}
                  </span>
                  <span className="font-bold text-[30px] leading-[1.2] text-black">
                    {question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-[20px] pb-[24px] pl-[138px]">
                <p className="text-[14px] font-normal text-[rgba(13,13,13,0.7)] leading-[1.25]">
                  {answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Mobile accordion */}
      <div className="px-5 pb-10 lg:hidden">
        <Accordion type="single" defaultValue="item-1" collapsible className="flex flex-col gap-3">
          {faqs.map(({ id, num, question, answer }) => (
            <AccordionItem
              key={id}
              value={id}
              className="group rounded-[24px] overflow-hidden border-black
                data-[state=open]:bg-[#e5ff7d] data-[state=open]:border-0
                data-[state=closed]:bg-[#fbf9f7] data-[state=closed]:border"
            >
              <AccordionTrigger
                className="flex items-center px-4 py-4 hover:no-underline w-full gap-4"
                className2="size-[36px] rounded-[18px] bg-white text-black flex-shrink-0"
              >
                <div className="flex items-center gap-4 flex-1 text-left">
                  <span className="font-bold text-[24px] leading-[1.2] w-[44px] shrink-0 group-data-[state=open]:text-[#ff6f61] group-data-[state=closed]:text-[#95adf0]">
                    {num}
                  </span>
                  <span className="font-bold text-[18px] leading-[1.3] text-black">
                    {question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pl-[72px]">
                <p className="text-[13px] font-normal text-[rgba(13,13,13,0.7)] leading-[1.4]">
                  {answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQsPage;
