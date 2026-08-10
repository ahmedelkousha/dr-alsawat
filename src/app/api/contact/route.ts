import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "يرجى كتابة الاسم الكامل بشكل صحيح." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      return NextResponse.json(
        { success: false, message: "يرجى أدخال رقم هاتف صحيح للمتابعة." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, message: "يرجى إضافة نص الرسالة أو الاستفسار." },
        { status: 400 }
      );
    }

    // Optional email regex validation if provided
    if (email && email.trim() !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { success: false, message: "صيغة البريد الإلكتروني غير صحيحة." },
          { status: 400 }
        );
      }
    }

    // Stubbing successful POST endpoint
    console.log("New contact submission received:", {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "تم إستلام طلبك بنجاح! سيتواصل معك فريق عيادة د. عبدالله الصواط قريباً.",
    });
  } catch (error) {
    console.error("API contact error:", error);
    return NextResponse.json(
      { success: false, message: "حدث خطأ غير متوقع في الخادم." },
      { status: 500 }
    );
  }
}
