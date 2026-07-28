import express from 'express';

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

// routes
app.get('/',(req, res) =>{
    res.send("hello express");
})

// nested routes
app.get('/about',(req, res) =>{
    res.send("About page");
})

// route with parameter
app.get('/user/:id',(req, res) =>{
    res.send(`User page for user with ID: ${req.params.id}`);
})

// server
app.listen(PORT,() =>{
    console.log(`server is running on port ${PORT}`);
})  