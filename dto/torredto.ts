import { Expose, Type, Transform } from 'class-transformer';
import { IsNumber, IsString, MaxLength, IsDefined } from 'class-validator';

export class torreDTO {

    @Expose({ name: 'id_torre' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro id_torre es obligatorio` }}}) */
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id_torre incumple los parametros acordados`};},{ toClassOnly: true})
    id_torre: number;

    @Expose({ name: 'marca_torre' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro marca_torre es obligatorio` }}})
    @MaxLength(20, {message: ()=>{throw {status: 401, message: `El parametro marca_torre no puede pasar os 45 caracteres`}}}) */
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value)) return value; else throw {status: 400, message:`El dato marca_torre incumple los parametros acordados`};},{ toClassOnly: true})
    marca_torre: string;

    @Expose({ name: 'color_torre' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro color_torre es obligatorio` }}})
    @MaxLength(20, {message: ()=>{throw {status: 401, message: `El parametro color_torre no puede pasar os 45 caracteres`}}}) */
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value)) return value; else throw {status: 400, message:`El dato color_torre incumple los parametros acordados`};},{ toClassOnly: true})
    color_torre: string;

    @Expose({ name: 'estado_torre' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato estado_torre incumple los parametros acordados`};},{ toClassOnly: true})
    estado_torre: number;

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
        this.id_torre = ID;
        this.marca_torre = marca;
        this.color_torre = color;
        this.estado_torre = estado;
        this.id = ID2;
    }
}