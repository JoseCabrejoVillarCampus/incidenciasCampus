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
export class tecladoDTO {
    constructor(ID, marca, color, estado) {
        this.id_teclado = ID;
        this.marca_teclado = marca;
        this.color_teclado = color;
        this.estado_teclado = estado;
    }
}
__decorate([
    Expose({ name: 'id_teclado' }),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro id_teclado es obligatorio` }; } }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato id_teclado incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], tecladoDTO.prototype, "id_teclado", void 0);
__decorate([
    Expose({ name: 'marca_teclado' }),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro marca_teclado es obligatorio` }; } }),
    MaxLength(20, { message: () => { throw { status: 401, message: `El parametro marca_teclado no puede pasar os 45 caracteres` }; } }),
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato marca_teclado incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], tecladoDTO.prototype, "marca_teclado", void 0);
__decorate([
    Expose({ name: 'color_teclado' }),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro color_teclado es obligatorio` }; } }),
    MaxLength(20, { message: () => { throw { status: 401, message: `El parametro color_teclado no puede pasar os 45 caracteres` }; } }),
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato color_teclado incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], tecladoDTO.prototype, "color_teclado", void 0);
__decorate([
    Expose({ name: 'estado_teclado' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato estado_teclado incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], tecladoDTO.prototype, "estado_teclado", void 0);
