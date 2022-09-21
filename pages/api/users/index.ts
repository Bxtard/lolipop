import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url, method } = req;
  console.log(method, url);

  switch (method) {
    case 'GET':
      const users = await prisma.user.findMany();
      return res.status(200).json({ message: 'getUsers' });

    case 'POST':
      return res.status(200).json({ message: 'postUsers' });

    default:
      return res.status(400).json({ message: 'Bad request' });
  }
}
