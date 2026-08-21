import { MidoriEmail } from '@/src/components/email/email-template';
import {FormValue} from '@/src/schema/form';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request): Promise<Response> {
  try {
    const body: FormValue = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      react: MidoriEmail({ userFirstname: 'John' }) as React.ReactElement, 
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data }, {status: 200});
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}