function EaseCare() {
  return (
    <section className="bg-white relative px-[114px] py-[60px] flex items-center justify-between gap-[40px] max-lg:hidden">
      {/* Left text block */}
      <div className="max-w-[614px] flex flex-col gap-[22px]">
        <h2 className="font-miniature text-[55px] leading-[1.1] text-black">
          <span className="font-bold">Backed by EaseCare</span>
          <br />
          <span className="font-normal">trusted in mental health across Alberta.</span>
        </h2>
        <p className="text-[18px] font-normal leading-[1.25] text-[#0d0d0d]/70">
          Feelattune isn't a startup built in a vacuum. It's an extension of EaseCare, a mental
          health service with years of experience helping Albertans navigate wellbeing challenges.
          That means every coaching practice, coach vetting process, and session framework is
          grounded in real mental health expertise not just business logic.
        </p>
      </div>

      {/* Right stat card */}
      <div className="bg-[#e5ff7d] w-[337px] h-[236px] rounded-[40px] flex flex-col items-center justify-center gap-[18px] flex-shrink-0">
        <p className="font-miniature font-bold text-[72px] leading-none text-[#0d0d0d]">1000+</p>
        <p className="text-[18px] font-normal text-black text-center leading-[1.25] px-6">
          Albertans served through EaseCare
        </p>
      </div>
    </section>
  );
}

export default EaseCare;
