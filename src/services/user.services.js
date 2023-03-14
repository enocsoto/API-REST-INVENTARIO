import { connection } from "../config/dbconecction.js";

export const getUsers = async () => {
    try {
        // const [users] = await connection.query(`SELECT * FROM user`)
        // res.json(users[0]);
        // return console.table(users)
        console.log('respuesta desde user Service');
        
    } catch (error) {
     throw console.error(error);  
    }
    
}
