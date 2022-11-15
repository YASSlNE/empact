"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsController = void 0;
require("../auth/passportHandler");
var employee_1 = require("../entities/employee");
var ngo_1 = require("../entities/ngo");
var app_data_source_1 = require("../app-data-source");
var auth_util_1 = require("../utils/auth.util");
var event_1 = require("../entities/event");
var EventsController = /** @class */ (function () {
    function EventsController() {
    }
    EventsController.prototype.addEvent = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var createEventDto, ngoId, ngo, event;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        createEventDto = req.body;
                        ngoId = (0, auth_util_1.decodeToken)((0, auth_util_1.getToken)(req)).id;
                        return [4 /*yield*/, app_data_source_1.dataSource.getRepository(ngo_1.Ngo).findOne({ where: { id: ngoId } })];
                    case 1:
                        ngo = _a.sent();
                        if (!ngo)
                            return [2 /*return*/, res.status(401).send("ngo doesn't exist")];
                        event = __assign(__assign({ id: null }, createEventDto), { organizer: ngo, participants: [] });
                        return [4 /*yield*/, app_data_source_1.dataSource.getRepository(event_1.Event).save(event)];
                    case 2:
                        _a.sent();
                        res.send("Success");
                        return [2 /*return*/];
                }
            });
        });
    };
    EventsController.prototype.getAllEvents = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var events;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, app_data_source_1.dataSource.getRepository(event_1.Event).find({ relations: ["organizer", "participants"] })];
                    case 1:
                        events = _a.sent();
                        return [2 /*return*/, res.send(events)];
                }
            });
        });
    };
    EventsController.prototype.participate = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var eventRepo, eventId, event, employeeId, employee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        eventRepo = app_data_source_1.dataSource.getRepository(event_1.Event);
                        eventId = req.body.eventId;
                        return [4 /*yield*/, eventRepo.findOne({ where: { id: eventId }, relations: ["participants"] })];
                    case 1:
                        event = _a.sent();
                        if (event.numberOFNeededVolunteers <= 0)
                            return [2 /*return*/, res.status(400).send("no available spaces")];
                        employeeId = (0, auth_util_1.decodeToken)((0, auth_util_1.getToken)(req)).id;
                        return [4 /*yield*/, app_data_source_1.dataSource.getRepository(employee_1.Employee).findOne({ where: { id: employeeId } })];
                    case 2:
                        employee = _a.sent();
                        employee.points += event.pointsPerVolunteer;
                        return [4 /*yield*/, app_data_source_1.dataSource.getRepository(employee_1.Employee).save(employee)];
                    case 3:
                        _a.sent();
                        event.numberOFNeededVolunteers--;
                        event.participants.push(employee);
                        return [4 /*yield*/, eventRepo.save(event)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, res.status(200).send("successfully participated in event")];
                }
            });
        });
    };
    return EventsController;
}());
exports.EventsController = EventsController;
//# sourceMappingURL=eventsController.js.map