import { Expose, Type, Transform } from 'class-transformer';
import { IsNumber, IsString, MaxLength, IsDefined } from 'class-validator';

export class mouseDTO {

    @Expose({ name: 'id_mouse' })
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro id_mouse es obligatorio` }}})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id_mouse incumple los parametros acordados`};},{ toClassOnly: true})
    id_mouse: number;

    @Expose({ name: 'marca_mouse' })
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro marca_mouse es obligatorio` }}})
    @MaxLength(20, {message: ()=>{throw {status: 401, message: `El parametro marca_mouse no puede pasar os 45 caracteres`}}})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value)) return value; else throw {status: 400, message:`El dato marca_mouse incumple los parametros acordados`};},{ toClassOnly: true})
    marca_mouse: string;

    @Expose({ name: 'color_mouse' })
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro color_mouse es obligatorio` }}})
    @MaxLength(20, {message: ()=>{throw {status: 401, message: `El parametro color_mouse no puede pasar os 45 caracteres`}}})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value)) return value; else throw {status: 400, message:`El dato color_mouse incumple los parametros acordados`};},{ toClassOnly: true})
    color_mouse: string;

    @Expose({ name: 'estado_mouse' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato estado_mouse incumple los parametros acordados`};},{ toClassOnly: true})
    estado_mouse: number;


    constructor(
        ID: number,
        marca: string,
        color:string,
        estado:number
    ) {
        this.id_mouse = ID;
        this.marca_mouse = marca;
        this.color_mouse = color;
        this.estado_mouse = estado;
    }
}