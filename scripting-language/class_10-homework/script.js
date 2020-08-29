// HOMEWORK 1: Create an empty array of type string having a name 'LaptopCompanies'.
//            * At index 0: Samsung
//            * At index 1: Apple
//            * At index 2: Google
//            * At index 3: Lenovo
//            * At index 4: LG
//            * Calculate the length of an array.
//            * console.log its length.  
//            * Add Dell & Sony to LaptopCompanies array.
//            * console.log the LaptopCompanies array.
//            * Remove Google from the array.
//            * console.log the LaptopCompanies array.

// ************ HOMEWORK 1 code begins here ************
var laptopCompanies = ["Samsung", "Apple", "Google", "Lenovo", "LG"];
var arrayLength = laptopCompanies.length;
console.log(`Length of array is:> ${arrayLength}`);

laptopCompanies.push("Dell", "Sony");

var removeGoogle = laptopCompanies.indexOf("Google");
laptopCompanies.splice(removeGoogle, 1);
console.log(laptopCompanies);

// ************ HOMEWORK 1 ends begins here ************


// HOMEWORK 2: Create an obj having name mobileCompanies
//             |-----------------------|
//             |     KEY      |  VALUE |
//             |  apple       |    2   |
//             |  samsung     |    5   |
//             |  motorola    |    2   |
//             |  google      |    3   |
//             |-----------------------|
//  * console.log the mobileCompanies object.
//  * console.log  no. of motorola mobiles.
//  * remove apple key.
//  * console.log the mobileCompanies object.

// ************ HOMEWORK 2 code begins here ************
var mobileCompanies = {
    apple: 2,
    samsung: 5,
    motorola: 2,
    google: 3,
};

console.log(mobileCompanies);
console.log("Number of motorola mobiles is:> ", mobileCompanies.motorola);
delete mobileCompanies.apple;

console.log(mobileCompanies);

// ************ HOMEWORK 2 ends begins here ************