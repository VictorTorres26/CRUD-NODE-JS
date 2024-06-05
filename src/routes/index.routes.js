import { Router } from "express";
import { Pool } from "../../db/db.js";

const router = Router();

router.get('/ping', async (req, res) => { 
    const [result] = await Pool.query('SELECT 1+1 AS result')
    res.json(result);

})

export default router;