import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function load() {
  const users = await prisma.user.findMany({
    where: { chats: { some: { id: "-1002191843901" } } },
    orderBy: { id: "asc" },
  });

  const matches = await prisma.match.findMany({
    where: { chatId: "-1002191843901" },
    orderBy: { id: "asc" },
  });

  return { users, matches };
}
