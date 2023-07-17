import { Expose, Type, Transform } from 'class-transformer';
import { IsNumber, IsString, MaxLength, IsDefined } from 'class-validator';

export class tecladoDTO {

    @Expose({ name: 'id_teclado' })
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro id_teclado es obligatorio` }}})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id_teclado incumple los parametros acordados`};},{ toClassOnly: true})
    id_teclado: number;

    @Expose({ name: 'marca_teclado' })
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro marca_teclado es obligatorio` }}})
    @MaxLength(20, {message: ()=>{throw {status: 401, message: `El parametro marca_teclado no puede pasar os 45 caracteres`}}})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value)) return value; else throw {status: 400, message:`El dato marca_teclado incumple los parametros acordados`};},{ toClassOnly: true})
    marca_teclado: string;

    @Expose({ name: 'color_teclado' })
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro color_teclado es obligatorio` }}})
    @MaxLength(20, {message: ()=>{throw {status: 401, message: `El parametro color_teclado no puede pasar os 45 caracteres`}}})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value)) return value; else throw {status: 400, message:`El dato color_teclado incumple los parametros acordados`};},{ toClassOnly: true})
    color_teclado: string;

    @Expose({ name: 'estado_teclado' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato estado_teclado incumple los parametros acordados`};},{ toClassOnly: true})
    estado_teclado: number;


    constructor(
        ID: number,
        marca: string,
        color:string,
        estado:number
    ) {
        this.id_teclado = ID;
        this.marca_teclado = marca;
        this.color_teclado = color;
        this.estado_teclado = estado;
    }
}