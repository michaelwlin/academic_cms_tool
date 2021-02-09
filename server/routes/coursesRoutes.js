module.exports = (app, connection) => {

    //CREATE COURSE
    app.post('/courses/new', (req, res) => {
        //VALIDATE COURSE_NAME
        if(req.body.course_name < 1){
            return res.send({
                "code":204,
                "errors":"Please enter a course name."
            })
        }
        if (req.body.course_name || req.body.language_id){
            connection.connect(function(err){
                //MYSQL QUERY
                connection.query(`INSERT INTO bloom_dev.courses (
                    course_name, 
                    language_id) VALUES (
                        '${req.body.course_name}',
                        '${req.body.language_id}')`,
                //FOLLOWING QUERY
                function(err, result, fields){
                    if (err) res.send(err);
                    if (result) res.send({
                        course_name: req.body.course_name,
                        language_id: req.body.language_id
                    });
                    if (fields) console.log(fields);
                });
            });
        } else{
            console.log("Missing parameter")
        }
    })

    //GET ALL COURSES
    app.get('/courses', (req, res) => {
        connection.connect(function(err){
            //MYSQL QUERY
            connection.query(`SELECT DISTINCT * FROM bloom_dev.courses LEFT JOIN languages ON courses.language_id = languages.language_id`,
            //FOLLOWING QUERY
            function(err, result, fields){
                if (err) res.send(err);
                if (result) res.send(result);
                if (fields) console.log(fields);
            });
        })
    })

    //GET COURSE BY ID
    app.get('/courses/:id', (req, res) => {
        console.log(req.params.id); 
        connection.connect(function(err){
            //MYSQL QUERY
            connection.query(`SELECT * FROM bloom_dev.courses WHERE course_id = ${req.params.id}`,
            //FOLLOWING QUERY
            function(err, result, fields){
                if (err) res.send(err);
                if (result) res.send(result);
                if (fields) console.log(fields);
            });
        })
    })

    //UPDATE COURSE BY ID
    app.put('/courses/:id', (req, res) => {
        //VALIDATE COURSE_NAME
        if(req.body.course_name < 1){
            return res.send({
                "code":204,
                "errors":"Please enter a course name."
            })
        }
        if(req.body.course_name || req.body.language_id){
            connection.connect(function(err){
                //MYSQL QUERY
                connection.query(`UPDATE bloom_dev.courses SET 
                course_name = '${req.body.course_name}', 
                language_id = '${req.body.language_id}' WHERE course_id = ${req.params.id}`,
                //FOLLOWING QUERY
                function(err, result, fields){
                    if (err) res.send(err);
                    if (result) res.send({
                        course_name: req.body.course_name,
                        language_id: req.body.language_id
                    });
                    if (fields) console.log(fields);
                })
            })
        } else{
            console.log("Missing parameter")
        }
    })

    //DELETE COURSE BY ID
    app.delete('/courses/:id', (req, res) => {
        connection.connect(function(err){
            //MYSQL QUERY
            connection.query(`DELETE FROM bloom_dev.courses WHERE course_id = ${req.params.id}`,
            //FOLLOWING QUERY
            function(err, result, fields){
                if (err) res.send(err);
                if (result) res.send(result);
                if (fields) console.log(fields);
            });
        })
    })
};