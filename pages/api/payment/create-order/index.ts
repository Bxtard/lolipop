import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const [PAYPAL, PAYPAL_CLIENT_ID, PAYPAL_SECRET] = process.env;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url, method, body } = req;
  console.log(method, url, body);

  const order = {
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'USD',
          value: body.price,
        },
        description: body.description,
      },
    ],
    application_context: {
      brand_name: 'lolipop',
      landing_page: 'LOGIN',
      user_action: 'PAY_NOW',
      return_url: 'http://localhost:3000/api/payment/capture-order',
      cancel_url: 'http://localhost:3000/api/payment/cancel-order',
    },
  };

  switch (method) {
    case 'GET':
      const token = async () => {
        const response = await fetch(`${PAYPAL}/v1/oauth2/token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        return response;
      };
      const createOrder = async () => {
        const response = await fetch(`${PAYPAL}/v2/checkout/orders`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(order),
        });
        return response;
      };
      const newOrder = createOrder();
      return res.status(200).json({ message: 'creating order', newOrder });

    default:
      return res.status(400).json({ message: 'Bad request' });
  }
}

/* curl -v -X POST https://api-m.sandbox.paypal.com/v2/checkout/orders \
-H "Content-Type: application/json" \
-H "Authorization: Bearer Access-Token" \
-d '{
  "intent": "CAPTURE",
  "purchase_units": [
    {
      "amount": {
        "currency_code": "USD",
        "value": "100.00"
      }
    }
  ]
}' */
