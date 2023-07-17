import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {equipoDTO} from "../dtocontroller/equipoidto.js";
import { validate } from "class-validator";

const proxyEquipo = express();
proxyEquipo.use(async(req,res,next)=>{
    try {
        let data = plainToClass(equipoDTO, req.body, { excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyEquipo;