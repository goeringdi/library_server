const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('./middlewares/cors');
const logOriginalUrl = require('./middlewares/originalUrl')
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');

dotenv.config();

const { 
    PORT = 3005, 
    API_URL = 'http://127.0.0.1',
    MONGO_URL = 'mongodb://127.0.0.1:3005/library'
} = process.env;

mongoose.connect(MONGO_URL)

const app = express();

app.use(bodyParser.json());


app.get('/', (request, response) => {
    response.status(200);
    response.send("Hello, World!");
});

   
// Middleware для обработки ошибок
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
     error: {
      message: error.message
     }
    });
});

app.use(cors);
app.use('/', logOriginalUrl);
app.use(userRouter);
app.use(bookRouter);

// Middleware для обработки 404 ошибки
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.listen(PORT, () => {
    console.log(`Ссылка на сервер: ${API_URL}:${PORT}`);
});