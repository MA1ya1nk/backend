const express = require('express')
const app = express()
const mongoose=require('mongoose');
const Employee=require("./models/Employee")

mongoose.connect('mongodb://localhost:27017/company')
const port = 3000


app.set('view engine','ejs');

app.get('/', (req, res) => {
  res.render('index',{foo:'FOO'})
})

app.get('/generate', async (req, res) => {

 for (let index = 0; index < 10; index++) {
    let e= await Employee.create({
        name: "mayank",
        city: "delhi",
        salary: 20000,
        isManager: false
    })
    console.log(r);
    
 }
    res.render('index',{foo:'FOO'})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
