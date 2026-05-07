import React, { useState } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 w-full border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-[80px] py-[24px]">
        <div className="font-miniature text-[37px] leading-none">
          <span className="italic">feel</span>
          <span>Attune</span>
          <span className="block text-[11px] font-sans font-normal text-right -mt-1 text-black/50">
            By EaseCare
          </span>
        </div>

        <div className="flex items-center gap-[47px] font-medium text-[16px] text-black">
          <a href="#how-it-works" className="hover:text-[#5200ff] transition-colors">
            How It Works
          </a>
          <a href="#quiz" className="hover:text-[#5200ff] transition-colors">
            Take the Quiz
          </a>
          <a href="#pricing" className="hover:text-[#5200ff] transition-colors">
            Pricing
          </a>
          <a href="#about" className="hover:text-[#5200ff] transition-colors">
            About Us
          </a>
          <a href="#faqs" className="hover:text-[#5200ff] transition-colors">
            FAQs
          </a>
        </div>

        <a
          href="https://signup.feelattune.com/sign-up"
          className="bg-[#ff6f61] text-white font-medium text-[16px] px-[24px] py-[10px] rounded-full border-2 border-white hover:bg-[#e55e51] transition-colors"
        >
          Get started
        </a>
      </div>
    </nav>
  );
}

export default Nav;
