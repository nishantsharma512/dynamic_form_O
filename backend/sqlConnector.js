const mysql= require("mysql2")
const connector=mysql.createPool(
    {
        connectionLimit: 1000,
        host: 'localhost',
        user: 'root',
        password: 'aA@22605348',
        database: "dynamicform" 
    }
)


module.exports=connector