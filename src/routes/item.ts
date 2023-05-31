import { Router, Request, Response } from "express";
import { createItem, deleteItem, getItems, updateItem } from "../controllers/item";
import { getCarDetail } from "../services/items";
import { logMiddleware } from "../middleware/log";

const router = Router();
router.get('', getItems);
router.get('/:id', logMiddleware , getCarDetail);
router.post('', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);
export { router };