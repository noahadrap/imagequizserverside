const express = require('express')
const cors = require('cors')
const data = require('./data');
const app = express();
const port = process.env.PORT || 4002;


app.use(express.json());
app.use(cors());

app.get('/quizzes', (request, response) => {
   response.json(data.quiz);
});

app.get('/flowers', (request, response) => {
    response.json(data.flowers);
 });

app.get('/quizzes/:id', (request, response) => {
    let ids = []
    let id = request.params.id
    for ( i=0; i < data.quiz.length; i++) {
        if (data.quiz[i].id == Number(id)) {
            ids.push(data.quiz[i])
        }
    }
    response.json(ids);
 });

 app.get('/', (request, response) => {
    response.send("Welcome to image quiz server side");
 });
app.listen(port, () => console.log("listening on port " + port))