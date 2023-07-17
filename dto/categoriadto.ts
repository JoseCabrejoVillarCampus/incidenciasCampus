import { Expose, Type, Transform } from 'class-transformer';
import { IsNumber, IsString, MaxLength, IsDefined } from 'class-validator';

export class categoriaDTO {

    @Expose({ name: 'id_categoria' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id_categoria incumple los parametros acordados`};},{ toClassOnly: true})
    id_categoria: number;

    @Expose({ name: 'tipo_categoria' })
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro tipo_categoria es obligatorio` }}})
    @MaxLength(20, {message: ()=>{throw {status: 401, message: `El parametro tipo_categoria no puede pasar os 45 caracteres`}}})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value)) return value; else throw {status: 400, message:`El dato tipo_categoria incumple los parametros acordados`};},{ toClassOnly: true})
    tipo_categoria: string;


    constructor(
        ID: number,
        categoria: string,
    ) {
        this.id_categoria = ID;
        this.tipo_categoria = categoria;
    }
}