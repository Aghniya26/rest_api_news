const express= require('express');
const bodyParser= require('body-parser');
var cors = require('cors')

//create express app
const app= express();
app.use(cors())
//setup server port
const port=process.env.port||5000;

//parse request of content type -applocation/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

//parse request of content-type - application/json
app.use(bodyParser.json());

//define a root route
app.get('/', (req, res)=>{
    res.send("hello world");
});

//require news routes
const newsRoutes= require('./src/routes/news.route')

//using as middleware
app.use('/api/dev/news', newsRoutes)

//listen for requests
app.listen(port, ()=>{
    console.log('Server is listening on port ${port}');
});