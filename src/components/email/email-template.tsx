// Get the full source code, including the theme and Tailwind config:
// https://github.com/resend/react-email/tree/canary/apps/demo/emails

import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "react-email";
import tailwindConfig from "../tailwind.config";

interface MidoriEmailProps {
  userFirstname: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const MidoriEmail = ({
  userFirstname,
}: MidoriEmailProps) => (
  <Html>
    <Head />
    <Tailwind config={tailwindConfig}>
      <Body className="bg-white font-dm-sans">
        <Preview>
          Sua mensagem foi recebida com carinho. Em breve, falaremos com você.
        </Preview>
        <Container className="mx-auto py-5 pb-12">
          <Img
            src={'public/images/logo120x120.png'}
            width="120"
            height="120"
            alt="Midori Café"
            className="mx-auto"
          />
          <Text className="text-[16px] leading-6.5">Hi {userFirstname},</Text>
          <Text className="text-[16px] leading-6.5">
            Obrigada por entrar em contato com o Midori Café. Recebemos sua mensagem e nossa equipe irá analisá-la com atenção. 

            Em breve, retornaremos pelo e-mail informado no formulário. 

            Enquanto isso, esperamos que você aproveite um bom café. ☕🌿

          </Text>
          <Section className="text-center">
            <Button
              className="bg-militar-500 rounded-[3px] text-white text-[16px] no-underline text-center block p-3"
              href="#"
            >
              Acesse nosso site
            </Button>
          </Section>
          <Text className="text-[16px] leading-6.5">
            Atenciosamente,
            <br />
            Equipe Midori Café
          </Text>
          <Hr className="border-[#cccccc] my-5" />
          <Text className="text-militar-100 text-[12px]">
            Rua dos Ipês Verdes n°248, Jardim das Araucárias - Juiz de Fora, Minas Gerais, 36000-000
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

MidoriEmail.PreviewProps = {
  userFirstname: "Alan",
} as MidoriEmailProps;

export default MidoriEmail;
