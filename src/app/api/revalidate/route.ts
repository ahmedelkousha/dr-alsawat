import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { path, secret } = body;

    const expectedSecret = process.env.REVALIDATION_SECRET;

    if (!secret || secret !== expectedSecret) {
      return NextResponse.json({ message: 'رمز الحماية غير صالح' }, { status: 401 });
    }

    if (path) {
      revalidatePath(path);
    }
    revalidatePath('/blogs');

    return NextResponse.json({ revalidated: true, path: path || '/blogs', now: Date.now() });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
