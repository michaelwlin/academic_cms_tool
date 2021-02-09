module.exports = (app, connection) => {

    //CREATE LESSON
    app.post('/lessons/new', (req, res) => {
        //VALIDATE LESSON_NAME
        if(req.body.lesson_name < 1){
            return res.send({
                "code":204,
                "errors":"Please enter a lesson name."
            })
        }
        if (req.body.lesson_name || req.body.course_id){
            connection.connect(function(err){
                //MYSQL QUERY
                connection.query(`INSERT INTO bloom_dev.lessons (
                    lesson_name, 
                    course_id) VALUES (
                        '${req.body.lesson_name}',
                        '${req.body.course_id}')`,
                //FOLLOWING QUERY
                function(err, result, fields){
                    if (err) res.send(err);
                    if (result) res.send({
                        lesson_name: req.body.lesson_name,
                        course_id: req.body.course_id
                    });
                    if (fields) console.log(fields);
                });
            });
        } else{
            console.log("Missing parameter")
        }
    })

    //GET ALL LESSONS
    app.get('/lessons', (req, res) => {
        connection.connect(function(err){
            //MYSQL QUERY
            connection.query(`SELECT * FROM bloom_dev.lessons`,
            //FOLLOWING QUERY
            function(err, result, fields){
                if (err) res.send(err);
                if (result) res.send(result);
                if (fields) console.log(fields);
            });
        })
    })

    //GET LESSON BY ID
    app.get('/lessons/:id', (req, res) => {
        console.log(req.params.id); 
        connection.connect(function(err){
            //MYSQL QUERY
            connection.query(`SELECT * FROM bloom_dev.lessons WHERE lesson_id = ${req.params.id}`,
            //FOLLOWING QUERY
            function(err, result, fields){
                if (err) res.send(err);
                if (result) res.send(result);
                if (fields) console.log(fields);
            });
        })
    })

    //UPDATE LESSON BY ID
    app.put('/lessons/:id', (req, res) => {
        //VALIDATE LESSON_NAME
        if(req.body.lesson_name < 1){
            return res.send({
                "code":204,
                "errors":"Please enter a lesson name."
            })
        }
        if(req.body.lesson_name || req.body.course_id){
            connection.connect(function(err){
                //MYSQL QUERY
                connection.query(`UPDATE bloom_dev.lessons SET 
                lesson_name = '${req.body.lesson_name}', 
                course_id = '${req.body.course_id}' WHERE lesson_id = ${req.params.id}`,
                //FOLLOWING QUERY
                function(err, result, fields){
                    if (err) res.send(err);
                    if (result) res.send({
                        lesson_name: req.body.lesson_name,
                        course_id: req.body.course_id
                    });
                    if (fields) console.log(fields);
                })
            })
        } else{
            console.log("Missing parameter")
        }
    })

    //DELETE LESSON BY ID
    app.delete('/lessons/:id', (req, res) => {
        connection.connect(function(err){
            //MYSQL QUERY
            connection.query(`DELETE FROM bloom_dev.lessons WHERE lesson_id = ${req.params.id}`,
            //FOLLOWING QUERY
            function(err, result, fields){
                if (err) res.send(err);
                if (result) res.send(result);
                if (fields) console.log(fields);
            });
        })
    })
};