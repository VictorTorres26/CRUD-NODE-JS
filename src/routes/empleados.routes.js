import { Router } from "express";
import { getEmpleados, getEmpleadoId, postEmpleados, putEmpleados, deleteEmpleados } from "../controllers/empleados.controladores.js";

const router = Router();

router.get("/empleados", getEmpleados);
router.get("/empleados/:id", getEmpleadoId);

router.post("/empleados", postEmpleados);

router.put("/empleados", putEmpleados);

router.delete("/empleados", deleteEmpleados);

export default router