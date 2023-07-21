import { Expose, Type, Transform } from 'class-transformer';
import { IsNumber, IsString, MaxLength, IsDefined, Matches } from 'class-validator';

export class trainnersDTO {

    @Expose({ name: 'id_trainner' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id_trainner incumple los parametros acordados`};},{ toClassOnly: true})
    id_trainner: number;

    @Expose({ name: 'nombre_trainner' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro nombre_trainner es obligatorio` }}})
    @MaxLength(80, {message: ()=>{throw {status: 401, message: `El parametro nombre_trainner no puede pasar os 45 caracteres`}}}) */
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value)) return value; else throw {status: 400, message:`El dato nombre_trainner incumple los parametros acordados`};},{ toClassOnly: true})
    nombre_trainner: string;

    @Expose({ name: 'jornada_trainner' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro jornada_trainner es obligatorio` }}})
    @MaxLength(20, {message: ()=>{throw {status: 401, message: `El parametro jornada_trainner no puede pasar os 45 caracteres`}}}) */
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value)) return value; else throw {status: 400, message:`El dato jornada_trainner incumple los parametros acordados`};},{ toClassOnly: true})
    jornada_trainner: string;

    @Expose({ name: 'id' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id incumple los parametros acordados`};},{ toClassOnly: true})
    id: number;


    constructor(
        ID: number,
        nombre: string,
        jornada: string,
        ID2: number
    ) {
        this.id_trainner = ID;
        this.nombre_trainner = nombre;
        this.jornada_trainner = jornada;
        this.id = ID2;
    }
}