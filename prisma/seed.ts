import { PrismaClient } from "@prisma/client";

import StockPrices from "./StockPrices.json";

/* interface Stock {
  company: string;
  v: number;
  vw: number;
  o: number;
  c: number;
  highestPriceOfTheDay: number;
  lowestPriceOfTheDay: number;
  timestamp: number;
  n: number;
} */

//const stocks = StockPrices as Stock[];

const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.stock.deleteMany();
    console.log("Deleted records in stock table");

    await prisma.$queryRaw`ALTER TABLE Stock AUTO_INCREMENT = 1`;
    console.log("Reset stock auto increment to 1");

    await prisma.stock.createMany({ data: StockPrices });
    console.log("Added stock data...");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
