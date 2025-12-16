import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = 60;

const mockNews = [
  {
    id: "1",
    title: "Product launch announcement",
    date: "2025-01-10",
    category: "Product",
  },
  {
    id: "2",
    title: "Company receives industry recognition",
    date: "2025-02-03",
    category: "Press",
  },
  {
    id: "3",
    title: "Upcoming webinar for enterprise customers",
    date: "2025-03-18",
    category: "Event",
  },
];

export async function GET() {
  return NextResponse.json({
    items: mockNews,
  });
}

