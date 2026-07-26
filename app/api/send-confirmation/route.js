import { NextResponse } from "next/server";
import emailjs from "@emailjs/nodejs";




export async function POST(req) {


  try {


    const body = await req.json();


    console.log("CONFIRMATION EMAIL DATA:", body);




    await emailjs.send(
      "service_lg6901v",
      "template_g11j6w3",
      {
        email: body.email,
        name: body.name,
        date: body.date,
        time: body.time,
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
      }
    );




    return NextResponse.json({
      success: true,
    });




  } catch (error) {


    console.error("EMAIL ERROR:", error);




    return NextResponse.json(
      {
        error: "Email failed",
      },
      {
        status: 500,
      }
    );


  }


}

