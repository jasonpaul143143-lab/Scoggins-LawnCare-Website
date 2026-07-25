"use client";

import Link from "next/link";

export default function Home() {

  const services = [
    "🌱 Lawn Mowing",
    "✂️ Edging",
    "⚡ Weed Eating",
    "🍃 Blowing",
    "🌳 Bush Trimming",
    "🍂 Leaf Cleanup",
    "🧹 Yard Cleanup",
  ];


  const packages = [
    {
      name: "Basic",
      price: "$35+",
      description:
        "Mowing, Edging, Weed Eating, and Blowing",
    },
    {
      name: "Full Service",
      price: "$75+",
      description:
        "Everything in Basic + Cleanup, Grass Clipping Removal, and Extra Detail Work",
    },
    {
      name: "Premium",
      price: "$100+",
      description:
        "Full Service + Detailed Bush Trimming and Yard Cleanup",
    },
  ];


  const yards = [
    {
      size: "Small",
      price: "$35",
    },
    {
      size: "Medium",
      price: "$45",
    },
    {
      size: "Large",
      price: "$60",
    },
    {
      size: "Extra Large",
      price: "$80+",
    },
  ];


  const areas = [
    "Kannapolis",
    "Granite Quarry",
    "Salisbury",
  ];


  return (

    <main className="bg-white text-black">


      {/* HERO */}

      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white px-8 py-24 text-center">


        <h1 className="text-6xl font-bold">
          Scoggins LawnCare 🌱
        </h1>


        <p className="text-2xl mt-5">
          Professional Lawn Care You Can Count On
        </p>


        <p className="mt-4 text-lg">
          Serving Kannapolis, Granite Quarry & Salisbury
        </p>


        <div className="mt-8 flex justify-center gap-4 flex-wrap">


          <Link href="/book">

            <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold">

              Book Now

            </button>

          </Link>


          <a href="#services">

            <button className="border border-white px-8 py-4 rounded-xl font-bold">

              View Services

            </button>

          </a>


        </div>


      </section>






      {/* SERVICES */}

      <section
        id="services"
        className="max-w-6xl mx-auto px-8 py-16"
      >

        <h2 className="text-4xl font-bold text-center text-green-700">

          Our Services

        </h2>


        <div className="grid md:grid-cols-3 gap-6 mt-10">


          {services.map((service)=>(

            <div
              key={service}
              className="rounded-2xl shadow-lg border p-6 hover:scale-105 transition"
            >

              <h3 className="text-xl font-bold">
                {service}
              </h3>


              <p className="mt-3 text-gray-600">
                Quality lawn care with attention to detail.
              </p>


            </div>

          ))}


        </div>


      </section>








      {/* PACKAGES */}

      <section className="bg-green-50 px-8 py-16">


        <h2 className="text-4xl font-bold text-center text-green-700">

          Service Packages

        </h2>


        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-10">


          {packages.map((pkg)=>(

            <div
              key={pkg.name}
              className="bg-white rounded-2xl shadow-lg p-8"
            >

              <h3 className="text-2xl font-bold">
                {pkg.name}
              </h3>


              <p className="text-green-700 text-3xl font-bold mt-3">
                {pkg.price}
              </p>


              <p className="mt-4">
                {pkg.description}
              </p>


            </div>

          ))}


        </div>


      </section>








      {/* YARD PRICING */}

      <section className="px-8 py-16 max-w-5xl mx-auto">


        <h2 className="text-4xl font-bold text-center text-green-700">

          Yard Size Pricing

        </h2>


        <div className="grid md:grid-cols-4 gap-5 mt-10">


          {yards.map((yard)=>(

            <div
              key={yard.size}
              className="border rounded-2xl p-6 text-center shadow"
            >

              <h3 className="font-bold text-xl">
                {yard.size}
              </h3>


              <p className="text-green-700 text-2xl font-bold mt-2">
                {yard.price}
              </p>


            </div>

          ))}


        </div>


      </section>








      {/* AREAS */}

      <section className="bg-gray-100 px-8 py-14 text-center">


        <h2 className="text-4xl font-bold text-green-700">

          Areas We Serve

        </h2>


        <div className="flex justify-center gap-5 flex-wrap mt-8">


          {areas.map((area)=>(

            <div
              key={area}
              className="bg-white px-8 py-4 rounded-xl shadow font-bold"
            >

              📍 {area}

            </div>

          ))}


        </div>


      </section>








      {/* MERCH */}

      <section className="px-8 py-16 text-center">


        <h2 className="text-4xl font-bold text-green-700">

          Scoggins LawnCare Merch 🌱

        </h2>


        <p className="text-xl mt-5">

          Coming Soon!

        </p>


        <p className="mt-3 text-gray-600">

          Official shirts, hats, hoodies, and more coming soon.

        </p>


      </section>








      {/* CTA */}

      <section className="bg-green-700 text-white px-8 py-16 text-center">


        <h2 className="text-4xl font-bold">

          Schedule Your Lawn Service 🌱

        </h2>


        <p className="mt-5 text-lg">

          Ready to get your yard looking its best?

        </p>


        <Link href="/book">

          <button className="mt-8 bg-white text-green-700 px-10 py-4 rounded-xl font-bold">

            Book Your Service

          </button>

        </Link>


      </section>








      {/* CONTACT */}

      <footer className="bg-black text-white text-center px-8 py-10">


        <h2 className="text-2xl font-bold">
          Contact Scoggins LawnCare
        </h2>


        <p className="mt-4">
          📞 704-425-1685
        </p>


        <p>
          📞 704-273-6210
        </p>


        <p>
          📧 scogginslawncarenc@gmail.com
        </p>


        <p className="mt-4">
          Facebook | Instagram | TikTok | YouTube
        </p>


        <p className="mt-6 text-gray-400">
          © 2026 Scoggins LawnCare
        </p>


      </footer>



    </main>

  );

}
