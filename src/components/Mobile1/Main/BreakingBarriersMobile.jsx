function BreakingBarriersMobile() {
    return (
      <div className="bg-[#FFF] py-[60px]" id="">
        <div className="flex flex-col items-center justify-center space-y-[40px]">
          <h1 className="font-miniature text-[#000] text-[38px] font-[400] text-center leading-normal">
            Breaking Barriers: Overcoming <br /> Loneliness & Mental Health
            Struggles
          </h1>
          <div className="flex flex-col gap-10">
            <YourPathCard
            img="/desktop1/BreakingBarriers/icon1.webp"
            imgClass="absolute right-0 top-[8px] w-[70px] h-[70px]"
              title="Loneliness: Finding Connection in a Disconnected World"
              description="Loneliness can feel overwhelming, but it doesn’t have to be permanent. Whether you're dealing with loneliness at university, feeling isolated at work, or searching for companionship, real human connection is just a conversation away."
              buttonLabel="Start Your Journey"
              classes="bg-[#38AB9B] text-white w-[350px]"
              points={[
                {
                  title: "",
                  body: "Reduce social isolation and build meaningful relationships",
                },
                {
                  title: "",
                  body: "Find support for lonely adults, young professionals, and seniors",
                },
                {
                  title: "",
                  body: "Combat feelings of emptiness and rediscover companionship",
                },
              ]}
            />
            <YourPathCard
            img="/desktop1/BreakingBarriers/icon2.webp"
            imgClass="absolute right-0 top-[-20px] w-[83px] h-[62px]"
              title="Mental Health Barriers: Support Without Stigma or Labels"
              buttonLabel="Find Your Support"
              description="Struggling with stress, anxiety, or emotional overwhelm but hesitant to seek therapy? You’re not alone. Whether you’re looking for anxiety relief, stress management, or emotional well-being support, we offer a judgment-free space to talk, vent, and feel heard—without clinical pressure."
              classes="bg-[#FF6F61] text-white w-[350px]"
                points={[
                  {
                    title: "",
                    body: "Talk about stress, anxiety, and emotional challenges freely",
                  },
                  {
                    title: "",
                    body: "Find relief, guidance, and motivation from trained Listeners",
                  },
                  {
                    title: "",
                    body: "Flexible, affordable support—on your terms",
                  },
                ]}
            />
          </div>
        </div>
      </div>
    );
  }
  
  function YourPathCard({
      img,
      imgClass,
    title,
    description,
    classes,
    points,
    buttonLabel,
  }) {
    return (
      <div
        className={
          "flex flex-col border border-black rounded-[30px] px-6 py-6 space-y-[13px] " +
          classes
        }
      >
  
        <div className="relative flex flex-col gap-6">
        <img
          src={img}
          alt={title}
          className={"absolute right-0 w-[90px] h-[90px] "+ imgClass}
        />
          <h2 className="text-[26px] font-[400] leading-normal font-miniature w-[230px]">
            {title}
          </h2>
  
          <p className="text-[15px] font-[400] leading-[22px] w-[322px]  ">
             {description}
          </p>
  
          <ul className="w-[290px] mt-4 grow list-disc max-xl:text-[15px] text-[18px] max-xl:leading-tight leading-[22px] pl-[23px] space-y-[22px]">
            {points?.map((point, id) => (
              <li
                key={id}
                className="pl-4 capitalize "
                style={{
                  listStyleImage: "url(/desktop1/your-path/list-disc.svg)",
                }}
              >
                <strong>{point?.title}</strong> {point?.body}
              </li>
            ))}
          </ul>
  
          <a
            href="https://innovacare.tech/listenerhub/signup"
            className="mt-4 w-fit"
          >
            <button className="w-fit bg-[#5200FF] text-white py-2 px-6 rounded-full text-[16px] font-[500] hover:bg-purple-800">
              {buttonLabel}
            </button>
          </a>
        </div>
      </div>
    );
  }
  
  export default BreakingBarriersMobile;
  