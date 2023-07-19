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
import { IsNumber, IsDate } from 'class-validator';
export class reporte_incidenciaDTO {
    constructor(ID, fecha, ID2) {
        this.id_reporte = ID;
        this.fecha_reporte = fecha;
        this.id = ID2;
    }
}
__decorate([
    Expose({ name: 'id_reporte' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato id_reporte incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], reporte_incidenciaDTO.prototype, "id_reporte", void 0);
__decorate([
    Expose({ name: 'fecha_reporte' }),
    IsDate(),
    Transform(({ value }) => { if (/^\d{4}-\d{2}-\d{2}$/.test(value) || value == undefined)
        return (value);
    else
        throw { status: 400, message: `el parámetro ingresado para fecha_reporte no es válido, debe seguir la sintaxis AAAA-MM-DD` }; }, { toClassOnly: true }),
    __metadata("design:type", Date)
], reporte_incidenciaDTO.prototype, "fecha_reporte", void 0);
__decorate([
    Expose({ name: 'id' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato id incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], reporte_incidenciaDTO.prototype, "id", void 0);
