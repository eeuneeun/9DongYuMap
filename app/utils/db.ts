import { PrismaClient } from "@prisma/client";

type Props = {
  email: string;
  password: string;
};

export async function getUserFromDb({ email, password }: Props) {
  const prisma = new PrismaClient();
  const result = await prisma.user.findUnique({
    where: {
      email: email,
      password: password,
    },
  });
  console.log("result:", result);
  return result;
}
