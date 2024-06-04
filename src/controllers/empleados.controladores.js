import { Pool } from "../../db/db.js"

export const getEmpleados = (req, res) => { res.send('Metodo GET Empledos') }

export const postEmpleados = async (req, res) => { 
    const { nombre, salario } = req.body
    const [row] = await Pool.query('INSERT INTO empleados (nombre, salario) VALUES (?, ?)', [nombre, salario])
    res.send({
        id: row.insertId,
        nombre,
        salario
    })
}

export const putEmpleados = (req, res) => { res.send("Metodo PUT Empleados") }

export const deleteEmpleados = (req, res) => { res.send("Metodo Delete Empleados") }