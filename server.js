const express = require('express')
const app = express()
const PORT = 8000


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/data/authors.json:name', (req, res) => {
    const authorName = req.params.name.toLowerCase()
    res.json(authorName)
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})