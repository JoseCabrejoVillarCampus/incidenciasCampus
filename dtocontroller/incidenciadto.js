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
import { IsNumber } from 'class-validator';
export class incidenciaDTO {
    constructor(ID, categoria, incidencia, descripcion, fecha, equipo, lugar, trainner, ID2) {
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
__decorate([
    Expose({ name: 'id_incidencia' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato id_incidencia incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], incidenciaDTO.prototype, "id_incidencia", void 0);
__decorate([
    Expose({ name: 'categoria_incidencia' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato categoria_incidencia incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], incidenciaDTO.prototype, "categoria_incidencia", void 0);
__decorate([
    Expose({ name: 'tipo_incidencia' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato tipo_incidencia incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], incidenciaDTO.prototype, "tipo_incidencia", void 0);
__decorate([
    Expose({ name: 'descripcion_incidencia' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro nombre_area es obligatorio` }}})
    @MaxLength(200, {message: ()=>{throw {status: 401, message: `El parametro descripcion_incidencia no puede pasar os 45 caracteres`}}}) */
    ,
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato descripcion_incidencia incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], incidenciaDTO.prototype, "descripcion_incidencia", void 0);
__decorate([
    Expose({ name: 'fecha_incidencia' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato fecha_incidencia incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], incidenciaDTO.prototype, "fecha_incidencia", void 0);
__decorate([
    Expose({ name: 'equipo_incidencia' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato equipo_incidencia incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], incidenciaDTO.prototype, "equipo_incidencia", void 0);
__decorate([
    Expose({ name: 'lugar_incidencia' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato lugar_incidencia incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], incidenciaDTO.prototype, "lugar_incidencia", void 0);
__decorate([
    Expose({ name: 'trainner_reporta_incidencia' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato trainner_reporta_incidencia incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], incidenciaDTO.prototype, "trainner_reporta_incidencia", void 0);
__decorate([
    Expose({ name: 'id' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato id incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], incidenciaDTO.prototype, "id", void 0);
