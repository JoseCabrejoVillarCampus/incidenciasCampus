import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {reporte_incidenciaDTO} from "../dtocontroller/reporte_incidencia.js";
import { validate } from "class-validator";

const proxyReporteIncidencia = express();
proxyReporteIncidencia.use(async(req,res,next)=>{
    try {
        let data = plainToClass(reporte_incidenciaDTO, req.body, { excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyReporteIncidencia;