const express = require('express')
const router = express.Router()
const axios = require('axios').default

router.get('/', async (req, res) => {
    try {
        const tiendas = await axios.get('http://localhost:3000/tiendas')
        const categorias = await axios.get('http://localhost:3000/categorias')
        const marcas = await axios.get('http://localhost:3000/marcas')
        res.status(200).render('home', {
            tiendas: tiendas.data,
            categorias: categorias.data,
            marcas: marcas.data
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router