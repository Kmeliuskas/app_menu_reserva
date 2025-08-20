'use client';

import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UserProvider, useUser } from "./_context/UserContext";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const storageUser = localStorage.getItem("usuario");
    if (!storageUser) {
      router.push("/");
    } else {
      setCarregando(false);
    }
  }, [router]);

  if (carregando) return <p>Carregando...</p>;

  return (
    <UserProvider>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Header />
          <main className="flex-1 p-4 bg-white">{children}</main>
        </div>
      </div>
    </UserProvider>
  );
}
