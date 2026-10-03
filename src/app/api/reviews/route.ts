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
      .filter((r: any) => r.text && r.text.trim().length > 0)
      .map((r: any) => {
        const procedures = (r.rating?.reasonKeywords || [])
          .map((k: any) => k.fullName?.ar || k.name)
          .filter(Boolean);
        const procedure = procedures[0] || undefined;

        let formattedDate = r.createdAt?.split('T')[0] || '';
        try {
          if (r.createdAt) {
            const dateObj = new Date(r.createdAt);
            formattedDate = new Intl.DateTimeFormat('ar-SA', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            }).format(dateObj);
          }
        } catch {
          // fallback to ISO date string
        }

        return {
          id: String(r.id),
          name: 'مريض موثق',
          location: 'تقييم موثق عبر Doctify',
          rating: Number(r.averageRating ?? r.rating?.overallExperience ?? 5),
          comment: r.text.trim(),
          procedure,
          procedures: procedures.length > 0 ? procedures : undefined,
          date: formattedDate,
          verified: true,
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
