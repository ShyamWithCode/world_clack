const express = require('express')
const path = require('path')
const app = express()
const port = 5500

app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.sendFile(path.join(__dirname,"template/index.html"))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})