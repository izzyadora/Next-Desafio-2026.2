"use server";

const MELHOR_ENVIO_API_URL =
  process.env.MELHOR_ENVIO_API_URL ??
  "https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate";

export async function calcularFreteBack(cep: string) {
  try {
    const postalCode = typeof cep === "string" ? cep.replace(/\D/g, "") : "";

    if (postalCode.length !== 8) {
      return { error: "CEP inválido. Digite 8 dígitos." };
    }

    const response = await fetch(MELHOR_ENVIO_API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MELHOR_ENVIO_TOKEN}`,
        "User-Agent": "MidoriCafe (contato@midoricafe.com.br)", // Coloque um e-mail válido cadastrado no sandbox
      },
      body: JSON.stringify({
        from: {
          postal_code: "36036900", // CEP de origem (Juiz de Fora)
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
      return { error: data?.message || "Erro ao cotar frete junto à transportadora." };
    }

    if (!Array.isArray(data)) {
      console.error("Resposta inesperada da API:", data);
      return { error: "Resposta inesperada da API de frete." };
    }

    const validShippingOptions = data.filter((option: any) => !option.error);

    return { data: validShippingOptions };
  } catch (error) {
    console.error("Erro interno na action de frete:", error);
    return { error: "Ops, erro ao se comunicar com o serviço de frete." };
  }
}