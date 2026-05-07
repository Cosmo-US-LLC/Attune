function StatsMobile() {
  const stats = [
    {
      bg: "bg-[#e5ff7d]",
      value: "94%",
      label: "client satisfaction rate",
    },
    {
      bg: "bg-[#00e4c6]",
      value: "4.9",
      label: "average rating across all sessions",
    },
    {
      bg: "bg-[#f097dd]",
      value: "3 yrs",
      label: "of coaching experience",
    },
    {
      bg: "bg-[#96adf0]",
      value: "500+",
      label: "people coached to date",
    },
  ];

  return (
    <section className="bg-white px-5 py-10 lg:hidden">
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.value}
            className={`${stat.bg} rounded-[20px] flex flex-col items-center justify-center gap-2 text-center py-6 px-4`}
          >
            <p className="font-miniature text-[48px] leading-none font-normal text-black">
              {stat.value}
            </p>
            <p className="text-[14px] font-normal text-black tracking-[-0.28px] leading-[1.25]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsMobile;
