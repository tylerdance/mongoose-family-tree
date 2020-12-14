const express = require('express')
const app = express();

app.use(express.urlencoded({ extended: false}));

const moongoose = require('mongoose')
moongoose.connect('mongodb://localhost/familyTree')

// shortcut to mongoose connection
const db = moongoose.connection;
// console.log(db);
db.once('open', () => {
    console.log(`Connected to mongodb on ${db.host}:${db.port}`);
})

db.on('error', (err) => {
    console.error(`database error: ${err}`);
})

app.get('/', (req, res) => {
    res.send('hi')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}`);
})