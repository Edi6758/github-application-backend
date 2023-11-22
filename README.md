
# Teste Full Stack

Documentação do teste Full Stack (criado com NestJS, Prisma, Docker, React e Tailwind)


## Referência
 - [Node](https://nodejs.org/en)
 - [NestJS](https://docs.nestjs.com/)
 - [Prisma](https://docs.docker.com/)
 - [Docker](https://docs.docker.com/)
 - [React](https://pt-br.legacy.reactjs.org/docs/getting-started.html)
 - [Tailwind](https://tailwindcss.com/docs/installation)


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DATABASE_URL`

Um exemplo está anexado no código fonte também.



## Inicialização

Para fazer com que o projeto inicie é importante que você tenha os itens acima instalados em sua máquina.

O primeiro comando que você deve utilizar é para definir e iniciar um container Docker em sua máquina

```bash
  docker-compose up
```

Exemplo de saída do terminal

```bash
...
postgres_1  | 2022-03-05 12:47:02.410 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
postgres_1  | 2022-03-05 12:47:02.410 UTC [1] LOG:  listening on IPv6 address "::", port 5432
postgres_1  | 2022-03-05 12:47:02.411 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
postgres_1  | 2022-03-05 12:47:02.419 UTC [1] LOG:  database system is ready to accept connections
```

Após este comando, (se não houver uma pasta chamada `migrations` dentro da pasta `prisma`) você deverá utilizar o seguinte comando para criar a migração do ORM para o SQL

```bash
npx prisma migrate dev --name "init"
```

Exemplo de saída do terminal
```bash
The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ 20220528101323_init/
    └─ migration.sql

Your database is now in sync with your schema.
...
✔ Generated Prisma Client (3.14.0 | library) to ./node_modules/@prisma/client in 31ms
```
Ainda no mesmo caso de não haver uma pasta migrations, será necessário com que o `client`
do Prisma seja gerado, então o seguinte comando será utilizado.

```bash
npx prisma generate
```

Exemplo de saída do terminal
```bash
Environment variables loaded from .env
Prisma schema loaded from prisma\schema.prisma

✔ Generated Prisma Client (v5.6.0) to .\node_modules\@prisma\client in 62ms
```

Com estes comandos sendo executados corretamente, você poderá iniciar o back-end com o seguinte comando

```bash
npm run start:dev
```

O Swagger estará disponível na URL [localhost:3000](http://localhost:3000/api)