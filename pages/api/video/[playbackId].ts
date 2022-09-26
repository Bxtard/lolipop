import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  const { url: route, method, body, query } = req;
  console.log(method, route, body, query);

  switch (method) {
    case 'GET':
      const playbackId = query.playbackId;
      if (typeof playbackId === 'string') {
        const videos = await prisma.video.findFirst({
          where: {
            playbackId: playbackId,
          },
        });
        return res.json(videos);
      } else {
        return res.status(400).json({ message: 'bad request' });
      }
    default:
      return res.status(405).json({ message: 'Invalid method' });
  }
}
