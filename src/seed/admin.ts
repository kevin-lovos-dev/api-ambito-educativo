import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";

async function main() {
  const email = "admin@demo.com";
  const password = "admin123!";

  const hashedPassword = await bcrypt.hash(password, 10);
  const adminExists = await prisma.user.findUnique({
    where: { email },
  });

  if (adminExists) {
    console.log("admin ya existe");
    return;
  }

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log("usuario admin creado");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
