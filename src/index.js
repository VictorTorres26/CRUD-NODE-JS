import express from "express";
import empleadosRutas  from "./routes/empleados.routes.js";
import indexRutas from "./routes/index.routes.js";
import { config } from "dotenv";

config();

const app = express();

app.use(express.json());

app.use(indexRutas);
app.use('/api' ,empleadosRutas);

app.use((req, res, next) => {
    res.status(404)
    res.send('Ruta no encontrada')
})


app.listen(3006, () =>{
    console.log("Servidor corriendo en el puerto 3006");
})