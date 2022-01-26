import express from 'express';
import pkg from '@prisma/client';

const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const rutasVentas = express.Router();

rutasVentas.route('/ventas').post(async (req, res) => {
  const datosVentas = req.body;
  await prisma.venta.create({
    data: {
      total: datosVentas.total,
      cantidad: datosVentas.cantidad,
      cliente: {
        connect: {
          id: datosVentas.cliente,
        },
      },
      producto: {
        connect: {
          id: datosVentas.producto,
        },
      },
    },
  });

  res.status(200).json({ status: 'success' });
});

export { rutasVentas };
