const express = require('express');
const router = express.Router();

let orders = [];

// Crear una nueva orden
router.post('/', (req, res) => {
  const order = {
    id: orders.length + 1,
    items: req.body.items,
    total: req.body.total,
    tableNumber: req.body.tableNumber
  };
  orders.push(order);
  res.status(201).json(order);
});

// Obtener todas las órdenes
router.get('/', (req, res) => {
  res.json(orders);
});

module.exports = router;
