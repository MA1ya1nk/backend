const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send('Hello World! here is mayank i am learning express heheheh')
})
app.get('/blog', (req, res) => {
  res.send('welcome to my blog')
})

app.get('/blog/:slug', (req, res) => {
  res.send(`hey this is ${req.params.slug}`)
})
app.get('/main', (req, res) => {
  res.sendFile('main.html',{root: __dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})