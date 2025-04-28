import HeadLogo from '@/components/reusable/logos/HeadLogo'
import { navLinks } from '@/libs/constant_data'
import Link from 'next/link'
import React from 'react'


const NavbarSection = () => {
    
  return (
    <nav className='w-full flex justify-between items-center px-16 py-8'>
        {/* logo */}
        <HeadLogo/>

        {/* links */}
        <div className='flex items-center gap-12'>
            {
                navLinks.map((link,index)=>(
                    <Link key={index} className='text-white text-[19px] font-normal' href={link.href}>
                        {link.label}
                    </Link>
                ))
            }
        </div>

        {/* auth button */}

        <button className='cursor-pointer bg-white hover:bg-[#022183] hover:text-white transition-all duration-300 text-[#022183] px-9 py-2.5 rounded-full font-[500] text-[19px] tracking-tight'>
            Get Started
        </button>
    </nav>
  )
}

export default NavbarSection