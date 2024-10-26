const express = require('express');
const app = express();
const menuRoutes = require('./routes/menu');
const ordersRoutes = require('./routes/orders');
const tablesRoutes = require('./routes/tables');

app.use(express.json());

// Rutas para el menú, órdenes y mesas
app.use('/menu', menuRoutes);
app.use('/orders', ordersRoutes);
app.use('/tables', tablesRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
