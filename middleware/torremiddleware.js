import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {torreDTO} from "../dtocontroller/torredto.js";
import { validate } from "class-validator";

const proxyTorre = express();
proxyTorre.use("/:id", async(req,res,next)=>{
    try {
        let data = plainToClass(torreDTO, req.body && req.params , { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyTorre;