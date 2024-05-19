let fName = prompt("Please enter your first name");
const piValue = 3.1415926;
let myFavNum = prompt("Please enter your favorite number");
let myArea = piValue * myFavNum ** 2;

if(fName != null) {
    document.write(`Welcome ${fName}, have a wonderful day!`);
};

document.write("<br/>");
document.write(`${fName} you entered ${myFavNum} as your favorite number. If we were to use that number as the radius to find the area of a circle it would be ${myArea}.`);
