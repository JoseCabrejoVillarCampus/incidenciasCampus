var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
import { IsNumber, Matches } from 'class-validator';
export class trainnersDTO {
    constructor(ID, nombre, email_personal, email_empresarial, celular_personal, celular_empresarial, telefono, telefono_empresarial, jornada, ID2) {
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
__decorate([
    Expose({ name: 'id_trainner' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato id_trainner incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], trainnersDTO.prototype, "id_trainner", void 0);
__decorate([
    Expose({ name: 'nombre_trainner' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro nombre_trainner es obligatorio` }}})
    @MaxLength(80, {message: ()=>{throw {status: 401, message: `El parametro nombre_trainner no puede pasar os 45 caracteres`}}}) */
    ,
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato nombre_trainner incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], trainnersDTO.prototype, "nombre_trainner", void 0);
__decorate([
    Expose({ name: 'email_trainner_personal' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro email_trainner_personal es obligatorio` }}})
    @MaxLength(30, {message: ()=>{throw {status: 401, message: `El parametro email_trainner_personal no puede pasar os 45 caracteres`}}}) */
    ,
    Transform(({ value }) => { if (/^[a-zA-Z0-9 áéíóúÁÉÍÓÚñÑüÜ\s,.@]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato email_trainner_personal incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], trainnersDTO.prototype, "email_trainner_personal", void 0);
__decorate([
    Expose({ name: 'email_trainner_corporativo' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro email_trainner_corporativo es obligatorio` }}})
    @MaxLength(30, {message: ()=>{throw {status: 401, message: `El parametro email_trainner_corporativo no puede pasar os 45 caracteres`}}}) */
    ,
    Transform(({ value }) => { if (/^[a-zA-Z0-9 áéíóúÁÉÍÓÚñÑüÜ\s,.@]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato email_trainner_corporativo incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], trainnersDTO.prototype, "email_trainner_corporativo", void 0);
__decorate([
    Expose({ name: 'telefonoMobil_trainner_personal' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro telefonoMobil_trainner_personal es obligatorio` }}})
    @MaxLength(50, {message: ()=>{throw {status: 401, message: `El parametro telefonoMobil_trainner_personal no puede pasar os 45 caracteres`}}}) */
    ,
    Matches(/^[0-9\s-()+]+$/, { message: 'El dato telefonoMobil_trainner_personal no tiene un formato de número de teléfono válido' }),
    __metadata("design:type", String)
], trainnersDTO.prototype, "telefonoMobil_trainner_personal", void 0);
__decorate([
    Expose({ name: 'telefonoMobil_trainner_empresarial' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro telefonoMobil_trainner_empresarial es obligatorio` }}})
    @MaxLength(50, {message: ()=>{throw {status: 401, message: `El parametro telefonoMobil_trainner_empresarial no puede pasar os 45 caracteres`}}}) */
    ,
    Matches(/^[0-9\s-()+]+$/, { message: 'El dato telefonoMobil_trainner_empresarial no tiene un formato de número de teléfono válido' }),
    __metadata("design:type", String)
], trainnersDTO.prototype, "telefonoMobil_trainner_empresarial", void 0);
__decorate([
    Expose({ name: 'telefonoResidencia_trainner' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro telefonoResidencia_trainner es obligatorio` }}})
    @MaxLength(50, {message: ()=>{throw {status: 401, message: `El parametro telefonoResidencia_trainner no puede pasar os 45 caracteres`}}}) */
    ,
    Matches(/^[0-9\s-()+]+$/, { message: 'El dato telefonoResidencia_trainner no tiene un formato de número de teléfono válido' }),
    __metadata("design:type", String)
], trainnersDTO.prototype, "telefonoResidencia_trainner", void 0);
__decorate([
    Expose({ name: 'telefonoEmpresa_trainner' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro telefonoEmpresa_trainner es obligatorio` }}})
    @MaxLength(50, {message: ()=>{throw {status: 401, message: `El parametro telefonoEmpresa_trainner no puede pasar os 45 caracteres`}}}) */
    ,
    Matches(/^[0-9\s-()+]+$/, { message: 'El dato telefonoEmpresa_trainner no tiene un formato de número de teléfono válido' }),
    __metadata("design:type", String)
], trainnersDTO.prototype, "telefonoEmpresa_trainner", void 0);
__decorate([
    Expose({ name: 'jornada_trainner' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro jornada_trainner es obligatorio` }}})
    @MaxLength(20, {message: ()=>{throw {status: 401, message: `El parametro jornada_trainner no puede pasar os 45 caracteres`}}}) */
    ,
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato jornada_trainner incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], trainnersDTO.prototype, "jornada_trainner", void 0);
__decorate([
    Expose({ name: 'id' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato id incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], trainnersDTO.prototype, "id", void 0);
