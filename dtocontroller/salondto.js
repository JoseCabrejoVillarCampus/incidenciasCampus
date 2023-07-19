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
export class salonDTO {
    constructor(ID, salon, trainner, area, ID2) {
        this.id_salon = ID;
        this.nombre_salon = salon;
        this.trainner_salon = trainner;
        this.area_salon = area;
        this.id = ID2;
    }
}
__decorate([
    Expose({ name: 'id_salon' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato id_salon incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], salonDTO.prototype, "id_salon", void 0);
__decorate([
    Expose({ name: 'nombre_salon' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro nombre_salon es obligatorio` }}})
    @MaxLength(20, {message: ()=>{throw {status: 401, message: `El parametro nombre_salon no puede pasar os 45 caracteres`}}}) */
    ,
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato nombre_salon incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], salonDTO.prototype, "nombre_salon", void 0);
__decorate([
    Expose({ name: 'trainner_salon' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato trainner_salon incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], salonDTO.prototype, "trainner_salon", void 0);
__decorate([
    Expose({ name: 'area_salon' }),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato area_salon incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], salonDTO.prototype, "area_salon", void 0);
__decorate([
    Expose({ name: 'id' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato id incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], salonDTO.prototype, "id", void 0);
