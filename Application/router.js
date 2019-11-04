function route(handle,pathname,response,reviewdata)
{
    console.log("Routing a request  for "+pathname);

    if(typeof handle[pathname]==='function')
    {
        handle[pathname](response,reviewdata);
    }
    else
    {
        console.log("No Handler for this path")
        response.writeHead(404,{"Content-Type":"text/plain"});
        response.write("Error 404 Page not Found!");
        response.end();
    }
}

exports.route=route;