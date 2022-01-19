import express from 'express';

const rutasProductos = express.Router();

const productos = [
  { nombre: 'producto 1', descripcion: 'prodcuto 1 desc', precio: 500 },
  { nombre: 'producto 2', descripcion: 'prodcuto 2 desc', precio: 1500 },
  { nombre: 'producto 3', descripcion: 'prodcuto 3 desc', precio: 45600 },
  { nombre: 'producto 4', descripcion: 'prodcuto 4 desc', precio: 75000 },
  { nombre: 'producto 5', descripcion: 'prodcuto 5 desc', precio: 22000 },
  { nombre: 'producto 6', descripcion: 'prodcuto 6 desc', precio: 1300 },
];

rutasProductos.route('/productos').get((req, res) => {
  res.status(200).send({ productos });
});

rutasProductos.route('/productos').post();

export { rutasProductos };
