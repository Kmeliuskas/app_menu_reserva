'use client';

import { Usuario } from "@/generated/prisma";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const [carregando, setCarregando] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const storageUser = localStorage.getItem('usuario');
        if (storageUser) {
            setUsuario(JSON.parse(storageUser));
            setCarregando(false);
        } else {
            router.push('/');
        }
    }, [router]);

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
