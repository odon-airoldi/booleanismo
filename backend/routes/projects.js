// Importo Express (framework per creare server e API)
const express = require('express');

// Creo un router separato per gestire solo alcune rotte
const router = express.Router();

// Questa rotta restituisce tutti i progetti
router.get('/', (req, res) => {
    res.send('All Projects');
});

// :id è un parametro dinamico (può essere qualsiasi valore)
router.get('/:id', (req, res) => {
    res.send(`Project ${req.params.id}`);
});


// Esporto il router per usarlo nel server principale
module.exports = router;