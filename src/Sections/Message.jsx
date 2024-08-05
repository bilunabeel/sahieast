import React from 'react';
import Logo from '../assets/Logo.svg'
import SahiLogo from '../assets/SahiLogoWhiteBG.svg'

const Message = () => {
  return (
    <section className="z-10 bg-light_gray  ">
      
      {/* //what's hope? */}
      <div className="max-container text-left flex justify-between items-center max-md:flex-col-reverse gap-16 padding-y padding-x">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-mono ">What's Hope?</h1>
          <p className="font-light font-poppins">
            The Festival of Hope is a beacon of optimism in a world often shrouded in uncertainty. It's a gathering where hearts unite, spirits soar, and the human capacity for resilience is celebrated. Whether it's a platform for young voices to be heard, a celebration of cancer survivors, or a community coming together to support those in need, the essence remains the same: to kindle hope, inspire action, and build a brighter future. Through music, art, storytelling, and shared experiences, the festival becomes a living testament to the enduring power of the human spirit.
          </p>

        </div>
          <img src={Logo} className="h-64 w-full" alt="" />
          <img src={SahiLogo} className="h-64 w-full" alt="" />
      </div>

      

    </section>
  );
};

export default Message;
