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
export class salon_trainnerDTO {
    constructor(ID, trainner, salon, ID2) {
        this.id_salon_trainner = ID;
        this.id_trainner = trainner;
        this.id_salon = salon;
        this.id = ID2;
    }
}
__decorate([
    Expose({ name: 'id_salon_trainner' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato id_salon_trainner incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], salon_trainnerDTO.prototype, "id_salon_trainner", void 0);
__decorate([
    Expose({ name: 'id_trainner' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato id_trainner incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], salon_trainnerDTO.prototype, "id_trainner", void 0);
__decorate([
    Expose({ name: 'id_salon' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato id_salon incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], salon_trainnerDTO.prototype, "id_salon", void 0);
__decorate([
    Expose({ name: 'id' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato id incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], salon_trainnerDTO.prototype, "id", void 0);
