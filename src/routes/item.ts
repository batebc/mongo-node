import { Router, Request, Response } from "express";
import { createItem } from "../controllers/item";
import { getCarDetail } from "../services/items";

const router = Router();


router.get('', (req:Request, res:Response ) => {
    res.send({data:'Aqui van los modelos'});
});

router.get('/:id', getCarDetail);

router.post('', createItem);

 

export { router };