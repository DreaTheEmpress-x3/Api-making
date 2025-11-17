const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT

//the url for requests http://localhost:5190

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/todos_db')
const db = mongoose.connection
db.on('error', (error) => console.error('FAIL:' + error))
db.once('open', () => {console.log('//// dis works yippie')})

const cors = require('cors')
app.use(cors({origin: true}))

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', async (req, res) => {
    console.log("GET: Serverens root endpoint")
    res.status(200).json( { 
        message: "Welcome bugger" 
    } );
} )

//routes

app.use('/todos', require('./routes/todos.routes'))

app.use((req,res)=>{
    res.status(404).json({
        message: "route not found, try again bugger",
        "endpoint/path not found": req.originalUrl
    })
})

app.listen(port, () => {
    console.log(`Serveren kører på` + port);
    })