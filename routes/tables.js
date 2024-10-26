const express = require('express');
const router = express.Router();

let tables = [
  { tableNumber: 1, status: 'Disponible' },
  { tableNumber: 2, status: 'Ocupada' }
];

// Obtener el estado de todas las mesas
router.get('/', (req, res) => {
  res.json(tables);
});

// Actualizar el estado de una mesa
router.put('/:tableNumber', (req, res) => {
  const tableNumber = parseInt(req.params.tableNumber, 10);
  const table = tables.find(t => t.tableNumber === tableNumber);

  if (table) {
    table.status = req.body.status;
    res.json(table);
  } else {
    res.status(404).json({ error: 'Mesa no encontrada' });
  }
});

module.exports = router;
