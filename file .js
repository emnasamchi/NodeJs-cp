const fs = require("fs");
fs.writeFile("welcome.txt", "Hello node ", function (err) {
    if (err) throw err;
    console.log('Saved!');});



fs.readFile("welcome.txt",function(err,data){
    if (err) throw err;
    console.log("file content : "+data);

})    
