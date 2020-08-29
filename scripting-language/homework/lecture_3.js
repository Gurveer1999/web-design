// Homework 1: Take radius from the user.
// Calculate circumference: 2 * PIE * radius
// Calculate surface area: PIE(3.14) * radius * radius
// Display Circumference and surface area.
var radius = Number(prompt("Enter radius:"));
var circumference = 2 * 3.14 * radius;
var surfaceArea = 3.14 * radius * radius;
alert("Circumference: " + circumference + "\nSurface Area: " + surfaceArea);

// Homework 2: 
// Ask user to input A, B & C. Then display which number is smallest and largest.
// A -> 11
// B -> 10
// C -> 5
// Check if A is greater than (B & C), then display A is greater.
// Check if B is greater than (A & C), then display B is greater.
// Check if C is greater than (A & B), then display C is greater.


var A = Number(prompt("Enter A:"));
var B = Number(prompt("Enter B:"));
var C = Number(prompt("Enter C:"));

if(A > B && A > C){
	alert("A is greater!")
}

if(B > A && B > C){
	alert("B is greater!")
}

if(C > A && C > B){
	alert("C is greater!")
}