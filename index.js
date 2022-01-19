import express from 'express';
import { rutasProductos } from './views/productos/rutas.js';
import cors from 'cors';

const app = express();

const port = 4000;

app.use(express.json());
app.use(cors());
app.use(rutasProductos);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
