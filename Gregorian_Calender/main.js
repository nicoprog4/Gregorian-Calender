
//Determine if a year is bicycle in the Gregorian calendar
//We declare a variable called year and in this variable we will store the value that the user enters by keyboard//
let anio;

//We will create a prompt for the user to type the year//
anio = prompt("Ingrese el año");

// The parseInt is used to transform the typed text into a numeric value//
anio = parseInt(anio);

// We will create a conditional //
if(anio%100 === 0 ? anio & 400 === 0 : anio % 4 === 0){
document.write("El año es bisiesto");
//We print on the dom whether or not it is a leap year//
} else {


    document.write("El año no es bisiesto");
}