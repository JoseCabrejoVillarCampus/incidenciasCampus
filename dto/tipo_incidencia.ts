import { Expose, Type, Transform } from 'class-transformer';
import { IsNumber, IsString, MaxLength, IsDefined } from 'class-validator';

export class tipo_incidenciaDTO {

    @Expose({ name: 'id_tipo_incidencia' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id_tipo_incidencia incumple los parametros acordados`};},{ toClassOnly: true})
    id_tipo_incidencia: number;

    @Expose({ name: 'tipo_incidencia' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro tipo_incidencia es obligatorio` }}})
    @MaxLength(20, {message: ()=>{throw {status: 401, message: `El parametro gen_nombre no puede pasar os 45 caracteres`}}}) */
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value)) return value; else throw {status: 400, message:`El dato tipo_incidencia incumple los parametros acordados`};},{ toClassOnly: true})
    tipo_incidencia: string;

    @Expose({ name: 'id' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id incumple los parametros acordados`};},{ toClassOnly: true})
    id: number;

    constructor(
        ID: number,
        incidencia: string,
        ID2: number
    ) {
        this.id_tipo_incidencia = ID;
        this.tipo_incidencia = incidencia;
        this.id = ID2;
    }
}