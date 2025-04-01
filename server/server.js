
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3500;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/task')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.get('/', (req, res) => {
  res.send('Server is working!');
});



// Create a schema 
const studentSchema = new mongoose.Schema({
    id:Number,
    name:String,
    age:Number,
    class:String
});

// Create a model
const Student = mongoose.model('Student', studentSchema);

app.get('/students', async (req, res) => {
    const newStudent = await Student.find();
    res.json(newStudent);
  });
  
  // Create a new student
  app.post('/students', async (req, res) => {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json(newStudent);
  });

 
  
  // Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });