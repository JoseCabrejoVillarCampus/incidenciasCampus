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
import { IsNumber, MaxLength, IsDefined } from 'class-validator';
export class torreDTO {
    constructor(ID, marca, color, estado) {
        this.id_torre = ID;
        this.marca_torre = marca;
        this.color_torre = color;
        this.estado_torre = estado;
    }
}
__decorate([
    Expose({ name: 'id_torre' }),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro id_torre es obligatorio` }; } }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato id_torre incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], torreDTO.prototype, "id_torre", void 0);
__decorate([
    Expose({ name: 'marca_torre' }),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro marca_torre es obligatorio` }; } }),
    MaxLength(20, { message: () => { throw { status: 401, message: `El parametro marca_torre no puede pasar os 45 caracteres` }; } }),
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato marca_torre incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], torreDTO.prototype, "marca_torre", void 0);
__decorate([
    Expose({ name: 'color_torre' }),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro color_torre es obligatorio` }; } }),
    MaxLength(20, { message: () => { throw { status: 401, message: `El parametro color_torre no puede pasar os 45 caracteres` }; } }),
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato color_torre incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], torreDTO.prototype, "color_torre", void 0);
__decorate([
    Expose({ name: 'estado_torre' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato estado_torre incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], torreDTO.prototype, "estado_torre", void 0);
