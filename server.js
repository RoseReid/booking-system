const express = require('express')
const app = express()
var path = require('path')

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.listen(3000, () => console.log('rose has set up a server, bitches'))
