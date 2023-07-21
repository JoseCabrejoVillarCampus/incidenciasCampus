import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {telefonoDTO} from "../dtocontroller/telefonodto.js";
import { validate } from "class-validator";

const proxyTelefono = express();
proxyTelefono.use("/:id", async(req,res,next)=>{
    try {
        let data = plainToClass(telefonoDTO, req.body && req.params, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyTelefono;