var fs = require('fs');


fs.readFile('./01.txt', 'utf8', function(err, text1) {
    if (err) return console.log(err);
    fs.readFile('./02.txt', 'utf8', function(err, text2) {
        if (err) return console.log(err);
        fs.readFile('./03.txt', 'utf8', function(err, text3) {
            if (err) return console.log(err);
            fs.readFile('./04.txt', 'utf8', function(err, text4) {
                if (err) return console.log(err);
                console.log(text1 + text2 + text3 + text4)
                console.log("Async: Jetzt ist es aber fertig")
            });
        });
    });
});
console.log("Async: noch nicht fertig")
