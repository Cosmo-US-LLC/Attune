const cards = [
  {
    bg: "bg-[#38AB9B]",
    imageBg: "bg-[#FF8C42]",
    image: "/desktop1/your-path/path-to-support-1.webp",
    title: "Feeling Overwhelmed?",
    bullets: [
      "Break Free From Social Anxiety",
      "Handle Academic And Performance Stress",
      "Grow Confidence Beyond The Highlight Reel",
      "Work Through Body Image And Self-Worth",
    ],
    button: "Start Your Journey",
  },
  {
    bg: "bg-[#F097DD]",
    imageBg: "bg-[#00FBFC]",
    image: "/desktop1/your-path/path-to-support-2.webp",
    title: "Overwhelmed By Life?",
    bullets: [
      "Tackle Financial Stress And Uncertainty",
      "Cope With Work Pressure And Burnout",
      "Move Through Life Changes With Clarity",
      "Reduce Digital Overload And Anxiety",
    ],
    button: "Connect Now",
  },
  {
    bg: "bg-[#FF6F61]",
    imageBg: "bg-[#E5FF7D]",
    image: "/desktop1/your-path/path-to-support-4.webp",
    title: "Struggling To Feel Settled?",
    bullets: [
      "Ease Health-Related Worry And Uncertainty",
      "Navigate Life Transitions With Confidence",
      "Gain Peace Of Mind Around Financial Security",
      "Reconnect And Overcome Social Isolation",
    ],
    button: "Talk to a Life Coach",
  },
];

export default function PathToSupport() {
  return (
    <section
      id="path-to-support"
      className="bg-white py-[80px] px-[60px] max-md:px-4 max-md:py-12 max-w-[1440px] mx-auto"
    >
      <h2 className="font-miniature text-[60px] max-md:text-[36px] text-center text-black mb-12 max-md:mb-8">
        Your Path to Support
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 gap-y-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`${card.bg} rounded-[20px] border border-black overflow-hidden flex flex-col`}
          >
            {/* Image wrapper */}
            <div className={`${card.imageBg} rounded-t-[20px]`}>
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-miniature text-[28px] text-white mb-4">
                {card.title}
              </h3>

              <ul className="space-y-3 mb-6 flex-1">
                {card.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="w-3 h-3 min-w-[12px] mt-1.5 rounded-full bg-[#00FBFC] inline-block" />
                    <span className="text-white">{bullet}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://signup.feelattune.com/sign-up"
                className="bg-[#5200FF] text-white rounded-full px-6 py-3 w-fit hover:opacity-90 transition-opacity inline-block"
              >
                {card.button}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
