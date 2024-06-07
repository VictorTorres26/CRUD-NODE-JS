import { Pool } from "../../db/db.js"

export const getEmpleados = async (req, res) => {
   const [rows] = await Pool.query('SELECT * FROM empleados')
   res.json(rows)
}

export const getEmpleadoId = async (req,res) =>{
    const [rows] = await Pool.query('SELECT * FROM empleados WHERE id = ?',[req.params.id])
    if(rows.length <=0){
        res.status(404)
        res.send('Empleado no encontrado')
    }
    res.json(rows)
    res.send('Obteniendo empleado por id')
    
}

export const postEmpleados = async (req, res) => { 
    const { nombre, salario } = req.body
    const [row] = await Pool.query('INSERT INTO empleados (nombre, salario) VALUES (?, ?)', [nombre, salario])
    res.send({
        id: row.insertId,
        nombre,
        salario,
    })
}

export const putEmpleados = (req, res) => { res.send("Metodo PUT Empleados") }

export const deleteEmpleados = (req, res) => { res.send("Metodo Delete Empleados") }