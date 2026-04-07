import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const values = [
  {
    bg: "bg-[#E5FF7D]",
    img: "/desktop1/our-core/core1.svg",
    title: "You Deserve Real Support",
    body: "Anxiety is hard enough without having to figure it out alone. Our coaches create a safe, judgment-free space where you can be honest about what you're going through and start making real progress.",
  },
  {
    bg: "bg-[#FFA8ED]",
    img: "/desktop1/our-core/core2.svg",
    title: "Coaching, Not Diagnosing",
    body: "You don't need a label to get help. Our coaches meet you where you are, whether you're overwhelmed, stuck, or just ready for change, and work with you on practical strategies that move the needle.",
  },
  {
    bg: "bg-[#6FE0D1]",
    img: "/desktop1/our-core/core3.svg",
    title: "Affordable & Built for Your Life",
    body: "Professional coaching shouldn't come with a therapy price tag. We offer flexible, budget-friendly sessions designed around your schedule, so getting support is easy, accessible, and something you can actually stick with.",
  },
];

const CoreValues = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1440px] mx-auto p-[105px] max-md:p-6 pt-[85px] max-md:pt-10 space-y-[68px] max-md:space-y-[32px]">
        <h1 className="text-[76px] max-md:text-[40px] max-md:leading-[52px] font-miniature text-center">
          Our Core Values
        </h1>

        <Carousel>
          <CarouselContent>
            {values.map((value, id) => (
              <CarouselItem
                key={id}
                className="max-xl:basis-1/2 max-md:basis-full basis-1/3 w-full h-full"
              >
                <div
                  className={
                    "border border-black rounded-[30px] py-[41px] px-[28px] h-[431px] max-md:h-auto " +
                    value.bg
                  }
                >
                  <img
                    src={value.img}
                    alt={value.title}
                    className="w-[98px] h-[98px] object-contain rounded-full mb-[38px]"
                  />

                  <div className="space-y-[20px]">
                    <h3 className="font-miniature text-[40px] leading-[42px] max-md:text-[28px] max-md:leading-[34px]">
                      {value.title}
                    </h3>
                    <p className="text-[16px] leading-[20px]">{value.body}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border border-black w-[48px] h-[48px] disabled:hidden bg-transparent -left-16" />
          <CarouselNext className="border border-black w-[48px] h-[48px] disabled:hidden bg-transparent -right-16" />
        </Carousel>
      </div>
    </div>
  );
};

export default CoreValues;
