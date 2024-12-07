import React from 'react'

const Hero = () => {
    return (
        <section
            id="hero"
            className="bg-[#EDB02F] text-white py-20 px-6 text-center"
        >
            <div className="max-w-[1440px] mx-auto">
                <h1 className="text-5xl font-extrabold mb-4">MAXIM ZOCKT SLOTS</h1>
                <p className="text-lg font-medium mb-8">
                    Auf meiner Webseite findest Du exklusive Casino Bonus, riesige
                    Gewinnspiele und vieles mehr.
                </p>
                <div className="flex justify-center gap-6">
                    <button className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 shadow-lg">
                        MEHR INFOS
                    </button>
                    <button className="px-6 py-3 bg-orange-800 text-white font-semibold rounded-lg hover:bg-orange-700 shadow-lg">
                        BONUS OFFERS
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero