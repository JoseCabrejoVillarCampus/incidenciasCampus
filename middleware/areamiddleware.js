import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {areaDTO} from "../dtocontroller/areadto.js";
import { validate } from "class-validator";

const proxyArea = express();
proxyArea.use("/:id",async(req,res,next)=>{
    try {
        let data = plainToClass(areaDTO, req.body && req.params, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyArea;