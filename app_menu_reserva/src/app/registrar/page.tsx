'use client'

import Image from "next/image";
import Link from "next/link";

export default function PaginaRegistro() {

    async function handleRegistrar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const dados = {
            nomeCompleto: formData.get('inputNomeCompleto')?.toString() || '',
            nomeUsuario: formData.get('inputNomeUsuario')?.toString() || '',
            email: formData.get('inputEmail')?.toString() || '',
            senha: formData.get('inputSenha')?.toString() || '',
            dtNascimento: formData.get('inputDtNascimento')?.toString() || '',
            enderecoAtual: formData.get('inputEndAtual')?.toString() || '',
            enderecoPermanente: formData.get('inputEndPermanente')?.toString() || '',
            cidade: formData.get('inputCidade')?.toString() || '',
            cep: formData.get('inputCep')?.toString() || '',
            pais: formData.get('inputPais')?.toString() || '',
        };

        // Enviando para o backend os dados do formulário
        const response = await fetch('/api/registrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados),
        });

        if (response.ok) {
            //console.log('Usuário cadastrado:', response.statusText);
            alert('Cadastro realizado com sucesso!');
        } else {
            alert('Erro ao cadastrar usuário.');
        }
    }

    return (
        <div className="bg-[url(/imagens/img_fundo_pg_login.png)] object-cover object-top-left">

            <section className="mx-auto w-full md:w-150 bg-[#2B2925] shadow-lg/30 rounded-xl p-6 flex flex-col justify-center items-center">

                <Image width={200} height={200} src={"/imagens/logo.png"} alt="Imagem da Logo" priority={true} />

                <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleRegistrar}>

                    <div className="flex flex-col">
                        <label className="text-white">Nome Completo</label>
                        <input className="border border-[#E2CCA6]/60 rounded-md text-white outline-none px-2 py-1" type="text" name="inputNomeCompleto" placeholder="Digite seu nome completo..." required />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-white">Nome de Usuário</label>
                        <input className="border border-[#E2CCA6]/60 rounded-md text-white outline-none px-2 py-1" type="text" name="inputNomeUsuario" placeholder="Digite seu nome de usuário..." required />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-white">E-mail</label>
                        <input className="border border-[#E2CCA6]/60 rounded-md text-white outline-none px-2 py-1" type="text" name="inputEmail" placeholder="Digite seu e-mail..." required />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-white">Senha</label>
                        <input className="border border-[#E2CCA6]/60 rounded-md text-white outline-none px-2 py-1" type="password" name="inputSenha" placeholder="Digite sua senha..." required />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-white">Data de Nascimento</label>
                        <input className="border border-[#E2CCA6]/60 rounded-md text-white outline-none px-2 py-1" type="date" name="inputDtNascimento" required />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-white">Endereço Atual</label>
                        <input className="border border-[#E2CCA6]/60 rounded-md text-white outline-none px-2 py-1" type="text" name="inputEndAtual" placeholder="Digite seu endereço atual..." required />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-white">Endereço Permanente</label>
                        <input className="border border-[#E2CCA6]/60 rounded-md text-white outline-none px-2 py-1" type="text" name="inputEndPermanente" placeholder="Digite seu endereço permanente..." required />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-white">Cidade</label>
                        <input className="border border-[#E2CCA6]/60 rounded-md text-white outline-none px-2 py-1" type="text" name="inputCidade" placeholder="Digite sua cidade..." required />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-white">CEP</label>
                        <input className="border border-[#E2CCA6]/60 rounded-md text-white outline-none px-2 py-1" type="text" name="inputCep" placeholder="Digite seu CEP..." required />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-white">País</label>
                        <input className="border border-[#E2CCA6]/60 rounded-md text-white outline-none px-2 py-1" type="text" name="inputPais" placeholder="Digite seu país..." required />
                    </div>

                    <input className="bg-[#2B2925] shadow-lg/30 text-[#E2CCA6] p-2 w-40 mx-auto col-span-full mb-5 cursor-pointer hover:opacity-80 transition-opacity" type="submit" name="Logar" value="Logar" />
                </form>

                <p className="text-white text-center">Já tem um usuário? Faça login <Link className="text-[#E2CCA6] font-semibold" href="/">clicando aqui!</Link></p>
            </section>
        </div>
    )
}