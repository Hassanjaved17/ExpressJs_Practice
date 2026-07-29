import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.render('index', { name: 'Hassan' });
});

app.post('/submit', (request, response) => {
    const { name } = request.body;
    response.render('index', { name });
});

app.listen(PORT, () => {        
    console.log(`Server is running on http://localhost:${PORT}`);
});