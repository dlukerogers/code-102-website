// Notes from class 06

// let myContainer = 'Hello';
// let myOtherContainer = 'class';

// let myAge = 25;
// console.log(myAge);
// myAge = 26;

// console.log('Hello from line 7');

// const myName = "Luke";

// From lab 07

function getName(){
    const userName = prompt ("What is your name?");
    console.log(userName);
    if (userName == "Luke"){
        document.write("All hail my creator!")
    } else if (userName == "Michelle") {
        document.write("Hi Mom!")
    }
    else {
        document.write("Hello amazing person!")
    };
    document.write(" Welcome to the best website you've ever seen!");
}

getName();

// From lab 06

// alert ("Welcome!");
// const userName = prompt ("What is your name?");
// console.log(userName);

// if (userName == "Luke"){
//     document.write("All hail my creator!")
// } else if (userName == "Michelle") {
//     document.write("Hi Mom!")
// }
// else {
//     document.write("Hello amazing person!")
// }


// document.write(" Welcome to the best website you've ever seen!");

// From lab 08

function seePuppies(){
    let puppies = prompt("How many puppies do you want to see on my page? (Please enter a number")
    for (let i = 0; i < puppies; i++){
        document.write("<img src='puppy.jpg' alt='a white fluffy puppy' id='puppy-image' />");
    }
}

seePuppies();
    
function password(){
    let userPassword = prompt("What is the password?");
    while (userPassword != "awesome"){
        userPassword = prompt("That password is incorrect. What is the password?");
    }
    alert("Come on in!");
}

password();

// From lab 06

function blueCool(){
    let text;
    if (confirm ("Are you ok with the color blue?") == true) {
        text = "Cool";
    } else {
        text = "Too bad"
    }
    alert(text);
}

blueCool();

// Notes from class 07

// function password(pw1, pw2){
//     let userPassword = pw1 + pw2;
//     document.write(userPassword);
//     return userPassword;
// }

// let result = password(cool, guy)
// prompt (password)

// function myFunction(){
//     console.log("Hello from the function");
// }

// let result = myFunction();
// console.log(result);

// function thisFunction(word){
//     let message = "You picked the word: " + word;
//     console.log(message);
//     return message;
// }

// // thisFunction("potato");
// let theMessage = thisFunction("cat");
// console.log(theMessage);

// function getName(){
//     let theirName = prompt("What is your name?");
//     return theirName;
// }

// function sayHi(name){
//     alert("Hello there," + name + "!");
// }

// sayHi(getName());

// Notes from class 08

// let userGuess = prompt("Pick a number between 1 & 5");
// while (userGuess == 5){
//     userGuess = prompt("Guess again! 1 - 5")
// }
// console.log("You got it!")


// for (let i = 0; i < 10; i = i + 1){
//     console.log("Hello person");
// }

// i is 0 | 0<5 ? True | execute our loop | 1
// i is 1 | 1<5 ? True | execute our loop | 2
// i is 2 | 2<5 ? True | execute our loop | 3
// i is 3 | 3<5 ? True | execute our loop | 4
// i is 4 | 4<5 ? True | execute our loop | 5
// i is 5 | 5<5 ? False | Break our loop
