// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
// YOUR CODE GOES HERE



// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.

// YOUR CODE GOES HERE
let fortune = prompt("If answers are what you seek, you have come to the right place to meet. Deep in my depths I will reveal, that which your heart holds most ideal. A number between 0 and 10 you must choose, for each time your fortune will rebirth anew.");

if(fortune >= 0 && fortune <= 3){
    console.log("You have a low fortune. Woe be upon you unlucky soul.");
} else if (fortune > 3 && fortune <=7){
    console.log("You have an average fortune.");
} else if(fortune > 7 && fortune <= 10){
    console.log("Eureka! You are a truly fortunate fellow!");
} else {
    console.log("Your fortune is out of range. Pick between 0 and 10 and try again. If you fail to comply, unspeakable horrors will befall you tomorrow.");
}
