import { Pool } from "../../db/db.js"

//Muestra los Datos de la tabla empleados
export const getEmpleados = async (req, res) => {
   const [rows] = await Pool.query('SELECT * FROM empleados')
   res.json(rows)
}

//Muestra los Datos de la tabla empleados por id
export const getEmpleadoId = async (req,res) =>{
    const [rows] = await Pool.query('SELECT * FROM empleados WHERE id = ?',[req.params.id])
    if(rows.length <=0){
        res.status(404)
        res.send('Empleado no encontrado')
    }
    res.json(rows)
    res.send('Obteniendo empleado por id')
    
}

//Crea los Datos de la tabla empleados
export const postEmpleados = async (req, res) => { 
    const { nombre, salario } = req.body
    const [row] = await Pool.query('INSERT INTO empleados (nombre, salario) VALUES (?, ?)', [nombre, salario])
    res.send({
        id: row.insertId,
        nombre,
        salario,
    })
}

export const actualizarEmpleados = async (req, res) => { 
    const {id} = req.params
    const {nombre, salario} = req.body

    const [rows] = await Pool.query('UPDATE empleados SET nombre = IFNULL(?, nombre), salario = IFNULL(?, salario)  WHERE id = ?', [nombre, salario, id])

    if (rows.affectedRows == 0){
        res.status(404)
        res.send('Empleado no encontrado')
}else{
    res.send('Empleado actualizado')
}

}


//Elimina los Datos de la tabla empleados por id
export const deleteEmpleados = async (req, res) => { 
    const [row] = await Pool.query('DELETE FROM empleados WHERE id = ? ', [req.params.id])

    if(row.affectedRows == 0){
        res.status(404)
        res.send('Empleado no encontrado') 
    }

    res.sendStatus(204)
    res.send('Empleado eliminado')
    

}