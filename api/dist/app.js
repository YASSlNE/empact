"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_data_source_1 = require("./app-data-source");
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
var app = express();
app.use(express.json());
// start express server
var port = 3000;
app.listen(port);
console.log("server started at http://localhost:".concat(port));
//# sourceMappingURL=app.js.map