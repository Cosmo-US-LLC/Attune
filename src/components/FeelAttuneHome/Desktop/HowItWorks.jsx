function HowItWorks() {
  return (
    <div id="how-it-works" className="bg-[#e5ff7d] py-[70px] px-4 space-y-[26px]"  >
      <h1 className='font-miniature text-center text-[76px] leading-[110px]'>How it Works</h1>

      <div className="grid gap-6 mx-auto max-w-7xl md:grid-cols-3">
        <HowItCards id="01" title="Sign Up" body="Create Your Profile In Just A Few Clicks. It’s Quick, Simple, And All About You.">
            <img src="assets/desktop1/how-it/card-1.svg" alt="Hug" className="w-[107px] h-[71px]" />
        </HowItCards>
        
        <HowItCards id="02" title="Find Your Listener" body="Explore A Variety Of Compassionate, Judgment-Free Listeners. Choose Someone Who Truly Gets You.">
        <img src="assets/desktop1/how-it/card-2.svg" alt="Talk" className="w-[92px] h-[69px]" />
        </HowItCards>
        
        <HowItCards id="03" title="Connect" body="Open Up Through Voice Or Video, Anytime And Anywhere. It’s Your Safe Space To Share.">
        <img src="assets/desktop1/how-it/card-3.svg" alt="Schedule" className="w-[82px] h-[73px]" />
        </HowItCards>
      </div>

      {/* Call-to-Action Button */}
      <a href="https://innovacare.tech/listenerhub/signup" className="w-fit mx-auto flex justify-center mt-8">
        <button className="bg-[#5200FF] text-white py-3 px-8 rounded-full text-[16px] hover:bg-purple-800">
          Sign up now
        </button>
      </a>
    </div>
  );
}

function HowItCards({ id, title, body, children }) {
  return (
    <div className="bg-white border border-black min-h-[240px] p-[28px] pt-[14px] pr-[14px] rounded-[20px] space-y-[10px]">
      <div className="flex items-start justify-between">
        <div className="h-[71px] w-[71px] mt-4 rounded-full bg-[#FF9AE9] text-white font-miniature flex justify-center items-center text-[30px]">
          {id}
        </div>
        {children}
      </div>

      <div className="space-y-[5px]">
        <h3 className="text-black font-miniature text-[30px]">{title}</h3>
        <p className="text-black text-[16px] leading-[20px] capitalize">{body}</p>
      </div>
    </div>
  );
}

export default HowItWorks;
