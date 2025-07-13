
import { NextResponse } from 'next/server';

import { getPool } from '@/app/lib/db';

export async function GET() {
  try {
    const client = getPool();
    const result = await client.query('SELECT * FROM categories');
    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
