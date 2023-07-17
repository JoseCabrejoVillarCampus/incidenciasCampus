import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {tecladoDTO} from "../dtocontroller/tecladodto.js";
import { validate } from "class-validator";

const proxyTeclado = express();
proxyTeclado.use(async(req,res,next)=>{
    try {
        let data = plainToClass(tecladoDTO, req.body, { excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyTeclado;