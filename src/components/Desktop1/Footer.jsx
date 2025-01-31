function Footer() {
  return (
    <footer className="bg-[#E5DDD4] overflow-hidden relative p-[50px]">
      <div className="relative z-10 xl:max-w-[1313px] px-6">
        {/* Top Section */}
        <div className="flex">
          <a href="/" className="min-w-[200px] flex max-xl:items-center items-end">
            <img
              src="/desktop1/logo-footer.svg"
              alt="Attune Logo"
              className=""
            />
          </a>

          <div className="grow flex pb-1 gap-x-[34px]">
            <div className="space-y-[20px] xl:space-y-[57px]">
              <div className="space-y-[20px] xl:space-y-[43px]">
                <div className="flex max-xl:flex-col items-start xl:items-center gap-4 xl:gap-11">
                  <h1 className="text-[55px] font-miniature leading-[50px] xl:leading-[69px]">
                    Talk to a
                    <br />
                    professional
                  </h1>

                  <p className="text-[16px] max-w-[382px] leading-[22px] capitalize">
                    Looking for someone to listen? Our trained Listeners are
                    here to provide non-judgmental, compassionate support
                    whenever you need it. Whether you’re managing stress,
                    navigating life transitions, or simply craving a connection,
                    we’re here to help.
                  </p>
                </div>

                <div className="grid max-xl:grid-cols-2 grid-cols-5 grid-rows-2 gap-y-[12px] text-[16.2px] font-[500]">
                  <a href="#Mpathtosupport">Path To Support</a>
                  <a href="#Mhowitworks">How It Works</a>
                  <a href="#Mourapproach">Our Approach</a>
                  <a href="#Mfaqs">FAQs</a>
                </div>
              </div>

              <div className="pb-2">
                &copy; 2025 Attune. All Rights Reserved
              </div>
            </div>

            <div className="min-w-[278px] grow flex flex-col items-start justify-between">
              <img
                src="/desktop1/heart.webp"
                alt="Mental Wellness"
                className="w-[233px] h-[185px]"
              />
              <br />
              <div className="flex justify-between gap-x-[30px] relative z-50">
                <div className="flex gap-x-4">
                  <a href="https://www.linkedin.com/company/easecare/">
                    <img
                      src="/desktop1/footer/link-4.svg"
                      alt="Share link"
                      className="w-[43px] h-[43px]"
                    />
                  </a>
                  <a href="https://www.facebook.com/easecare.ca">
                    <img
                      src="/desktop1/footer/link-1.svg"
                      alt="Share link"
                      className="w-[43px] h-[43px]"
                    />
                  </a>
                  <a href="https://www.instagram.com/easecare.ca/">
                    <img
                      src="/desktop1/footer/link-2.svg"
                      alt="Share link"
                      className="w-[43px] h-[43px]"
                    />
                  </a>
                </div>

                <a href="https://innovacare.tech/listenerhub/signup">
                  <button className="bg-[#5200FF] text-white py-[10px] px-[10px] h-[46px] min-w-[115px] rounded-full text-[16px] whitespace-nowrap">
                    Get Started
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-0 mt-5 border-t border-black pt-4">
        <div className=" absolute bottom-[100%]">
          {/* Att<span className="italic">une</span> */}
          <img src="/desktop1/footer/attune.svg" alt="Attune logo" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-[12px] max-w-[1020px] capitalize">
        We would like to acknowledge the traditional, ancestral, and unceded territory of the many First Nations, Metis, and Inuit who have lived and cared for the lands known as Canada for generations. We are grateful for the traditional knowledge keepers and elders who are still with us today and those who have gone before us. We make this acknowledgment as an act of reconciliation and gratitude to those whose territory we reside on.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
