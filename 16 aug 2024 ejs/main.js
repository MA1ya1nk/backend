const express = require('express')
const app = express()
const mongoose=require('mongoose')
const Employee=require("./models/Employee")


 mongoose.connect('mongodb://localhost:27017/company');
const port = 3000

const getRandom=(arr)=>{
  let rno=Math.floor(Math.random()*(arr.length-1))
  return arr[rno]
}


app.set('view engine','ejs');

app.get('/', (req, res) => {
  res.render('index',{foo:'FOO'});
})

app.get('/generate', async (req,res) => {
  let randomNames=['mayank','shivani','sapna','duggu']
  let randomCities=['meethapur','molarband','tajpur']
for (let index = 0; index < 5; index++) {
  
    
    let e= await Employee.create({
     name: getRandom(randomNames),
     salary: Math.floor(Math.random()*200000),
     city: getRandom(randomCities),
     isManager: true
    })
    // const employee=new Employee({
    //   name: "mayank",
    //    salary: 200000,
    //    city: "delhi",
    //    isManager: true
    // })
    // employee.save()
    await e.save()
    console.log(e);
    
}
res.render('index',{foo:'FOO'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})