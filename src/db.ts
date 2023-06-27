import { DataSource } from "typeorm";
import { users } from "./entities/user";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "9715",
    database: "typeorm",
    entities: [users],
    synchronize:true,
    logging:true,
    subscribers: [],
    migrations: [],
})