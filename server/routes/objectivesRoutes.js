module.exports = (app, connection) => {

    //CREATE OBJECTIVE
    app.post('/objectives/new', (req, res) => {
        //VALIDATE OBJECTIVE_NAME
        if(req.body.objective_name < 1){
            return res.send({
                "code":204,
                "errors":"Please enter an objective name."
            })
        }
        if (req.body.objective_name 
            || req.body.bloom_verbs 
            || req.body.domain 
            || req.body.subdomain 
            || req.body.lesson_id){
            connection.connect(function(err){
                //MYSQL QUERY
                connection.query(`INSERT INTO bloom_dev.objectives (
                    objective_name, 
                    bloom_verbs,
                    domain,
                    subdomain,
                    lesson_id) VALUES (
                        '${req.body.objective_name}',
                        '${req.body.bloom_verbs}',
                        '${req.body.domain}',
                        '${req.body.subdomain}',
                        '${req.body.lesson_id}')`,
                //FOLLOWING QUERY
                function(err, result, fields){
                    if (err) res.send(err);
                    if (result) res.send({
                        objective_name: req.body.objective_name,
                        bloom_verbs: req.body.bloom_verbs,
                        domain: req.body.domain,
                        subdomain: req.body.subdomain,
                        lesson_id: req.body.lesson_id
                    });
                    if (fields) console.log(fields);
                });
            });
        } else{
            console.log("Missing parameter")
        }
    })

    //GET ALL OBJECTIVES
    app.get('/objectives', (req, res) => {
        connection.connect(function(err){
            //MYSQL QUERY
            connection.query(`SELECT * FROM bloom_dev.objectives`,
            //FOLLOWING QUERY
            function(err, result, fields){
                if (err) res.send(err);
                if (result) res.send(result);
                if (fields) console.log(fields);
            });
        })
    })

    //GET OBJECTIVE BY ID
    app.get('/objectives/:id', (req, res) => {
        console.log(req.params.id); 
        connection.connect(function(err){
            //MYSQL QUERY
            connection.query(`SELECT * FROM bloom_dev.objectives WHERE objective_id = ${req.params.id}`,
            //FOLLOWING QUERY
            function(err, result, fields){
                if (err) res.send(err);
                if (result) res.send(result);
                if (fields) console.log(fields);
            });
        })
    })

    //UPDATE OBJECTIVE BY ID
    app.put('/objectives/:id', (req, res) => {
        //VALIDATE OBJECTIVE NAME
        if(req.body.objective_name < 1){
            return res.send({
                "code":204,
                "errors":"Please enter an objective name."
            })
        }
        if(req.body.objective_name 
            || req.body.bloom_verbs 
            || req.body.domain 
            || req.body.subdomain 
            || req.body.lesson_id){
            connection.connect(function(err){
                connection.query(`UPDATE bloom_dev.objectives SET 
                objective_name = '${req.body.objective_name}', 
                bloom_verbs = '${req.body.bloom_verbs}',
                domain = '${req.body.domain}',
                subdomain = '${req.body.subdomain}',
                lesson_id = '${req.body.lesson_id}' WHERE objective_id = ${req.params.id}`,
                function(err, result, fields){
                    if (err) res.send(err);
                    if (result) res.send({
                        objective_name: req.body.objective_name,
                        bloom_verbs: req.body.bloom_verbs,
                        domain: req.body.domain,
                        subdomain: req.body.subdomain,
                        lesson_id: req.body.lesson_id
                    });
                    if (fields) console.log(fields);
                })
            })
        } else{
            console.log("Missing parameter")
        }
    })

    //DELETE OBJECTIVE BY ID
    app.delete('/objectives/:id', (req, res) => {
        connection.connect(function(err){
            connection.query(`DELETE FROM bloom_dev.objectives WHERE objective_id = ${req.params.id}`,
            function(err, result, fields){
                if (err) res.send(err);
                if (result) res.send(result);
                if (fields) console.log(fields);
            });
        })
    })
};