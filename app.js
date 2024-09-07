import express from 'express';
import dotenv from 'dotenv';
import conn from './db.js';
import pageRoute from './routes/pageRoute.js';
import photoRoute from './routes/photoRoute.js';
import userRoute from './routes/userRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';



dotenv.config();

//connection to the DB
conn();

const app = express();
const port = process.env.PORT;

// Static dosyalar için yol ayarlama
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/images', express.static(path.join(__dirname, 'images')));

//ejs template engine
app.set('view engine', 'ejs');

//static files middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes

app.use('/', pageRoute);
app.use('/photos', photoRoute);
app.use('/users', userRoute);





app.listen(port, () => {
    console.log(`Application running on port: ${port}`);
  });