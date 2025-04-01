
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3600;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/book')
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
const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    class: { type: String, required: true },
    bookName: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
});

// Create a model
const Book = mongoose.model('Book', bookSchema);

app.get('/Book', async (req, res) => {
    const newBook = await Book.find();
    res.json(newBook);
  });
  
  // Create a new student
  app.post('/Book', async (req, res) => {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  });

 
  
  // Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });