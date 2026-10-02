import { NextResponse } from 'next/server';

export async function GET() {
  const doctifyUrl =
    'https://www.doctify.com/webapi/en-sa/reviews/?language=ar&specialistId=78977&sort=desc&limit=200';

  try {
    const response = await fetch(doctifyUrl, {
      headers: {
        Accept: 'application/json',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      next: { revalidate: 3600 }, // Cache on server for 1 hour
    });

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: 'Failed to fetch reviews' },
        { status: response.status }
      );
    }

    const data = await response.json();
    const results = data.result || [];

    const testimonials = results
      .filter((r: any) => r.text && r.text.trim().length > 0 && r.text.trim().length < 480)
      .map((r: any) => {
        const firstKeyword = r.rating?.reasonKeywords?.[0];
        const procedure = firstKeyword?.fullName?.ar || undefined;

        return {
          id: String(r.id),
          name: 'مريض موثوق به',
          location: 'تقييم موثق عبر Doctify',
          rating: r.rating?.overallExperience || 5,
          comment: r.text.trim(),
          procedure,
          date: r.createdAt.split("T")[0],
        };
      });

    return NextResponse.json({
      success: true,
      count: testimonials.length,
      percentage: data.percentage,
      testimonials,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Failed to fetch reviews',
      },
      { status: 500 }
    );
  }
}
