import React from "react";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Take the Quiz", href: "#quiz" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Us", href: "#about" },
  { label: "FAQs", href: "#faqs" },
];

function Nav() {
  return (
    <nav className="bg-white sticky top-0 z-50 w-full" style={{ height: 99 }}>
      <div className="max-w-[1440px] mx-auto relative h-full px-[80px] flex items-center justify-between">

        {/* Logo */}
        <div className="leading-none not-italic text-black" style={{ width: 177, height: 56 }}>
          <p className="font-miniature text-[37px]">
            <span className="italic">feel</span>Attune
          </p>
          <p className="font-sans font-normal text-[12px] text-right text-black/50 -mt-1">
            By EaseCare
          </p>
        </div>

        {/* Nav links — centered */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-[47px] font-medium text-[16.222px] text-black capitalize">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="hover:text-[#5200ff] transition-colors whitespace-nowrap">
              {label}
            </a>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="https://signup.feelattune.com/sign-up"
          className="bg-[#ff6f61] text-white font-medium text-[16.222px] px-[24px] py-[8px] rounded-[34.878px] border-[1.622px] border-white hover:bg-[#e55e51] transition-colors whitespace-nowrap"
          style={{ height: 42, display: "flex", alignItems: "center" }}
        >
          Get started
        </a>
      </div>
    </nav>
  );
}

export default Nav;
