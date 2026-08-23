"use client";

import Image from "next/image";
import { useState, useActionState } from "react";
import { authenticate, registerUser } from "@/actions/login/actions"; // ajuste o caminho conforme seu projeto

export default function Login() {
  const [mode, setMode] = useState<"login" | "cadastro">("login");
  const isLogin = mode === "login";

  const [loginError, loginAction, isLoginPending] = useActionState(
    authenticate,
    undefined,
  );

  const [cadastroState, cadastroAction, isCadastroPending] = useActionState(
    registerUser,
    undefined,
  );

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
            className={`order-2 md:order-0 w-full md:absolute md:inset-y-0 md:w-1/2 flex flex-col justify-center gap-4 mt-6 md:mt-0 px-0 md:px-8 transition-all duration-700 ease-in-out ${
              isLogin ? "md:left-1/2" : "md:left-0"
            }`}
          >
            <div key={mode} className="flex flex-col gap-4 animate-fade-in">
              {isLogin ? (
                <form action={loginAction} className="flex flex-col gap-4">
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
                    required
                  />

                  <label htmlFor="password">Senha</label>
                  <input
                    className="bg-offwhite px-4 py-2 rounded-3xl border chocolate"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Digite sua senha"
                    required
                  />

                  {loginError && (
                    <p className="text-red-600 text-sm text-center" role="alert">
                      {loginError}
                    </p>
                  )}

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
                    className="bg-militar-500 text-creme py-3 w-full rounded-3xl hover:bg-militar-300 transition-colors disabled:opacity-60"
                    type="submit"
                    disabled={isLoginPending}
                  >
                    {isLoginPending ? "Entrando..." : "Entrar"}
                  </button>
                </form>
              ) : cadastroState?.success ? (
                <div className="flex flex-col gap-4 items-center text-center">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-source-serif">
                    Cadastro
                  </h1>
                  <p className="text-chocolate">
                    Cadastro realizado com sucesso! Agora você já pode fazer
                    login.
                  </p>
                  <button
                    type="button"
                    onClick={() => setMode("login")}
                    className="bg-militar-500 text-creme py-3 w-full rounded-3xl hover:bg-militar-300 transition-colors"
                  >
                    Ir para o login
                  </button>
                </div>
              ) : (
                <form action={cadastroAction} className="flex flex-col gap-4">
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
                    required
                  />

                  <label htmlFor="email">Email</label>
                  <input
                    className="bg-offwhite px-4 py-2 rounded-3xl border chocolate"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Digite seu email"
                    required
                  />

                  <label htmlFor="senha">Senha</label>
                  <input
                    className="bg-offwhite px-4 py-2 rounded-3xl border chocolate"
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Digite sua senha"
                    required
                  />

                  <label htmlFor="confirmar-senha">Confirmar Senha</label>
                  <input
                    className="bg-offwhite px-4 py-2 rounded-3xl border chocolate"
                    type="password"
                    id="confirmar-senha"
                    name="confirmar-senha"
                    placeholder="Confirme sua senha"
                    required
                  />

                  {cadastroState?.error && (
                    <p className="text-red-600 text-sm text-center" role="alert">
                      {cadastroState.error}
                    </p>
                  )}

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
                    className="bg-militar-500 text-creme py-3 w-full rounded-3xl hover:bg-militar-300 transition-colors disabled:opacity-60"
                    type="submit"
                    disabled={isCadastroPending}
                  >
                    {isCadastroPending ? "Cadastrando..." : "Cadastrar"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}