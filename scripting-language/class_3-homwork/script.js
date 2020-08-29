// HOMEWORK 4
// Create a program showing a specific message:
// -----------------------------------------------------
// | Age range | Comment example                      |
// | 1 to 17   | You are not a major yet.             |
// | 18 to 49  | You are major, but not senior yet.   |
// | 50 to 64  | You are senior, but not yet retired. |
// ___________________________________________________ --
// Algorithm:
// STEP 1: Take age from user.
// STEP 2: if age is between 1 to 17, display: You are not a major yet.
// STEP 3: if age is between 18 to 49 , display: You are major, but not senior yet.
// STEP 4: if age is between 50 to 64, display: You are senior, but not yet retired.
// END

var age = Number(prompt("Enter your age:"));  

if(age >= 1 && age <= 17){
    alert('You are not a major yet.')
}

if(age >= 18 && age <= 49){
    alert('You are major, but not senior yet.')
}
if(age >= 50 && age <= 64){
    alert('You are senior, but not yet retired.')
}


// Homework 5:
// Display "Bonjour" 25 times to the user by using while loop.
// start -> 1 and end -> 25

// SOLUTION for HOMEWORK 5 STARTS HERE
var i = 1;
while(i <= 25){   
    alert("Bonjour");
    i = i + 1; 
} 
// SOLUTION for HOMEWORK 5 ENDS HERE
