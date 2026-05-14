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
      "FeelAttune is a life coaching platform that connects you with certified coaches who understand anxiety. Whether you're dealing with social pressure, financial stress, academic overwhelm, or simply the weight of everyday life. We offer personalized, one-on-one sessions designed to help you build real coping strategies and move forward with confidence",
  },
  {
    id: "item-2",
    num: "02",
    question: "How does it work?",
    answer:
      "Getting started is simple. Tell us a little about yourself and what you're navigating, we'll match you with the right life coach for your situation. You'll receive a booking link via email or SMS to schedule your session, then simply join the call and start moving forward.",
  },
  {
    id: "item-3",
    num: "03",
    question: "Is this therapy?",
    answer:
      "No. FeelAttune offers one-on-one life coaching, not therapy or clinical treatment. Our life coaches don't diagnose or treat mental health conditions. What they do is create a judgment-free space to help you gain clarity, work through what's keeping you stuck, and build practical strategies to move forward whether you're navigating a life transition, managing stress, building confidence, improving relationships, or simply looking to grow into the best version of yourself.\n\nIf you're experiencing severe distress or a clinical condition, we recommend seeking support from a qualified mental health professional. FeelAttune is here to complement, not replace, that care.",
  },
  {
    id: "item-4",
    num: "04",
    question: "How much does it cost?",
    answer:
      "Our pricing is straightforward and affordable, with sessions starting at $60/mo through our Monthly Membership or $67/session with our 4-Session Pack. Whether you're looking for flexibility or ongoing support, we have a plan that works for you. Because we believe meaningful coaching should be accessible to everyone.",
  },
  {
    id: "item-5",
    num: "05",
    question: "What if I don't connect with my life coach?",
    answer:
      "No problem. Finding the right fit matters, and we're here to make sure you get it. Simply reach out to us and we'll be happy to match you with a different coach that better suits your needs. Your comfort and progress always come first.",
  },
];

function FAQsPage() {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col items-center gap-[48px] py-12">
        {/* Intro — matches Figma Main Content 4453:3537 / Intro Section */}
        <div className="flex flex-col items-center gap-[24px]">
          <div className="rounded-[39px] bg-[#e5ff7d] px-[20px] py-[16px]">
            <span className="font-sans text-[16px] font-semibold uppercase tracking-[0.72px] text-[#0d0d0d]">
              ✦ FAQs
            </span>
          </div>
          <p className="max-w-[1081px] text-center font-miniature text-[54px] leading-[62px] text-black">
            <span>You might be </span>
            <span className="font-miniature text-[54px] font-bold italic leading-[62px] text-[#ff6f61]">
              wondering...
            </span>
          </p>
        </div>

        {/* Desktop accordion — matches Figma & Accordion / v2-m1 */}
        <div className="mx-auto hidden w-full max-w-[1080px] lg:block">
          <Accordion
            type="single"
            defaultValue="item-1"
            collapsible
            className="flex flex-col gap-[16px]"
          >
            {faqs.map(({ id, num, question, answer }) => (
              <AccordionItem
                key={id}
                value={id}
                className="group overflow-hidden rounded-[24px] border-0
                  data-[state=open]:bg-[#e5ff7d]
                  data-[state=closed]:border-b data-[state=closed]:border-black data-[state=closed]:bg-[#fbf9f7] data-[state=closed]:border-solid"
              >
                <AccordionTrigger
                  className="flex w-full items-center gap-[48px] px-[20px] py-[20px] hover:no-underline"
                  className2="size-[48px] shrink-0 rounded-[24px] bg-white text-black"
                >
                  <div className="flex flex-1 items-center gap-[48px] text-left">
                    <span className="w-[66px] shrink-0 text-center font-sans text-[40px] font-bold leading-[1.2] tracking-[0.25px] group-data-[state=open]:text-[#ff6f61] group-data-[state=closed]:text-[#95adf0]">
                      {num}
                    </span>
                    <span className="font-sans text-[32px] font-bold leading-[40px] text-black">
                      {question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-[24px] pl-[134px] pr-[68px]">
                  <p className="whitespace-pre-line font-sans text-[18px] font-normal leading-[26px] text-[rgba(13,13,13,0.7)]">
                    {answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Mobile — same copy; typography scaled; 4453:3537 is desktop spec */}
        <div className="w-full lg:hidden">
          <Accordion
            type="single"
            defaultValue="item-1"
            collapsible
            className="flex flex-col gap-[16px]"
          >
            {faqs.map(({ id, num, question, answer }) => (
              <AccordionItem
                key={id}
                value={id}
                className="group overflow-hidden rounded-[24px] border-0
                  data-[state=open]:bg-[#e5ff7d]
                  data-[state=closed]:border-b data-[state=closed]:border-black data-[state=closed]:bg-[#fbf9f7] data-[state=closed]:border-solid"
              >
                <AccordionTrigger
                  className="flex gap-4 items-center px-5 py-4 w-full hover:no-underline"
                  className2="size-[36px] shrink-0 rounded-[18px] bg-white text-black"
                >
                  <div className="flex flex-1 gap-4 items-center text-left">
                    <span className="w-[44px] shrink-0 text-center font-sans text-[24px] font-bold leading-[1.2] group-data-[state=open]:text-[#ff6f61] group-data-[state=closed]:text-[#95adf0]">
                      {num}
                    </span>
                    <span className="font-sans text-[18px] font-bold leading-[24px] text-black">
                      {question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 pl-[80px] pr-5">
                  <p className="whitespace-pre-line font-sans text-[15px] font-normal leading-[23px] text-[rgba(13,13,13,0.7)]">
                    {answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FAQsPage;
