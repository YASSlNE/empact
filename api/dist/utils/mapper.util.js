"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLoggedInUserDto = void 0;
var createLoggedInUserDto = function (user, token) {
    return {
        name: user.name,
        profilePictureUrl: user.profilePictureUrl,
        token: token,
    };
};
exports.createLoggedInUserDto = createLoggedInUserDto;
//# sourceMappingURL=mapper.util.js.map