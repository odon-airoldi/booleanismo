// Importo Express (framework per creare server e API)
const express = require('express');

// Creo un router separato per gestire solo alcune rotte
const router = express.Router();

const dataProjects = require('../data/dataProjects')

// Questa rotta restituisce tutti i progetti
router.get('/', (req, res) => {
    res.send(dataProjects);
});

// :id è un parametro dinamico (può essere qualsiasi valore)
router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    res.send(dataProjects[id - 1]);
});

// Esporto il router per usarlo nel server principale
module.exports = router;