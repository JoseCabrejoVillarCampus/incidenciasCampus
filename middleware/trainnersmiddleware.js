import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {trainnersDTO} from "../dtocontroller/trainnersdto.js";
import { validate } from "class-validator";

const proxyTrainners = express();
proxyTrainners.use(async(req,res,next)=>{
    try {
        let data = plainToClass(trainnersDTO, req.body, { excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyTrainners;