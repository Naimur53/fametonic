import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/logo/logo.png'
import menu from '@/assets/icon/menu.svg'
const Topbar = () => {
    return (
        <header >
            <div className="flex w-full justify-center items-center p-[20px] md:p-[10px] announcement-bgd  md:bg-[linear-gradient(90deg,var(--color-main-red)_0%,var(--color-main-blue)_100%)]  bg-[linear-gradient(89.63deg,var(--color-main-red)_-2.16%,var(--color-main-blue)_115.27%)] ">

                <p className='text-[14px] md:text-[22px] font-bold text-center text-white leading-[17px] md:leading-[26px] tracking-[0.09px] '>🚀 <span className="text-main-blue font-extrabold text-[16px] leading-[19px] md:text-[22px] md:leading-[26px]">FRESH BEGINNINGS SALE:</span> Extra 25% OFF, Limited Spots - start your journey today!</p>

            </div>
            <nav className='max-w-[1020px] mt-[16px] md:mt-[35px] mx-auto flex justify-center items-start md:justify-between relative z-[99] px-4 xl:px-0  '>
                <div className=' '>
                    <Link href="/">
                        <Image className='md:w-[169px] md:h-[74px] w-[105px] h-[44px]' src={logo} alt="Logo" width={169} height={74} quality={100} />
                    </Link>

                </div>
                <div className='md:block hidden'>

                    <ul className='flex gap-[40px] text-deep-gray font-semibold'>

                        <li>
                            <Link href="#">About us</Link>
                        </li>
                        <li>
                            <Link href="#">Contact</Link>
                        </li>
                    </ul>
                </div>
                <button className='absolute right-[29px] top-[20px] md:hidden' type="button">
                    <Image src={menu} alt="menu" width={20} height={12} quality={100} />
                </button>
            </nav>
        </header>
    )
}

export default Topbar