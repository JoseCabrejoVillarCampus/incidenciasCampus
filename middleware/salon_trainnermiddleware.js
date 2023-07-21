import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {salon_trainnerDTO} from "../dtocontroller/salon_trainnerdto.js";
import { validate } from "class-validator";

const proxySalonTrainner = express();
proxySalonTrainner.use("/:id",async(req,res,next)=>{
    try {
        let data = plainToClass(salon_trainnerDTO, req.body && req.params, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxySalonTrainner;