import { Link } from "react-router-dom";
export default function HowLifeCoachHelps() {
  return (
    <section id="our-approach" className="relative flex items-center justify-end px-[60px] py-[100px] min-h-[700px] max-lg:flex-col max-lg:px-4 max-lg:py-12 max-lg:bg-[#95adf0]">
      {/* Background: woman image + gradient overlay */}
      <div className="absolute inset-0 pointer-events-none max-lg:hidden" aria-hidden="true">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/anxiety-page/listener-woman.jpg"
            alt=""
            className="absolute h-full left-[-13%] max-w-none top-0 w-[87%] object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-[#95adf0] from-[35%] to-[54%] to-transparent" />
      </div>

      {/* White card on the right */}
      <div className="bg-white border border-black rounded-[48px] px-8 py-12 relative w-full max-w-[580px] max-lg:max-w-full">
        <h2 className="font-miniature text-[64px] leading-[72px] text-black mb-12 max-lg:text-[36px] max-lg:leading-[40px] max-lg:mb-8">
          How a Life Coach Can Help
        </h2>

        <div className="flex flex-col gap-6">
          {[
            { lead: "Identify your anxiety triggers:", desc: "Understand what's driving your stress so you can respond with intention, not just reaction." },
            { lead: "Build practical coping strategies:", desc: "Get personalized tools, not generic advice, that fit into your real life and actually work." },
            { lead: "Rebuild confidence and momentum:", desc: "Move past the thoughts that keep you stuck and take real steps toward the life you want." },
            { lead: "Create lasting resilience:", desc: "Anxiety doesn't disappear overnight. Your coach helps you grow stronger with every session, not just feel better in the moment." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <img src="/images/anxiety-page/tick-circle.svg" alt="" className="w-7 h-7 flex-shrink-0 mt-0.5" />
              <p className="text-black text-[16px] leading-[24px]">
                <span className="font-bold">{item.lead} </span>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <Link to="/signup-anxiety" className="mt-12 inline-flex items-center gap-2 bg-[#5200FF] text-white rounded-full px-8 py-2.5 text-[16px] font-medium hover:opacity-90 transition-opacity max-lg:mt-8">
          Schedule a Free 15-Minute Call
          <img src="/images/anxiety-page/arrow-right-cta.svg" alt="" className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
