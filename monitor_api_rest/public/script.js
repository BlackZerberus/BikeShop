
const formulario = document.getElementById("form-consulta")
formulario.addEventListener('submit', async (e) => {
    e.preventDefault()
    const id_tienda = document.getElementById('tiendas').value
    const id_categoria = document.getElementById('categorias').value
    const id_marca = document.getElementById('marcas').value
    const {data} = await axios.get('http://localhost:3000/productos', {
        params: {
            id_tienda,
            id_categoria,
            id_marca
        }
    })
    
    const tbody = document.getElementById('tb-resultados')
    const resultados = data.reduce((tbody, row) => {
                                return tbody + `<tr><td>${row['Tienda']}</td><td>${row['ID Producto']}</td><td>${row['Nombre Producto']}</td><td>${row['Inventario']}</td><td><button class='btn btn-sm btn-primary'>VER</button></td></tr>`
                        },'')
    tbody.innerHTML = resultados
})