'use client';
import React from 'react';
import { 
  FaInstagram, 
  FaFacebookF, 
  FaWhatsapp, 
  FaTiktok, 
  FaPinterestP, 
  FaPaperPlane 
} from 'react-icons/fa';

export default function ContatoPage() {
  return (
    <section className="bg-offwhite min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-dm-sans text-chocolate">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Cabeçalho */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-source-serif font-bold text-chocolate">
            Entre em contato com a gente!
          </h1>
          <p className="text-sm md:text-base text-militar-500 font-dm-sans">
            lorem ipsum dolor sit amet
          </p>
        </div>

        {/* Formulário + Redes Sociais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          <div className="bg-creme border border-chocolate/20 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-source-serif font-bold text-center mb-6">
              Envie sua mensagem
            </h2>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Nome completo
                </label>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  className="w-full bg-white border border-chocolate/30 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-chocolate transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="seu.email@email.com"
                  className="w-full bg-white border border-chocolate/30 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-chocolate transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Assunto
                </label>
                <input
                  type="text"
                  placeholder="Digite o assunto..."
                  className="w-full bg-white border border-chocolate/30 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-chocolate transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Sua mensagem
                </label>
                <textarea
                  rows={4}
                  placeholder="Digite sua mensagem..."
                  className="w-full bg-white border border-chocolate/30 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-chocolate transition-colors resize-none"
                />
              </div>

              <button
                type="button"
                className="w-full bg-chocolate hover:bg-militar-500 text-white font-medium py-3 rounded-full flex items-center justify-center gap-2 transition-colors mt-2 text-sm"
              >
                <FaPaperPlane className="text-xs" /> Enviar
              </button>
            </form>
          </div>

          {/* Card: Redes Sociais */}
          <div className="bg-creme border border-[#2d221c]/20 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-source-serif font-bold text-center mb-6">
              Nossas redes
            </h2>

            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center gap-4 bg-white border border-[#2d221c]/30 rounded-2xl p-3 px-5 text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <FaInstagram className="text-2xl text-[#2d221c]" />
                <span>@midoricafe</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 bg-white border border-[#2d221c]/30 rounded-2xl p-3 px-5 text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <FaFacebookF className="text-xl text-[#2d221c]" />
                <span>Midori Café</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 bg-white border border-[#2d221c]/30 rounded-2xl p-3 px-5 text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <FaWhatsapp className="text-2xl text-[#2d221c]" />
                <span>(99) 99999-9999</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 bg-white border border-[#2d221c]/30 rounded-2xl p-3 px-5 text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <FaTiktok className="text-xl text-[#2d221c]" />
                <span>@midoricafe</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 bg-white border border-[#2d221c]/30 rounded-2xl p-3 px-5 text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <FaPinterestP className="text-xl text-[#2d221c]" />
                <span>@midoricafe_</span>
              </a>
            </div>
          </div>

        </div>

        {/* Card Localização */}
        <div className="bg-creme border border-[#2d221c]/20 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-source-serif font-bold text-center mb-6">
            Nossa Localização
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-[#2d221c]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109169.6913076149!2d-115.80400715000002!3d37.25137145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80b81baaba3e8c81%3A0x970427e38e6237ae!2zw4FyZWEgNTEsIEOSVLCBFVUE!5e1!3m2!1spt-BR!2sbr!4v1785716932592!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Mapa de Localização"
              ></iframe>
            </div>

            {/* Informações de Endereço e Funcionamento */}
            <div className="space-y-6 text-[#2d221c]">
              <div>
                <h3 className="text-xl font-source-serif font-bold mb-2">Endereço</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Rua dos Ipês Verdes, nº 248<br />
                  Bairro Jardim das Araucárias<br />
                  Juiz de Fora – MG<br />
                  CEP: 36000-000
                </p>
              </div>

              <div>
                <h3 className="text-xl font-source-serif font-bold mb-2">Funcionamento</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Segunda a Sexta: 08h00 às 19h00<br />
                  Sábado: 09h00 às 18h00<br />
                  Domingo: 09h00 às 13h00<br />
                  Feriados: 09h00 às 14h00
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}