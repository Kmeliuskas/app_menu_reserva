// src/app/api/login/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  //Fazendo a busca pelo nome de usuário e senha enviados pelo fetch
  const { nome_usuario, senha } = await req.json();

  //Criando o objeto de usuário aqui
  const user = await prisma.usuario.findUnique({
    where: { nome_usuario }
  });

  //Se existir algum usuário no banco de dados com usuario e senhas inseridos cai aqui
  if (user && user.senha === senha) {
    return NextResponse.json({ sucesso: true, usuario: user }); //retornando o objeto usuário direto do banco
  }

  return NextResponse.json({ sucesso: false, mensagem: "Usuário ou senha inválidos" }); //, { status: 401 }
}
