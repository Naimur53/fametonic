import React from 'react'
import rightArrow from '@/assets/icon/right-arrow.png'
import Image from 'next/image'
import phone from '@/assets/hero/phone.png'
import phoneMobile from '@/assets/hero/phone_small.png'
const HeroSection = () => {
    const contentList = [
        "Start growing your influence right away—no waiting required!",
        "Create viral TikToks and Reels step by step with easy-to-follow lessons",
        "Use a Personal AI Worker to boost your content",
        "Learn from expert-led courses designed for aspiring influencers"
    ]
    return (
        <section className='mx-auto max-w-[1020px] mt-[57px] flex items-center lg:items-start flex-col-reverse lg:flex-row xl:flex-col relative'>
            <div className='max-w-[516px] relative z-[1] px-[20px] md:px-[0px] mt-[-64px] md:mt-[0]'>
                <h1 className='max-w-[350px] mx-auto md:mx-0 md:max-w-full font-urbanist text-center md:text-left font-extrabold md:font-bold text-[25px] md:text-[35px]  leading-[30px] md:leading-[42px]'>Want to Turn Social Media Into a Profitable Career? <br />
                    <span className='font-urbanist text-main-blue text-shadow-[0px_4px_4px_#FC004E] hero-text-shadow-effect font-extrabold md:font-bold  '>Discover your way to success with Fametonic:</span>
                </h1>
                <div className='mt-[22px] md:mt-[16px] mb-[22px] md:mb-[30px] max-w-[350px] mx-auto md:mx-0 md:max-w-full'>
                    <ul className='md:space-y-[13px] space-y-[10px]'>
                        {
                            contentList.map((content, index) => (
                                <li key={index} >
                                    <p className='flex gap-[10px] items-center text-[16px] leading-[22px]  font-medium md:font-semibold'>
                                        <span className='text-[22px]'>
                                            ✨
                                        </span>
                                        <span>
                                            {content}
                                        </span>
                                    </p>

                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex flex-col-reverse items-center lg:items-start lg:flex-col'>
                    <div className='lg:w-[313px] mt-[32px] w-full lg:mt-[0px] pb-[40px] lg:pb-[0px]'>
                        <button type="button" className='w-full lg:w-[313px] bg-main-red justify-center flex gap-[10px] items-center py-[8px] rounded-[10px] shadow-[2px_2px_10px_0px_#00E7F9]'>
                            <span className="font-bold text-[20px] leading-[24px]">GET STARTED</span>
                            <Image src={rightArrow} alt="Right Arrow" width={9} height={6} quality={100} />
                        </button>
                        <span className='mt-[10px] leading-[16px] text-center text-[12px] block'>1-minute quiz for personalized Insights</span>
                    </div>
                    <div className='max-w-[281px] md:max-w-full text-dark-gray mt-[0px] md:mt-[30px] text-[12px] leading-[14px] font-medium my-text text-center md:text-left'>
                        <p >By clicking &quot;Get Started&quot;, you agree with Terms and Conditions, Privacy Policy, Subscription Terms</p>
                        <p className='mt-[19px] md:mt-[12px] text-[10px] leading-[14px] md:leading-[12px]'>Fametonic 2025 ©All Rights Reserved.</p>
                    </div>
                </div>
            </div>
            <div className='xl:absolute right-[-107px] overflow-hidden top-[-86px]  translated-x-[50%] z-[0] mt-[-117px] md:mt-[0px]'>
                <Image className='md:block hidden w-full h-[426px] xl:w-[666px] xl:h-[679px]' src={phone} alt="Phone" width={666} height={679} quality={100} />
                {/* for phone */}
                <Image className='md:hidden block w-full h-[426px] relative z-[0] ' src={phoneMobile} alt="Phone" width={666} height={679} quality={100} />
            </div>
        </section>
    )
}

export default HeroSection 