import pool from './db.js';

// fetching data from database
export async function getStudents(req,res)
{
    try{
        // query to fetch data from table
        const[rows] = await pool.query("SELECT * FROM student");
        res.json(rows);
    }
    catch(error)
    {
        console.log("Error in fetching data : "+error);
        res.status(500).json({error:'Internal server error'});
    }
}

// API to insert data into table
export async function addStudent(req,res)
{
    // fetching data from request body
    const {stdid,stdname,standard,roll,age} = req.body

    try{
        // query to insert data into table
        const [result] = await pool.query('INSERT into student(stdid,stdname,standard,roll,age) values(?,?,?,?,?)',[stdid,stdname,standard,roll,age])

        // providing response
        res.json({message:'Data Inserted Successfully',insertedId:result.insertId})
    }
    catch(error)
    {
        console.log("Error in inserting data : "+error);
        res.status(500).json({error:'Internal server error'});
    }
}