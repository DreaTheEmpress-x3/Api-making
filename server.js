const express = require('express');
const app = express();
const port = 5190;

//the url for requests http://localhost:5190

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/quotes_db')
const db = mongoose.connection
db.on('error', (error) => console.error('FAIL:' + error))
db.once('open', () => {console.log('//// dis works yippie')})

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/todos')


app.get('/', async (req, res) => {
    console.log("GET: Serverens root endpoint")
    res.status(200).json( { 
        message: "Welcome bugger" 
    } );
} )

//routes

app.use('/todos', require('./routes/todos.routes'))

app.use((req,res)=>{
    return res.status(404).json(
        {
            message: "this appears to not exist"
        }
    )
})

app.listen(port, () => {
    console.log(`Serveren kører på` + port);
    })