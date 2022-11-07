const express = require('express')
const app = express()
const PORT = 8000
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('dbConnectionStr', {useUnifiedTopology: true})
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/', (req, res) => {
    db.collection('authors').find().toArray()
})

/* app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.sendFile(__dirname + '/data/authors.json')
})

app.get('/api/:name', (req, res) => {
    const authorName = req.params.name.toLowerCase()
    const data = fs.readFileSync(__dirname + '/data/authors.json')
    const elements = JSON.parse(data)

    if(data.includes(authorName)){
        
        console.log(elements)
        console.log('found')
    } else {
        res.json(data['unknown'])
        console.log('not found')
    }
}) */

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})