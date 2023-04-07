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
    MONGO_URL = 'mongodb://127.0.0.1:27017/test'
} = process.env;

mongoose.connect(MONGO_URL).
  catch(error => handleError(error));


const app = express();

app.get('/', (request, response) => {
    response.status(200);
    response.send("Hello, World!");
});

app.use(cors);
app.use(logOriginalUrl);
app.use(userRouter);
app.use(bookRouter);
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Ссылка на сервер: ${API_URL}:${PORT}`);
});