import { Expose, Type, Transform } from 'class-transformer';
import { IsNumber, IsString, MaxLength, IsDefined } from 'class-validator';

export class diademaDTO {

    @Expose({ name: 'id_diadema' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro id_diadema es obligatorio` }}}) */
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id_diadema incumple los parametros acordados`};},{ toClassOnly: true})
    id_diadema: number;

    @Expose({ name: 'marca_diadema' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro marca_diadema es obligatorio` }}})
    @MaxLength(20, {message: ()=>{throw {status: 401, message: `El parametro marca_diadema no puede pasar os 45 caracteres`}}}) */
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value)) return value; else throw {status: 400, message:`El dato marca_diadema incumple los parametros acordados`};},{ toClassOnly: true})
    marca_diadema: string;

    @Expose({ name: 'color_diadema' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro color_diadema es obligatorio` }}})
    @MaxLength(20, {message: ()=>{throw {status: 401, message: `El parametro color_diadema no puede pasar os 45 caracteres`}}}) */
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value)) return value; else throw {status: 400, message:`El dato color_diadema incumple los parametros acordados`};},{ toClassOnly: true})
    color_diadema: string;

    @Expose({ name: 'estado_diadema' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato estado_diadema incumple los parametros acordados`};},{ toClassOnly: true})
    estado_diadema: number;

    @Expose({ name: 'id' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id incumple los parametros acordados`};},{ toClassOnly: true})
    id: number;


    constructor(
        ID: number,
        marca: string,
        color:string,
        estado:number,
        ID2: number
    ) {
        this.id_diadema = ID;
        this.marca_diadema = marca;
        this.color_diadema = color;
        this.estado_diadema = estado;
        this.id = ID2;
    }
}