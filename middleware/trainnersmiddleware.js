import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {trainnersDTO} from "../dtocontroller/trainnersdto.js";
import { validate } from "class-validator";

const proxyTrainners = express();
proxyTrainners.use("/:id", async(req,res,next)=>{
    try {
        let data = plainToClass(trainnersDTO, req.body && req.params , { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyTrainners;