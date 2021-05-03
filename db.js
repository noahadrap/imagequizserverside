require('dotenv').config();
const { Pool } = require('pg');


let host = process.env.host;
let database = process.env.database;
let port = process.env.port;
let username = 'rpplifnaqfvhuv';
let password = process.env.password;

let connectionString = 
`postgres://${username}:${password}@${host}:${port}/${database}`;

let connection = {
    connectionString: process.env.DATABASE_URL ? process.env.DATABASE_URL : connectionString,
    ssl : {rejectUnauthorized: false}
};

const pool = new Pool(connection);

let getQuizzes = () => {
    console.log(connectionString)
    let sql = `select * from imagequiz.questions`
    return pool.query(sql)
    .then(result => result.rows);
}

let getFlowers = () => {
    console.log(connectionString)
    let sql = `select * from imagequiz.flowers order by name`
    return pool.query(sql)
    .then(result => result.rows);
}

let saveScores = (customerId, quizId, score) => {
    console.log(connectionString)
    let sql = `insert into imagequiz.scores(customerid, quizid, score) values ($1, $2, $3)`;
    return pool.query(sql, [customerId, quizId,score])
    .then(() => console.log('the score was saved'))
    .catch(e => console.log(e));
}

let getQuiz = (quiznumber) => {
    console.log(connectionString);
    let sql = `select q.quiznumber, json_agg (json_build_object('flower', f.picture, 'choices', choices, 'answer', answer, 'questiontext', questiontext, 'flowerid', f.id)) as questions
    from imagequiz.quizzes q
    inner join imagequiz.questions p on q.questionid = p.id 
    inner join imagequiz.flowers f on p.flowerid = f.id
    where q.quiznumber = $1 group by q.quiznumber`;
    return pool.query(sql, [quiznumber])
    .then(result => result.rows[0]);
}

module.exports = {getQuizzes, getQuiz, getFlowers, saveScores}


