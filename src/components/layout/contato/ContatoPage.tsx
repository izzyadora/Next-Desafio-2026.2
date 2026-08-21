"use client";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaTiktok,
  FaPinterestP,
  FaPaperPlane,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { FormValue, formSchema } from "@/src/schema/form"
import Link from "next/link";
import Mapa from "./Mapa";

export default function ContatoPage() {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [error, setError] = useState<string | null>(null)

  const {handleSubmit, register, formState:{errors}, reset} = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: ""
    }
  })

  const onSubmit = async (data: FormValue) => {
    const response = await fetch("/api/send",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })

    if(response.ok){
      setIsSubmitSuccessful(true);
      reset();
    }
    else{
      setError("Ocorreu um erro ao enviar o seu e-mail!")
    }
  }

  return (
    <section className="bg-offwhite min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-dm-sans text-chocolate animate-fade-in">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Cabeçalho */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-source-serif font-bold text-chocolate">
            Entre em contato com a gente!
          </h1>
          <p className="text-sm md:text-base text-militar-500 font-dm-sans">
            Vamos adorar receber sua mensagem, sugestão ou dúvida.
          </p>
        </div>

        {/* Formulário + Redes Sociais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-creme border border-chocolate/20 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-source-serif font-bold text-center mb-6">
              Envie sua mensagem
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Nome completo
                </label>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  className="w-full bg-white border border-chocolate/30 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-chocolate transition-colors"
                  {...register("name")}
                />
                <label className="text-red-950">{errors.name?.message}</label>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="seu.email@email.com"
                  className="w-full bg-white border border-chocolate/30 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-chocolate transition-colors"
                  {...register("email")}
                />
                <label className="text-red-950">{errors.email?.message}</label>
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
                type="submit"
                className="w-full bg-chocolate hover:bg-militar-500 text-white font-medium py-3 rounded-full flex items-center justify-center gap-2 transition-colors mt-2 text-sm"
              >
                <FaPaperPlane className="text-xs" /> Enviar
              </button>
              {isSubmitSuccessful && <span className="text-green-900 font-semibold">E-mail enviado com sucesso!</span>}
              {error && <span className="text-red-950 font-semibold">Erro ao enviar o e-mail!</span>}
            </form>
          </div>

          {/* Card Redes Sociais */}
          <div className="flex flex-col gap-4 bg-creme border border-chocolate/20 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-source-serif font-bold text-center mb-6">
              Nossas redes
            </h2>

            <div className="space-y-4">
              <Link
                href="#"
                className="flex items-center gap-4 bg-white border border-chocolate/30 rounded-2xl p-5 px-5 text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <FaInstagram className="text-2xl text-chocolate" />
                <span>@midoricafe</span>
              </Link>

              <Link
                href="#"
                className="flex items-center gap-4 bg-white border border-chocolate/30 rounded-2xl p-5 px-5 text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <FaFacebookF className="text-xl text-chocolate" />
                <span>Midori Café</span>
              </Link>

              <Link
                href="#"
                className="flex items-center gap-4 bg-white border border-chocolate/30 rounded-2xl p-5 px-5 text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <FaWhatsapp className="text-2xl text-chocolate" />
                <span>(99) 99999-9999</span>
              </Link>

              <Link
                href="#"
                className="flex items-center gap-4 bg-white border border-chocolate/30 rounded-2xl p-5 px-5 text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <FaTiktok className="text-xl text-chocolate" />
                <span>@midoricafe</span>
              </Link>

              <Link
                href="#"
                className="flex items-center gap-4 bg-white border border-chocolate/30 rounded-2xl p-5 px-5 text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <FaPinterestP className="text-xl text-chocolate" />
                <span>@midoricafe_</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Card Localização */}
        <div className="bg-creme border border-chocolate/20 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-source-serif font-bold text-center mb-6">
            Nossa Localização
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <Mapa />

            {/* Informações de Endereço e Funcionamento */}
            <div className="space-y-6 text-chocolate">
              <div>
                <h3 className="text-xl font-source-serif font-bold mb-2">
                  Endereço
                </h3>
                <p className="text-sm text-chocolate/70 leading-relaxed">
                  Rua dos Ipês Verdes, nº 248
                  <br />
                  Bairro Jardim das Araucárias
                  <br />
                  Juiz de Fora – MG
                  <br />
                  CEP: 36000-000
                </p>
              </div>

              <div>
                <h3 className="text-xl font-source-serif font-bold mb-2">
                  Funcionamento
                </h3>
                <p className="text-sm text-chocolate/70 leading-relaxed">
                  Segunda a Sexta: 08h00 às 19h00
                  <br />
                  Sábado: 09h00 às 18h00
                  <br />
                  Domingo: 09h00 às 13h00
                  <br />
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
