"use client";

import { useState } from "react";

export default function BookPage() {

  const [area, setArea] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const services = [
    "Lawn Mowing",
    "Edging",
    "Weed Eating",
    "Blowing",
    "Bush Trimming",
    "Leaf Cleanup",
    "Yard Cleanup",
  ];


  const packages = [
    {
      name: "Basic",
      price: "$35",
      description:
        "Mowing, Edging, Weed Eating, Blowing",
    },

    {
      name: "Full Service",
      price: "$75",
      description:
        "Everything in Basic, Cleanup, Grass Clipping Removal, Extra Detail Work",
    },

    {
      name: "Premium",
      price: "$100",
      description:
        "Full Service, Detailed Bush Trimming, Yard Cleanup",
    },
  ];


  const yardSizes = [
    {
      name: "Small",
      price: "$35",
    },

    {
      name: "Medium",
      price: "$45",
    },

    {
      name: "Large",
      price: "$60",
    },

    {
      name: "Extra Large",
      price: "$80+",
    },
  ];


  function getTimes() {

    if (area === "Kannapolis") {
      return [
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
      ];
    }


    if (
      area === "Granite Quarry" ||
      area === "Salisbury"
    ) {

      return [
        "4:00 PM",
        "5:00 PM",
        "6:00 PM",
        "7:00 PM",
        "8:00 PM",
      ];

    }


    return [];

  }


  function checkDate(date:string) {

    const day = new Date(date).getDay();


    // Sunday
    if(day === 0){
      alert(
        "Sunday is Planning Day. No work scheduled."
      );

      setSelectedDate("");
      return;
    }


    // Kannapolis Saturday only
    if(
      area === "Kannapolis" &&
      day !== 6
    ){

      alert(
        "Kannapolis appointments are Saturday only."
      );

      setSelectedDate("");
      return;

    }


    // GQ/Salisbury Monday-Friday
    if(
      (area === "Granite Quarry" ||
      area === "Salisbury") &&
      (day === 6 || day === 0)
    ){

      alert(
        "Granite Quarry and Salisbury are Monday-Friday only."
      );

      setSelectedDate("");
      return;

    }


    setSelectedDate(date);
  }
 return (

    <main className="min-h-screen bg-white text-black p-8">

      <div className="max-w-3xl mx-auto">


        <h1 className="text-4xl font-bold text-green-700 text-center">
          Book Scoggins LawnCare 🌱
        </h1>


        <p className="text-center mt-3">
          Pick your service, location, and schedule.
        </p>



        <form className="mt-8 space-y-6">


          {/* Customer Info */}

          <input
            className="border p-3 rounded-xl w-full"
            placeholder="Full Name"
            name="name"
            required
          />


          <input
            className="border p-3 rounded-xl w-full"
            placeholder="Phone Number"
            name="phone"
            required
          />


          <input
            className="border p-3 rounded-xl w-full"
            placeholder="Email"
            name="email"
            type="email"
            required
          />





          {/* Location */}

          <div>

            <label className="font-bold">
              Choose Your Area:
            </label>


            <select
              className="border p-3 rounded-xl w-full mt-2"
              value={area}
              onChange={(e)=> {
                setArea(e.target.value);
                setSelectedDate("");
                setSelectedTime("");
              }}

              required
            >

              <option value="">
                Select Area
              </option>


              <option>
                Kannapolis
              </option>


              <option>
                Granite Quarry
              </option>


              <option>
                Salisbury
              </option>


            </select>


          </div>





          {/* Calendar */}

          {area && (

            <div>


              <label className="font-bold">
                Choose Date:
              </label>


              <input

                type="date"

                className="border p-3 rounded-xl w-full mt-2"

                value={selectedDate}

                onChange={(e)=>checkDate(e.target.value)}

                required

              />


              <p className="text-sm mt-2">

                {area === "Kannapolis"
                ? "Kannapolis: Saturdays 10 AM - 5 PM"
                : "Granite Quarry/Salisbury: Monday-Friday 4 PM - 8 PM"}

              </p>


            </div>

          )}






          {/* Time */}

          {selectedDate && (

            <div>

              <label className="font-bold">
                Choose Time:
              </label>


              <select

                className="border p-3 rounded-xl w-full mt-2"

                value={selectedTime}

                onChange={(e)=>setSelectedTime(e.target.value)}

                required

              >

                <option value="">
                  Select Time
                </option>


                {getTimes().map((time)=>(

                  <option key={time}>
                    {time}
                  </option>

                ))}


              </select>


            </div>

          )}







          {/* Services */}

          <div>


            <label className="font-bold">
              Select Services:
            </label>


            <div className="grid md:grid-cols-2 gap-3 mt-3">


              {services.map((service)=>(


                <label
                  key={service}
                  className="border p-3 rounded-xl"
                >

                  <input

                    type="checkbox"

                    name="services"

                    value={service}

                    className="mr-2"

                  />


                  {service}


                </label>


              ))}


            </div>


          </div>







          {/* Packages */}

          <div>


            <label className="font-bold">
              Select Package:
            </label>


            <div className="space-y-3 mt-3">


              {packages.map((pkg)=>(


                <label
                  key={pkg.name}
                  className="block border p-4 rounded-xl"
                >

                  <input

                    type="radio"

                    name="package"

                    value={pkg.name}

                    className="mr-2"

                  />


                  <strong>
                    {pkg.name} - Starting at {pkg.price}
                  </strong>


                  <p className="text-sm mt-1">
                    {pkg.description}
                  </p>


                </label>


              ))}


            </div>


          </div>
         {/* Yard Size */}

          <div>

            <label className="font-bold">
              Choose Yard Size:
            </label>


            <select

              className="border p-3 rounded-xl w-full mt-2"

              name="yardSize"

              required

            >

              <option value="">
                Select Yard Size
              </option>


              {yardSizes.map((yard)=>(

                <option key={yard.name}>

                  {yard.name} - {yard.price}

                </option>

              ))}


            </select>


          </div>







          {/* Notes */}

          <textarea

            className="border p-3 rounded-xl w-full"

            name="message"

            rows={5}

            placeholder="Tell us about your yard, address, gate codes, or anything else..."

          />







          {/* Submit */}

          <button

            type="submit"

            className="bg-green-700 text-white p-4 rounded-xl w-full font-bold hover:bg-green-800"

          >

            Submit Booking 🌱

          </button>



        </form>








        {/* Hours */}

        <div className="mt-10 bg-green-100 p-6 rounded-xl">


          <h2 className="text-xl font-bold">

            Scoggins LawnCare Hours

          </h2>


          <p className="mt-2">
            Monday - Friday: 4 PM - 8 PM
          </p>


          <p>
            Saturday: 10 AM - 5 PM
          </p>


          <p>
            Sunday: Planning Day (No Work)
          </p>


        </div>





        <div className="mt-6 text-center">

  <p>
    📞 704-425-1685
  </p>

  <p>
    📞 704-273-6210
  </p>

  <p>
    📧 scogginslawncarenc@gmail.com
  </p>

  <p className="mt-2">
    Facebook | Instagram | TikTok | YouTube
  </p>

</div>




      </div>


    </main>


  );

}
