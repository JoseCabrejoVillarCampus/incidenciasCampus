import { Expose, Type, Transform } from 'class-transformer';
import { IsNumber, IsString, MaxLength, IsDefined } from 'class-validator';

export class salonDTO {

    @Expose({ name: 'id_salon' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id_salon incumple los parametros acordados`};},{ toClassOnly: true})
    id_salon: number;

    @Expose({ name: 'nombre_salon' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro nombre_salon es obligatorio` }}})
    @MaxLength(20, {message: ()=>{throw {status: 401, message: `El parametro nombre_salon no puede pasar os 45 caracteres`}}}) */
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value)) return value; else throw {status: 400, message:`El dato nombre_salon incumple los parametros acordados`};},{ toClassOnly: true})
    nombre_salon: string;

    @Expose({ name: 'trainner_salon' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato trainner_salon incumple los parametros acordados`};},{ toClassOnly: true})
    trainner_salon: number;

    @Expose({ name: 'area_salon' })
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato area_salon incumple los parametros acordados`};},{ toClassOnly: true})
    area_salon: number;

    @Expose({ name: 'id' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id incumple los parametros acordados`};},{ toClassOnly: true})
    id: number;


    constructor(
        ID: number,
        salon: string,
        trainner: number,
        area: number,
        ID2: number
    ) {
        this.id_salon = ID;
        this.nombre_salon = salon;
        this.trainner_salon = trainner;
        this.area_salon = area;
        this.id = ID2;
    }
}