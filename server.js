const express = require('express')
const app = express()
const PORT = 8000


const authors = {
    'j.r.r. tolkien': {
        'fullName': 'John Ronald Reuel Tolkien',
        'birthYear': '3 January 1892',
        'selectedWorks': ['The Hobbit', 'The Lord of the Rings', 'The Silmarillion'], 
    },
    'lewis carroll': {
        'fullName': 'Charles Lutwidge Dodgson',
        'birthYear': '27 January 1832',
        'selectedWorks': ['Alice\'s Adventures in Wonderland', 'Through the Looking-Glass', 'What the Tortoise Said to Achilles']
    },
    'unknown': {
        'fullName': 'unknown',
        'birthYear': 'unknown',
        'selectedWorks': 'unkown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const authorName = req.params.name.toLowerCase()
    if( authors[authorName] ) {
        res.json(authors[authorName])
    } else {
        res.json(authors['unknown'])
    }
    
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})