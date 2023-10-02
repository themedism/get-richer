import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest) {
  const stocks =
    await prisma.$queryRaw`SELECT MONTH(timestamp) as 'MONTH', AVG( (highestPriceOfTheDay + lowestPriceOfTheDay) / 2) as 'AVG', company as 'COMPANY' FROM Stock WHERE company IN ('GOOGLE', 'AMAZON') AND YEAR(timestamp) = 2022 GROUP BY company, MONTH(timestamp) ORDER BY MONTH(timestamp)`;

  return NextResponse.json(stocks);
}
