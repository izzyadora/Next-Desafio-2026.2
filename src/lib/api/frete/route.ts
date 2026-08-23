import { NextResponse } from "next/server";

const MELHOR_ENVIO_API_URL =
  process.env.MELHOR_ENVIO_API_URL ??
  "https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate";

export async function POST(request: Request) {
  try {
    const { cep } = await request.json();
    const postalCode = typeof cep === "string" ? cep.replace(/\D/g, "") : "";

    if (postalCode.length !== 8) {
      return NextResponse.json({ error: "CEP inválido" }, { status: 400 });
    }

    const response = await fetch(MELHOR_ENVIO_API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MELHOR_ENVIO_TOKEN}`,
        "User-Agent": "MidoriCafe (seuemail@dominio.com)",
      },
      body: JSON.stringify({
        from: {
          postal_code: "36036900", // CEP de origem
        },
        to: {
          postal_code: postalCode,
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
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Erro Melhor Envio:", data);
      return NextResponse.json(
        { error: "Erro ao cotar frete" },
        { status: response.status },
      );
    }

    if (!Array.isArray(data)) {
      console.error("Resposta inesperada da API:", data);
      return NextResponse.json(
        { error: "Resposta inesperada da API de frete" },
        { status: 502 },
      );
    }

    const validShippingOptions = data.filter((option: any) => !option.error);

    return NextResponse.json(validShippingOptions);
  } catch (error) {
    console.error("Erro interno na rota de frete:", error);
    return NextResponse.json(
      { error: "Ops, erro interno no servidor!" },
      { status: 500 },
    );
  }
}
