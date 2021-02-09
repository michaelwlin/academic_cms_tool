module.exports = (app, connection) => {

    //CREATE LANGUAGE
    app.post('/languages/new', (req, res) => {
        //VALIDATE LANGUAGE
        if(req.body.language < 1){
            return res.send({
                "code":204,
                "errors":"Please enter a language."
            })
        }
        if (req.body.language 
            || req.body.family 
            || req.body.subfamily 
            || req.body.language_group 
            || req.body.description 
            || req.body.orthography){
            connection.connect(function(err){
                //MYSQL QUERY
                connection.query(`INSERT INTO bloom_dev.languages (
                    language, 
                    family, 
                    subfamily, 
                    language_group, 
                    description, 
                    orthography) VALUES (
                        '${req.body.language}',
                        '${req.body.family}',
                        '${req.body.subfamily}',
                        '${req.body.language_group}',
                        '${req.body.description}',
                        '${req.body.orthography}')`,
                //FOLLOWING QUERY
                function(err, result, fields){
                    if (err) res.send(err);
                    if (result) res.send({
                        language: req.body.language,
                        family: req.body.family,
                        subfamily: req.body.subfamily,
                        langauge_group: req.body.language_group,
                        description: req.body.description,
                        orthography: req.body.orthography
                    });
                    if (fields) console.log(fields);
                });
            });
        } else{
            console.log("Missing parameter")
        }
    })

    //GET ALL LANGUAGES
    app.get('/languages', (req, res) => {
        connection.connect(function(err){
            //MYSQL QUERY
            connection.query(`SELECT * FROM bloom_dev.languages`,
            //FOLLOWING QUERY
            function(err, result, fields){
                if (err) res.send(err);
                if (result) res.send(result);
                if (fields) console.log(fields);
            });
        })
    })

    //GET ALL LANGUAGES NAMES
    app.get('/languages/all/names', (req, res) => {
        connection.connect(function(err){
            //MYSQL QUERY
            connection.query(`SELECT language FROM bloom_dev.languages`,
            //FOLLOWING QUERY
            function(err, result, fields){
                if (err) res.send(err);
                if (result) res.send(result);
                if (fields) console.log(fields);
            });
        })
    })

    //GET LANGUAGE BY ID
    app.get('/languages/:id', (req, res) => {
        console.log(req.params.id); 
        connection.connect(function(err){
            //MYSQL QUERY
            connection.query(`SELECT * FROM bloom_dev.languages WHERE language_id = ${req.params.id}`,
            //FOLLOWING QUERY
            function(err, result, fields){
                if (err) res.send(err);
                if (result) res.send(result);
                if (fields) console.log(fields);
            });
        })
    })

    //UPDATE LANGUAGE BY ID
    app.put('/languages/:id', (req, res) => {
        //VALIDATE LANGUAGE
        if(req.body.language < 1){
            return res.send({
                "code":204,
                "errors":"Please enter a language."
            })
        }
        if(req.body.language 
            || req.body.family 
            || req.body.subfamily 
            || req.body.language_group 
            || req.body.description 
            || req.body.orthography){
            connection.connect(function(err){
                //MYSQL QUERY
                connection.query(`UPDATE bloom_dev.languages SET 
                language = '${req.body.language}', 
                family = '${req.body.family}', 
                subfamily = '${req.body.subfamily}', 
                language_group = '${req.body.langauge_group}', 
                description = '${req.body.description}', 
                orthography = '${req.body.orthography}' WHERE language_id = ${req.params.id}`,
                //FOLLOWING QUERY
                function(err, result, fields){
                    if (err) res.send(err);
                    if (result) res.send({
                        language: req.body.language,
                        family: req.body.family,
                        subfamily: req.body.subfamily,
                        langauge_group: req.body.language_group,
                        description: req.body.description,
                        orthography: req.body.orthography
                    });
                    if (fields) console.log(fields);
                })
            })
        } else{
            console.log("Missing parameter")
        }
    })

    //DELETE LANGUAGE BY ID
    app.delete('/languages/:id', (req, res) => {
        connection.connect(function(err){
            //MYSQL QUERY
            connection.query(`DELETE FROM bloom_dev.languages WHERE language_id = ${req.params.id}`,
            //FOLLOWING QUERY
            function(err, result, fields){
                if (err) res.send(err);
                if (result) res.send(result);
                if (fields) console.log(fields);
            });
        })
    })
};