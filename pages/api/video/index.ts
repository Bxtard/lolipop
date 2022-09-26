import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url: route, method, body } = req;
  console.log(method, route, body);

  const { url: videoUrl, name, image } = body;

  switch (method) {
    case 'GET':
      const videos = await prisma.video.findMany({});
      return res.json(videos);
    case 'POST':
    /* try {
        const response = await prisma.video.create({
          data: {videoUrl, name, image },
        });
        return res.status(200).json(response);
      } catch (error) {
        return res.status(500).json({ error });
      } */
    default:
      return res.status(405).json({ message: 'Invalid method' });
  }
}
