const express = require('express')
const blog=require('./mak/blog')
const app = express()
const port = 3000

app.use('/blog',blog)

app.get('/', (req, res) => {
  res.send('Hello World!')
}).post('/',(req,res)=>{
  res.send('get a post request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})