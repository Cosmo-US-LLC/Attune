function EaseCareMobile() {
  return (
    <section className="bg-white px-5 py-10 flex flex-col gap-6 lg:hidden">
      {/* Heading */}
      <h2 className="font-miniature text-[38px] leading-[1.1] text-black">
        <span className="font-bold">Backed by EaseCare</span>
        <br />
        <span className="font-normal">trusted in mental health across Alberta.</span>
      </h2>

      {/* Body */}
      <p className="text-[15px] font-normal leading-[1.25] text-[#0d0d0d]/70">
        Feelattune isn't a startup built in a vacuum. It's an extension of EaseCare, a mental
        health service with years of experience helping Albertans navigate wellbeing challenges.
        That means every coaching practice, coach vetting process, and session framework is
        grounded in real mental health expertise not just business logic.
      </p>

      {/* Stat card */}
      <div className="bg-[#e5ff7d] w-full rounded-[24px] py-8 flex flex-col items-center justify-center gap-3">
        <p className="font-miniature font-bold text-[64px] leading-none text-[#0d0d0d]">1000+</p>
        <p className="text-[18px] font-normal text-black text-center leading-[1.25] px-6">
          Albertans served through EaseCare
        </p>
      </div>
    </section>
  );
}

export default EaseCareMobile;
