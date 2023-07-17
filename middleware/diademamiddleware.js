import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {diademaDTO} from "../dtocontroller/diademadto.js";
import { validate } from "class-validator";

const proxyDiadema = express();
proxyDiadema.use(async(req,res,next)=>{
    try {
        let data = plainToClass(diademaDTO, req.body, { excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyDiadema;