//To check the PORT=5000 working or not?...
/*
require('dotenv').config()

const PORT = process.env.PORT

const server = () => {
    console.log("You are listening to port: ", PORT) 
}
server() 
*/

//-----------------------------------------------------------------
//To get the access to the server(http://localhost:5000/)...anddd to check the DB connectivity

/* 
const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const app  = express()

require('dotenv').config()

const PORT = process.env.PORT


//middle wares
app.use(express.json())
app.use(cors())

// app.get('/', (req,res)=> {
//     res.send("Hello Goddd!")
// })


const server= () => {
    db()
    app.listen(PORT, () => {
        console.log("listening to port: ",PORT)        
    })
}

server()

*/

//-------------------------------------------------------
//To check the DB connectivity...

// /*

//s2***
const express =require('express')
const cors= require('cors');
const  {db} = require('./db/db');
//this line 50 will read information in a specified directory
const {readdirSync} = require('fs')//we imported file system(fs) using require method
const app = express()


require('dotenv').config()

const PORT = process.env.PORT

// middle_wares
app.use(express.json())
app.use(cors())//we can put our host/domain etc..

//routes
//this readdirSync going to read whatever files we have in this routes folder here (http://localhost:5000/api/v1)
//s4***
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))


const server = () => {
    //this will call the db function and it will connect us to DB
    //s3***
    db() 
    app.listen(PORT, () =>{
        console.log("You are listening to port: ", PORT)        
    })
}
server()
// */