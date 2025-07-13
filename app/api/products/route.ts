import { NextResponse } from 'next/server';

// Database connection configuration
import { getPool } from '@/app/lib/db';

// GET /api/products
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sub_category_id = searchParams.get('sub_category_id');

  try {
    const client = getPool();
    let query = `
      SELECT p.*, s.subcategory_name, c.category_name
      FROM products p
      JOIN subcategories s ON p.sub_category_id = s.id
      JOIN categories c ON s.category_id = c.id
    `;
    let values: string[] = [];
    if (sub_category_id) {
      query += ' WHERE p.sub_category_id = $1';
      values = [sub_category_id];
    }

    const result = await client.query(query, values);
    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}