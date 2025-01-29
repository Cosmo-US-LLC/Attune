import React from "react";
import { Button } from "@/components/ui/button";
// import clsx from 'clsx'
// import Image from 'next/image'

function YourPath() {
  return (
    <div id="Mpathtosupport2" className="bg-white py-[30px] px-5 space-y-6">
      <p className="font-miniature text-center text-[38px]">
        Your Path to Support
      </p>

      <div className="space-y-5">
        <SupportCards
          bg="bg-[#38AB9B]"
          img="/mobile/yourPath/seeking1.webp"
          title="For youth"
          buttonLabel="Start Your Journey "
          points={[
            {
              title: "",
              body: "Navigate life transitions confidently",
            },
            {
              title: "",
              body: "Manage academic or career pressure",
            },
            {
              title: "",
              body: "Build self-confidence in a judgment-free space",
            },
          ]}
        />

        <SupportCards
          bg="bg-[#F097DD]"
          img="/mobile/yourPath/seeking2.webp"
          title="For Middle-Aged Individuals"
          buttonLabel="Connect Now"
          points={[
            {
              title: " ",
              body: " Balance work and life stressors",
            },
            {
              title: " ",
              body: "Process relationship challenges",
            },
            {
              title: " ",
              body: "Find support during major life changes",
            },
          ]}
        />

        <SupportCards
          bg="bg-[#FF6F61]"
          img="/mobile/yourPath/seeking4.png"
          title="For Seniors"
          buttonLabel="Talk To Someone"
          points={[
            {
              title: " ",
              body: "Combat loneliness and isolation",
            },
            {
              title: " ",
              body: "Share life experiences",
            },
            {
                title: " ",
                body: "Find understanding companionship",
              },
          ]}
        />
      </div>
    </div>
  );
}

function SupportCards({ bg, img, title, points }) {
  return (
    <div className={"p-[14px] rounded-3xl space-y-6" + ` ${bg}`}>
      <img
        src={img}
        alt="Seeking connection 1"
        className="w-[100%]  object-contain"
      />

      <div className="space-y-[14px]">
        <h2 className="text-white font-miniature text-[26px]">{title}</h2>

        <ul className="list-disc text-[15px] leading-[22px] pl-[19px] space-y-[22px] text-white">
          {points?.map((point, id) => (
            <li
              key={id}
              className="capitalize"
              style={{
                listStyleImage: "url(/mobile/yourPath/list-disc.svg)",
              }}
            >
              <strong>{point?.title}</strong> {point?.body}
            </li>
          ))}
        </ul>
      </div>

      <a
        href="https://innovacare.tech/listenerhub/signup"
        className="flex justify-center"
      >
        <Button className="bg-[#5200FF] rounded-full text-[15px] mt-4">
          Get Started
        </Button>
      </a>
    </div>
  );
}

export default YourPath;
