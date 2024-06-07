import { Router } from "express";
import { getEmpleados, getEmpleadoId, postEmpleados, actualizarEmpleados, deleteEmpleados } from "../controllers/empleados.controladores.js";

const router = Router();

router.get("/empleados", getEmpleados);
router.get("/empleados/:id", getEmpleadoId);

router.post("/empleados", postEmpleados);

router.patch("/empleados/:id", actualizarEmpleados );

router.delete("/empleados/:id", deleteEmpleados);

export default router