import mysql from 'mysql2/promise'
//creating a mysql connection pool
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'studentcrudapp',
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})

//Test Database Connection
async function testDBConnection()
{
    try {
        const connection = await pool.getConnection();
        console.log("Connected to MySQL");
        connection.release();//back to pool

    } catch (error) 
    {
        console.error("Error while connecting to MySQL : "+error);
    }
}

testDBConnection();
export default pool; // exporting the pool