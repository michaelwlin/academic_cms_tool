const express = require("express");
const cors = require('cors');
const mysql = require('mysql')
const app = express();
const bodyParser = require('body-parser');
const secret = require('./secret');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//CREDENTIALS FOR AWS RDS
const connection = mysql.createConnection({
    host     : secret.host,
    user     : secret.user,
    password : secret.password,
    database : secret.database
});

//CONNECT TO AWS RDS & USE bloom_dev DB
connection.connect(function(err){
    if (err) throw err;
    connection.query('USE bloom_dev;');
    console.log("Connected to AWS RDS with bloom_dev DB.")
    connection.end
});

//ROUTES
require('./routes/usersRoutes')(app, connection);
require('./routes/languagesRoutes')(app, connection);
require('./routes/coursesRoutes')(app, connection);
require('./routes/lessonsRoutes')(app, connection);
require('./routes/objectivesRoutes')(app, connection);
require('./routes/activitiesRoutes')(app, connection);

//LOCAL SERVER
app.listen(4000, () => console.log("Server is on at localhost:4000"));
