var user = function(inputvalue)
{
    console.log("Hello : "+inputvalue);
}


function mainfun(anotherfun,value)
{
    anotherfun(value);

}

setTimeout(user,5000);
