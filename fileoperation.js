var fs = require('fs');


var readableStream = fs.createReadStream('input.text');
var data ='';

readableStream.setEncoding('UTF8');
readableStream.on('data',function(chunk){
    data+=chunk;
});

readableStream.on('end',function()
{
    console.log(data);
});

var writeData="Hello world I have appended";

var writeableStream = fs.createWriteStream('output.text');
writeableStream.write(writeData,'UTF8');
writeableStream.end();

writeableStream.on('finish',function(){console.log("Write completed ")})

