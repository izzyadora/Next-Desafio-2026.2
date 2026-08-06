import Image from "next/image";

export default function Login() {
    return(
        <div className="bg-militar-300 z-[-1] w-full h-full absolute p-24">
            <div className="font-dm-sans text-chocolate bg-creme z-0 flex flex-row rounded-[24px] p-16 max-w-[900px] m-auto gap-12">
               <div className="relative w-1/2 min-h-[420px]">
                    <Image 
                        src="/images/login.jpg" 
                        alt="copos de café"
                        fill
                        className="rounded-2xl object-cover"
                        priority
                    />
                </div>

                <div className="flex flex-col justify-center gap-4 w-1/2 ">
                    <h1 className="text-5xl font-bold font-source-serif flex justify-center">Login</h1>

                    <label htmlFor="email">Email</label>
                    <input className="bg-offwhite px-4 py-2 rounded-[24px] border chocolate" type="email" id="email" name="email" placeholder="Digite seu email"/>

                    <label htmlFor="senha">Senha</label>
                    <input className="bg-offwhite px-4 py-2 rounded-[24px] border chocolate" type="password" id="senha" name="senha" placeholder="Digite sua senha"/>

                    <p className="w-full text-center text-militar-300">Não tem uma conta? <a className="text-militar-500 font-bold" href="/cadastro">Cadastre-se</a></p>
                    <button className="bg-militar-500 text-creme py-3 rounded-[24px]" type="submit">Entrar</button>
                </div>
            </div>
        </div>
    );

}