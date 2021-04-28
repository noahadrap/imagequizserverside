const express = require('express')
const cors = require('cors')
const data = require('./data');
const app = express();
const port = process.env.PORT || 4002;
const db = require('./db');


app.use(express.json());
app.use(cors());

app.get('/quizzes', (request, response) => {
   db.getQuizzes()
   .then(quizzes => response.json(quizzes))
   .catch(e => {console.log(e); response.status(500).send('there was an error in getting quizzes')})
});

app.get('/flowers', (request, response) => {
    db.getFlowers()
   .then(flowers => response.json(flowers))
   .catch(e => {console.log(e); response.status(500).send('there was an error in getting quizzes')})
    

 });

app.get('/quiz/:id', (request, response) => {
    db.getQuiz(request.params.id)
    .then(quiz => response.json(quiz))
    .catch(e => {console.log(e); response.status(500).send('there was an error in getting the quiz');});
 });

 app.post('/score', (request, response) => {
    db.getScores()
    .then(scores => response.json(scores))
    .catch(e => {console.log(e); response.status(500).send('there was an error in getting scores')})
     
 

 });

 app.get('/', (request, response) => {
    response.send("Welcome to image quiz server side");
 });
app.listen(port, () => console.log("listening on port " + port))