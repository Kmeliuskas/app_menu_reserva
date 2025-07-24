// src/app/api/registrar/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const data = await req.json();

  try {

    //Criando um novo usuário no banco de dados
    const novoUsuario = await prisma.usuario.create({
      data: {
        nome_completo: data.nomeCompleto,
        nome_usuario: data.nomeUsuario,
        email: data.email,
        senha: data.senha,
        dt_nascimento: new Date(data.dtNascimento),
        end_atual: data.enderecoAtual,
        end_permanente: data.enderecoPermanente,
        cidade: data.cidade,
        cep: data.cep,
        pais: data.pais
      }
    })

    return NextResponse.json({ sucesso: true});
  } catch (error) {
    return NextResponse.json({ sucesso: false, mensagem: "Usuário não cadastrado" }, { status: 401 });
  }

}

