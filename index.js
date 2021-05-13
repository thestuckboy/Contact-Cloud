const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const configSQL = require('./modules/mysql.config');


//MYSQL CONNECTION

const connection = mysql.createConnection(configSQL);

connection.connect(()=>{
    console.log('Connected to DB');
});

function dbData(callback){
    connection.query('SELECT * FROM contactos', (error, results, fields)=>{
        if (error) throw error;
        callback(results);
    });
}

//EXPRESS.JS SERVER

app = express();


// CONFIGURATION

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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
        res.render('contacts', {data: data});
    });
});

app.get('/create/submited', (req, res)=>{
    res.render('submited');
});

app.post('/create',  (req, res)=>{
    let name = req.body.name;
    let lastname = req.body.lastname;
    let number = req.body.numberp;

    let query = `INSERT INTO contactos(names, lastname, phone) VALUE('${name}', '${lastname}', '${number}')`;
    connection.query(query, (error)=>{
        if (error) throw error;
        console.log('Data received');
        res.redirect('/create/submited');
    });
});

app.post('/delete', (req, res)=>{
    let key = req.body.key;
    let query = `DELETE FROM contactos WHERE id = ${key}`;
    connection.query(query, (error)=>{
        if (error) throw error;
        console.log(`Row with id: ${key} has been deleted succesfully`);
    });
});

//SERVER INITIALIZATION

app.listen(3000, ()=>{
    console.log('Server on port: 3000');
});