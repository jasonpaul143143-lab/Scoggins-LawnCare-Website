import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req) {
  const { email, name, date, time } = await req.json();


  try {
    await resend.emails.send({
      from: "Scoggins LawnCare <onboarding@resend.dev>",
      to: email,
      subject: "Booking Confirmed!",
      html: `
        <h2>Hey ${name}!</h2>
        <p>Your Scoggins LawnCare booking has been confirmed ✅</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Time:</b> ${time}</p>
        <p>Thanks for choosing us!</p>
      `,
    });


    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

