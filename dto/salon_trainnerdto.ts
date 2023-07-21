import { Expose, Type, Transform } from 'class-transformer';
import { IsNumber, IsString, MaxLength, IsDefined } from 'class-validator';

export class salon_trainnerDTO {

    @Expose({ name: 'id_salon_trainner' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id_salon_trainner incumple los parametros acordados`};},{ toClassOnly: true})
    id_salon_trainner: number;

    @Expose({ name: 'id_trainner' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id_trainner incumple los parametros acordados`};},{ toClassOnly: true})
    id_trainner: number;

    @Expose({ name: 'id_salon' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id_salon incumple los parametros acordados`};},{ toClassOnly: true})
    id_salon: number;

    @Expose({ name: 'id' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id incumple los parametros acordados`};},{ toClassOnly: true})
    id: number;

    constructor(
        ID: number,
        trainner: number,
        salon: number,
        ID2: number
    ) {
        this.id_salon_trainner = ID;
        this.id_trainner = trainner;
        this.id_salon = salon;
        this.id= ID2;  
    }
}