import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {salonDTO} from "../dtocontroller/salondto.js";
import { validate } from "class-validator";

const proxySalon = express();
proxySalon.use(async(req,res,next)=>{
    try {
        let data = plainToClass(salonDTO, req.body, { excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxySalon;