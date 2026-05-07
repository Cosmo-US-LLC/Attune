import React, { useState } from "react";
import { Button } from "@/components/ui/button";

function NavMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 w-full border-b border-gray-100">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="font-miniature text-[28px] leading-none">
          <span className="italic">feel</span>
          <span>Attune</span>
          <span className="block text-[10px] font-sans font-normal text-right -mt-1 text-black/50">
            By EaseCare
          </span>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="flex flex-col gap-[5px] p-1"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="bg-white px-5 pb-6 space-y-4 border-t border-gray-100">
          <nav className="flex flex-col gap-4 pt-4 text-[15px] font-medium text-black">
            <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="hover:text-[#5200ff]">
              How It Works
            </a>
            <a href="#quiz" onClick={() => setMenuOpen(false)} className="hover:text-[#5200ff]">
              Take the Quiz
            </a>
            <a href="#pricing" onClick={() => setMenuOpen(false)} className="hover:text-[#5200ff]">
              Pricing
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-[#5200ff]">
              About Us
            </a>
            <a href="#faqs" onClick={() => setMenuOpen(false)} className="hover:text-[#5200ff]">
              FAQs
            </a>
          </nav>
          <a href="https://signup.feelattune.com/sign-up">
            <Button className="w-full bg-[#ff6f61] rounded-full text-white font-semibold">
              Get Started
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
}

export default NavMobile;
