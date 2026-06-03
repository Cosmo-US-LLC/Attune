function EaseCareMobile() {
  return (
    <section className="flex flex-col gap-6 px-5 pt-20 pb-12 bg-white lg:hidden">
      <div className="flex flex-col gap-4 w-full">
        <h2 className="section-heading text-left text-[#0d0d0d]">
          <span className="heading-accent">
            Backed by
            <br />
            EaseCare
          </span>{" "}
          <span className="font-normal">
            trusted
            <br />
            in mental health
            <br />
            across Alberta.
          </span>
        </h2>

        <p className="text-[16px] font-normal leading-[24px] text-[#0d0d0d]/70">
          FeelAttune isn't a startup built in a vacuum. It's an extension of
          EaseCare, a mental health service with years of experience helping
          Albertans navigate wellbeing challenges. That means every coaching
          practice, coach vetting process, and session framework is grounded in
          real mental health expertise not just business logic.
        </p>
      </div>

      <div className="bg-[#e5ff7d] w-full rounded-[24px] p-12 flex flex-col items-center justify-center gap-2 text-center overflow-hidden">
        <p className="font-miniature font-bold text-[72px] leading-[80px] text-[#0d0d0d]">
          50,000+
        </p>
        <p className="text-[18px] font-normal text-black leading-[26px]">
          Albertans Served Through EaseCare
        </p>
      </div>
    </section>
  );
}

export default EaseCareMobile;
