import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {categoriaDTO} from "../dtocontroller/categoriadto.js"
import { validate } from "class-validator";

const proxyCategoria = express();
proxyCategoria.use(async(req,res,next)=>{
    try {
        let data = plainToClass(categoriaDTO, req.body, { excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyCategoria;