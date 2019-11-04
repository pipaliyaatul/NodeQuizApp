var querystring=require('querystring');


function home(response)
{
    console.log("Executing Home Handler");
    var html='';
    html +="<body>";
    html += "<form action='/review'  method='post' name='form1'>";
    html += "Name:</p><input type= 'text' name='name'>";
    html += "Email:</p><input type='text' name='email'>";
    html += "address:</p><input type='text' name='address'>";
    html += "Mobile number:</p><input type='text' name='mobilno'>";
    html += "<input type='submit' value='submit'>";
    html += "<INPUT type='reset'  value='reset'>";
    html += "</form>";
    html += "</body>";
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(html);
    response.end();
}

function review(response,reviewdata)
{
    console.log("Executing Review Handler");
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Your review is "+ querystring.parse(reviewdata).text);
    response.end();
}

exports.home=home;
exports.review=review;