import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "How It Works", id: "how-it-works", offset: 98 },
  { label: "Pricing", id: "pricing", offset: 98 },
  { label: "About Us", href: "/about-us" },
  { label: "FAQs", id: "FAQs", offset: 98 },
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
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white">
      <div className="mx-auto flex h-[98px] max-w-[1440px] items-center justify-between px-4 py-[21px] lg:px-[114px]">
        {/* Mobile: Hamburger + Logo */}
        <div className="flex items-center gap-2 lg:hidden">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button
                className="rounded-md p-2 hover:bg-gray-100 focus:outline-none"
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
                  to="/anxiety"
                  className="mb-4 flex items-center gap-2"
                  onClick={() => setSheetOpen(false)}
                >
                  <img
                    src="/desktop1/feel-attune-logo.webp"
                    alt="Feel Attune Logo"
                    className="w-[140px]"
                  />
                </Link>

                {navLinks.map((link) =>
                  link.href ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setSheetOpen(false)}
                      className="py-1 text-left text-[16px] font-medium capitalize text-black hover:text-gray-700"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      key={link.label}
                      onClick={() => {
                        setSheetOpen(false);
                        setTimeout(
                          () => handleScroll(link.id, link.offset),
                          300
                        );
                      }}
                      className="cursor-pointer border-none bg-transparent py-1 text-left text-[16px] font-medium capitalize text-black hover:text-gray-700"
                    >
                      {link.label}
                    </button>
                  )
                )}

                <div className="mt-4 flex flex-col gap-3 border-t border-gray-200 pt-4">
                  <a
                    href="/contact-us"
                    className="flex h-[35px] w-full items-center justify-center rounded-[34.878px] bg-[#FF6F61] p-2 text-[13px] text-white transition-colors hover:bg-red-500"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link
            to="/anxiety"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="/desktop1/feel-attune-logo.webp"
              alt="Feel Attune Logo"
              className="w-[140px]"
            />
          </Link>
        </div>

        {/* Mobile: Contact Us */}
        <div className="lg:hidden">
          <a
            href="/contact-us"
            className="rounded-full bg-[#FF6F61] px-4 py-2 text-sm text-white transition-colors hover:bg-red-500"
          >
            Contact Us
          </a>
        </div>

        {/* Desktop: Logo */}
        <Link
          to="/anxiety"
          className="hidden shrink-0 items-center lg:flex"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="/desktop1/feel-attune-logo.webp"
            alt="Feel Attune Logo"
            className="h-[56px] w-[177px] object-contain object-left"
          />
        </Link>

        {/* Desktop: Nav links — grouped with 47px gap */}
        <div className="hidden shrink-0 items-center justify-center gap-[47px] lg:flex">
          {navLinks.map((link) =>
            link.href ? (
              <Link
                key={link.label}
                to={link.href}
                className="whitespace-nowrap text-[16.222px] font-medium capitalize text-black hover:text-gray-900"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => handleScroll(link.id, link.offset)}
                className="cursor-pointer whitespace-nowrap border-none bg-transparent text-[16.222px] font-medium capitalize text-black hover:text-gray-900"
              >
                {link.label}
              </button>
            )
          )}
        </div>

        {/* Desktop: CTA */}
        <a
          href="/contact-us"
          className="hidden h-[42px] w-[157px] shrink-0 items-center justify-center rounded-[34.878px] border-[1.622px] border-white bg-[#FF6F61] text-[16.222px] font-medium capitalize text-white transition-colors hover:bg-red-500 lg:flex"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
}

export default AnxietyNavbar;
