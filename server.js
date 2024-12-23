const express = require('express')
const path = require('path')
const connection = require('./connection')
const port = 3000;
const replicaApp = process.env.APP_NAME

const app = express()
app.use(express.json())

connection()

app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.use('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(`Request Sent ${replicaApp}`)
})

app.listen(port,()=>{console.log(`Server listening on ${port} :)`)})