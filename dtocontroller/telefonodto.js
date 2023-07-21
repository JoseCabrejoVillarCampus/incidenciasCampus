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
export class telefonoDTO {
    constructor(ID, marca, estado, ID2) {
        this.id_telefono = ID;
        this.numero_telefono = marca;
        this.trainner_telefono = estado;
        this.id = ID2;
    }
}
__decorate([
    Expose({ name: 'id_telefono' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro id_diadema es obligatorio` }}}) */
    ,
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato id_telefono incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], telefonoDTO.prototype, "id_telefono", void 0);
__decorate([
    Expose({ name: 'numero_telefono' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro marca_diadema es obligatorio` }}})
    @MaxLength(20, {message: ()=>{throw {status: 401, message: `El parametro marca_diadema no puede pasar os 45 caracteres`}}}) */
    ,
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato numero_telefono incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], telefonoDTO.prototype, "numero_telefono", void 0);
__decorate([
    Expose({ name: 'trainner_telefono' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato trainner_telefono incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], telefonoDTO.prototype, "trainner_telefono", void 0);
__decorate([
    Expose({ name: 'id' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato id incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], telefonoDTO.prototype, "id", void 0);
