import { Pool } from "../../db/db.js"

//Muestra los Datos de la tabla empleados
export const getEmpleados = async (req, res) => {
    try{
        const [rows] = await Pool.query('SELECT * FROM empleados')
        res.json(rows)
    }catch(error){
        res.status(500)
        res.send('Error al obtener los empleados')
    }
}

//Muestra los Datos de la tabla empleados por id
export const getEmpleadoId = async (req,res) =>{
    try{
        const [rows] = await Pool.query('SELECT * FROM empleados WHERE id = ?',[req.params.id])
        if(rows.length <=0){
            res.status(404)
            res.send('Empleado no encontrado')
        }
        res.json(rows)
        res.send('Obteniendo empleado por id')
    }catch(error){
        res.status(500)
        res.send('Error al obtener el empleado')
    }
    
}

//Crea los Datos de la tabla empleados
export const postEmpleados = async (req, res) => { 
    try{
        const { nombre, salario } = req.body
        const [row] = await Pool.query('INSERT INTO empleados (nombre, salario) VALUES (?, ?)', [nombre, salario])
        res.send({
            id: row.insertId,
            nombre,
            salario,
        }) 
    }catch(error){
        res.status(500)
        res.send('Error al insertar el empleado')
    }
}

export const actualizarEmpleados = async (req, res) => { 
    try{
        const {id} = req.params
        const {nombre, salario} = req.body

        const [rows] = await Pool.query('UPDATE empleados SET nombre = IFNULL(?, nombre), salario = IFNULL(?, salario)  WHERE id = ?', [nombre, salario, id])

        if (rows.affectedRows == 0){
            res.status(404)
            res.send('Empleado no encontrado')}
        else{
            res.send('Empleado actualizado')
    } 
    }catch(error){
        res.status(500)
        res.send('Error al actualizar el empleado')
    }

}


//Elimina los Datos de la tabla empleados por id
export const deleteEmpleados = async (req, res) => { 
    try{
        const [row] = await Pool.query('DELETE FROM empleados WHERE id = ? ', [req.params.id])

    if(row.affectedRows == 0){
        res.status(404)
        res.send('Empleado no encontrado') 
    }
    res.sendStatus(204)
    res.send('Empleado eliminado')
    
}catch(error){
    res.status(500)
    res.send('Error al eliminar el empleado')
}

    }