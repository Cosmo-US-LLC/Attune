function ProudlySupportingBar() {
  const logos = [
    { src: "/desktop1/proudly/logo1.webp", alt: "Alberta", w: "w-[102px]", h: "h-[37px]" },
    { src: "/desktop1/proudly/logo2.webp", alt: "Alberta", w: "w-[129px]", h: "h-[37px]" },
    { src: "/desktop1/proudly/logo3.webp", alt: "Rural", w: "w-[137px]", h: "h-[56px]" },
    { src: "/desktop1/proudly/logo4.webp", alt: "211 Alberta", w: "w-[158px]", h: "h-[50px]" },
    { src: "/desktop1/proudly/logo5.webp", alt: "NPO's", w: "w-[131px]", h: "h-[47px]" },
    { src: "/desktop1/proudly/logo6.webp", alt: "NPO's", w: "w-[112px]", h: "h-[57px]" },
  ];

  return (
    <div className="bg-[#F4EFEA] w-full px-6 md:px-[100px] 2xl:px-[150px] py-[50px]">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row items-center gap-8 md:gap-[73px]">
        <p className="font-miniature font-[500] text-[40px] text-black text-center md:text-left leading-tight shrink-0">
          Proudly
          <br />
          Supporting
        </p>

        <div className="w-full rounded-[30px] bg-white py-[25px] px-[32px]">
          <div className="flex flex-row gap-4 items-center md:justify-between md:flex-wrap max-md:overflow-x-auto max-md:flex-nowrap max-md:gap-6">
            {logos.map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className={`${logo.h} ${logo.w} object-contain shrink-0`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProudlySupportingBar;
