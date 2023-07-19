import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {salonDTO} from "../dtocontroller/salondto.js";
import { validate } from "class-validator";

const proxySalon = express();
proxySalon.use("/:id", async(req,res,next)=>{
    try {
        let data = plainToClass(salonDTO, req.body && req.params , { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxySalon;