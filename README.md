Este é um projeto criado em [Next.js](https://nextjs.org) e inicializado com o comando [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Primeiros Passos

Primeiro, execute o servidor da aplicação:

```bash
npm run dev
# Ou
yarn dev
# Ou
pnpm dev
# Ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) de dentro do seu browser para ver a aplicação rodando.

Você pode começar a editar a página no diretório `src/app/page.tsx`. a página é atualizada automaticamente conforme você for editando e salvando o arquivo.

O projeto usa o [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para automatizar o carregamento das fontes no projeto.

## ESTRUTURA DO BANCO DE DADOS
Tabelas principais:
- usuario -> Responsável por armazer o usuário para o login do dashboard (Caixa)
- espera_digital -> Armazena informações dos clientes que irão fazer uma reserva de mesas no (SITE ONLINE)

## PROJETO VAI SER FEITO UTILIZANDO AS SEGUINTES BIBLIOTECAS
- [Iconify](https://iconify.design/) -> Utilizada para icones no projeto
- [Prisma](https://www.prisma.io/) -> Utilizada para o nosso ORM do banco de dados
- [Swiper](https://swiperjs.com/) -> Utilizada para podermos fazer um slider de varias maneiras

# Iniciando o Projeto
- Rode o comando: `npx migrate dev` para criar o banco e criar as tabelas.




