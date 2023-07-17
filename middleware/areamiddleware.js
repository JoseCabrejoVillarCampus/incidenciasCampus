import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {areaDTO} from "../dtocontroller/areadto.js";
import { validate } from "class-validator";

const proxyArea = express();
proxyArea.use(async(req,res,next)=>{
    try {
        let data = plainToClass(areaDTO, req.body, { excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyArea;