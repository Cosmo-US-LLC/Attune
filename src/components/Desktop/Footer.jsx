function Footer() {
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
    <footer className="bg-[#E5DDD4] overflow-hidden relative w-full">
      <div className="max-w-[1440px] h-[500] mx-auto pt-[80px]">
        <div className="relative flex flex-col gap-16">
          <div className="absolute bottom-[-30px] left-[50px]">
            <img src="/desktop/footer/attune.svg" alt="Attune logo" />
          </div>

          <div className="relative flex flex-col pl-[220px] gap-10">
            <div className="flex gap-10">
              <h1 className="text-[55px] font-miniature leading-[69px] w-[301px]">
                Talk to a
                <br />
                professional
              </h1>

              <p className="text-[16px] leading-[22px] capitalize w-[382px]">
                Looking for someone to listen? Our trained Listeners are here to
                provide non-judgmental, compassionate support whenever you need
                it. Whether you’re managing stress, navigating life transitions,
                or simply craving a connection, we’re here to help.
              </p>
            </div>

            <div className="text-[16px] font-[500] flex gap-10">
              <a href="#WhyDoesD" onClick={(e) => handleScroll(e, "WhyDoesD", 90)}>Path To Support</a>
              <a href="#HowitworksD" onClick={(e) => handleScroll(e, "HowitworksD", 90)}>How It Works</a>
              <a href="#WhyChooseD" onClick={(e) => handleScroll(e, "WhyChooseD", 90)}>Our Approach</a>
              <a href="#FaqD" onClick={(e) => handleScroll(e, "FaqD", 90)}>FAQs</a>
            </div>
            <div className="absolute right-[180px] top-[-20px]">
              <img
                src="/desktop/heart.webp"
                alt="Mental Wellness"
                className="w-[233px] h-[185px]"
              />
            </div>
          </div>

          <div className="flex w-full px-[70px]">
            <div className="flex w-[50%] justify-start items-center gap-8">
              <div className="flex ">
                <img
                  src="/desktop/feel-attune-logo.webp"
                  alt="Attune Logo"
                  className="cursor-pointer "
                />
              </div>
              <div className="">&copy; 2025 Attune. All Rights Reserved</div>
            </div>

            <div className="flex gap-4 justify-end items-center w-[50%] z-20">
              <a href="https://www.linkedin.com/company/easecare/">
                <img
                  src="/desktop/footer/link-4.svg"
                  alt="Share link"
                  className="w-[43px] h-[43px]"
                />
              </a>
              <a href="https://www.facebook.com/easecare.ca">
                <img
                  src="/desktop/footer/link-1.svg"
                  alt="Share link"
                  className="w-[43px] h-[43px]"
                />
              </a>
              <a href="https://www.instagram.com/easecare.ca/">
                <img
                  src="/desktop/footer/link-2.svg"
                  alt="Share link"
                  className="w-[43px] h-[43px]"
                />
              </a>

              <a href="https://innovacare.tech/listenerhub/signup">
                <button className="bg-[#5200FF] text-white w-[150px] py-2 rounded-full">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center h-[120px] px-[70px] mt-8 border-t  border-black">
          <div className="flex text-[12px] capitalize">
            We would like to acknowledge the traditional, ancestral, and unceded
            territory of the many First Nations, Metis, and Inuit who have lived
            and cared for the lands known as Canada for generations. We are
            grateful for the traditional knowledge keepers and elders who are
            still with us today and those who have gone before us. We make this
            acknowledgment as an act of reconciliation and gratitude to those
            whose territory we reside on.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
