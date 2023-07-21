import { Expose, Type, Transform } from 'class-transformer';
import { IsNumber, IsString, MaxLength, IsDefined } from 'class-validator';

export class emailDTO {

    @Expose({ name: 'id_email' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro id_diadema es obligatorio` }}}) */
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id_email incumple los parametros acordados`};},{ toClassOnly: true})
    id_email: number;

    @Expose({ name: 'email' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro marca_diadema es obligatorio` }}})
    @MaxLength(20, {message: ()=>{throw {status: 401, message: `El parametro marca_diadema no puede pasar os 45 caracteres`}}}) */
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value)) return value; else throw {status: 400, message:`El dato email incumple los parametros acordados`};},{ toClassOnly: true})
    email: string;


    @Expose({ name: 'trainner_email' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato trainner_email incumple los parametros acordados`};},{ toClassOnly: true})
    trainner_email: number;

    @Expose({ name: 'id' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id incumple los parametros acordados`};},{ toClassOnly: true})
    id: number;


    constructor(
        ID: number,
        email: string,
        trainer:number,
        ID2: number
    ) {
        this.id_email = ID;
        this.email = email;
        this.trainner_email = trainer;
        this.id = ID2;
    }
}