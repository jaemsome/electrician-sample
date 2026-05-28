import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();
  const { name, phone, email, service, description } = body;

  if (!name?.trim() || !phone?.trim() || !email?.trim() || !service?.trim() || !description?.trim()) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // TODO: wire up email sending (e.g. Resend API)
  // await resend.emails.send({ from: '...', to: 'info@voltelectrics.com.au', ... });

  return NextResponse.json({ success: true });
}
