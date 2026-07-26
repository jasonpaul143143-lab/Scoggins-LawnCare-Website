"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { supabase } from "@/lib/supabase";

export default function BookPage() {


  const [area, setArea] = useState("");

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [selectedTime, setSelectedTime] = useState("");

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const [showedBundlePopup, setShowBundlePopup] = useState(false);

const [estimatedPrice, setEstimatedPrice] = useState(0);

  const [selectedPackage, setSelectedPackage] = useState("");

  const [suggestedPackage, setSuggestedPackage] = useState("");

  const [yardSize, setYardSize] = useState("");

  const [notes, setNotes] = useState("");

useEffect(() => {
  calculatePrice();
}, [selectedPackage, yardSize, selectedServices]);


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
      price: "$35+",
      description:
        "Mowing, Edging, Weed Eating, Blowing",
    },

    {
      name: "Full Service",
      price: "$75+",
      description:
        "Everything in Basic, Cleanup, Grass Clipping Removal, Extra Detail Work",
    },

    {
      name: "Premium",
      price: "$100+",
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

  let times = [];

  let startHour = 0;
  let endHour = 0;


  // Kannapolis: 10 AM - 5 PM
  if (area === "Kannapolis") {
    startHour = 10;
    endHour = 17;
  }


  // Granite Quarry + Salisbury: 4 PM - 8 PM
  if (
    area === "Granite Quarry" ||
    area === "Salisbury"
  ) {
    startHour = 16;
    endHour = 20;
  }



  for (
    let hour = startHour;
    hour <= endHour;
    hour++
  ) {

    for (
      let minute = 0;
      minute < 60;
      minute += 5
    ) {


      // Don't go past closing time
      if (
        hour === endHour &&
        minute > 0
      ) {
        break;
      }


      const formattedHour =
        hour > 12 ? hour - 12 : hour;


      const ampm =
        hour >= 12 ? "PM" : "AM";


      const formattedMinute =
        minute.toString().padStart(2, "0");


      times.push(
        `${formattedHour}:${formattedMinute} ${ampm}`
      );

    }

  }


  return times;

}






  function isDateAvailable(date: Date) {


    const day = date.getDay();



    // Sunday = no work

    if (day === 0) {

      return false;

    }



    // Kannapolis = Saturday only

    if (area === "Kannapolis") {

      return day === 6;

    }




    // Granite Quarry + Salisbury = Monday-Friday

    if (
      area === "Granite Quarry" ||
      area === "Salisbury"
    ) {

      return day >= 1 && day <= 5;

    }



    return false;

  }
 function sendEmail(e: React.FormEvent<HTMLFormElement>) {
  

    e.preventDefault();

    const form = e.currentTarget;

    emailjs
      .sendForm(

        "service_lg6901v",

        "template_97ofatk",

        form,

        {
          publicKey: "PXndUTbCoWKnu2PEk",
        }

      )

     .then(async () => {


  const formData = new FormData(form);


const result = await supabase
  .from("bookings")
  .insert({
    name: formData.get("name")?.toString() || "",
    email: formData.get("email")?.toString() || "",
    phone: formData.get("phone")?.toString() || "",
    area,
    date: selectedDate?.toLocaleDateString() || "",
    time: selectedTime,
    services: selectedServices.join(", "),
    package: selectedPackage,
    yard_size: yardSize,
    price: estimatedPrice,
    notes: formData.get("message")?.toString() || "",
    status: "Pending",
  })
  .select();


console.log("INSERT RESULT:", result);




if (result.error) {
  throw result.error;
}



  alert("Booking request sent successfully! 🌱");


})

      .catch((error) => {

        console.error("ERROR:", error);

        alert(error.message);

      });


  }





function checkForBundle(serviceList: string[]) {

  const packages = [
    {
      name: "Basic",
      services: [
        "Lawn Mowing",
        "Edging",
        "Weed Eating",
        "Blowing"
      ]
    },
    {
      name: "Full Service",
      services: [
        "Lawn Mowing",
        "Edging",
        "Weed Eating",
        "Blowing",
        "Cleanup",
        "Grass Clipping Removal",
        "Extra Detail Work"
      ]
    },
    {
      name: "Premium",
      services: [
        "Lawn Mowing",
        "Edging",
        "Weed Eating",
        "Blowing",
        "Cleanup",
        "Grass Clipping Removal",
        "Extra Detail Work",
        "Bush Trimming",
        "Yard Cleanup"
      ]
    }
  ];


  const matchingPackage = packages.find(pkg =>
    pkg.services.every(service =>
      serviceList.includes(service)
    )
  );


  if (matchingPackage) {
    setShowBundlePopup(true);
    setSuggestedPackage(matchingPackage.name);
  }

}

function calculatePrice() {


  let price = 0;




  // Packages
  if (selectedPackage === "Basic") {
    price += 35;
  }


  if (selectedPackage === "Full Service") {
    price += 75;
  }


  if (selectedPackage === "Premium") {
    price += 100;
  }






  // Individual Services
  if (!selectedPackage) {


    selectedServices.forEach((service) => {




      if (service === "Lawn Mowing") {
        price += 35;
      }




      if (service === "Edging") {
        price += 10;
      }




      if (service === "Weed Eating") {
        price += 10;
      }




      if (service === "Blowing") {
        price += 10;
      }




      if (service === "Bush Trimming") {
        price += 25;
      }




      if (service === "Leaf Cleanup") {
        price += 40;
      }




      if (service === "Yard Cleanup") {
        price += 50;
      }




    });


  }








  // Yard size minimum pricing


  if (yardSize === "Small") {
    price = Math.max(price, 35);
  }




  if (yardSize === "Medium") {
    price = Math.max(price, 45);
  }




  if (yardSize === "Large") {
    price = Math.max(price, 60);
  }




  if (yardSize === "Extra Large") {
    price = Math.max(price, 80);
  }






  setEstimatedPrice(price);


}


  return (

    <main className="min-h-screen bg-white text-black p-8">


      <div className="max-w-3xl mx-auto">
        



        <h1 className="text-4xl font-bold text-green-700 text-center">

          Book Scoggins LawnCare 🌱

        </h1>



        <p className="text-center mt-3">

          Choose your service, location, date, and time.

        </p>





        <form

          className="mt-8 space-y-6"

          onSubmit={sendEmail}

        >
  
  <input
    type="hidden"
    name="date"
    value={
      selectedDate
        ? selectedDate.toLocaleDateString()
        : ""
    }
  />
 





          {/* Customer Info */}


          <input

            className="border p-3 rounded-xl w-full"

            name="name"

            placeholder="Full Name"

            required

          />



          <input

            className="border p-3 rounded-xl w-full"

            name="phone"

            placeholder="Phone Number"

            required

          />



          <input

            className="border p-3 rounded-xl w-full"

            name="email"

            type="email"

            placeholder="Email"

            required

          />







          {/* Area */}


          <div>


            <label className="font-bold">

              Choose Your Area:

            </label>



            <select

              className="border p-3 rounded-xl w-full mt-2"

              name="area"

              value={area}

              onChange={(e)=>{

                setArea(e.target.value);

                setSelectedDate(null);

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

                Choose Available Date:

              </label>



              <DatePicker

                selected={selectedDate}

                onChange={(date: Date | null)=>{

                  setSelectedDate(date);

                  setSelectedTime("");

                }}

                filterDate={isDateAvailable}

                minDate={new Date()}

                placeholderText="Select a date"

                className="border p-3 rounded-xl w-full mt-2"

                required

              />



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

                name="time"

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

                    checked={selectedServices.includes(service)}

                    onChange={(e)=>{
    let updatedServices;
    if(e.target.checked){
      updatedServices = [
        ...selectedServices,
        service
      ];
    } else {
      updatedServices =
        selectedServices.filter(
          (item: string) => item !== service
        );
    }
    setSelectedServices(updatedServices);
    checkForBundle(updatedServices);
  }}

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

checked={selectedPackage === pkg.name}

                    onChange={() => setSelectedPackage(pkg.name)}
                  />



                  <strong>

                    {pkg.name} - {pkg.price}

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
  value={yardSize}
  onChange={(e)=>setYardSize(e.target.value)}
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

<div className="bg-green-100 p-4 rounded-xl">

<h2 className="font-bold text-lg">
Estimated Starting Price
</h2>

<p className="text-3xl font-bold">
${estimatedPrice}
</p>

</div>


          <button

            type="submit"

            className="bg-green-700 text-white p-4 rounded-xl w-full font-bold hover:bg-green-800"

          >

            Submit Booking 🌱

          </button>



        </form>








        {/* Business Info */}


        <div className="mt-10 bg-green-100 p-6 rounded-xl">


          <h2 className="text-xl font-bold">

            Scoggins LawnCare Hours

          </h2>



          <p>

            Monday-Friday: 4 PM - 8 PM

          </p>



          <p>

            Saturday: 10 AM - 5 PM

          </p>



          <p>

            Sunday: Planning Day (No Work)

          </p>


        </div>








        {/* Contact */}


        <div className="mt-8 text-center">


          <p>

            📞 704-425-1685

          </p>



          <p>

            📞 704-273-6210

          </p>



          <p>

            📧 scogginslawncarenc@gmail.com

          </p>



          <p className="mt-3">

            Facebook | Instagram | TikTok | YouTube

          </p>


        </div>




      </div>

{showedBundlePopup && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-5">

    <div className="bg-white rounded-xl p-6 max-w-md">

      <h2 className="text-xl font-bold">
        Save Time & Money? 🌱
      </h2>

      <p>
        These services match one of our packages.
        Would you like the bundle instead?
      </p>

      <div className="flex gap-3">

        <button
          type="button"
          onClick={() => {
            setSelectedServices([]);

            setSelectedPackage(suggestedPackage);

            setShowBundlePopup(false);
        
          }} 
            >
          Yes, choose bundle
        </button>

        <button
          type="button"
          onClick={() => setShowBundlePopup(false)}
        >
          No thanks
        </button>

      </div>

    </div>

  </div>
)}
</main>
);
}

