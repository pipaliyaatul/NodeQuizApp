var fs = require('fs');

fs.readFile('input.text',function(err,data){
    if(err)
    {
        console.log("There is an error getting file"+err);
    }
    else
    {
        console.log("Async Data is "+data.toString());
    }
});

var data=fs.readFileSync('input.text');
console.log("Sychronous Data Is : "+data.toString());
console.log("This is the end : ")