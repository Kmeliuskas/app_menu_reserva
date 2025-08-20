"use client";

import { createContext, useContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from "react";
import { Usuario } from "@/generated/prisma";

type UserContextType = {
  usuario: Usuario | null;
  //setUsuario: (user: Usuario | null) => void;
  setUsuario: Dispatch<SetStateAction<Usuario | null>>; // <-- aqui
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    const storageUser = localStorage.getItem("usuario");
    if (storageUser) {
      setUsuario(JSON.parse(storageUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de UserProvider");
  }
  return context;
}
