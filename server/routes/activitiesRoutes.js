module.exports = (app, connection) => {
    //CREATE ACTIVITY
    app.post('/activities/new', (req, res) => {
        if (req.body.prompt 
            || req.body.bloom_verb 
            || req.body.distractors 
            || req.body.activity_type 
            || req.body.task_type
            || req.body.expected_response
            || req.body.objective_id){
            connection.connect(function(err){
            //MYSQL QUERY
            connection.query(`INSERT INTO bloom_dev.activities (
                prompt, 
                bloom_verb,
                distractors,
                activity_type,
                task_type,
                expected_response,
                objective_id) VALUES (
                    '${req.body.prompt}',
                    '${req.body.bloom_verb}',
                    '${req.body.distractors}',
                    '${req.body.activity_type}',
                    '${req.body.task_type}',
                    '${req.body.expected_response}',
                    '${req.body.objective_id}')`,
            //FOLLOWING QUERY
            function(err, result, fields){
                if (err) res.send(err);
                if (result) res.send({
                    prompt: req.query.prompt,
                    bloom_verb: req.query.bloom_verb,
                    distractors: req.query.distractors,
                    activity_type: req.query.activity_type,
                    task_type: req.query.task_type,
                    expected_response: req.query.expected_response,
                    objective_id: req.query.objective_id,
                });
                if (fields) console.log(fields);
            });
        });
        } else{
            console.log("Missing parameter")
        }
    })
    //GET ALL ACTIVITIES
    app.get('/activities', (req, res) => {
        connection.connect(function(err){
            connection.query(`SELECT * FROM bloom_dev.activities`,
            function(err, result, fields){
                if (err) res.send(err);
                if (result) res.send(result);
                if (fields) console.log(fields);
            });
        })
    })
    //GET ACTIVITY BY ID
    app.get('/activities/:id', (req, res) => {
        console.log(req.params.id); 
        connection.connect(function(err){
            connection.query(`SELECT * FROM bloom_dev.activities WHERE activity_id = ${req.params.id}`,
            function(err, result, fields){
                if (err) res.send(err);
                if (result) res.send(result);
                if (fields) console.log(fields);
            });
        })
    })
    //UPDATE ACTIVITY BY ID
    app.put('/activities/:id', (req, res) => {
        if(req.body.prompt_text 
            || req.body.bloom_verb 
            || req.body.distractors 
            || req.body.activity_type 
            || req.body.task_type
            || req.body.expected_response
            || req.body.activity_id){
            connection.connect(function(err){
                connection.query(`UPDATE bloom_dev.activities SET 
                prompt_text = '${req.query.prompt_text}', 
                bloom_verb = '${req.query.bloom_verb}',
                distractors = '${req.query.distractors}',
                task_type = '${req.query.task_type}',
                expected_response = '${req.query.expected_response}',
                objective_id = '${req.query.objective_id}' WHERE activity_id = ${req.params.id}`,
                function(err, result, fields){
                    if (err) res.send(err);
                    if (result) res.send({
                        prompt_text: req.query.prompt_text,
                        bloom_verb: req.query.bloom_verb,
                        distractors: req.query.distractors,
                        activity_type: req.query.activity_type,
                        task_type: req.query.task_type,
                        expected_response: req.query.expected_response,
                        objective_id: req.query.objective_id,
                    });
                    if (fields) console.log(fields);
                })
            })
        } else{
            console.log("Missing parameter")
        }
    })
    //DELETE ACTIVITY BY ID
    app.delete('/activities/:id', (req, res) => {
        connection.connect(function(err){
            connection.query(`DELETE FROM bloom_dev.activities WHERE activity_id = ${req.params.id}`,
            function(err, result, fields){
                if (err) res.send(err);
                if (result) res.send(result);
                if (fields) console.log(fields);
            });
        })
    })
};