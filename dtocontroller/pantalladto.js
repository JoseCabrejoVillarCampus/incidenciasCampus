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
export class pantallaDTO {
    constructor(ID, marca, color, estado, ID2) {
        this.id_pantalla = ID;
        this.marca_pantalla = marca;
        this.color_pantalla = color;
        this.estado_pantalla = estado;
        this.id = ID2;
    }
}
__decorate([
    Expose({ name: 'id_pantalla' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro id_pantalla es obligatorio` }}}) */
    ,
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato id_pantalla incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], pantallaDTO.prototype, "id_pantalla", void 0);
__decorate([
    Expose({ name: 'marca_pantalla' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro marca_pantalla es obligatorio` }}})
    @MaxLength(20, {message: ()=>{throw {status: 401, message: `El parametro marca_pantalla no puede pasar os 45 caracteres`}}}) */
    ,
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato marca_pantalla incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], pantallaDTO.prototype, "marca_pantalla", void 0);
__decorate([
    Expose({ name: 'color_pantalla' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro color_pantalla es obligatorio` }}})
    @MaxLength(20, {message: ()=>{throw {status: 401, message: `El parametro color_pantalla no puede pasar os 45 caracteres`}}}) */
    ,
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato color_pantalla incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], pantallaDTO.prototype, "color_pantalla", void 0);
__decorate([
    Expose({ name: 'estado_pantalla' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato estado_pantalla incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], pantallaDTO.prototype, "estado_pantalla", void 0);
__decorate([
    Expose({ name: 'id' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato id incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], pantallaDTO.prototype, "id", void 0);
