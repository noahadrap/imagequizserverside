const express = require('express')
const data = require('./data');
const app = express();
const port = process.env.PORT || 4002;

app.use(express.json());

app.get('/quizzes', (request, response) => {
   response.json(data.quiz1);
});

app.get('/flowers', (request, response) => {
    response.json(data.flowers);
 });

 app.get('/', (request, response) => {
    response.send("hello world");
 });
app.listen(port, () => console.log("listening on port " + port))