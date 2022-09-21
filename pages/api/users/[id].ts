import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url, method, query: id } = req;
  console.log(method, url, id);
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: 'unauthorized' });
  }

  switch (method) {
    case 'GET':
      return res.status(200).json({ message: 'getUser', id: id });
    default:
      return res.status(400).json({ message: 'Bad request' });
  }
}
