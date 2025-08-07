import { NextResponse } from 'next/server';
import { api } from '@/app/lib/db';

export async function GET() {
  try {
    const categories = await api.getCategories();
    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}