import { Expose, Type, Transform } from 'class-transformer';
import { IsNumber, IsString, MaxLength, IsDefined, IsDate } from 'class-validator';

export class reporte_incidenciaDTO {

    @Expose({ name: 'id_reporte' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id_reporte incumple los parametros acordados`};},{ toClassOnly: true})
    id_reporte: number;

    @Expose({ name: 'fecha_reporte' })
    @IsDate()
    @Transform(({value})=> {if(/^\d{4}-\d{2}-\d{2}$/.test(value) || value == undefined) return(value); else throw {status: 400, message:`el parámetro ingresado para fecha_reporte no es válido, debe seguir la sintaxis AAAA-MM-DD`};}, {toClassOnly:true})
    fecha_reporte: Date;

    @Expose({ name: 'id' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id incumple los parametros acordados`};},{ toClassOnly: true})
    id: number;


    constructor(
        ID: number,
        fecha: Date,
        ID2: number
    ) {
        this.id_reporte = ID;
        this.fecha_reporte = fecha;
        this.id = ID2;
    }
}