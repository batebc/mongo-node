import { Router } from "express";
import { chekJWT } from "../middleware/session";
import { getOrder } from "../controllers/order";


const router = Router();

router.get('/', chekJWT, getOrder);

export default {router};