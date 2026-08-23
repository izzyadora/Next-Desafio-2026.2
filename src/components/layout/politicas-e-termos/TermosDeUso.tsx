import Link from "next/link";

export default function TermosUso() {
    return (
    <main className="bg-offwhite min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-dm-sans text-chocolate animate-fade-in">
      {/* Cabeçalho */}
      <div className="text-center space-y-2 p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-source-serif font-bold text-chocolate">
          Termos de Uso
        </h1>
        <p className="text-sm md:text-base text-militar-500 font-dm-sans">
          Última atualização: 22 de agosto de 2026
        </p>
      </div>

      <div className="font-dm-sans text-chocolate/80 max-w-3xl mx-auto mt-10 space-y-8 leading-relaxed">
        <p>
          <span className="text-2xl md:text-3xl font-source-serif font-bold text-chocolate">Bem-vindo ao Midori Café!<br/></span> O Midori Café nasceu para ser mais do que um
          lugar para tomar café. É um espaço para desacelerar, encontrar
          pessoas, trabalhar em silêncio, conversar por horas ou simplesmente
          ter alguns minutos para você. Estes Termos de Uso explicam as regras
          para utilização da nossa aplicação e dos serviços oferecidos pelo
          Midori Café. Ao acessar ou utilizar a plataforma, você declara que leu
          e concorda com estes termos.
        </p>
        <br/>
        <h2 className="text-xl md:text-2xl font-source-serif font-bold text-chocolate">1. Sobre o Midori Café</h2>
        <p>
          O Midori Café é uma cafeteria fictícia que utiliza uma aplicação
          digital para apresentar seus produtos, receber pedidos, gerenciar um
          carrinho de compras e proporcionar uma experiência simples e próxima
          aos seus clientes. A aplicação pode oferecer funcionalidades como
          criação de conta, consulta ao cardápio, seleção de produtos,
          gerenciamento do carrinho e realização de pedidos.
        </p>

        <h2 className="text-xl md:text-2xl font-source-serif font-bold text-chocolate">2. Uso da aplicação</h2>
        <p>
          Você se compromete a utilizar a aplicação de maneira responsável e de
          acordo com a legislação aplicável. Não é permitido utilizar a
          plataforma para:
        </p>
        <ul className="list-disc">
          <li>fornecer informações falsas ou se passar por outra pessoa;</li>
          <li>tentar acessar contas ou informações de outros usuários;</li>
          <li>interferir no funcionamento da aplicação;</li>
          <li>
            utilizar a plataforma para atividades ilegais ou fraudulentas;
          </li>
          <li>
            explorar vulnerabilidades, realizar ataques ou tentar obter acesso
            não autorizado aos nossos sistemas.
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-source-serif font-bold text-chocolate">3. Produtos e pedidos</h2>
        <p>
          Os produtos apresentados na aplicação estão sujeitos à
          disponibilidade. Preços, descrições, imagens e demais informações
          podem ser atualizados periodicamente para refletir alterações no
          cardápio do Midori Café. A inclusão de um produto no carrinho não
          garante sua disponibilidade até a confirmação do pedido. Caso um
          produto fique indisponível ou ocorra algum problema que impeça o
          atendimento do pedido, o Midori Café poderá entrar em contato para
          apresentar uma alternativa ou realizar o cancelamento correspondente.
        </p>

        <h2 className="text-xl md:text-2xl font-source-serif font-bold text-chocolate">4. Propriedade intelectual</h2>
        <p>
          Os elementos que compõem a experiência do Midori Café, incluindo nome,
          identidade visual, logotipo, textos, imagens, ilustrações, interfaces
          e demais materiais, pertencem ao Midori Café ou são utilizados com
          autorização. Não é permitida a reprodução, modificação, distribuição
          ou utilização comercial desses elementos sem autorização prévia.
        </p>

        <h2 className="text-xl md:text-2xl font-source-serif font-bold text-chocolate">5. Responsabilidades</h2>
        <p>
          O Midori Café busca manter a aplicação disponível e funcionando
          corretamente, mas não garante que o serviço estará livre de
          interrupções, erros ou indisponibilidades em todos os momentos. Também
          não nos responsabilizamos por problemas causados por fatores externos,
          como falhas de conexão, indisponibilidade de serviços de terceiros ou
          problemas no dispositivo utilizado para acessar a aplicação.
        </p>

        <h2 className="text-xl md:text-2xl font-source-serif font-bold text-chocolate">6. Alterações destes termos</h2>
        <p>
          Estes Termos de Uso podem ser atualizados para acompanhar mudanças na
          aplicação, nos serviços oferecidos ou na legislação aplicável. Quando
          houver alterações relevantes, a nova versão será disponibilizada nesta
          página com a respectiva data de atualização.
        </p>

        <h2 className="text-xl md:text-2xl font-source-serif font-bold text-chocolate">7. Entre em contato</h2>
        <p>
          Se você tiver alguma dúvida sobre estes termos, quiser relatar um
          problema ou simplesmente quiser conversar com a gente, entre em
          contato pelos canais oficiais do Midori Café disponíveis <Link href="/contato"><span className="text-militar-500 font-semibold underline">nessa página</span></Link>.
        </p>
      </div>
    </main>
  );
}
