"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
var typeorm_1 = require("typeorm");
var employee_1 = require("./employee");
var ngo_1 = require("./ngo");
var Event = /** @class */ (function () {
    function Event() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Event.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Event.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Event.prototype, "field", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Event.prototype, "date", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Event.prototype, "Location", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Event.prototype, "details", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Event.prototype, "pictureUrl", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Event.prototype, "numberOFNeededVolunteers", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: 0 }),
        __metadata("design:type", Number)
    ], Event.prototype, "pointsPerVolunteer", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return employee_1.Employee; }, function (employee) { return employee.enterprise; }),
        (0, typeorm_1.JoinTable)({
            name: "employee_event",
            joinColumn: {
                name: "employee",
                referencedColumnName: "id"
            },
            inverseJoinColumn: {
                name: "event",
                referencedColumnName: "id"
            }
        }),
        __metadata("design:type", Array)
    ], Event.prototype, "participants", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return ngo_1.Ngo; }, function (ngo) { return ngo.events; }),
        __metadata("design:type", ngo_1.Ngo)
    ], Event.prototype, "organizer", void 0);
    Event = __decorate([
        (0, typeorm_1.Entity)()
    ], Event);
    return Event;
}());
exports.Event = Event;
//# sourceMappingURL=event.js.map