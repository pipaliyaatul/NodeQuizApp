var express=require('express');


var app=express();

app.use(express.static('public'));

app.set('view engine','jade');

app.get('/',function(request,response)
{

    response.render('login');
    //response.render('index',{title:'My First App',message:'Hello World '});
});

app.get('/mylist',function(request,response)
{

    response.render('mylist');
});
app.get('/contactus',function(request,response)
{

    response.render('contactus');
});

app.get('/loggeinuser/username', function (req, res, next) {
    // req.url starts with "/foo"
    res.render("index",{output:req.params.username});
  });
/*
app.post('/loggeinuser',function(request,response){ 
});
*/

app.listen(3000,function(){
    console.log('I am running on the 3000');
})