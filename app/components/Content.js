import Image from 'next/image'
import React from 'react'

const Content = () => {
    return (
        <div className=" bg-white dark:bg-black dark:border-t border-white/50">
            {/* Promotions Section */}
            <section className="relative py-14 md:py-20">
                <div className=" max-w-[1240px] mx-auto flex md:flex-row flex-col items-center justify-between gap-12 px-4 md:px-6">
                    {/* Left Content */}
                    <div className="max-w-xl space-y-4 md:space-y-5">
                        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 dark:text-white leading-tight">
                            Wir Holen Das Beste Für Euch
                        </h2>
                        <h1 className=" w-fit bg-blue-200 font-bold text-blue-800 text-sm px-4 py-1 rounded-full">
                            UPDATED 2024
                        </h1>
                        <p className="text-gray-600 dark:text-white">
                            Willkommen auf unserem Kanal! Wir achten darauf, die besten und
                            exklusivsten Casino-Boni für euch auszuhandeln.
                        </p>
                        <p className="text-gray-600 dark:text-white">
                            Egal ob ihr uns auf YouTube, Twitch oder Facebook folgt, ihr könnt
                            sicher sein, dass wir nur mit seriösen und geprüften Anbietern
                            zusammenarbeiten.
                        </p>
                        <button className="bg-[#EDB02F] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#ffc13d] transition">
                            Alle Boni
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative z-10">
                            <Image
                                src="/assets/card-two.png"
                                alt="Cards and Coins"
                                width={700}
                                className='bg-cover w-[500px] h-[300px] md:h-[500px]'
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className=" pb-14 md:pb-20">
                <div className="container mx-auto px-4 md:px-6 flex md:flex-row flex-col-reverse items-center gap-10 md:gap-16 lg:gap-20">
                    {/* Left Image */}
                    <div className="relative">
                        <div className="relative z-10">
                            <Image
                                src="/assets/card-two.png"
                                alt="Cards and Coins"
                                width={700}
                                className='bg-cover w-[500px] h-[300px] md:h-[500px]'
                                height={500}
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="max-w-xl space-y-5">
                        <h2 className="text-2xl md:text-4xl  font-extrabold text-gray-800 dark:text-white leading-tight">
                            Exklusive Gewinnspiele Für Unsere Community!
                        </h2>
                        <p className="text-gray-600 dark:text-white">
                            Wir haben noch mehr für euch! Hier bieten wir regelmäßig exklusive
                            Gewinnspiele für unsere treuen Zuschauer an.
                        </p>
                        <ul className="list-disc pl-5 space-y-3 text-gray-600 dark:text-white">
                            <li>Gewinnt coole Gadgets wie Smartphones und Fanshirts.</li>
                            <li>
                                Teilnahme über unsere Kanäle - ganz einfach, ohne Bedingungen.
                            </li>
                            <li>Bleibt dran und verpasst keine Chance!</li>
                        </ul>
                        <button className="bg-[#EDB02F] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#ffc13d] transition">
                            Gewinnspiele
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Content