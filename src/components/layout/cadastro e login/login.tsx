"use client";

import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const [mode, setMode] = useState<"login" | "cadastro">("login");
  const isLogin = mode === "login";

  return (
    <div className="bg-militar-300 z-[-1] w-full min-h-screen absolute p-4 sm:p-8 md:p-12 lg:p-24">
      <div className="font-dm-sans text-chocolate bg-creme z-0 rounded-3xl p-6 sm:p-10 md:p-16 max-w-225 w-full m-auto overflow-hidden">
        <div className="flex flex-col md:relative md:block md:min-h-130">
          <div
            className={`relative w-full h-40 sm:h-56 order-1 md:order-0 md:absolute md:inset-y-0 md:w-1/2 md:h-auto transition-all duration-700 ease-in-out ${
              isLogin ? "md:left-0" : "md:left-1/2"
            }`}
          >
            <div className="relative w-full h-full md:px-4">
              <Image
                src="/images/login.jpg"
                alt="copos de café"
                fill
                className="rounded-2xl object-cover"
                priority
              />
            </div>
          </div>

          <div
            className={`order-2 md:order-none w-full md:absolute md:inset-y-0 md:w-1/2 flex flex-col justify-center gap-4 mt-6 md:mt-0 px-0 md:px-8 transition-all duration-700 ease-in-out ${
              isLogin ? "md:left-1/2" : "md:left-0"
            }`}
          >
            <div key={mode} className="flex flex-col gap-4 animate-fade-in">
              {isLogin ? (
                <>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-source-serif flex justify-center">
                    Login
                  </h1>

                  <label htmlFor="email">Email</label>
                  <input
                    className="bg-offwhite px-4 py-2 rounded-3xl border chocolate"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Digite seu email"
                  />

                  <label htmlFor="senha">Senha</label>
                  <input
                    className="bg-offwhite px-4 py-2 rounded-3xl border chocolate"
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Digite sua senha"
                  />

                  <p className="w-full text-center text-militar-300">
                    Não tem uma conta?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("cadastro")}
                      className="text-militar-500 font-bold cursor-pointer"
                    >
                      Cadastre-se
                    </button>
                  </p>
                  <button
                    className="bg-militar-500 text-creme py-3 rounded-3xl"
                    type="submit"
                  >
                    Entrar
                  </button>
                </>
              ) : (
                <>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-source-serif flex justify-center">
                    Cadastro
                  </h1>

                  <label htmlFor="nome">Nome completo</label>
                  <input
                    className="bg-offwhite px-4 py-2 rounded-3xl border chocolate"
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Digite seu nome completo"
                  />

                  <label htmlFor="email">Email</label>
                  <input
                    className="bg-offwhite px-4 py-2 rounded-3xl border chocolate"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Digite seu email"
                  />

                  <label htmlFor="senha">Senha</label>
                  <input
                    className="bg-offwhite px-4 py-2 rounded-3xl border chocolate"
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Digite sua senha"
                  />

                  <label htmlFor="confirmar-senha">Confirmar Senha</label>
                  <input
                    className="bg-offwhite px-4 py-2 rounded-3xl border chocolate"
                    type="password"
                    id="confirmar-senha"
                    name="confirmar-senha"
                    placeholder="Confirme sua senha"
                  />

                  <p className="w-full text-center text-militar-300">
                    Já tem uma conta?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("login")}
                      className="text-militar-500 font-bold cursor-pointer"
                    >
                      Faça login
                    </button>
                  </p>
                  <button
                    className="bg-militar-500 text-creme py-3 rounded-3xl"
                    type="submit"
                  >
                    Cadastrar
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}