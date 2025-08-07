import { Pool } from 'pg';
import { NextResponse } from 'next/server';

let pool: Pool | null = null;

export function getPool() {
  if (!pool) {
    const password = Buffer.from(process.env.POSTGRES_PASSWORD_B64 || '', 'base64').toString('utf-8');
    pool = new Pool({
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.DB_PORT) || 5432,
      user: process.env.POSTGRES_USER,
      password:process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
    });
  }
  return pool;
}