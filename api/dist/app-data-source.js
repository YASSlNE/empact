"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
var typeorm_1 = require("typeorm");
exports.dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "dpg-cdoojata499b1llq9e70-a.frankfurt-postgres.render.com",
    port: 5432,
    username: "louay",
    password: "5azk40lhDMCEjeAxwgJPBPtRVvsfFgq1",
    database: "empact",
    entities: ["dist/entities/*.{js, ts}"],
    logging: true,
    synchronize: true,
    ssl: true
});
//# sourceMappingURL=app-data-source.js.map