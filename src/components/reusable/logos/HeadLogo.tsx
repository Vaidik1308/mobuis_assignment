import Image from 'next/image'
import React from 'react'


const HeadLogo = () => {
  return (
    <div className='flex items-center gap-4'>
        <Image src={'/images/logo/white_logo.svg'} alt='white_logo' width={60} height={60}/>

        <h4 className='tracking-tight text-[20px] text-white'>
            <span>
                Mobuis
            </span>
            <span>
                Engine
            </span>
        </h4>
    </div>
  )
}

export default HeadLogo