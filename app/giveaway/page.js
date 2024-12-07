import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

const videoData = [
  {
    id: 1,
    title: "ENDLICH!!! Max WIN bei Gates of Olympus",
    views: "1.297 Aufrufe",
    timeAgo: "vor 2 Tagen",
    image: "/assets/video-banner.svg"
  },
  {
    id: 2,
    title: "ENDLICH!!! Max WIN bei Gates of Olympus",
    views: "1.297 Aufrufe",
    timeAgo: "vor 2 Tagen",
    image: "/assets/video-banner.svg"
  },
  {
    id: 3,
    title: "ENDLICH!!! Max WIN bei Gates of Olympus",
    views: "1.297 Aufrufe",
    timeAgo: "vor 2 Tagen",
    image: "/assets/video-banner.svg"
  },
  {
    id: 4,
    title: "ENDLICH!!! Max WIN bei Gates of Olympus",
    views: "1.297 Aufrufe",
    timeAgo: "vor 2 Tagen",
    image: "/assets/video-banner.svg"
  },
  {
    id: 5,
    title: "ENDLICH!!! Max WIN bei Gates of Olympus",
    views: "1.297 Aufrufe",
    timeAgo: "vor 2 Tagen",
    image: "/assets/video-banner.svg"
  },
  {
    id: 6,
    title: "ENDLICH!!! Max WIN bei Gates of Olympus",
    views: "1.297 Aufrufe",
    timeAgo: "vor 2 Tagen",
    image: "/assets/video-banner.svg"
  },
  {
    id: 7,
    title: "ENDLICH!!! Max WIN bei Gates of Olympus",
    views: "1.297 Aufrufe",
    timeAgo: "vor 2 Tagen",
    image: "/assets/video-banner.svg"
  },
  {
    id: 8,
    title: "ENDLICH!!! Max WIN bei Gates of Olympus",
    views: "1.297 Aufrufe",
    timeAgo: "vor 2 Tagen",
    image: "/assets/video-banner.svg"
  }
]

const GiveAWay = () => {
  return (
    <div className='w-full'>
        <Navbar/>
            <div className='py-10 md:py-20 text-center max-w-[1440px] mx-auto w-full px-4 md:px-10 lg:px-14'>
                <h2 className='text-[26px] md:text-[40px] md:leading-[50px] font-semibold text-[#2D445C]'>Unsere neuesten Youtube Videos</h2>
                <p className='text-[#8395A8] text-[14px] leading-[25px] font-normal mt-3'>Hier findest du täglich unsere neuesten Youtube Videos.  Vergiss nicht unseren Social Media Kanälen zu folgen um nichts zu verpassen</p>
                <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {videoData.map(video => (
                      <div key={video.id} className='text-left border rounded-[16px] border-[#ED902F] shadow-md hover:shadow-xl transition duration-300'>
                          <Image src={video.image} alt='video-banner' width={410} height={230} className='w-full' />
                          <h1 className='py-2 text-[#2D445C] text-base md:text-[18px] px-3 leading-[30px] tracking-[0.05em] font-semibold line-clamp-1'>{video.title}</h1>
                          <div className='flex items-center justify-between gap-3 pb-4 px-3'>
                              <h4 className='text-[#8395A8] text-[14px] tracking-[0.05em] font-semibold'>{video.views}</h4>
                              <h4 className='text-[#8395A8] text-[14px] tracking-[0.05em] font-semibold'>{video.timeAgo}</h4>
                          </div>
                      </div>
                    ))}
                </div>
            </div>
        <Footer/>
    </div>
  )
}

export default GiveAWay
