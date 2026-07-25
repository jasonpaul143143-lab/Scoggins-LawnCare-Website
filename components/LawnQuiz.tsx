"use client";

import { useState } from "react";

export default function LawnQuiz() {

  const [step, setStep] = useState(1);

  const [service, setService] = useState("");
  const [size, setSize] = useState("");
  const [frequency, setFrequency] = useState("");

  const [price, setPrice] = useState(0);


  function calculateEstimate() {

    let estimate = 0;


    // Service price
    if (service === "mowing") {
      estimate += 35;
    }

    if (service === "cleanup") {
      estimate += 75;
    }

    if (service === "trimming") {
      estimate += 50;
    }

    if (service === "seasonal") {
      estimate += 100;
    }


    // Yard size
    if (size === "small") {
      estimate += 0;
    }

    if (size === "medium") {
      estimate += 15;
    }

    if (size === "large") {
      estimate += 30;
    }

    if (size === "acre") {
      estimate += 50;
    }


    // Frequency
    if (frequency === "weekly") {
      estimate -= 10;
    }

    if (frequency === "one-time") {
      estimate += 20;
    }


    setPrice(estimate);
    setStep(4);

  }



  return (

    <section className="py-20 bg-green-50 px-6">

      <h2 className="text-4xl font-bold text-center text-green-900">
        Get Your Lawn Estimate 🌱
      </h2>


      {step === 1 && (

        <div className="max-w-xl mx-auto mt-10">

          <h3 className="text-xl font-bold mb-5">
            What service do you need?
          </h3>


          <div className="grid gap-4">

            <button
              onClick={() => {
                setService("mowing");
                setStep(2);
              }}
              className="bg-white p-5 rounded-xl shadow hover:scale-105 transition"
            >
              🌱 Regular Mowing
            </button>


            <button
              onClick={() => {
                setService("cleanup");
                setStep(2);
              }}
              className="bg-white p-5 rounded-xl shadow hover:scale-105 transition"
            >
              🍂 Overgrown Cleanup
            </button>


            <button
              onClick={() => {
                setService("trimming");
                setStep(2);
              }}
              className="bg-white p-5 rounded-xl shadow hover:scale-105 transition"
            >
              ✂️ Bush Trimming
            </button>


            <button
              onClick={() => {
                setService("seasonal");
                setStep(2);
              }}
              className="bg-white p-5 rounded-xl shadow hover:scale-105 transition"
            >
              🍃 Seasonal Cleanup
            </button>

          </div>

        </div>

      )}



      {step === 2 && (

        <div className="max-w-xl mx-auto mt-10">

          <h3 className="text-xl font-bold mb-5">
            How big is your yard?
          </h3>


          <div className="grid gap-4">

            {[
              ["small","🟢 Small"],
              ["medium","🟡 Medium"],
              ["large","🔴 Large"],
              ["acre","🌳 Acre+"]
            ].map(([value,label]) => (

              <button
                key={value}
                onClick={()=>{
                  setSize(value);
                  setStep(3);
                }}
                className="bg-white p-5 rounded-xl shadow hover:scale-105 transition"
              >
                {label}
              </button>

            ))}

          </div>

        </div>

      )}




      {step === 3 && (

        <div className="max-w-xl mx-auto mt-10">

          <h3 className="text-xl font-bold mb-5">
            How often do you need service?
          </h3>


          <div className="grid gap-4">

            <button
              onClick={()=>{
                setFrequency("weekly");
                calculateEstimate();
              }}
              className="bg-white p-5 rounded-xl shadow hover:scale-105 transition"
            >
              📅 Weekly
            </button>


            <button
              onClick={()=>{
                setFrequency("biweekly");
                calculateEstimate();
              }}
              className="bg-white p-5 rounded-xl shadow hover:scale-105 transition"
            >
              📅 Every 2 Weeks
            </button>


            <button
              onClick={()=>{
                setFrequency("one-time");
                calculateEstimate();
              }}
              className="bg-white p-5 rounded-xl shadow hover:scale-105 transition"
            >
              🔨 One Time
            </button>

          </div>

        </div>

      )}




      {step === 4 && (

        <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-xl text-center">

          <h3 className="text-2xl font-bold">
            Your Estimated Starting Price:
          </h3>


          <p className="text-5xl font-bold text-green-700 mt-4">
            ${price}
          </p>


          <p className="mt-4 text-gray-600">
            This is an estimate. Final pricing may vary depending on your yard.
          </p>


          <a
            href="/book"
            className="inline-block mt-6 bg-green-700 text-white px-8 py-4 rounded-full font-bold"
          >
            🌱 Book This Service
          </a>


        </div>

      )}


    </section>

  );

}
