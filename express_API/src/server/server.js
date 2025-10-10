// importing express library
import express from 'express';

// import cors middleware for cross origin resource sharing
import cors from 'cors';

// import the router from router.js  that has student related routes
import router from './routes.js';


// creating express application instance
const app = express();

// enabling cors to handle cross origin requests
app.use(cors());

// middleware to parse incoming json request
app.use(express.json());

// use imported routes of routes.js
app.use('/api',router);

// defining a port number
const PORT = 5000;

// starting server to listen on specific port
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
});


// more additional settings and changes in vite.config.js file related to this code 