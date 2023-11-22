/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function main() {
  const passwordUser1 = await bcrypt.hash('password-user1', roundsOfHashing);
  const passwordUser2 = await bcrypt.hash('password-user2', roundsOfHashing);

  const user1Id = uuidv4();
  const user2Id = uuidv4();

  const user1 = await prisma.user.upsert({
    where: { id: user1Id },
    update: {
      password: passwordUser1,
    },
    create: {
      id: user1Id,
      username: 'joaozinho do software developer',
      avatar_url: 'https://example.com/avatar/joaozinho.jpg',
      html_url: 'https://example.com/joaozinho',
      name: 'Joao',
      company: 'Joao Zin Company',
      blog: 'https://jozin.com',
      email: 'joaozinho@gmail.com',
      bio: 'Bio do Joaozinho, que é um developer de software e estuda JS',
      twitter_username: '@joaozinhosoftware',
      public_repos: 44,
      followers: 230,
      following: 110,
      password: passwordUser1,
    },
  });

  const user2 = await prisma.user.upsert({
    where: { id: user2Id },
    update: {
      password: passwordUser2,
    },
    create: {
      id: user2Id,
      username: 'maria do software',
      avatar_url: 'https://example.com/avatar/maria.jpg',
      html_url: 'https://example.com/maria',
      name: 'Maria',
      company: 'Maria Zinnha Company',
      blog: 'https://maria.com',
      email: 'maria@gmail.com',
      bio: 'Maria gosta de Java e gosta de NestJS',
      twitter_username: '@mariasoftware',
      public_repos: 98,
      followers: 444,
      following: 123,
      password: passwordUser2,
    },
  });

  // Código para os repositórios permanece o mesmo

  console.log({ user1, user2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
