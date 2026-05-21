const express = require('express');
const router = express.Router();

// projects
router.get('/', (req, res) => {
    res.send('All Projects');
});

// project
router.get('/:id', (req, res) => {
    res.send(`Project ${req.params.id}`);
});

module.exports = router;