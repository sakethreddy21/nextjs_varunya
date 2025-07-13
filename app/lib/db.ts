import { Pool } from 'pg';
import { NextResponse } from 'next/server';

let pool: Pool | null = null;

export function getPool() {
  if (!pool) {
    const password = Buffer.from(process.env.DB_PASSWORD_B64 || '', 'base64').toString('utf-8');
    pool = new Pool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 5432,
      user: process.env.DB_USER,
      password,
      database: process.env.DB_NAME,
    });
  }
  return pool;
}