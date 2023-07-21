import { Expose, Type, Transform } from 'class-transformer';
import { IsNumber, IsString, MaxLength, IsDefined } from 'class-validator';

export class telefonoDTO {

    @Expose({ name: 'id_telefono' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro id_diadema es obligatorio` }}}) */
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id_telefono incumple los parametros acordados`};},{ toClassOnly: true})
    id_telefono: number;

    @Expose({ name: 'numero_telefono' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro marca_diadema es obligatorio` }}})
    @MaxLength(20, {message: ()=>{throw {status: 401, message: `El parametro marca_diadema no puede pasar os 45 caracteres`}}}) */
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value)) return value; else throw {status: 400, message:`El dato numero_telefono incumple los parametros acordados`};},{ toClassOnly: true})
    numero_telefono: string;


    @Expose({ name: 'trainner_telefono' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato trainner_telefono incumple los parametros acordados`};},{ toClassOnly: true})
    trainner_telefono: number;

    @Expose({ name: 'id' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id incumple los parametros acordados`};},{ toClassOnly: true})
    id: number;


    constructor(
        ID: number,
        marca: string,
        estado:number,
        ID2: number
    ) {
        this.id_telefono = ID;
        this.numero_telefono = marca;
        this.trainner_telefono = estado;
        this.id = ID2;
    }
}