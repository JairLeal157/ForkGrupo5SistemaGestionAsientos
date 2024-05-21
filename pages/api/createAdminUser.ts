// pages/api/createUser.ts

import prisma from '@/config/prisma';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function createUser(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }
  const { name, email, password } = req.body;

  try {
    // Obtener el token de acceso para la API de Management
    const tokenResponse = await fetch(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.AUTH0_CLIENT_ID_ADMIN,
        client_secret: process.env.AUTH0_CLIENT_SECRET_ADMIN,
        audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
        grant_type: 'client_credentials',
      }),
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.json();
      return res.status(tokenResponse.status).json({ error: errorData });
    }
    const { access_token } = await tokenResponse.json();
    // Crear el nuevo usuario en Auth0
    const userResponse = await fetch(`https://${process.env.AUTH0_DOMAIN}/api/v2/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        name,
        email,
        password,
        connection: 'Username-Password-Authentication',

      }),
    });

    if (!userResponse.ok) { // Si hay un error al crear el usuario
      const errorData = await userResponse.json();
      return res.status(userResponse.status).json({ error: errorData });
    }

    const user = await userResponse.json();
    await prisma.user.create({
        data: {
            email: email,
            image: "https://cdn.fakercloud.com/avatars/legolastom_128.jpg",
            name: name,
            role: 'ADMIN',
        },
        });
    

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating user' });
  }
}
