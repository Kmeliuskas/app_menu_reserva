// dashboard/layout.tsx
'use client';

import Sidebar from "./_components/Sidebar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Usuario } from "@/generated/prisma";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
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

  if (carregando) return <p>Carregando...</p>;

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4 bg-white">
        {children}
      </main>
    </div>
  );
}
