function Navbar() {
  const handleScroll = (event, targetId, offset) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };
  return (
    <nav className="bg-white h-[99px] flex-shrink-0 shadow-sm">
      <div className="max-w-[1440px] w-full h-full mx-auto px-8 pr-16 flex items-center justify-between">
        <div className="relative flex flex-col items-center">
          <h1 className="relative font-miniature">
            <span className="text-black font-[400] text-[46.167px] leading-normal">
              Feel Att
            </span>

            <span className="text-black font-[400] text-[46.167px] leading-normal italic">une</span>
          </h1>
          <span className="absolute right-0 text-sm font-light -bottom-1">By EaseCare</span>
        </div>

        <div className="hidden space-x-8 md:flex">
          <a
            href="#WhyDoesD"
            onClick={(e) => handleScroll(e, "WhyDoesD", 90)}
            className="flex flex-col justify-center text-center text-black font-medium text-[16.222px] leading-[98.144px] capitalize   flex-shrink-0 hover:text-gray-900"
          >
            Path To Support
          </a>
          <a
            href="#HowitworksD"
            onClick={(e) => handleScroll(e, "HowitworksD", 90)}
            className="flex flex-col justify-center text-center text-black font-medium text-[16.222px] leading-[98.144px] capitalize  flex-shrink-0 hover:text-gray-900"
          >
            How It Works
          </a>
          <a
            href="#WhyChooseD"
            onClick={(e) => handleScroll(e, "WhyChooseD", 90)}
            className="flex flex-col justify-center text-center text-black font-medium text-[16.222px] leading-[98.144px] capitalize   flex-shrink-0 hover:text-gray-900"
          >
            Our Approach
          </a>
          <a
            href="#FaqD"
            onClick={(e) => handleScroll(e, "FaqD", 90)}
            className="flex flex-col justify-center text-center text-black font-medium text-[16.222px] leading-[98.144px] capitalize   flex-shrink-0 hover:text-gray-900"
          >
            FAQs
          </a>
        </div>

        <div>
          <a href="https://innovacare.tech/listenerhub/signup">
            <button className="flex justify-center items-center gap-2 w-[160px] h-[37px] px-[24px] py-[16px] bg-[#FF6F61] text-white rounded-[34.878px] border-[1.622px] border-white hover:bg-red-500">
              Connect Now
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
