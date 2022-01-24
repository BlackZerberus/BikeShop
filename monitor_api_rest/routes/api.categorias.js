const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', async (req, res) => {
    try {
        const {rows} = await db.query('SELECT category_id, category_name FROM categories;')
        res.status(200).json(rows)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router