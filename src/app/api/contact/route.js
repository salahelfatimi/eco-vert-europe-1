import { EmailTemplate } from "@/components/emailTemplateResend/email-template-contact";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, purpose, phone ,msg } = body;
    const data = await resend.emails.send({
      from: `${fullName}<brett@eco-vert-europe.com>`,
      to: "eco.vert.europe@gmail.com",
      subject: `Objet du contact :${purpose} `,
      react: EmailTemplate({
        FullName: fullName,
        Phone: phone,
        Msg:msg
      }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
