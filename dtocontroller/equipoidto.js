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
export class equipoDTO {
    constructor(ID, pantalla, torre, teclado, mouse, diadema, salon) {
        this.id_equipo = ID;
        this.pantalla_equipo = pantalla;
        this.torre_equipo = torre;
        this.teclado_equipo = teclado;
        this.mouse_equipo = mouse;
        this.diadema_equipo = diadema;
        this.salon_equipo = salon;
    }
}
__decorate([
    Expose({ name: 'id_equipo' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato id_equipo incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], equipoDTO.prototype, "id_equipo", void 0);
__decorate([
    Expose({ name: 'pantalla_equipo' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato pantalla_equipo incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], equipoDTO.prototype, "pantalla_equipo", void 0);
__decorate([
    Expose({ name: 'torre_equipo' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato torre_equipo incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], equipoDTO.prototype, "torre_equipo", void 0);
__decorate([
    Expose({ name: 'teclado_equipo' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato teclado_equipo incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], equipoDTO.prototype, "teclado_equipo", void 0);
__decorate([
    Expose({ name: 'mouse_equipo' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato mouse_equipo incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], equipoDTO.prototype, "mouse_equipo", void 0);
__decorate([
    Expose({ name: 'diadema_equipo' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato diadema_equipo incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], equipoDTO.prototype, "diadema_equipo", void 0);
__decorate([
    Expose({ name: 'salon_equipo' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato salon_equipo incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], equipoDTO.prototype, "salon_equipo", void 0);
