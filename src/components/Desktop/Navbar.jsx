function Navbar() {
  return (
    <nav className="bg-white h-[99px] flex-shrink-0 shadow-sm">
      <div className="max-w-[1440px] w-full h-full mx-auto px-8 pr-16 flex items-center justify-between">
        <div className="flex items-center flex-col relative">
          <h1 className="font-miniature relative">
            <span className="text-black font-[400] text-[46.167px] leading-normal">
              Att
            </span>

            <span className="text-black font-[400] text-[46.167px] leading-normal italic">une</span>
          </h1>
          <span className="text-sm font-light absolute -bottom-1 right-0">By SocialRx</span>
        </div>

        <div className="hidden md:flex space-x-8">
          <a
            href="#who-we-serve"
            className="flex flex-col justify-center text-center text-black font-medium text-[16.222px] leading-[98.144px] capitalize   flex-shrink-0 hover:text-gray-900"
          >
            Who We Serve
          </a>
          <a
            href="#what-we-do"
            className="flex flex-col justify-center text-center text-black font-medium text-[16.222px] leading-[98.144px] capitalize  flex-shrink-0 hover:text-gray-900"
          >
            What We Do
          </a>
          <a
            href="#our-approach"
            className="flex flex-col justify-center text-center text-black font-medium text-[16.222px] leading-[98.144px] capitalize   flex-shrink-0 hover:text-gray-900"
          >
            Our Approach
          </a>
          <a
            href="#resources"
            className="flex flex-col justify-center text-center text-black font-medium text-[16.222px] leading-[98.144px] capitalize   flex-shrink-0 hover:text-gray-900"
          >
            Resources
          </a>
        </div>

        <div>
          <button className="flex justify-center items-center gap-2 w-[160px] h-[37px] px-[24px] py-[16px] bg-[#FF6F61] text-white rounded-[34.878px] border-[1.622px] border-white hover:bg-red-500">
            Connect Now
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
