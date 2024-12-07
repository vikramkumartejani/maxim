"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
    <Hero/>

      {/* Info Section 1 */}
      {/* <section id="bonus-offers" className="py-16 px-6 bg-white text-gray-800">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Wir Holen Das Beste Für Euch
            </h2>
            <p className="text-lg mb-4">
              Hier findet Ihr exklusive Casino Bonus! Willkommen auf unserer
              Seite, wo wir darauf achten, die besten und exklusivsten
              Casino-Boni für euch auszuwählen.
            </p>
            <button className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 shadow-lg">
              ALLE BONI
            </button>
          </div>
          <div className="relative">
            <Image
              src="/images/cards-stack.png"
              alt="Cards and Chips"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section> */}

      {/* Info Section 2 */}
      {/* <section
        id="giveaway"
        className="py-16 px-6 bg-gradient-to-l from-yellow-200 to-white"
      >
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="relative order-2 lg:order-1">
            <Image
              src="/images/cards-stack.png"
              alt="Cards and Chips"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold mb-4">
              Exklusive Gewinnspiele Für Unsere Community!
            </h2>
            <p className="text-lg mb-4">
              Wir haben noch mehr für euch! Tolle Gewinne wie Smartphones,
              Fernseher und andere spannende Belohnungen.
            </p>
            <button className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 shadow-lg">
              GEWINNSPIELE
            </button>
          </div>
        </div>
      </section> */}

      {/* Content Section */}
      {/* <section id="content" className="py-16 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Unser Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-gray-100 rounded-lg shadow-lg p-6 text-center"
              >
                <Image
                  src={`/images/content-${item}.png`}
                  alt={`Content ${item}`}
                  width={300}
                  height={300}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Content {item}</h3>
                <p className="text-gray-700">
                  Spannende Inhalte, die unsere Community lieben wird.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {/* Column 1 */}
          <div>
            <h4 className="text-lg font-bold mb-4">MaximZocktSlots</h4>
            <p className="text-sm text-gray-300">
              Exklusive Bonusangebote und Gewinnspiele – alles an einem Ort.
            </p>
          </div>
          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-bold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-yellow-300 text-sm">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#bonus-offers"
                  className="hover:text-yellow-300 text-sm"
                >
                  Bonus Offers
                </a>
              </li>
              <li>
                <a href="#giveaway" className="hover:text-yellow-300 text-sm">
                  Giveaway
                </a>
              </li>
              <li>
                <a href="#content" className="hover:text-yellow-300 text-sm">
                  Content
                </a>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-bold mb-4">Kontakt</h4>
            <p className="text-sm text-gray-300">
              Für Hilfe bei Spielproblemen:
            </p>
            <a
              href="tel:0800100101"
              className="text-yellow-300 hover:text-yellow-400 text-sm block mt-2"
            >
              0800 100 101
            </a>
            <p className="text-sm text-gray-300 mt-4">
              E-Mail:{" "}
              <a
                href="mailto:support@maximzockt.com"
                className="text-yellow-300 hover:text-yellow-400"
              >
                support@maximzockt.com
              </a>
            </p>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-gray-400">
          © 2024 MaximZocktSlots.com | All rights reserved
        </div>
      </footer>
    </div>
  );
}
