import express from 'express';
import pkg from '@prisma/client';

const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const rutasClientes = express.Router();

rutasClientes.route('/clientes').get(async (req, res) => {
  const clientes = await prisma.cliente.findMany();
  res.status(200).json({ clientes });
});

export { rutasClientes };
