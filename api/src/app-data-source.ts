import { DataSource } from "typeorm"

export const dataSource = new DataSource({
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
})