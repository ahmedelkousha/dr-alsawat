import { NextRequest, NextResponse } from 'next/server';

// Set this in your .env.local file:
// GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/XXXXXXXXXXXX/exec
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== 'string' || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'البريد الإلكتروني غير صالح' },
        { status: 400 }
      );
    }

    if (!GOOGLE_SCRIPT_URL) {
      console.error('GOOGLE_SCRIPT_URL is not set in environment variables');
      return NextResponse.json(
        { success: false, message: 'حدث خطأ في الخادم' },
        { status: 500 }
      );
    }

    const scriptRes = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // Apps Script web apps redirect on POST; follow: 'follow' is default but explicit here
      redirect: 'follow',
      body: JSON.stringify({ email: email.trim().toLowerCase() }),
    });

    const data = await scriptRes.json();

    if (data.status === 'duplicate') {
      return NextResponse.json(
        { success: false, message: 'هذا البريد الإلكتروني مشترك بالفعل' },
        { status: 409 }
      );
    }

    if (data.status === 'success') {
      return NextResponse.json({ success: true, message: 'تم الاشتراك بنجاح' });
    }

    // Any unexpected status from the script
    console.error('Unexpected Apps Script response:', data);
    return NextResponse.json(
      { success: false, message: 'حدث خطأ أثناء الاشتراك' },
      { status: 502 }
    );
  } catch (err) {
    console.error('Subscription route error:', err);
    return NextResponse.json(
      { success: false, message: 'حدث خطأ في الخادم' },
      { status: 500 }
    );
  }
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}