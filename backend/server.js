const express = require('express')
const app = express()
const port = 3000

const projects = require('./routes/projects')



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/projects', projects)

app.use('/projects/:d', projects)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})