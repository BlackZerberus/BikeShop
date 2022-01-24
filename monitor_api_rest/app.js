const express = require('express')
const path = require('path')
const {engine} = require('express-handlebars')

const app = express()

app.engine('hbs', engine({extname: '.hbs'}))
app.set('view engine', 'hbs')
app.set('views', './monitor_api_rest/views')

app.use('/css', express.static(path.resolve(__dirname + '/../node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.resolve(__dirname + '/../node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.resolve(__dirname + '/../node_modules/axios/dist')))
app.use('/js', express.static(__dirname + '/public'))

app.use('/tiendas', require('./routes/api.tiendas'))
app.use('/categorias', require('./routes/api.categorias'))
app.use('/marcas', require('./routes/api.marcas'))
app.use('/productos', require('./routes/api.productos'))
app.use('/', require('./routes/view.index'))

app.listen(3000, () => console.log("server up "))