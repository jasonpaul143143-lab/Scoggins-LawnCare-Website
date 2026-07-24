"use client";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function BookPage() {

  const form = useRef<HTMLFormElement>(null);


  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;


    emailjs.sendForm(
      "service_lg6901v",
      "template_97ofatk",
      form.current,
      "PXndUTbCoWKnu2PEk"
    )

    .then(() => {
      alert("Booking sent! Thank you for choosing Scoggins LawnCare 🌱");

      form.current?.reset();
    })

    .catch((error) => {
      console.log(error);
      alert("Something went wrong. Please try again.");
    });

  };


  return (

    <main className="min-h-screen bg-white text-black p-10">


      <div className="max-w-xl mx-auto">


        <h1 className="text-4xl font-bold text-green-700 text-center">
          Book Scoggins LawnCare 🌱
        </h1>


        <p className="text-center mt-3">
          Choose your service, package, and preferred date.
        </p>



        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-8 space-y-5"
        >


          <input
            name="name"
            className="border border-gray-300 p-3 rounded-xl w-full"
            placeholder="Your Name"
            required
          />


          <input
            name="phone"
            className="border border-gray-300 p-3 rounded-xl w-full"
            placeholder="Phone Number"
            required
          />


          <input
            name="email"
            type="email"
            className="border border-gray-300 p-3 rounded-xl w-full"
            placeholder="Email"
            required
          />



          <label className="font-bold">
            Choose Date:
          </label>


          <input
            name="date"
            type="date"
            className="border border-gray-300 p-3 rounded-xl w-full"
            required
          />



          <label className="font-bold">
            Choose Service:
          </label>


          <select
            name="service"
            className="border border-gray-300 p-3 rounded-xl w-full"
          >

            <option>
              Lawn Mowing - Starting at $40
            </option>

            <option>
              Bush Trimming - Starting at $35
            </option>

            <option>
              Yard Cleanup - Starting at $50
            </option>

            <option>
              Grass Trimming - Starting at $25
            </option>

            <option>
              Edging - Starting at $20
            </option>

            <option>
              Seasonal Cleanup - Starting at $75
            </option>

          </select>




          <label className="font-bold">
            Choose Package:
          </label>


          <select
            name="package"
            className="border border-gray-300 p-3 rounded-xl w-full"
          >

            <option>
              Small Yard Package - Starting at $40
            </option>

            <option>
              Full Lawn Package - Starting at $75
            </option>

            <option>
              Large Yard Package - Starting at $75+
            </option>

          </select>




          <textarea
            name="message"
            className="border border-gray-300 p-3 rounded-xl w-full"
            placeholder="Tell us about your yard, address, or anything else..."
            rows={5}
          />



          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded-xl font-bold w-full"
          >
            Submit Booking
          </button>


        </form>


      </div>


    </main>

  );

}
