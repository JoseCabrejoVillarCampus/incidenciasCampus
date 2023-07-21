import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {emailDTO} from "../dtocontroller/emaildto.js";
import { validate } from "class-validator";

const proxyEmail = express();
proxyEmail.use("/:id", async(req,res,next)=>{
    try {
        let data = plainToClass(emailDTO, req.body && req.params, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyEmail;