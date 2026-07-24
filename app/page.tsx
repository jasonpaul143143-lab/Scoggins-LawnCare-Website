import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="bg-green-700 text-white p-10 text-center">

        <h1 className="text-5xl font-bold">
          Scoggins LawnCare
        </h1>

        <p className="text-2xl mt-4">
          You Grow It, We Mow It 🌱
        </p>

        <p className="mt-3">
          Serving Kannapolis, Salisbury & Granite Quarry, NC
        </p>


        <Link href="/book">
          <button className="mt-6 bg-white text-green-700 px-6 py-3 rounded-xl font-bold">
            Book Now
          </button>
        </Link>

      </section>



      {/* SERVICES */}
      <section className="p-10">

        <h2 className="text-3xl font-bold text-green-700">
          Services & Pricing 🌱
        </h2>


        <div className="grid md:grid-cols-3 gap-5 mt-5">


          <div className="border p-5 rounded-xl">
            <h3 className="font-bold text-xl">
              Lawn Mowing
            </h3>
            <p>
              Starting at $40
            </p>
            <p>
              Mowing, edging, trimming, and cleanup.
            </p>
          </div>


          <div className="border p-5 rounded-xl">
            <h3 className="font-bold text-xl">
              Full Lawn Package ⭐
            </h3>
            <p>
              Starting at $75
            </p>
            <p>
              Complete lawn care service.
            </p>
          </div>


          <div className="border p-5 rounded-xl">
            <h3 className="font-bold text-xl">
              Bush Trimming ✂️
            </h3>
            <p>
              Starting at $35
            </p>
          </div>


          <div className="border p-5 rounded-xl">
            <h3 className="font-bold text-xl">
              Yard Cleanup 🍂
            </h3>
            <p>
              Starting at $50
            </p>
          </div>


          <div className="border p-5 rounded-xl">
            <h3 className="font-bold text-xl">
              Grass Trimming
            </h3>
            <p>
              Starting at $25
            </p>
          </div>


          <div className="border p-5 rounded-xl">
            <h3 className="font-bold text-xl">
              Edging
            </h3>
            <p>
              Starting at $20
            </p>
          </div>


          <div className="border p-5 rounded-xl">
            <h3 className="font-bold text-xl">
              Seasonal Cleanup
            </h3>
            <p>
              Starting at $75
            </p>
          </div>


          <div className="border p-5 rounded-xl">
            <h3 className="font-bold text-xl">
              Small Yard Package
            </h3>
            <p>
              Starting at $40
            </p>
          </div>


          <div className="border p-5 rounded-xl">
            <h3 className="font-bold text-xl">
              Large Yard Package
            </h3>
            <p>
              Starting at $75+
            </p>
          </div>


        </div>

      </section>




      {/* SPECIAL OFFERS */}
      <section className="bg-green-100 p-10">

        <h2 className="text-3xl font-bold text-green-700">
          Special Offers 🔥
        </h2>


        <ul className="mt-4 list-disc ml-6">

          <li>
            Referral Discount — Refer a friend and save
          </li>

          <li>
            Senior Discount Available
          </li>

          <li>
            Military Discount Available
          </li>

          <li>
            Seasonal Deals
          </li>

        </ul>

      </section>




      {/* SHOP */}
      <section className="p-10">

        <h2 className="text-3xl font-bold text-green-700">
          Shop 🛒
        </h2>

        <p className="mt-3">
          Scoggins LawnCare merch coming soon:
        </p>


        <ul className="list-disc ml-6 mt-3">

          <li>
            Shirts
          </li>

          <li>
            Hats
          </li>

          <li>
            Stickers
          </li>

          <li>
            Work Gear
          </li>

        </ul>

      </section>




      {/* BOOKING */}
      <section className="bg-gray-100 p-10 text-center">

        <h2 className="text-3xl font-bold">
          Ready To Book?
        </h2>


        <p className="mt-3">
          Schedule your lawn service today.
        </p>


        <Link href="/book">

          <button className="mt-5 bg-green-700 text-white px-6 py-3 rounded-xl font-bold">
            Request A Quote
          </button>

        </Link>

      </section>




      {/* CONTACT */}
      <section className="bg-black text-white p-10">


        <h2 className="text-3xl font-bold">
          Contact Us 📞
        </h2>


        <p className="mt-3">
          📞 704-273-6210
        </p>


        <p>
          📞 704-425-1685
        </p>


        <p className="mt-3">
          📧 scogginslawncarenc@gmail.com
        </p>


        <p>
          📸 Instagram: @ScogginsLawnCareNC
        </p>


        <p>
          🎵 TikTok: @ScogginsLawnCareNC
        </p>


        <p>
          👍 Facebook: Scoggins LawnCare NC
        </p>


        <p>
          ▶️ YouTube: @ScogginsLawnCareNC
        </p>


      </section>


    </main>
  );
}
