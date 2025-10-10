import mysql from 'mysql2/promise'

// creating a mysql connection pool
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'admin',
    database:'studentcrudapp',
    waitForConnection:true,
    connectionLimit:10,
    queueLimit:0
})

// test database connection function
async function testDBConnection(){
    try{
        const connection=await pool.getConnection();
        console.log("Connected to MySQL");
        connection.release();  //back to pool
    }
    catch(error){
        console.error("Error while connecting to MySQL : "+error);
    }
}

// calling the test function
testDBConnection();

// exporting the pool
export default pool; 