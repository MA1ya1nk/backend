const express=require('express')
const rout=express.Router()

rout.get('/',(req,res)=>{
    res.send('home page')
})
rout.get('/:slug',(req,res)=>{
    res.send(`hello ${req.params.slug}`)
})
module.exports=rout