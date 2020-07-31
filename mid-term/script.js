// Answer number 1

let radius = Number(prompt('Please provide the radius of the sphere to find its volume'));

let volume = (4/3) * 3.14 * radius * radius * radius;

alert('Volume of the sphere is '+ volume);


// Answer number 2
let age = Number(prompt('What is your age'));

if(age >= 1 && age <= 19){
    alert('You are not a major yet.');
}

if(age >= 20 && age <= 45){
    alert('You are major, but not senior yet.');
}

if(age >= 46 && age <= 90){
    alert('You are senior, but not yet retired.');
}

//  Answer number 3

var i = 1;
while(i <= 25){   
    alert("Bonjour");
    i = i + 1; 
}
