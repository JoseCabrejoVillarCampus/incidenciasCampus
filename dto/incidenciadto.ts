import { Expose, Type, Transform } from 'class-transformer';
import { IsNumber, IsString, MaxLength, IsDefined } from 'class-validator';

export class incidenciaDTO {

    @Expose({ name: 'id_incidencia' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id_incidencia incumple los parametros acordados`};},{ toClassOnly: true})
    id_incidencia: number;

    @Expose({ name: 'categoria_incidencia' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato categoria_incidencia incumple los parametros acordados`};},{ toClassOnly: true})
    categoria_incidencia: number;

    @Expose({ name: 'tipo_incidencia' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato tipo_incidencia incumple los parametros acordados`};},{ toClassOnly: true})
    tipo_incidencia: number;

    @Expose({ name: 'descripcion_incidencia' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro nombre_area es obligatorio` }}})
    @MaxLength(200, {message: ()=>{throw {status: 401, message: `El parametro descripcion_incidencia no puede pasar os 45 caracteres`}}}) */
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value)) return value; else throw {status: 400, message:`El dato descripcion_incidencia incumple los parametros acordados`};},{ toClassOnly: true})
    descripcion_incidencia: string;

    @Expose({ name: 'fecha_incidencia' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato fecha_incidencia incumple los parametros acordados`};},{ toClassOnly: true})
    fecha_incidencia: number;

    @Expose({ name: 'equipo_incidencia' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato equipo_incidencia incumple los parametros acordados`};},{ toClassOnly: true})
    equipo_incidencia: number;

    @Expose({ name: 'lugar_incidencia' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato lugar_incidencia incumple los parametros acordados`};},{ toClassOnly: true})
    lugar_incidencia: number;

    @Expose({ name: 'trainner_reporta_incidencia' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato trainner_reporta_incidencia incumple los parametros acordados`};},{ toClassOnly: true})
    trainner_reporta_incidencia: number;
    
    @Expose({ name: 'id' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id incumple los parametros acordados`};},{ toClassOnly: true})
    id: number;


    constructor(
        ID: number,
        categoria: number,
        incidencia: number,
        descripcion: string,
        fecha: number,
        equipo: number,
        lugar: number,
        trainner: number,
        ID2: number
    ) {
        this.id_incidencia = ID;
        this.categoria_incidencia = categoria;
        this.tipo_incidencia = incidencia;
        this.descripcion_incidencia = descripcion;
        this.fecha_incidencia = fecha;
        this.equipo_incidencia = equipo;
        this.lugar_incidencia = lugar;
        this.trainner_reporta_incidencia = trainner;
        this.id = ID2;
    }
}