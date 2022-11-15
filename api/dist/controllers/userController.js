"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var bcrypt_nodejs_1 = __importDefault(require("bcrypt-nodejs"));
var passport_1 = __importDefault(require("passport"));
require("../auth/passportHandler");
var enterprise_1 = require("../entities/enterprise");
var employee_1 = require("../entities/employee");
var ngo_1 = require("../entities/ngo");
var app_data_source_1 = require("../app-data-source");
var mapper_util_1 = require("../utils/mapper.util");
var roles_enum_1 = require("../enums/roles.enum");
var auth_util_1 = require("../utils/auth.util");
var JWT_SECRET = process.env.JWT_SECRET;
var UserController = /** @class */ (function () {
    function UserController() {
    }
    /**
     * @api {post} /api/register Register user
     * @apiName RegisterUser
     * @apiGroup User
     * @apiParam {String} username
     * @apiParam {String} password
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "id":"1"
     *       "username": "mahmoud",
     *       "password": "mahmoudpassword"
     *     }
     * @apiErrorExample {json} Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "error": "user already exist"
     *     }
     */
    // Enterprise Registration
    UserController.prototype.registerEnterprise = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, email, password, fieldOfInterest, Location, enterprise, employee, ngo, newEnterprise, response, token, dto;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, name = _a.name, email = _a.email, password = _a.password, fieldOfInterest = _a.fieldOfInterest, Location = _a.Location;
                        return [4 /*yield*/, app_data_source_1.dataSource.getRepository(enterprise_1.Enterprise).findOne({ where: { email: req.body.email } })];
                    case 1:
                        enterprise = _b.sent();
                        return [4 /*yield*/, app_data_source_1.dataSource.getRepository(employee_1.Employee).findOne({ where: { email: req.body.email } })];
                    case 2:
                        employee = _b.sent();
                        return [4 /*yield*/, app_data_source_1.dataSource.getRepository(ngo_1.Ngo).findOne({ where: { email: req.body.email } })];
                    case 3:
                        ngo = _b.sent();
                        if (enterprise || ngo || employee)
                            return [2 /*return*/, res.status(400).send({ error: 'user already exist' })];
                        return [4 /*yield*/, app_data_source_1.dataSource.getRepository(enterprise_1.Enterprise).create()];
                    case 4:
                        newEnterprise = _b.sent();
                        newEnterprise.email = email;
                        newEnterprise.name = name;
                        newEnterprise.fieldOfInterest = fieldOfInterest;
                        newEnterprise.Location = Location;
                        newEnterprise.password = bcrypt_nodejs_1.default.hashSync(password, bcrypt_nodejs_1.default.genSaltSync(10));
                        ;
                        return [4 /*yield*/, app_data_source_1.dataSource.getRepository(enterprise_1.Enterprise).save(newEnterprise)];
                    case 5:
                        response = _b.sent();
                        token = (0, auth_util_1.createTokenFromUser)(response, roles_enum_1.Roles.Enterprise);
                        dto = (0, mapper_util_1.createLoggedInUserDto)(response, token);
                        return [2 /*return*/, res.status(200).send({ dto: dto })];
                }
            });
        });
    };
    // Employee Registration
    UserController.prototype.registerEmployee = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, email, password, age, sex, companyMail, enterprise, employee, ngo, newEmployee, _b, response, token, dto;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = req.body, name = _a.name, email = _a.email, password = _a.password, age = _a.age, sex = _a.sex, companyMail = _a.companyMail;
                        return [4 /*yield*/, app_data_source_1.dataSource.getRepository(enterprise_1.Enterprise).findOne({ where: { email: req.body.email } })];
                    case 1:
                        enterprise = _c.sent();
                        return [4 /*yield*/, app_data_source_1.dataSource.getRepository(employee_1.Employee).findOne({ where: { email: req.body.email } })];
                    case 2:
                        employee = _c.sent();
                        return [4 /*yield*/, app_data_source_1.dataSource.getRepository(ngo_1.Ngo).findOne({ where: { email: req.body.email } })];
                    case 3:
                        ngo = _c.sent();
                        if (enterprise || ngo || employee)
                            return [2 /*return*/, res.status(400).send({ error: 'user already exist' })];
                        return [4 /*yield*/, app_data_source_1.dataSource.getRepository(employee_1.Employee).create()];
                    case 4:
                        newEmployee = _c.sent();
                        newEmployee.email = email;
                        newEmployee.name = name;
                        newEmployee.age = age;
                        newEmployee.password = bcrypt_nodejs_1.default.hashSync(password, bcrypt_nodejs_1.default.genSaltSync(10));
                        newEmployee.sex = sex;
                        _b = newEmployee;
                        return [4 /*yield*/, app_data_source_1.dataSource.getRepository(enterprise_1.Enterprise).findOne({ where: { email: companyMail } })];
                    case 5:
                        _b.enterprise = _c.sent();
                        return [4 /*yield*/, app_data_source_1.dataSource.getRepository(employee_1.Employee).save(newEmployee)];
                    case 6:
                        response = _c.sent();
                        token = (0, auth_util_1.createTokenFromUser)(response, roles_enum_1.Roles.Employee);
                        dto = (0, mapper_util_1.createLoggedInUserDto)(response, token);
                        return [2 /*return*/, res.status(200).send({ dto: dto })];
                }
            });
        });
    };
    // NGO Registration
    UserController.prototype.registerNgo = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, email, password, fieldOfInterest, enterprise, employee, ngo, newNgo, response, token, dto;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, name = _a.name, email = _a.email, password = _a.password, fieldOfInterest = _a.fieldOfInterest;
                        return [4 /*yield*/, app_data_source_1.dataSource.getRepository(enterprise_1.Enterprise).findOne({ where: { email: req.body.email } })];
                    case 1:
                        enterprise = _b.sent();
                        return [4 /*yield*/, app_data_source_1.dataSource.getRepository(employee_1.Employee).findOne({ where: { email: req.body.email } })];
                    case 2:
                        employee = _b.sent();
                        return [4 /*yield*/, app_data_source_1.dataSource.getRepository(ngo_1.Ngo).findOne({ where: { email: req.body.email } })];
                    case 3:
                        ngo = _b.sent();
                        if (enterprise || ngo || employee)
                            return [2 /*return*/, res.status(400).send({ error: 'user already exist' })];
                        return [4 /*yield*/, app_data_source_1.dataSource.getRepository(ngo_1.Ngo).create()];
                    case 4:
                        newNgo = _b.sent();
                        newNgo.email = email;
                        newNgo.name = name;
                        newNgo.fieldOfInterest = fieldOfInterest;
                        newNgo.password = bcrypt_nodejs_1.default.hashSync(password, bcrypt_nodejs_1.default.genSaltSync(10));
                        ;
                        return [4 /*yield*/, app_data_source_1.dataSource.getRepository(ngo_1.Ngo).save(newNgo)];
                    case 5:
                        response = _b.sent();
                        token = (0, auth_util_1.createTokenFromUser)(response, roles_enum_1.Roles.Ngo);
                        dto = (0, mapper_util_1.createLoggedInUserDto)(response, token);
                        return [2 /*return*/, res.status(200).send({ dto: dto })];
                }
            });
        });
    };
    /**
     * @api {post} /api/login Authenticate user
     * @apiName UserAuth
     * @apiGroup User
     * @apiParam {String} username
     * @apiParam {String} password
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "user": {"username":"mahmoud"},
     *       "token": "jwtaccesstoken"
     *     }
     * @apiErrorExample {json} Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "error": "user {mahmoud} not found"
     *     }
     * @apiErrorExample {json} Error-Response:
     *     HTTP/1.1 401
     *     {
     *       "error": "Invalid  password"
     *     }
     *
     */
    // Login User
    UserController.prototype.authenticateUser = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                passport_1.default.authenticate('local', { session: false }, function (err, dto, info) {
                    if (!dto) {
                        return res.status(401).json(info);
                    }
                    else {
                        return res.json(dto);
                    }
                })(req, res, next);
                return [2 /*return*/];
            });
        });
    };
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map