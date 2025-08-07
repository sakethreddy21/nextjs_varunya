import { NextResponse } from 'next/server';
import { api } from '@/app/lib/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category_idParam = searchParams.get('category_id');
  const category_id = category_idParam === null ? undefined : category_idParam;

  try {
    const filters = category_id ? { category_id } : undefined;
    const subcategories = await api.getSubcategories(category_id);
    return NextResponse.json(subcategories, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}