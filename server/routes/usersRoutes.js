const email_validator = require('email-validator');
const password_validator = require('password-validator')
const bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports = (app, connection) => {

    //CREATE USER
    app.post('/users/new', (req, res) => {
        //VALIDATE FIRSTNAME
        if(req.body.firstname < 1){
            return res.send({
                "code":204,
                "firstname":"Please enter a first name."
            })
        }
        //VALIDATE LASTNAME
        if(req.body.lastname < 1){
            return res.send({
                "code":204,
                "lastname":"Please enter a last name."
            })
        }
        //VALIDATE USERNAME
        if(req.body.username < 1){
            return res.send({
                "code":204,
                "username":"Please enter a username."
            })
        }
          //VALIDATE EMAIL USING NPM.JS EMAIL VALIDATOR
        if(!email_validator.validate(req.body.email)){
            return res.send({
                "code":204,
                "email":"Please enter a valid email."
            })
        }
        //VALIDATE PASSWORD USING NPM.JS PASSWORD VALIDATOR
        var password_validator_schema = new password_validator();
        password_validator_schema.is().min(8);
        if(!password_validator_schema.validate(req.body.password)){
            return res.send({
                "code":204,
                "password":"Password must be at least 8 characters."
            })
        }
        //VALIDATE PASSWORD & PASSWORD CONFIRM
        if(req.body.password != req.body.password_confirm){
            return res.send({
                "code":204,
                "password_confirm":"Passwords do not match."
            })
        }

        //CHECK IF EMAIL EXISTS ALREADY
    

        //PASSED VALIDATIONS
        if (req.body.username 
            && req.body.password 
            && req.body.firstname 
            && req.body.lastname 
            || req.body.user_role
            && req.body.email){
            connection.connect(function(err){
                //HASH PASSWORD
                bcrypt.hash(req.body.password, saltRounds, function(err, hash){
                    //MYSQL QUERY
                    connection.query(`INSERT INTO bloom_dev.users (
                        username, 
                        password,
                        firstname,
                        lastname,
                        user_role,
                        email) VALUES (
                            '${req.body.username}',
                            '${hash}',
                            '${req.body.firstname}',
                            '${req.body.lastname}',
                            'Content Creator',
                            '${req.body.email}')`,
                    //FOLLOWING QUERY
                    function(err, result, fields){
                        if (err) res.send(err);
                        if (result) res.send(result);
                        if (fields) console.log(fields);
                    });
                });
            })
        } else{
            console.log("Missing parameter")
        }
    })

    //LOGIN USER
    app.post('/users/login', (req, res) => {
        //VALIDATE EMAIL USING NPM.JS EMAIL VALIDATOR
        if(!email_validator.validate(req.body.email)){
            return res.send({
                "code":204,
                "email":"Please enter a valid email."
            })
        }
        connection.connect(function(err){
            connection.query(`SELECT * FROM bloom_dev.users WHERE email = '${req.body.email}'`,
            function(err, user, fields){
                if(err) res.send({
                    "code":400,
                    "failed":"error ocurred"
                });
                else{
                    if (user.length > 0){
                        bcrypt.compare(req.body.password, user[0].password, function(err, result){
                            if (result){
                                res.json(user)
                            }
                            else{
                                res.send({
                                    'code': 204,
                                    'login': "Invalid email or password."
                                })
                            }
                        })
                    }
                    else{
                        res.send({
                            'code':204,
                            'login':"Invalid email or password."
                        })
                    }
                }
            })
        })
    })

    //GET USER BY ID
    app.get('/users/:id', (req, res) => {
        connection.connect(function(err){
            //MYSQL QUERY
            connection.query(`SELECT * FROM bloom_dev.users WHERE user_id = ${req.params.id}`,
            //FOLLOWING QUERY
            function(err, result, fields){
                if (err) res.send(err);
                if (result) res.send(result);
                if (fields) console.log(fields);
            });
        })
    })

    //DELETE USER BY ID
    app.delete('/users/:id', (req, res) => {
        connection.connect(function(err){
            connection.query(`DELETE FROM bloom_dev.users WHERE user_id = ${req.params.id}`,
            function(err, result, fields){
                if (err) res.send(err);
                if (result) res.send(result);
                if (fields) console.log(fields);
            });
        })
    })
};