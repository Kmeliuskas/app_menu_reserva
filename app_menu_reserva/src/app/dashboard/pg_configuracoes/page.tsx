"use client";
import { useUser } from "../_context/UserContext";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ConfigPage() {
    const { usuario, setUsuario } = useUser(); //Vem do context

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUsuario((prev) =>
            prev ? { ...prev, [name]: value } : prev
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        //Alterar os dados do db
        

        console.log(usuario); // aqui você já tem todos os dados prontos
    };

    //console.log(usuario);

    return (
        <section className="p-4 w-full">
            <h1>Editar Perfil</h1>
            <hr className="w-23 border-1" />

            <div className="flex flex-row items-start mt-5 gap-10">

                {/* AVATAR DO LADO ESQUERDO */}
                <div className="bg-[#2B2925] rounded-full p-5 relative">
                    <h1 className="text-[2rem] font-semibold text-white">MK</h1>
                    <div className="absolute top-6 -right-4 bg-[#E2CCA6] rounded-full p-1.5">
                        <Icon icon={"mdi:edit"} width={20} />
                    </div>
                </div>

                {/* FORMULÁRIO DISPLAY GRID */}
                <form className="grid grid-cols-2 w-200 gap-5 rounded-lg p-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="nome_completo" className="font-semibold">Nome completo</label>
                        <input name="nome_completo" id="nome_completo" className="border border-gray-300 rounded-md py-1.5 px-3 outline-none" type="text" placeholder="Joãozinho da Silva..." value={usuario?.nome_completo || ""} onChange={handleChange} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="nome_usuario" className="font-semibold">Nome de usuário</label>
                        <input name="nome_usuario" id="nome_usuario" className="border border-gray-300 rounded-md py-1.5 px-3 outline-none" type="text" placeholder="joazinho" value={usuario?.nome_usuario || ""} onChange={handleChange} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-semibold">E-mail</label>
                        <input name="email" id="email" className="border border-gray-300 rounded-md py-1.5 px-3 outline-none" type="email" placeholder="joazinho@email.com.br" value={usuario?.email || ""} onChange={handleChange} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="senha" className="font-semibold">Senha</label>
                        <input name="senha" id="senha" className="border border-gray-300 rounded-md py-1.5 px-3 outline-none" type="password" placeholder="secreto..." value={usuario?.senha || ""} onChange={handleChange} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="dt_nascimento" className="font-semibold">Data de nascimento</label>
                        <input name="dt_nascimento" id="dt_nascimento" className="border border-gray-300 rounded-md py-1.5 px-3 outline-none" type="date" value={ usuario?.dt_nascimento ? new Date(usuario.dt_nascimento).toISOString().split("T")[0] : "" } onChange={handleChange} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="end_atual" className="font-semibold">Endereço atual</label>
                        <input name="end_atual" id="end_atual" className="border border-gray-300 rounded-md py-1.5 px-3 outline-none" type="text" placeholder="Rua vicente, NR 135, casa" value={usuario?.end_atual || ""} onChange={handleChange} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="end_permanente" className="font-semibold">Endereço permanente</label>
                        <input name="end_permanente" id="end_permanente" className="border border-gray-300 rounded-md py-1.5 px-3 outline-none" type="text" placeholder="Rua permante, NR 135, casa" value={usuario?.end_permanente || ""} onChange={handleChange} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="cidade" className="font-semibold">Cidade</label>
                        <input name="cidade" id="cidade" className="border border-gray-300 rounded-md py-1.5 px-3 outline-none" type="text" placeholder="Caçador " value={usuario?.cidade || ""} onChange={handleChange} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="cep" className="font-semibold">CEP</label>
                        <input name="cep" id="cep" className="border border-gray-300 rounded-md py-1.5 px-3 outline-none" type="text" placeholder="99999-999 " value={usuario?.cep || ""} onChange={handleChange} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="pais" className="font-semibold">País</label>
                        <input name="pais" id="pais" className="border border-gray-300 rounded-md py-1.5 px-3 outline-none" type="text" placeholder="Brasil" value={usuario?.pais || ""} onChange={handleChange} />
                    </div>

                    {/* botão no final */}
                    <div className="col-span-full flex justify-end">
                        <input type="submit" name="salvar" value="Salvar" className="bg-[#2B2925] text-[#E2CCA6] font-semibold px-6 py-2 rounded-sm w-40 cursor-pointer shadow-sm shadow-black" />
                    </div>
                </form>

            </div>
        </section>
    );
}