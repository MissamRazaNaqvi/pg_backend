const express = require("express");
require('./src/db/connection')
const cors = require('cors');
const app = express();
app.use(cors())

app.get('/', (req, res) => {
    console.log('hello');
    res.send('hello')
})

app.post('/student', (req, res) => {
    console.log(req.body);
    res.send('hello')
})
app.listen(8000, () => { console.log('listening') })