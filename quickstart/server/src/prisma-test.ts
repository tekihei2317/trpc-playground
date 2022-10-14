import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const tag = await prisma.tag.create({
    data: {
      name: "programming",
    },
  });
  console.log(tag);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
