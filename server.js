const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient;
const PORT = 8000
require('dotenv').config()

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'library'

MongoClient.connect(dbConnectionStr, {useUnifiedTopology: true})
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
    .then(data => {
        res.render('index.ejs', {info: data})
    })
    .catch(err => console.error(err))
})

app.post('/addAuthor', (req,res) => {
    db.collection('authors').insertOne({
        name: req.body.name,
        fullName: req.body.fullName,
        birthYear: req.body.birthYear,
        selectedWorks: req.body.selectedWorks
    })
    .then(result => {
        console.log('author added')
        res.redirect('/')
    })
    .catch(err => console.error(err))
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})