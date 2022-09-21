var userInput = prompt("Our you shouting or whispering?");

if (userInput.toUpperCase() === userInput) {
    console.log("This person is shouting");
} else if (userInput.toLowerCase() === userInput) {
    console.log("This person is whispering");
} else {
    console.log("this is neither shouting nor whispering");
}