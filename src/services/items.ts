import { Car } from "../interfaces/car.interface";
import { ItemModel } from "../models/item";

const getCarDetail = async (id: string) => {
    //const responseDetail = await ItemModel.findById(id);
    const responseDetail = await ItemModel.findOne({_id : id});
    return responseDetail;
}

const getCars = async () => {
    const responseCars = await ItemModel.find({});
    return responseCars;
}

const insertItem = async (item:Car) => {
    const responseInsert =  await ItemModel.create(item);
    return responseInsert;
}

const updateCar = async (id:string, item:Car) => {
    const responseUpdateCar = await ItemModel.findOneAndUpdate({_id : id}, item, {new: true});
    return responseUpdateCar;
}

const deleteCar = async (id:string) => {
    const responseDeleItem = await ItemModel.findOneAndRemove({_id:id});
    return responseDeleItem;
}

export { getCarDetail, getCars, insertItem, updateCar, deleteCar};