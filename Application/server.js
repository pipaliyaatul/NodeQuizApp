var http=require('http');
var url = require('url');

function startserver(route,handle)
{
    function onRequest(request,response)
    {
        var reviewdata="";

        var pathname=url.parse(request.url).pathname;
        console.log("Request Received for "+pathname);

        request.setEncoding("UTF8");

        request.addListener("data",function(chunk)
        {
            reviewdata+=chunk
        });

        request.addListener("end",function()
        {
            route(handle,pathname,response,reviewdata);
        })
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server Is Started at Localhost://8888");
}
exports.startserver=startserver;