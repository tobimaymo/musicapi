const express = require('express')
const router = express.Router()

let productos = []

const middleware = (req, res, next) => {
    let producto = req.body
    if (!producto.title || !producto.price || !producto.thumbnail || !producto.author) return res.status(400).send({err: 'Faltan datos!'})
    next()
}

router.get('/', (req, res) => {
    res.send({productos})
})
router.get('/:id', (req, res) => {
    let parametro = req.params.id
    res.send(parametro)
})
router.post('/', middleware, (req, res) => {
    let producto = req.body
    productos.push(producto)
    res.send({message: 'posted', producto})
})
// router.put('/:id', (req, res) => {
//     
// })
// router.delete('/:id', (req, res) => {
//    
// })

module.exports = router