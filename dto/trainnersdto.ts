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

    @Expose({ name: 'email_trainner_personal' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro email_trainner_personal es obligatorio` }}})
    @MaxLength(30, {message: ()=>{throw {status: 401, message: `El parametro email_trainner_personal no puede pasar os 45 caracteres`}}}) */
    @Transform(({value})=>{if(/^[a-zA-Z0-9 áéíóúÁÉÍÓÚñÑüÜ\s,.@]+$/.test(value)) return value; else throw {status: 400, message:`El dato email_trainner_personal incumple los parametros acordados`};},{ toClassOnly: true})
    email_trainner_personal: string;

    @Expose({ name: 'email_trainner_corporativo' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro email_trainner_corporativo es obligatorio` }}})
    @MaxLength(30, {message: ()=>{throw {status: 401, message: `El parametro email_trainner_corporativo no puede pasar os 45 caracteres`}}}) */
    @Transform(({value})=>{if(/^[a-zA-Z0-9 áéíóúÁÉÍÓÚñÑüÜ\s,.@]+$/.test(value)) return value; else throw {status: 400, message:`El dato email_trainner_corporativo incumple los parametros acordados`};},{ toClassOnly: true})
    email_trainner_corporativo: string;

    @Expose({ name: 'telefonoMobil_trainner_personal' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro telefonoMobil_trainner_personal es obligatorio` }}})
    @MaxLength(50, {message: ()=>{throw {status: 401, message: `El parametro telefonoMobil_trainner_personal no puede pasar os 45 caracteres`}}}) */
    @Matches(/^[0-9\s-()+]+$/, { message: 'El dato telefonoMobil_trainner_personal no tiene un formato de número de teléfono válido' })
    telefonoMobil_trainner_personal: string;

    @Expose({ name: 'telefonoMobil_trainner_empresarial' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro telefonoMobil_trainner_empresarial es obligatorio` }}})
    @MaxLength(50, {message: ()=>{throw {status: 401, message: `El parametro telefonoMobil_trainner_empresarial no puede pasar os 45 caracteres`}}}) */
    @Matches(/^[0-9\s-()+]+$/, { message: 'El dato telefonoMobil_trainner_empresarial no tiene un formato de número de teléfono válido' })
    telefonoMobil_trainner_empresarial: string;

    @Expose({ name: 'telefonoResidencia_trainner' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro telefonoResidencia_trainner es obligatorio` }}})
    @MaxLength(50, {message: ()=>{throw {status: 401, message: `El parametro telefonoResidencia_trainner no puede pasar os 45 caracteres`}}}) */
    @Matches(/^[0-9\s-()+]+$/, { message: 'El dato telefonoResidencia_trainner no tiene un formato de número de teléfono válido' })
    telefonoResidencia_trainner: string;

    @Expose({ name: 'telefonoEmpresa_trainner' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro telefonoEmpresa_trainner es obligatorio` }}})
    @MaxLength(50, {message: ()=>{throw {status: 401, message: `El parametro telefonoEmpresa_trainner no puede pasar os 45 caracteres`}}}) */
    @Matches(/^[0-9\s-()+]+$/, { message: 'El dato telefonoEmpresa_trainner no tiene un formato de número de teléfono válido' })
    telefonoEmpresa_trainner: string;

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
        email_personal: string,
        email_empresarial: string,
        celular_personal: string,
        celular_empresarial: string,
        telefono: string,
        telefono_empresarial: string,
        jornada: string,
        ID2: number
    ) {
        this.id_trainner = ID;
        this.nombre_trainner = nombre;
        this.email_trainner_personal = email_personal;
        this.email_trainner_corporativo = email_empresarial;
        this.telefonoMobil_trainner_personal = celular_personal;
        this.telefonoMobil_trainner_empresarial = celular_empresarial;
        this.telefonoResidencia_trainner = telefono;
        this.telefonoEmpresa_trainner = telefono_empresarial;
        this.jornada_trainner = jornada;
        this.id = ID2;
    }
}