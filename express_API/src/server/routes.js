import express from 'express';
import { getStudents, addStudent } from './studentController.js';

// creating instance for router
const router = express.Router();

// defining routes for fetching studentData
router.get('/studentslist',getStudents);

// defining routes for inserting student data
router.post('/registerstudent',addStudent);

// export router
export default router;