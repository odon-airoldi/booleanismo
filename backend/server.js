// Importo Express (framework per creare server e API)
const express = require('express')

// Importo Cors
const cors = require('cors')

// Crea l'app Express
const app = express()

// Definisco la porta del server
const port = 3000

// Importo il router projects
const projects = require('./routes/projects')

// rotta principale
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(cors({
    origin: 'http://localhost:5173'
}));

// tutte le rotte dentro projects.js saranno accessibili da /projects
app.use('/projects', projects)



// Avvio il server sulla porta 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})