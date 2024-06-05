import express from "express";
import empleadosRutas  from "./routes/empleados.routes.js";
import indexRutas from "./routes/index.routes.js";

const app = express();

app.use(express.json())

app.use(indexRutas)
app.use('/api' ,empleadosRutas)

app.listen(3006, () =>{
    console.log("Servidor corriendo en el puerto 3006");
})