import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-10">
      <div className="max-w-[1600px] mx-auto px-8 flex flex-col gap-8">
        {/* Top: Logo and divider */}
        <div className="flex flex-col gap-4">
          <div className="flex items-start flex-col">
            <Image src="/images/logo/blue_logo.svg" alt="MobuisEngine Logo" width={60} height={60} />
            <span className="text-[#0649E7] text-xl font-[600] font-['sora']">MobuisEngine</span>
          </div>
          <hr className="border-[#E5E7EB] mt-2" />
        </div>
        {/* Middle: Info columns */}
        <div className="w-full flex flex-col md:flex-row justify-between gap-8 pb-8">
          <div className="flex justify-between w-1/2">
            {/* Address */}
            <div className='font-["DM Sans"]'>
              <div className="text-[#0649E7] font-['DM Sans'] font-[600] underline mb-1 text-[14px]">Address</div>
              <div className="text-[#0649E7] text-base leading-tight text-[14px] font-['DM Sans'] font-[500]">
                1875 Mission St Ste 103 #450<br />
                San Francisco, CA 94103
              </div>
            </div>
            {/* Email */}
            <div>
              <div className="text-[#0066EB] font-['DM Sans'] font-[600] underline mb-1 text-[14px]">Email</div>
              <a href="mailto:finance@mobiusengine.ai" className="text-[#0066EB] text-base underline font-['DM Sans'] font-[500] text-[14px]">finance@mobiusengine.ai</a>
            </div>
            {/* Telephone */}
            <div>
              <div className="text-[#0066EB] font-['DM Sans'] font-[600] underline mb-1 text-[14px]">Telephone</div>
              <a href="tel:6508896026" className="text-[#0066EB] text-base font-['DM Sans'] font-[500] text-[14px]">650–889–6026</a>
            </div>
          </div>
          {/* Socials */}
          <div className="flex flex-col items-start pr-24">
            <div className="text-[#0066EB] font-['DM Sans'] font-[600] underline mb-1 text-[14px]">Socials</div>
            <div className="flex gap-4 mt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full border-2 border-[#0066EB] flex items-center justify-center ">
                <Image src="/images/logo/linkedin.svg" alt="LinkedIn" width={18} height={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full border-2 border-[#0066EB] flex items-center justify-center">
                <Image src="/images/logo/linkedin.svg" alt="LinkedIn" width={18} height={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="w-full bg-[#0649E7] py-4 flex flex-col md:flex-row items-center justify-between px-20">
        <span className="text-white text-base text-[14px]">© 2023 Mobiusservices LLC</span>
        <div className="flex gap-16 mt-2 md:mt-0">
          <a href="#" className="text-white text-base  text-[14px]">Terms & Conditions</a>
          <a href="#" className="text-white text-base  text-[14px]">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;