import express from 'express';

const app = express();
const PORT = 3000;

app.get('/',(req, res) =>{
    res.send("hello express");
})

app.post('/home',(req, res) =>{
    res.send("POST request to home");
});


app.listen(PORT,() =>{
    console.log(`server is running on port ${PORT}`);
})  