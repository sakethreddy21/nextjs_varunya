import { NextResponse } from 'next/server';
import { api } from '@/app/lib/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sub_category_id = searchParams.get('sub_category_id');

  try {
    const filters = sub_category_id ? { sub_category_id } : undefined;
    const products = await api.getProducts(filters);
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}