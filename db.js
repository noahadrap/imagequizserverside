require('dotenv').config();
const {Pool} = require('pg');

let host = process.env.host;
let database = process.env.database;
let port = process.env.port;
