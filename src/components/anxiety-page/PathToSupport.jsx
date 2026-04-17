import { Link } from "react-router-dom";
const cards = [
  {
    bg: "bg-[#38AB9B]",
    imageBg: "bg-[#FF6A01]",
    image: "/desktop1/your-path/path-to-support-1.webp",
    imageClass:
      "inset-0 h-full w-full object-cover object-bottom scale-[1.08]",
    title: "Feeling Overwhelmed?",
    bullets: [
      "Break Free From Social Anxiety",
      "Handle Academic And Performance Stress",
      "Grow Confidence Beyond The Highlight Reel",
      "Work Through Body Image And Self-Worth",
    ],
    button: "Schedule a Free 15-Minute Call",
  },
  {
    bg: "bg-[#F097DD]",
    imageBg: "bg-[#00FBFC]",
    image: "/desktop1/your-path/path-to-support-2.webp",
    imageClass: "-left-px -top-[31px] h-auto w-[calc(100%+3px)] max-w-none",
    title: "Overwhelmed By Life?",
    bullets: [
      "Tackle Financial Stress And Uncertainty",
      "Cope With Work Pressure And Burnout",
      "Move Through Life Changes With Clarity",
      "Reduce Digital Overload And Anxiety",
    ],
    button: "Schedule a Free 15-Minute Call",
  },
  {
    bg: "bg-[#FF6F61]",
    imageBg: "bg-[#E5FF7D]",
    image: "/desktop1/your-path/path-to-support-3-new.webp",
    imageClass:
      "left-1/2 -translate-x-1/2 -top-[26px] h-auto w-[86%] max-w-none",
    title: "Struggling To Feel Settled?",
    bullets: [
      "Ease Health-Related Worry And Uncertainty",
      "Navigate Life Transitions With Confidence",
      "Gain Peace Of Mind Around Financial Security",
      "Reconnect And Overcome Social Isolation",
    ],
    button: "Schedule a Free 15-Minute Call",
  },
];

export default function PathToSupport() {
  return (
    <section
      id="path-to-support"
      className="bg-white py-[100px] px-[60px] max-md:px-4 max-md:py-12 max-w-[1440px] mx-auto"
    >
      <h2 className="font-miniature text-[64px] leading-[72px] max-md:text-[36px] max-md:leading-[44px] text-center text-black mb-16 max-md:mb-8">
        Your Path to Support
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`${card.bg} rounded-[30px] border border-black flex flex-col md:h-[580px]`}
          >
            {/* Image wrapper */}
            <div className="relative mx-4 mt-4 shrink-0 h-[155px] rounded-[30px] overflow-hidden border border-black">
              <div className={`${card.imageBg} absolute inset-0`} />
              <img
                src={card.image}
                alt={card.title}
                className={`absolute z-10 ${card.imageClass}`}
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 px-4 pt-5 pb-6">
              <h3 className="font-miniature text-[28px] text-white mb-4">
                {card.title}
              </h3>

              <ul className="flex-1 mb-6 space-y-3">
                {card.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="w-[19px] h-[19px] min-w-[19px] mt-0.5 rounded-full border-2 border-white bg-white/20 inline-block" />
                    <span className="text-white">{bullet}</span>
                  </li>
                ))}
              </ul>

              <Link
            to="/signup-anxiety"
                className="bg-[#5200FF] text-white rounded-full px-6 py-3 w-fit hover:opacity-90 transition-opacity inline-block"
              >
                {card.button}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
