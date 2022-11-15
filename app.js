const express = require('express')
const prodRouter = require('./api/productos')
const app = express()

const server = app.listen(8080, ()=> console.log('Servidor Activo'))

app.use(express.json())
app.use(express.static('public'))
app.use('/productos', prodRouter)
