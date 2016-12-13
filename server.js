var imageFinder = require('./imageFinder.js');

if (!process.argv[2]) {
    console.log("Pass in URL as argument");
    process.exit(1);
}
var URL = process.argv[2];
console.log(URL);

imageFinder.getPage(URL, function(page){
    console.log(page);
})

/****** Param Parser ******/
/*for (var i = 2; i < process.argv.length; i++) {
    switch(process.argv[i]){
        case "-url":
            console.log("RUNNING IN DEBUG MODE");
            debugMode = true;
    }
}*/