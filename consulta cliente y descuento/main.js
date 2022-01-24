
const prompts = require('prompts')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

const main = async () => {
    const questions = [
        {
            type: "text",
            name: "nombre",
            message: "Ingrese el nombre del cliente: "
        },
        {
            type: "number",
            name: "monto",
            message: "Ingrese el monto a cobrar: "
        },
        {
            type: "number",
            name: "descuento",
            message: "Ingrese el porcentaje de descuento: "
        }
    ]

    try {
        const {nombre, monto, descuento} = await prompts(questions)
    
        const {clientes} = JSON.parse(fs.readFileSync('clientes.json', 'utf-8'))
    
        const archivo = clientes.some(cliente => cliente.nombre === nombre)?
        `Cliente: ${nombre}
        su compra es de ${monto} pesos
        su porcentaje de descuento ${descuento}% da un total de $${monto - monto * (descuento / 100)}`
        :`Sr(a): ${nombre} 
        Actualmente ud no es cliente en la tienda, por favor registrese para poder realizar compras.`

        const resultado = `${uuidv4()}.txt`
        fs.writeFileSync(resultado, archivo, 'utf-8')

        console.log(fs.readFileSync(resultado, 'utf-8'))
    } catch (error) {
        console.error(error) 
    }

}

main()
