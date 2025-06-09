const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log(req.query.name)
  res.sendFile(path.join(__dirname,'./index.html'));
//   res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send("hi, vivek kumar")
})

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})