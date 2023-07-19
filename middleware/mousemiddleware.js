import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {mouseDTO} from "../dtocontroller/mousedto.js";
import { validate } from "class-validator";

const proxyMouse = express();
proxyMouse.use("/:id", async(req,res,next)=>{
    try {
        let data = plainToClass(mouseDTO, req.body && req.params , { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyMouse;