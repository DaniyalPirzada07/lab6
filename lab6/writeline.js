const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("write your name ", function(answer){
    console.log(`Your name is ${answer}`);
    rl.close();
});