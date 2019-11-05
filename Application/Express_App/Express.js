var express= require('express');
var mysql  = require('mysql');
var app    = express();
var bodyParser = require('body-parser');

//Application Settings
app.use(express.static('public'));
app.set('view engine','jade');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Database Connection Configuration
var connection = mysql.createConnection
({
    host     : 'localhost',
    user     : 'root',
    password : 'Atul',
    database : 'test'
  });

app.get('/',function(request,response)
{      
      //connection.connect();
      connection.query('SELECT username from user', function (error, results, fields) 
      {
        if(results[1].username == "admins")
        {
            console.log("You are admin Taking you to the admin Page")
            response.render('index',{title:'Quiz Generator',solution: results[0].username});    
        }
        else
        {
            console.log("Regular User")
            response.render('mylist',{solution: results[1].username});
        }
        if (error) throw error;
        console.log('The solution is: ', results[0]);
      });
});
app.get('/index',function(request,response)
{

    response.render('/NodeQuizApp/Application/Express_App/views/index.jade');
});
app.get('/mylist',function(request,response)
{

    response.render('mylist');
});
app.get('/contactus',function(request,response)
{

    response.render('contactus');
});

app.get('/loggeinuser', function (request, response, next) {
    res.render("/NodeQuizApp/Application/Express_App/views/index.jade");
    next();
  });

app.listen(3000,function(){
    console.log('I am running on the 3000');
})