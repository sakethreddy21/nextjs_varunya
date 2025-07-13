import { NextResponse } from 'next/server';

import { getPool } from '@/app/lib/db';


// GET /api/subcategories
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category_id = searchParams.get('category_id');
  const client = getPool();
  try {
    let query = 'SELECT * FROM subcategories';
    let values: string[] = [];
    if (category_id) {
      query += ' WHERE category_id = $1';
      values = [category_id];
    }
    
    const result = await client.query(query, values);
    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}