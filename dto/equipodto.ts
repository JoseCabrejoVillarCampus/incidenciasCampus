import { Expose, Type, Transform } from 'class-transformer';
import { IsNumber, IsString, MaxLength, IsDefined } from 'class-validator';

export class equipoDTO {

    @Expose({ name: 'id_equipo' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id_equipo incumple los parametros acordados`};},{ toClassOnly: true})
    id_equipo: number;

    @Expose({ name: 'pantalla_equipo' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato pantalla_equipo incumple los parametros acordados`};},{ toClassOnly: true})
    pantalla_equipo: number;

    @Expose({ name: 'torre_equipo' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato torre_equipo incumple los parametros acordados`};},{ toClassOnly: true})
    torre_equipo: number;

    @Expose({ name: 'teclado_equipo' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato teclado_equipo incumple los parametros acordados`};},{ toClassOnly: true})
    teclado_equipo: number;

    @Expose({ name: 'mouse_equipo' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato mouse_equipo incumple los parametros acordados`};},{ toClassOnly: true})
    mouse_equipo: number;

    @Expose({ name: 'diadema_equipo' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato diadema_equipo incumple los parametros acordados`};},{ toClassOnly: true})
    diadema_equipo: number;

    @Expose({ name: 'salon_equipo' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato salon_equipo incumple los parametros acordados`};},{ toClassOnly: true})
    salon_equipo: number;
    
    @Expose({ name: 'id' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato id incumple los parametros acordados`};},{ toClassOnly: true})
    id: number;

    constructor(
        ID: number,
        pantalla:number,
        torre:number,
        teclado:number,
        mouse:number,
        diadema:number,
        salon:number,
        ID2 :number
    ) {
        this.id_equipo = ID;
        this.pantalla_equipo = pantalla;
        this.torre_equipo = torre;
        this.teclado_equipo = teclado;
        this.mouse_equipo = mouse;
        this.diadema_equipo = diadema;
        this.salon_equipo = salon;
        this.id = ID2;
    }
}