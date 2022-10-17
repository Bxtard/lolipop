import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import paypal from '@paypal/checkout-server-sdk';

const clientId = process.env.PAYPAL_CLIENT_ID || '';
const clientSecret = process.env.PAYPAL_CLIENT_SECRET || '';

let enviroment = new paypal.core.SandboxEnvironment(clientId, clientSecret);

let client = new paypal.core.PayPalHttpClient(enviroment);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url, method } = req;
  console.log(method, url);
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'unauthorized' });
  }

  switch (method) {
    case 'POST':
      const request = new paypal.orders.OrdersCreateRequest();
      request.requestBody({
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: '1.00',
            },
          },
        ],
      });
      const response = await client.execute(request);
      return res.status(200).json({ id: response.result.id });
    default:
      return res.status(400).json({ message: 'Bad request' });
  }
}
