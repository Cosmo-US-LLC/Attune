import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Path To Support", id: "path-to-support", offset: 50 },
  { label: "How It Works", id: "how-it-works", offset: 90 },
  { label: "Our Approach", id: "our-approach", offset: 90 },
  { label: "FAQs", id: "FAQs", offset: 90 },
];

function AnxietyNavbar() {
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleScroll = (targetId, offset = 0) => {
    const el = document.getElementById(targetId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      setTimeout(() => {
        window.scrollTo({ top, behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav className="bg-white h-[90px] fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1440px] w-full h-full mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Mobile: Hamburger + Logo (left side) */}
        <div className="flex items-center gap-2 lg:hidden">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
                aria-label="Open menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="z-[101] w-[280px] pt-12">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-6">
                <Link
                  to="/"
                  className="flex items-center gap-2 mb-4"
                  onClick={() => setSheetOpen(false)}
                >
                  <img
                    src="/desktop1/feel-attune-logo.webp"
                    alt="Feel Attune Logo"
                    className="w-[140px]"
                  />
                </Link>

                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      setSheetOpen(false);
                      setTimeout(
                        () => handleScroll(link.id, link.offset),
                        300
                      );
                    }}
                    className="text-left text-black font-medium text-[16px] capitalize hover:text-gray-700 bg-transparent border-none cursor-pointer py-1"
                  >
                    {link.label}
                  </button>
                ))}

                <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-200">
                  <a
                    href="/signup-anxiety"
                    className="w-full h-[40px] bg-[#FF6F61] text-white rounded-[34.878px] hover:bg-red-500 transition-colors flex items-center justify-center"
                  >
                    Connect Now
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="/desktop1/feel-attune-logo.webp"
              alt="Feel Attune Logo"
              className="w-[140px]"
            />
          </Link>
        </div>

        {/* Mobile: Connect Now button (right side) */}
        <div className="lg:hidden">
          <a
            href="/signup-anxiety"
            className="px-5 py-2 bg-[#FF6F61] text-white text-sm rounded-full hover:bg-red-500 transition-colors"
          >
            Connect Now
          </a>
        </div>

        {/* Desktop: Logo (left) */}
        <Link
          to="/"
          className="hidden lg:flex items-center gap-3"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="/desktop1/feel-attune-logo.webp"
            alt="Feel Attune Logo"
            className="w-[196px]"
          />
        </Link>

        {/* Desktop: Nav Links (center) */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id, link.offset)}
              className="text-black font-medium text-[16.222px] capitalize hover:text-gray-900 bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop: CTA (right) */}
        <div className="hidden lg:flex items-center">
          <a
            href="/signup-anxiety"
            className="w-[160px] h-[37px] bg-[#FF6F61] text-white rounded-[34.878px] hover:bg-red-500 transition-colors flex items-center justify-center"
          >
            Connect Now
          </a>
        </div>
      </div>
    </nav>
  );
}

export default AnxietyNavbar;
