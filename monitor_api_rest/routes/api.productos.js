const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', async (req, res) => {
    try {
        const {id_tienda, id_categoria, id_marca} = req.query
        const consulta = `SELECT s.store_name AS "Tienda", p.product_id AS "ID Producto", p.product_name AS "Nombre Producto",
        stk.quantity AS "Inventario"
        FROM products p
        INNER JOIN stocks stk
        ON p.product_id = stk.product_id
        INNER JOIN stores s
        ON s.store_id = stk.store_id
        WHERE s.store_id = $1 AND p.category_id = $2 AND P.brand_id = $3
        ORDER BY "Nombre Producto" ASC;`
        const {rows} = await db.query(consulta, [id_tienda, id_categoria, id_marca])
        res.status(200).json(rows)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router