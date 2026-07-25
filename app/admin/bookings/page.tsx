"use client";


import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import router from "next/router";


export default function AdminPage() {


  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);






  async function getBookings() {


    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", {
        ascending: false,
      });




    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }




    console.log("BOOKINGS:", data);
    setBookings(data || []);
    setLoading(false);


  }










useEffect(() => {
  async function checkUser() {
    const { data } = await supabase.auth.getUser();


    if (!data.user) {
      router.push("/admin/login");
      return;
    }


    getBookings();
  }


  checkUser();
}, []);















  async function updateStatus(
id: number, status: string, booking: any  ) {




    const { error } = await supabase
      .from("bookings")
      .update({
        status: status,
      })
      .eq("id", id);






    if (error) {


      console.error(error);
      alert(error.message);
      return;


    }




    getBookings();


  }


















  async function deleteBooking(id: number) {




    const { error } = await supabase
      .from("bookings")
      .delete()
      .eq("id", id);






    if (error) {


      console.error(error);
      alert(error.message);
      return;


    }




    getBookings();


  }


















  function statusColor(status: string) {




    if (status === "Pending") {
      return "bg-yellow-500 text-black";
    }




    if (status === "Accepted") {
      return "bg-orange-500 text-black";
    }




    if (status === "Confirmed") {
      return "bg-green-600 text-white";
    }




    if (status === "Completed") {
      return "bg-blue-600 text-white";
    }




    return "bg-gray-600 text-white";


  }


















  if (loading) {


    return (


      <main className="min-h-screen bg-gray-900 text-white p-10">


        <h1 className="text-3xl font-bold">
          Loading bookings... 🌱
        </h1>


      </main>


    );


  }


















  return (


    <main className="min-h-screen bg-gray-900 text-white p-8">




      <div className="max-w-5xl mx-auto">




        <h1 className="text-4xl font-bold text-green-400 mb-8">
          Scoggins LawnCare Admin 🌱
        </h1>










        {bookings.length === 0 ? (


          <div className="bg-gray-800 p-6 rounded-xl">


            No bookings yet.


          </div>




        ) : (




          <div className="space-y-6">




            {bookings.map((booking) => (

              





              <div


                key={booking.id}

            

                className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-xl"


              >








                <div className="flex justify-between items-center mb-5">




                  <h2 className="text-2xl font-bold text-green-400">


                    {booking.name || "No Name"}


                  </h2>






                  <span


                    className={`px-4 py-2 rounded-full font-bold ${statusColor(
                      booking.status
                    )}`}


                  >


                    {booking.status}


                  </span>




                </div>














                <div className="space-y-2 text-gray-200">




                  <p>
                    📞 {booking.phone}
                  </p>




                  <p>
                    📧 {booking.email}
                  </p>




                  <p>
                    📍 {booking.area}
                  </p>




                  <p>
                    📅 {booking.date}
                  </p>




                  <p>
                    ⏰ {booking.time}
                  </p>




                  <p>
                    🌱 Services: {booking.services}
                  </p>




                  <p>
                    📦 Package: {booking.package}
                  </p>




                  <p>
                    🌿 Yard Size: {booking.yard_size}
                  </p>




                  <p>
                    💰 Price: ${booking.price}
                  </p>




                  <p>
                    📝 Notes: {booking.notes}
                  </p>




                </div>


















                <div className="flex flex-wrap gap-3 mt-6">










                  {booking.status === "Pending" && (


                    <button


                      onClick={() =>
                        async function updateStatus(
  id: number,
  status: string,
  booking?: any
) {
  const { error } = await supabase
    .from("bookings")
    .update({
      status: status,
    })
    .eq("id", id);


  if (error) {
    console.error(error);
    alert(error.message);
    return;
  }


  if (status === "Confirmed" && booking) {
    await fetch("/api/send-confirmation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: booking.email,
        name: booking.name,
        date: booking.date,
        time: booking.time,
      }),
    });
  }


  getBookings();
}
                      }


                      className="bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-3 rounded-xl font-bold"


                    >


                      👍 Accept


                    </button>


                  )}
















                  {booking.status === "Accepted" && (


                    <button


                      onClick={() =>
                        updateStatus(
                          booking.id,
                          "Confirmed" ,
                          booking
                        )
                      }


                      className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl font-bold"


                    >


                      ✅ Confirm


                    </button>


                  )}


















                  {booking.status === "Confirmed" && (


                    <button


                      onClick={() =>
                        updateStatus(
                          booking.id,
                          "Completed",
                          booking
                        )
                      }


                      className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-bold"


                    >


                      ✔ Completed


                    </button>


                  )}


















                  <button


                    onClick={() =>
                      deleteBooking(
                        booking.id
                      )
                    }


                    className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl font-bold"


                  >


                    🗑 Delete


                  </button>










                </div>










              </div>






            ))}






          </div>






        )}






      </div>






    </main>


  );


}

