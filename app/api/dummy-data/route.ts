import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const method = searchParams.get("method");

  const generateId = () => Math.random().toString(36).substr(2, 9);

  switch (method) {
    case "esewa":
      return NextResponse.json({
        amount: "100",
        productName: "eSewa Test Product",
        transactionId: `ESEWA-${generateId()}`,
      });

    case "khalti":
      return NextResponse.json({
        amount: "200",
        productName: "Khalti Test Product",
        transactionId: `KHALTI-${generateId()}`,
      });

    default:
      return NextResponse.json(
        { error: "Invalid payment method" },
        { status: 400 }
      );
  }
}
