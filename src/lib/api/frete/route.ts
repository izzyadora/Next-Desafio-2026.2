import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const cepDestino = await request.json();

    const response = await fetch(
      "https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.MELHOR_ENVIO_TOKEN}`,
          "User-Agent": "MidoriCaf=e",
        },
        body: JSON.stringify({
          from: {
            postal_code: "36036900", // CEP de origem
          },
          to: {
            postal_code: cepDestino.replace(/\D/g, ""), // Remove formatação do CEP
          },
          products: [
            {
              id: "1",
              width: 15,
              height: 10,
              length: 20,
              weight: 0.5,
              insurance_value: 50.0,
              quantity: 1,
            },
          ],
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: "Erro ao cotar frete" },
        { status: response.status },
      );
    }

    const validShippingOptions = data.filter((option: any) => !option.error);

    return NextResponse.json(validShippingOptions);
  } catch (error) {
    return NextResponse.json(
      { error: "Ops, erro interno no servidor!" },
      { status: 500 },
    );
  }
}
