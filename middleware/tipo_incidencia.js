import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {tipo_incidenciaDTO} from "../dtocontroller/tipo_incidencia.js";
import { validate } from "class-validator";

const proxyTipoIncidencia = express();
proxyTipoIncidencia.use(async(req,res,next)=>{
    try {
        let data = plainToClass(tipo_incidenciaDTO, req.body, { excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyTipoIncidencia;