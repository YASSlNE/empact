"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
var passport_local_1 = __importDefault(require("passport-local"));
var passport_jwt_1 = __importStar(require("passport-jwt"));
var enterprise_1 = require("../entities/enterprise");
var employee_1 = require("../entities/employee");
var ngo_1 = require("../entities/ngo");
var app_data_source_1 = require("../app-data-source");
var bcrypt_nodejs_1 = __importDefault(require("bcrypt-nodejs"));
var secrets_1 = require("../utils/secrets");
var roles_enum_1 = require("../enums/roles.enum");
var auth_util_1 = require("../utils/auth.util");
var mapper_util_1 = require("../utils/mapper.util");
var LocalStrategy = passport_local_1.default.Strategy;
var JwtStrategy = passport_jwt_1.default.Strategy;
passport_1.default.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    roleField: 'role',
    passReqToCallback: true
}, function (req, email, password, cb) { return __awaiter(void 0, void 0, void 0, function () {
    var role, type, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                role = req.query.role;
                type = entityBasedOnRole(role);
                return [4 /*yield*/, app_data_source_1.dataSource.getRepository(type).findOne({ where: { email: email } })];
            case 1:
                user = _a.sent();
                if (!user)
                    return [2 /*return*/, cb(undefined, false, {
                            message: "email ".concat(email, " not found."),
                        })];
                bcrypt_nodejs_1.default.compare(password, user.password, function (err, isMatch) {
                    var token = (0, auth_util_1.createTokenFromUser)(user, role);
                    var dto = (0, mapper_util_1.createLoggedInUserDto)(user, token);
                    if (isMatch)
                        return cb(undefined, dto);
                    else
                        return cb(undefined, false, {
                            message: "Invalid password.",
                        });
                });
                return [2 /*return*/];
        }
    });
}); }));
passport_1.default.use(new JwtStrategy({
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secrets_1.JWT_SECRET,
}, function (jwtToken, cb) {
    var type = entityBasedOnRole(jwtToken.role);
    app_data_source_1.dataSource.getRepository(type).findOne({ where: { id: jwtToken.id } }).then(function (user) {
        if (!user) {
            return cb(false);
        }
        if (user) {
            return cb(undefined, user, jwtToken);
        }
        else {
            return cb(undefined, false);
        }
    });
}));
function entityBasedOnRole(role) {
    switch (role) {
        case roles_enum_1.Roles.Employee:
            return employee_1.Employee;
        case roles_enum_1.Roles.Enterprise:
            return enterprise_1.Enterprise;
        case roles_enum_1.Roles.Ngo:
            return ngo_1.Ngo;
        default:
            break;
    }
}
//# sourceMappingURL=passportHandler.js.map