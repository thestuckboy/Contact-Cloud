const express = require('express');
const mysql = require('mysql');


//MYSQL CONNECTION

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '15112705',
    database: 'personas'
});

connection.connect(()=>{
    console.log('Connected to DB');
});

function dbData(callback){
    connection.query('SELECT * FROM clientes', (error, results, fields)=>{
        if (error) throw error;
        callback(results);
    });
}

//EXPRESS.JS SERVER

app = express();


// CONFIGURATION

app.set('view engine', 'ejs');
app.use(express.static('public'));

//ROUTES

app.get('/', (req, res)=>{
    res.render('index');
});


app.get('/create', (req, res)=>{
    res.render('create');
});


app.get('/contacts', (req, res)=>{
    dbData(data => {
        console.log(data);
        res.render('contacts', {data: data});
    });
});

//SERVER INITIALIZATION

app.listen(3000, ()=>{
    console.log('Server on port: 3000');
});