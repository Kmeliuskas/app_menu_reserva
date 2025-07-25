'use client';

import { Usuario } from "@/generated/prisma";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {

    //VARIAVEIS PARA A MUDANÇA DE ESTADO DOS OBJETOS, 
    const [usuario, setUsuario]       = useState<Usuario | null>(null);
    const [carregando, setCarregando] = useState(true);

    //VARIAVEL UTILIZADA PARA REDIRECIONARMOS O USUÁRIO PARA O LOGIN CASO NÃO TENHA USUÁRIO
    const router = useRouter();

    //USEEFFECT UTILIZADO PARA VERIFICARMOS SE TEM USUÁRIO LOGADO OU NÃO
    useEffect(() => {
        const storageUser = localStorage.getItem('usuario');
        if (storageUser) {
            setUsuario(JSON.parse(storageUser));
            setCarregando(false);
        } else {
            router.push('/');
        }
    }, [router]);

    //VARIAVEL UTILIZADA PARA CARREGARMOS ISSO ANTES DA VALIDAÇÃO DE USUÁRIO
    if (carregando) {
        return <p>Carregando...</p>; // Ou um spinner
    }

    return (
        <div>
            <h1>Bem-vindo, {usuario?.nome_usuario}!</h1>
            {/* Mostra os dados do usuário aqui */}
        </div>
    );
}
