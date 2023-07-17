import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {incidenciaDTO} from "../dtocontroller/incidenciadto.js";
import { validate } from "class-validator";

const proxyIncidencia = express();
proxyIncidencia.use(async(req,res,next)=>{
    try {
        let data = plainToClass(incidenciaDTO, req.body, { excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyIncidencia;