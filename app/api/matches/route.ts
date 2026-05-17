import { NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch(
    'https://v3.football.api-sports.io/fixtures?date=2026-05-16',
    {
      headers: {
        'x-apisports-key': process.env.RAPIDAPI_KEY,
      },
    }
  );
  const data = await response.json();
  return NextResponse.json(data);
}