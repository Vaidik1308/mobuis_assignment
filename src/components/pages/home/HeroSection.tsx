import AuthButton from '@/components/reusable/buttons/AuthButton'
import Image from 'next/image'
import React from 'react'
import { MdArrowForward } from 'react-icons/md'


const HeroSection = () => {
  return (
    <div className='w-full flex justify-center items-center py-28'>
        <div className='w-[75%] mx-auto flex justify-between items-start'>
            <div className='w-2/3 flex flex-col gap-10 justify-start'>
                <h1 className='text-white  font-semibold flex flex-wrap leading-20 font-["Sora"]'>
                Land job interviews
                <span className='text-[#0649E7] pr-4'>
                10x 
                </span>
                faster
                </h1>
                <p className='text-white text-[19px] font-[500] w-[60%] leading-5'>
                Custom-built resumes that match your goals, keywords, and recruiter expectations.
                </p>
                <AuthButton
                    buttonText='Get Started'
                    buttonIcon={<MdArrowForward size={20} />}
                    rootClassName='flex items-center gap-0.5 py-4 w-fit'
                />
            </div>

            <div className='w-1/4 flex '>

                <button className='flex items-center gap-8 flex-col'>
                    <div className='relative'>
                        <Image src={'/images/hero_section/book_pic.svg'} alt='play' width={280} height={280}/>
                        <div className='absolute bottom-[-8%] right-[-15%] flex justify-center items-center '>
                            <div className="size-28  rounded-full border border-blue-400 flex items-center justify-center mx-auto relative  backdrop-blur-[14px] stroke-[1px] text-black text-5xl font-bold ">
                            📖

                            <div className='absolute -bottom-[2%] left-[12%] bg-white rounded-full p-2'>
                                <Image src={'/images/hero_section/arrow_bottom_left.svg'} alt='play' width={7} height={7}/>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-white text-[17.5px] '>Download Free E-Book</p>
                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection