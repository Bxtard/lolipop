import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url: route, method, body, query } = req;
  console.log(method, route, body, query);

  switch (method) {
    case 'GET':
      const videos = await prisma.video.findFirst({
        where: {
          playbackId: query.playbackId,
        },
      });
      return res.json(videos);
    default:
      return res.status(405).json({ message: 'Invalid method' });
  }
}
