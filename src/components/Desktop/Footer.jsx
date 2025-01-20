function Footer() {
  return (
    <footer className="bg-[#E5DDD4] overflow-hidden relative p-[50px]">
      <div className="relative z-10 max-w-[90%] px-6">
        {/* Top Section */}
        <div className="flex">
          <div className="min-w-[200px] flex items-end">
            <img src="/desktop/logo-footer.svg" alt="Attune Logo" className="" />
          </div>

          <div className="grow flex pb-1">
            <div className="space-y-[57px]">
              <div className="space-y-[43px]">
                <div className="flex items-center gap-11">
                  <h1 className="text-[55px] font-miniature leading-[69px]">
                    Talk to a
                    <br />
                    professional
                  </h1>

                  <p className="text-[16px] leading-[22px]">
                    Looking for someone to listen? Our trained Listeners are
                    here to provide non-judgmental, compassionate support
                    whenever you need it. Whether you’re managing stress,
                    navigating life transitions, or simply craving a connection,
                    we’re here to help.
                  </p>
                </div>

                <div className="grid grid-cols-4 grid-rows-2 gap-y-[12px] text-[16.2px] font-[500]">
                  <a href="#">Who We Serve</a>
                  <a href="#">Our Approach</a>
                  <a href="#">Who We Serve</a>
                  <a href="#">Our Approach</a>
                  <a href="#">What We Do</a>
                  <a href="#">Resources</a>
                  <a href="#">What We Do</a>
                  <a href="#">Resources</a>
                </div>
              </div>

              <div className="pb-2">&copy; 2025 Attune. All rights reserved</div>
            </div>

            <div className="min-w-[278px] flex flex-col items-center justify-between">
              <img src="/desktop/heart.png" alt="Mental Wellness" className="w-[233px] h-[185px]" />
              <br />
              <div className="grid grid-cols-5 gap-x-4">
                <a href="#"><img src="/desktop/footer/link-1.svg" alt="Share link" className="w-[43px] h-[43px]" /></a>
                <a href="#"><img src="/desktop/footer/link-2.svg" alt="Share link" className="w-[43px] h-[43px]" /></a>
                <a href="#"><img src="/desktop/footer/link-3.svg" alt="Share link" className="w-[43px] h-[43px]" /></a>
                <a href="#"><img src="/desktop/footer/link-4.svg" alt="Share link" className="w-[43px] h-[43px]" /></a>
                <a href="#"><img src="/desktop/footer/link-5.svg" alt="Share link" className="w-[43px] h-[43px]" /></a>
              </div>
            </div>
          </div>
        </div>

      </div>


      {/* Bottom Section */}
      <div className="relative z-10 mt-5 border-t border-black pt-4">
        <div className=" absolute bottom-[100%]">
          {/* Att<span className="italic">une</span> */}
          <img src="/desktop/footer/attune.svg" alt="Attune logo" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-[12px] max-w-[1020px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
