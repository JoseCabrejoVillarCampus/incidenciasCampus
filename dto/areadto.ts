import { Expose, Type, Transform } from 'class-transformer';
import { IsNumber, IsString, MaxLength, IsDefined } from 'class-validator';

export class areaDTO {

    @Expose({ name: 'id_area' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id_area incumple los parametros acordados`};},{ toClassOnly: true})
    id_area: number;

    @Expose({ name: 'nombre_area' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro nombre_area es obligatorio` }}})
    @MaxLength(20, {message: ()=>{throw {status: 401, message: `El parametro nombre_area no puede pasar os 45 caracteres`}}}) */
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value)) return value; else throw {status: 400, message:`El dato nombre_area incumple los parametros acordados`};},{ toClassOnly: true})
    nombre_area: string;

    @Expose({ name: 'id' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id incumple los parametros acordados`};},{ toClassOnly: true})
    id: number;

    constructor(
        ID: number,
        area: string,
        ID2 :number
    ) {
        this.id_area = ID;
        this.nombre_area = area;
        this.id = ID2;
    }
}