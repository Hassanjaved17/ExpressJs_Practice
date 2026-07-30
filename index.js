 import express from 'express';
import homeRoutes from './routes/home.js';


const app = express();

app.set('view engine', 'ejs');

app.use(homeRoutes);

// app.listen(3000);
