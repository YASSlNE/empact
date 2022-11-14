"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app_data_source_1 = require("./app-data-source");
var routes_1 = __importDefault(require("./routes"));
// establish database connection
app_data_source_1.dataSource
    .initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization:", err);
});
// create and setup express app
var app = (0, express_1.default)();
app.use(express_1.default.json());
// start express server
var port = 3000;
app.listen(port);
console.log("server started at http://localhost:".concat(port));
app.use('/api', routes_1.default.userRouter);
//# sourceMappingURL=app.js.map