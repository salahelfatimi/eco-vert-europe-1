
import { EmailTemplate } from "@/components/emailTemplateResend/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    const { fullName, phone, email, adresse ,purpose,details,budget,delai,localisation,comment,remarques} = body;
    const data = await resend.emails.send({
      from: `${fullName}<brett@eco-vert-europe.com>`,
      to: "eco.vert.europe@gmail.com",
      subject: "Un client a soumis une reserver un devis",
      react: EmailTemplate({
        fullName: fullName,
        comment: comment,
        email: email,
        phone: phone,
        adresse:adresse,
        purpose:purpose,
        details:details,
        budget:budget,
        delai:delai,
        localisation:localisation,
        remarques:remarques

       
      }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
