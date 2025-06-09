const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log(req.query.name)
 
 res.send('Hello World! \n To see my profile change "localhost:3000/" to "localhost:3000/about"')
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname,'./index.html'));
  res.send("hi, vivek kumar")
})

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})
