// import { EmailTemplate } from "../../../components/email-template";
// import { Resend } from "resend";

// const resend = new Resend(process.env.EMAIL_SERVER_PASSWORD);

// export async function POST() {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: "Acme <onboarding@resend.dev>",
//       to: ["delivered@resend.dev"],
//       subject: "Hello world",
//       react: EmailTemplate(),
//     });

//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }
