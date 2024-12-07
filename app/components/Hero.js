import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section
            id="hero"
            className="bg-[#EDB02F] flex items-center justify-center w-full dark:bg-black text-white py-10 md:py-20 "
        >
            <div className="max-w-[1440px] mx-auto w-full flex md:items-center md:flex-row flex-col gap-10 justify-between px-4 md:px-6 lg:px-14">
                <div className='flex-1 md:text-left'>
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4">MAXIM ZOCKT SLOTS</h1>
                <p className="text-[17px] md:text-lg font-medium mb-8 max-w-[500px] uppercase">
                    auf meiner Webseite findest du exclusive casino bonis, riesige gewinnspiele und vieles mehr.
                </p>
                <div className="flex justify-start gap-3 md:gap-6">
                    <button className="w-full md:w-fit px-6 py-3 bg-white text-black/90 font-semibold rounded-lg hover:bg-gray-100 shadow-lg">
                        MEHR INFOS
                    </button>
                    <button className="w-full md:w-fit px-6 py-3 bg-orange-800 text-white font-semibold rounded-lg hover:bg-orange-700 shadow-lg">
                        BONUS OFFERS
                    </button>
                </div>
                </div>
                <div className='flex-1 flex items-center justify-center'>
                {/* <ImageViewer3D imageUrl="/placeholder.svg?height=300&width=300&text=Casino" /> */}
                    <Image src='/assets/online-casino-3d.avif' alt='card' width={350} height={500} style={{mixBlendMode:'luminosity'}} />
                </div>
            </div>
        </section>
    )
}

export default Hero