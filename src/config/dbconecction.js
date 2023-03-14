import { createPool } from "mysql2/promise";

export const connection = await createPool({
    host: "127.0.0.1",
    port: 3306,
    user: "enoc",
    password: "1234",
    database: "inventarioDB",
});