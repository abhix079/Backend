// So if we want to display some messages on the console , we use console.log

// but if we want to take input from the terminal we use readline function

const readline = require('readline');  // it returns an object and saved to variable rl
const rl=readline.createInterface({  // here we are creating the interface  
    input:process.stdin,
    output:process.stdout

});
rl.question("Please enter your name:",(name)=>{
    console.log("You entered: ", name);  // as after using we have to close the interface
    rl.close(); // this will close the interface after the use

})

/// the close can also be listend 

rl.on('close',()=>{  // on method is listening to close event
    console.log("Inteface closed");
    process.exit(0);

})
