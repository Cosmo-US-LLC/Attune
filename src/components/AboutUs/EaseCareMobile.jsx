function EaseCareMobile() {
  return (
    <section className="bg-white px-5 pb-12 pt-20 flex flex-col gap-6 lg:hidden">
      <div className="flex flex-col gap-4 w-full">
        <h2 className="font-miniature font-bold text-[42px] leading-[50px] tracking-[-0.02em] text-[#0d0d0d]">
          <span className="text-[#ff6f61]">Backed by 
          <br />
            EaseCare</span>{" "}
          <span className="font-normal">trusted 
          <br />
           in mental health
          <br />
            across Alberta.</span>
        </h2>

        <p className="text-[16px] font-normal leading-[24px] text-[#0d0d0d]/70">
          Feelattune isn't a startup built in a vacuum. 
          <br />
          It's an extension of EaseCare, a mental
          health service with years of experience helping 
          <br />
          Albertans navigate wellbeing challenges.
          That 
          <br />
          means every coaching practice, coach vetting
          <br />
          process, and session framework is
          grounded 
          <br />
          in real mental health expertise not just 
          <br />
          business logic.
        </p>
      </div>

      <div className="bg-[#e5ff7d] w-full rounded-[24px] p-12 flex flex-col items-center justify-center gap-2 text-center overflow-hidden">
        <p className="font-miniature font-bold text-[72px] leading-[80px] text-[#0d0d0d]">1000+</p>
        <p className="text-[18px] font-normal text-black leading-[26px]">
          Albertans Served Through EaseCare
        </p>
      </div>
    </section>
  );
}

export default EaseCareMobile;
