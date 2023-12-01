const mongoose = require('mongoose');
require('dotenv').config();

// console.log('connection link', process.env.CONNECTION_LINK)
mongoose.connect(process.env.CONNECTION_LINK
).then(() => {
    console.log('connection successfully');
}).catch((e) => {
    console.log('No connection', e.message);
})