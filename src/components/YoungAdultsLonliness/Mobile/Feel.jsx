import { Button } from '@/components/ui/button'

export default function Feel() {
    return (
      <>
        <div className="bg-[#95ADF0]">
          <img
            src={"/desktop2/feel-heard/smiling-girl.webp"}
            alt="smilinggirl"
            className=" object-cover"
          />
        </div>
        <div className="bg-white border border-y-black py-[30px] px-5">
        <div className="">
            <div className='flex flex-row'>
              <h3 className="font-miniature text-[38px] leading-[55px]">Feel Heard with <br/> 
              <span className="text-[54px]">Att<span className="italic">une</span></span></h3>
              <img
            src={"/desktop2/feel-heard/feel-circle2.webp"}
            alt="smilinggirl"
            className="h-[76px] w-[75px] ml-[272px] mt-9 absolute "
          />
              </div>
              <div className='flex flex-row'>
              <a href="https://signup.feelattune.com/sign-up?_gl=1*46lrc9*_gcl_au*NDQyODE2NjgyLjE3NDY0NTQ3Njc.*_ga*MjEyMDE1OTQyMi4xNzM4NTIxNjMz*_ga_2MGYLNPB9W*czE3NDkwMDA4MzYkbzEwNiRnMCR0MTc0OTAwMDgzNiRqNjAkbDAkaDA">
              <Button className="bg-[#5200FF] text-white mt-4 py-3 rounded-full">Connect Now</Button>
              <img
            src={"/desktop2/feel-heard/feel-circle1.webp"}
            alt="smilinggirl"
            className="h-[94px] w-[94px] ml-44 -mt-9 absolute "
          />
              </a>
              </div>
            </div>
        </div>
      </>
    );
  }
  