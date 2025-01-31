

export default function Values (){
    const values = [
        {
          bg: "bg-[#E5FF7D]",
          img: "/desktop2/coreValues/c-1.png",
          title: "You Deserve Connection",
          body: 'Navigating university life or starting a career? We’re here for you. Our platform creates a safe, open space for you to talk about what matters to you, no matter how big or small.',
        },
        {
          bg: "bg-[#FFA8ED]",
          img: "/desktop2/coreValues/c-3.png",
          title: "No Labels, Just Support",
          body: "No diagnosis needed—just real conversations. Whether you're feeling stressed, overwhelmed, or just want to share your thoughts, we’re ready to listen.",
        },
        {
          bg: "bg-[#6FE0D1]",
          img: "/desktop2/coreValues/c-2.png",
          title: "Affordable & Accessible",
          body: 'Support that fits your budget and schedule. Designed for students and young professionals, we ensure connection is easy and affordable anytime, anywhere.',
        },
    
       
      ];
    return(
         <>
         <div className=" py-[30px] px-5 space-y-6">
            <h3 className="text-center font-miniature text-[38px]">Our Core Values</h3>
          {values?.map((test, id) => (
                     
                        <div
                          className={
                            "border border-black rounded-[15px] py-[30px] px-[20px]  " +
                            test?.bg
                          }
                        >
                          <img
                            src={test?.img}
                            alt="person"
                            className="w-[60px] h-[60px] object-contain rounded-full mb-[20px]"
                          />
          
                          <div className="space-y-[2px]">
                            <h3 className="font-miniature text-[40px] mb-6 leading-[45px]">{test?.title}</h3>
                            <p className="text-[16px] leading-[20px]">{test?.body}</p>
                          </div>
                        </div>
          ))}
         </div>
         </>
    );
}