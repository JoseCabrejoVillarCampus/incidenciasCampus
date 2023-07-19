import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {pantallaDTO} from "../dtocontroller/pantalladto.js";
import { validate } from "class-validator";

const proxyPantalla = express();
proxyPantalla.use("/:id", async(req,res,next)=>{
    try {
        let data = plainToClass(pantallaDTO, req.body && req.params , { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyPantalla;