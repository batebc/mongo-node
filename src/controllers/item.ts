import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getCarDetail, getCars, insertItem } from "../services/items";

const getItem = async({params}: Request, res:Response) => {
    try {
        const {id} = params;
        const getDetail = await getCarDetail(id);
        res.send(getDetail);
    } catch (error) {
        handleHttp(res, 'ERROR GET ITEM');
    }
};

const getItems =  async (req: Request, res:Response) => {
    try {
        const getAllItems = await getCars();
        res.send(getAllItems);
    } catch (e) {
        handleHttp(res, 'ERROR GET ITEMS', e);
    }
};

const updateItem = (req: Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR UPDATE ITEM');
    }
};

const createItem = async ({body}: Request, res:Response) => {
    try {
        const responseItem = await insertItem(body);
        res.send(responseItem);
    } catch (e) {
        handleHttp(res, 'ERROR CREATE ITEM', e);
    }
};

const deleteItem = (req: Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR DELETE ITEM');
    }
};

export { getItem, getItems, updateItem, createItem, deleteItem };
