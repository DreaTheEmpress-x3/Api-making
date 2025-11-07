const express = require('express')
const router = express.Router()

const Todo =  require('../models/todos.model')

router.get('/', async (req, res)=>{
    console.log("GET: hent alle qoutes")
    res.status(200).json({
        message:"your quite the bugger"
    })
})

router.get('/:id', async (req, res)=>{
    console.log("GET: hent alle qoutes" + req.params.id)
    res.status(200).json({
        message:"your quite the bugger" + req.params.id
    })
})

router.post('/', async (req, res)=>{
    console.log("POST: create qoutes")
    res.status(201).json({
        message:"your quite the bugger"
    })
})

router.put('/:id', async (req, res)=>{
    console.log("PUT: ret udvalgt todo med id:" + req.params.id)
    res.status(201).json({
        message:"your quite the bugger" + req.id
    })
})

router.delete('/:id', async (req, res)=>{
    console.log("DELETE: slet udvalgt todo med id:" + req.params.id)
    res.status(201).json({
        message:"your quite the bugger" + req.id
    })
})


module.exports = router