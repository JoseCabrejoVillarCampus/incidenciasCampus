import { Expose, Type, Transform } from 'class-transformer';
import { IsNumber, IsString, MaxLength, IsDefined } from 'class-validator';

export class pantallaDTO {

    @Expose({ name: 'id_pantalla' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro id_pantalla es obligatorio` }}}) */
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id_pantalla incumple los parametros acordados`};},{ toClassOnly: true})
    id_pantalla: number;

    @Expose({ name: 'marca_pantalla' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro marca_pantalla es obligatorio` }}})
    @MaxLength(20, {message: ()=>{throw {status: 401, message: `El parametro marca_pantalla no puede pasar os 45 caracteres`}}}) */
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value)) return value; else throw {status: 400, message:`El dato marca_pantalla incumple los parametros acordados`};},{ toClassOnly: true})
    marca_pantalla: string;

    @Expose({ name: 'color_pantalla' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro color_pantalla es obligatorio` }}})
    @MaxLength(20, {message: ()=>{throw {status: 401, message: `El parametro color_pantalla no puede pasar os 45 caracteres`}}}) */
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value)) return value; else throw {status: 400, message:`El dato color_pantalla incumple los parametros acordados`};},{ toClassOnly: true})
    color_pantalla: string;

    @Expose({ name: 'estado_pantalla' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato estado_pantalla incumple los parametros acordados`};},{ toClassOnly: true})
    estado_pantalla: number;

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
        this.id_pantalla = ID;
        this.marca_pantalla = marca;
        this.color_pantalla = color;
        this.estado_pantalla = estado;
        this.id = ID2;
    }
}