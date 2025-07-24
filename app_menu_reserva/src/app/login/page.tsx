'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'; // <-- correto com App Router
import { useState } from "react";

export default function PaginaLogin() {
    const router = useRouter();

    //Estado da aplicação State
    const [nome_usuario, setNomeUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    //FUNÇÃO QUE IRA RETORNA CASO O USUÁRIO POSSO SE LOGAR
    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();

        //URL QUE UITLIZADA PARA POERMOS ACCESSAR OS DADOS NO BANCO DE DADOS
        const res = await fetch("/api/login/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome_usuario, senha })
        });

        //Retorno dos dados
        const data = await res.json();

        //Válidando o resultado
        if (data.sucesso) {
            //Vamos usar o localStorage do navegador para armazenarmos o login
            localStorage.setItem('usuario', JSON.stringify(data.usuario))// precisa vir do backend
            router.push('/dashboard') //Redirecionando o usuário para a página de dashboard

            //setMensagem("Login realizado com successo!");
        } else {
            setMensagem("Falha " + data.mensagem)
        }
    }

    return (
        <div className="min-h-screen bg-[url(/imagens/img_fundo_pg_login.png)] object-cover object-top-left flex">

            <section className="mx-auto my-auto w-full md:w-100 bg-[#2B2925] shadow-lg/30 rounded-xl p-6 flex flex-col justify-center items-center">

                <Image width={200} height={200} src={"/imagens/logo.png"} alt="Imagem da Logo" priority={true} />

                <form className="w-full flex flex-col gap-4" onSubmit={handleLogin}>
                    <div className="flex flex-col">
                        <label className="text-white">Nome de Usuário</label>
                        <input onChange={(e) => setNomeUsuario(e.target.value)} className="border border-[#E2CCA6]/60 rounded-md text-white outline-none px-2 py-1" type="text" placeholder="Digite seu nome de usuário..." />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-white">Senha</label>
                        <input onChange={(e) => setSenha(e.target.value)} className="border border-[#E2CCA6]/60 rounded-md text-white outline-none px-2 py-1" type="password" placeholder="Digite sua senha..." />
                    </div>

                    <p className="text-white">Não tem usuário? Crie um <Link className="text-[#E2CCA6] font-semibold" href="../registrar/">clicando aqui!</Link> </p>

                    <input className="bg-[#2B2925] shadow-lg/30 text-[#E2CCA6] p-2 w-40 mx-auto mb-5 cursor-pointer hover:opacity-80 transition-opacity" type="submit" value="Logar" />

                    {mensagem && <p className="text-red-500 text-center">{mensagem}</p>}
                </form>

            </section>
        </div>
    )
}