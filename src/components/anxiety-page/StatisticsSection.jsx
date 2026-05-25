import { Link } from "react-router-dom";

const statBlocks = [
  {
    type: "photo",
    image: "/images/anxiety-page/v2/stat-photo-1.webp",
    imageClass: "h-full w-full object-cover object-bottom",
  },
  {
    type: "stat",
    bg: "bg-[#E5FF7D]",
    blob: "/images/anxiety-page/v2/stat-blob-1.svg",
    blobBox: { left: "11.67%", top: "21.75%", width: "40%", height: "40%" },
    char: "/images/anxiety-page/v2/stat-char-1.svg",
    charBox: { left: "29.44%", top: "9%", width: "53%", height: "42.15%" },
    charSize: { width: "150px", height: "120px" },
    charRotate: "rotate-[18.52deg]",
    stat: "Over 50%",
    text: " of people struggle with stress and anxiety but avoid clinical care.",
    textStyle: { left: "50%", top: "60.63%", width: "65%" },
  },
  {
    type: "photo",
    image: "/images/anxiety-page/v2/stat-photo-2.webp",
    imageClass: "h-full w-full object-cover",
  },
  {
    type: "stat",
    bg: "bg-[#6FE0D1]",
    blob: "/images/anxiety-page/v2/stat-blob-2.svg",
    blobBox: { left: "14.72%", top: "29.75%", width: "70.28%", height: "63.25%" },
    char: "/images/anxiety-page/v2/stat-char-2.svg",
    charBox: { left: "17.5%", top: "6.75%", width: "54.02%", height: "43.77%" },
    charSize: { width: "150px", height: "120px" },
    charRotate: "rotate-[-16.88deg]",
    stat: "20% of older adults",
    text: "Experience mental health challenges, including depression and anxiety.",
    textStyle: { left: "49.86%", top: "65.88%", width: "64.72%" },
    statBreak: true,
  },
  {
    type: "stat",
    bg: "bg-[#6FE0D1]",
    blob: "/images/anxiety-page/v2/stat-blob-3.svg",
    blobBox: { left: "8.33%", top: "17%", width: "83.06%", height: "74.75%" },
    char: "/images/anxiety-page/v2/stat-char-3.svg",
    charBox: { left: "25.28%", top: "8%", width: "48.28%", height: "41.03%" },
    charSize: { width: "140px", height: "120px" },
    charRotate: "-scale-y-100 rotate-[-163.94deg]",
    stat: "1 in 5 young adults",
    text: " struggles with social anxiety in their daily life.",
    textStyle: { left: "49.86%", top: "64.88%", width: "64.72%" },
  },
  {
    type: "photo",
    image: "/images/anxiety-page/v2/stat-photo-3.webp",
    imageClass: "h-full w-full object-cover",
  },
  {
    type: "stat",
    bg: "bg-[#FFA8ED]",
    blob: "/images/anxiety-page/v2/stat-blob-4.svg",
    blobBox: { left: "7.5%", top: "16.75%", width: "85%", height: "76.5%" },
    char: "/images/anxiety-page/v2/stat-char-4.svg",
    charBox: { left: "19.72%", top: "7%", width: "46.85%", height: "36.89%" },
    charSize: { width: "150px", height: "120px" },
    charRotate: "rotate-[-10.87deg]",
    stat: "70% of caregivers",
    text: " experience significant levels of anxiety or emotional exhaustion.",
    textStyle: { left: "50%", top: "56.13%", width: "70.56%" },
    statBreak: true,
  },
  {
    type: "photo",
    image: "/images/anxiety-page/v2/stat-photo-4.webp",
    imageClass:
      "absolute h-[117.32%] w-[195.58%] max-w-none left-[-33.35%] top-[-17.32%] object-cover",
    mobileImageClass:
      "absolute h-[112.07%] w-[206.95%] max-w-none left-[-42.33%] top-[-12.07%] object-cover",
  },
];

const mobileCells = [
  statBlocks[0],
  statBlocks[3],
  statBlocks[1],
  statBlocks[2],
  statBlocks[5],
  statBlocks[4],
  statBlocks[6],
  statBlocks[7],
];

function MobileStatCell({ block }) {
  if (block.type === "photo") {
    return (
      <div className="relative h-[240px] w-full overflow-hidden">
        <img
          src={block.image}
          alt=""
          className={block.mobileImageClass ?? block.imageClass}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex h-[240px] w-full items-center justify-center px-4 py-6 ${block.bg}`}
    >
      <div className="flex flex-col items-center gap-1 text-center text-black">
        <div className="flex h-[92px] w-[96px] items-center justify-center">
          <div className={`flex-none ${block.charRotate}`}>
            <img
              src={block.char}
              alt=""
              className="h-[67px] w-[80px] max-w-none"
              aria-hidden="true"
            />
          </div>
        </div>
        <p className="text-[20px] font-bold leading-6">{block.stat}</p>
        <p className="text-[14px] leading-[22px]">{block.text.trim()}</p>
      </div>
    </div>
  );
}

function DesktopStatCell({ block }) {
  if (block.type === "photo") {
    return (
      <div className="relative aspect-[360/400] w-full overflow-hidden">
        <img src={block.image} alt="" className={block.imageClass} />
      </div>
    );
  }

  return (
    <div className={`relative aspect-[360/400] w-full overflow-hidden ${block.bg}`}>
      <img
        src={block.blob}
        alt=""
        className="absolute max-w-none"
        style={block.blobBox}
        aria-hidden="true"
      />
      <div
        className="absolute flex items-center justify-center"
        style={block.charBox}
      >
        <div className={`flex-none ${block.charRotate}`}>
          <img
            src={block.char}
            alt=""
            className="block max-w-none"
            style={block.charSize}
            aria-hidden="true"
          />
        </div>
      </div>
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 text-center text-black"
        style={block.textStyle}
      >
        <p className="text-[16px] leading-[28px]">
          <span className="block text-[25px] font-bold leading-[27px]">
            {block.stat}
          </span>
          {block.statBreak ? (
            <>
              <br />
              {block.text.trim()}
            </>
          ) : (
            block.text
          )}
        </p>
      </div>
    </div>
  );
}

function StatisticsSection() {
  return (
    <section className="bg-white">
      {/* Mobile — Figma 4791:17597 */}
      <div className="flex flex-col items-center pt-20 lg:hidden">
        <div className="flex w-full flex-col items-center gap-6 px-5">
          <div className="flex w-full flex-col items-center gap-3.5 text-center">
            <h2 className="font-miniature text-[42px] font-bold leading-[50px] text-black">
              Anxiety is more common than you think and more treatable.
            </h2>
            <p className="text-[16px] leading-7 text-[rgba(0,0,0,0.7)]">
              Most people struggling with anxiety never get help, not because they
              don&apos;t want it, but because traditional options feel out of reach.
              FeelAttune makes support accessible, affordable, and judgment-free.
            </p>
          </div>
          <Link
            to="/signup-anxiety"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#5200FF] px-5 py-3.5 text-[14px] font-semibold leading-6 text-white transition-opacity hover:opacity-90"
          >
            Connect Now
          </Link>
        </div>

        <div className="mt-16 grid w-full grid-cols-2">
          {mobileCells.map((block, index) => (
            <MobileStatCell key={index} block={block} />
          ))}
        </div>
      </div>

      {/* Desktop — unchanged */}
      <div className="hidden px-4 pt-20 pb-0 lg:block">
        <div className="mx-auto flex max-w-[888px] flex-col items-center gap-8 text-center">
          <h2 className="font-miniature text-[54px] font-bold leading-[62px] text-black">
            Anxiety is more common than you think and more treatable.
          </h2>
          <p className="max-w-[805px] text-[16px] leading-[28px] text-[rgba(0,0,0,0.7)]">
            Most people struggling with anxiety never get help, not because they
            don&apos;t want it, but because traditional options feel out of reach.
            FeelAttune makes support accessible, affordable, and judgment-free.
          </p>
          <Link
            to="/signup-anxiety"
            className="inline-flex items-center justify-center rounded-full bg-[#5200FF] px-5 py-5 text-[16px] font-semibold capitalize leading-[26px] text-white transition-opacity hover:opacity-90"
          >
            Connect Now
          </Link>
        </div>

        <div className="mt-12 grid w-full grid-cols-4">
          {statBlocks.map((block, index) => (
            <DesktopStatCell key={index} block={block} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;
