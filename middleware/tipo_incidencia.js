import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {tipo_incidenciaDTO} from "../dtocontroller/tipo_incidencia.js";
import { validate } from "class-validator";

const proxyTipoIncidencia = express();
proxyTipoIncidencia.use("/:id", async(req,res,next)=>{
    try {
        let data = plainToClass(tipo_incidenciaDTO, req.body && req.params , { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyTipoIncidencia;