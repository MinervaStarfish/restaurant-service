const express = require('express');
const router = express.Router();
const menu = require('../data/menu.json');

// Obtener todos los elementos del menú
router.get('/', (req, res) => {
  res.json(menu);
});

// Obtener un elemento específico del menú por ID
router.get('/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const item = menu.find(i => i.id === itemId);
  item ? res.json(item) : res.status(404).json({ error: "Item no encontrado" });
});

module.exports = router;
