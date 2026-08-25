import Link from "next/link";
export default function PoliticaPrivacidade() {
  return (
    <main className="bg-offwhite min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-dm-sans text-chocolate animate-fade-in">
      {/* Cabeçalho */}
      <div className="text-center space-y-2 p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-source-serif font-bold text-chocolate">
          Política de Privacidade
        </h1>
        <p className="text-sm md:text-base text-militar-500 font-dm-sans">
          Última atualização: 22 de agosto de 2026
        </p>
      </div>

      <div className="font-dm-sans text-chocolate/80 max-w-3xl mx-auto mt-10 space-y-8 leading-relaxed">
        <span className="text-xl md:text-2xl font-source-serif font-bold text-chocolate">
          No Midori Café, acreditamos que uma boa experiência começa pela
          confiança.
          <br />
        </span>{" "}
        <p>
          Quando você utiliza nossa aplicação, algumas informações podem ser
          necessárias para que possamos oferecer nossos serviços. Esta Política
          de Privacidade explica quais dados podemos coletar, por que eles são
          utilizados e como procuramos protegê-los. Queremos que você saiba o
          que acontece com seus dados — sem letras pequenas e sem complicar o
          que pode ser explicado de forma simples.
        </p>
        <br />
        <h2 className="text-xl md:text-2xl font-source-serif font-bold text-chocolate">
          1. Quais informações podemos coletar?
        </h2>
        <p>
          Dependendo de como você utiliza a aplicação, podemos coletar
          informações como:
        </p>
        <div className="px-4">
          <ul className="list-disc">
            <li>nome;</li>
            <li>endereço de e-mail;</li>
            <li>informações necessárias para autenticação da conta;</li>
            <li>informações relacionadas aos seus pedidos;</li>
            <li>produtos adicionados ao carrinho;</li>
            <li>informações fornecidas voluntariamente por você;</li>
            <li>
              informações técnicas necessárias para o funcionamento e a
              segurança da aplicação.
            </li>
          </ul>
        </div>
        <p>
          Não coletamos informações além daquelas necessárias para oferecer,
          manter e melhorar nossos serviços.
        </p>
        <h2 className="text-xl md:text-2xl font-source-serif font-bold text-chocolate">
          2. Como utilizamos seus dados?
        </h2>
        <p>As informações coletadas podem ser utilizadas para:</p>
        <div className="px-4">
          <ul className="list-disc">
            <li>criar e administrar sua conta;</li>
            <li>permitir que você realize pedidos;</li>
            <li>manter e atualizar seu carrinho;</li>
            <li>processar e acompanhar pedidos;</li>
            <li>responder às suas solicitações;</li>
            <li>melhorar a experiência dentro da aplicação;</li>
            <li>
              identificar e prevenir atividades fraudulentas ou não autorizadas;
            </li>
            <li>manter a segurança e o funcionamento dos nossos sistemas.</li>
          </ul>
        </div>
        <p>
          Não utilizamos seus dados para finalidades incompatíveis com aquelas
          apresentadas nesta política.
        </p>
        <h2 className="text-xl md:text-2xl font-source-serif font-bold text-chocolate">
          3. Compartilhamento de informações
        </h2>
        <p>O Midori Café não comercializa seus dados pessoais.</p>
        <p>
          Em determinadas situações, informações poderão ser compartilhadas com
          prestadores de serviços necessários para o funcionamento da aplicação,
          como serviços de hospedagem, infraestrutura, autenticação ou
          processamento de pagamentos.
          Quando isso acontecer, buscamos limitar o compartilhamento às
          informações necessárias para a execução do serviço.
        </p>
        <h2 className="text-xl md:text-2xl font-source-serif font-bold text-chocolate">
          4. Segurança
        </h2>
        <p>
          Adotamos medidas técnicas e organizacionais destinadas a proteger as
          informações armazenadas em nossa aplicação contra acesso não
          autorizado, alteração, divulgação ou destruição indevida.
          Apesar dos cuidados adotados, nenhum sistema conectado à internet pode
          ser considerado completamente livre de riscos.
          Por isso, também recomendamos que você mantenha suas credenciais de
          acesso em segurança e não compartilhe sua senha com outras pessoas.
        </p>
        <h2 className="text-xl md:text-2xl font-source-serif font-bold text-chocolate">
          5. Cookies e tecnologias semelhantes
        </h2>
        <p>
          A aplicação poderá utilizar cookies e tecnologias semelhantes para
          manter sessões, lembrar determinadas preferências e compreender como
          os usuários interagem com a plataforma.
          Essas tecnologias têm como objetivo contribuir para o funcionamento e
          a melhoria da experiência do usuário.
        </p>
        <h2 className="text-xl md:text-2xl font-source-serif font-bold text-chocolate">
          6. Seus direitos
        </h2>
        <p>
          Você pode solicitar informações sobre o tratamento dos seus dados
          pessoais e, quando aplicável, solicitar a correção, atualização ou
          exclusão dessas informações.
          Também poderá solicitar esclarecimentos sobre a forma como seus dados
          são utilizados.
          As solicitações serão analisadas de acordo com a legislação aplicável
          e com as limitações técnicas e legais existentes.
        </p>
        <h2 className="text-xl md:text-2xl font-source-serif font-bold text-chocolate">
          7. Dados de menores
        </h2>
        <p>
          A aplicação não é direcionada especificamente a crianças.
          Caso identifiquemos que dados pessoais foram fornecidos de maneira
          inadequada por uma criança, poderemos tomar medidas para removê-los de
          nossos sistemas, observadas as obrigações legais aplicáveis.
        </p>
        <h2 className="text-xl md:text-2xl font-source-serif font-bold text-chocolate">
          8. Alterações nesta política
        </h2>
        <p>
          Esta Política de Privacidade poderá ser atualizada ao longo do tempo
          para refletir mudanças na aplicação, nos nossos serviços ou na
          legislação.
          A data apresentada no início desta página indica quando a versão mais
          recente foi publicada.
        </p>
        <h2 className="text-xl md:text-2xl font-source-serif font-bold text-chocolate">
          9. Fale com a gente
        </h2>
        <p>
          Privacidade pode parecer um assunto distante, mas para nós ela faz
          parte da mesma ideia que guia o Midori Café: cuidar das pessoas que
          escolhem passar um pouco do seu tempo com a gente.
          Se você tiver dúvidas sobre esta política ou sobre o uso dos seus
          dados, entre em contato pelos canais oficiais do Midori Café
          disponíveis{" "}
          <Link href="/contato">
            <span className="text-militar-500 font-semibold underline">
              nessa página
            </span>
          </Link>
        </p>
      </div>
    </main>
  );
}
