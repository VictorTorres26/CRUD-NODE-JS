import { Router } from "express";

const router = Router();

router.get("/home", (req, res) => { res.send("Metodo GET") });
router.post("/about", (req, res) => { res.send("Metodo POST") });
router.put("/", (req, res) => { res.send("Metodo PUT") });
router.delete("/", (req, res) => { res.send("Metodo DELETE") });

export default router