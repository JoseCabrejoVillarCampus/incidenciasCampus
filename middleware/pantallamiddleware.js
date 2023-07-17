import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {pantallaDTO} from "../dtocontroller/pantalladto.js";
import { validate } from "class-validator";

const proxyPantalla = express();
proxyPantalla.use(async(req,res,next)=>{
    try {
        let data = plainToClass(pantallaDTO, req.body, { excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyPantalla;