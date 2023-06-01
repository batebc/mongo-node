import { Router } from "express";
import { register } from "../controllers/document";


const router = Router();
router.post('/register', register);
export { router };