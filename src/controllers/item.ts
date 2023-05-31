import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getCarDetail, getCars, insertItem, updateCar, deleteCar } from "../services/items";

const getItem = async({params}: Request, res:Response) => {
    try {
        const {id} = params;
        const getDetail = await getCarDetail(id);
        const data = getDetail ? getDetail : 'NOT FOUND';
        res.send(data);
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

const updateItem = async ({params, body}: Request, res:Response) => {
    try {   
        const { id } = params;
        const itemUpdated = await updateCar(id, body);
        res.send(itemUpdated);
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

const deleteItem = async ({params}: Request, res:Response) => {
    try {
        const {id } = params;
        const responseDeleteCar = await deleteCar(id);
        res.send(responseDeleteCar);
    } catch (error) {
        handleHttp(res, 'ERROR DELETE ITEM');
    }
};

export { getItem, getItems, updateItem, createItem, deleteItem };
