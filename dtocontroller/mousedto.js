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
export class mouseDTO {
    constructor(ID, marca, color, estado) {
        this.id_mouse = ID;
        this.marca_mouse = marca;
        this.color_mouse = color;
        this.estado_mouse = estado;
    }
}
__decorate([
    Expose({ name: 'id_mouse' }),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro id_mouse es obligatorio` }; } }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato id_mouse incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], mouseDTO.prototype, "id_mouse", void 0);
__decorate([
    Expose({ name: 'marca_mouse' }),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro marca_mouse es obligatorio` }; } }),
    MaxLength(20, { message: () => { throw { status: 401, message: `El parametro marca_mouse no puede pasar os 45 caracteres` }; } }),
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato marca_mouse incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], mouseDTO.prototype, "marca_mouse", void 0);
__decorate([
    Expose({ name: 'color_mouse' }),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro color_mouse es obligatorio` }; } }),
    MaxLength(20, { message: () => { throw { status: 401, message: `El parametro color_mouse no puede pasar os 45 caracteres` }; } }),
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato color_mouse incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], mouseDTO.prototype, "color_mouse", void 0);
__decorate([
    Expose({ name: 'estado_mouse' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato estado_mouse incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], mouseDTO.prototype, "estado_mouse", void 0);
