const express = require('express')
const app = express()
const PORT = 8000


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.sendFile(__dirname + '/data/authors.json')
})

app.get('/api:name', (req,res) => {
    const authorName = req.params.name.toLowerCase()
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})