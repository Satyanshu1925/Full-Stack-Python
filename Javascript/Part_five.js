var f_name = prompt("Hello and Welcome. Please enter your first name:")
var l_name = prompt("please enter your Last name: ")

var age = prompt("Please enter your age: ")
var height = prompt("How tall are you in centimeters?")

var pet_name = prompt("Please enter your pet name")
alert("Thank you so much for the information.")

if (f_name[0]==l_name[0] && age>=20 && age<=30 && height>=170 && (pet_name[pet_name.length-1]=='y' || pet_name[pet_name.length-1]=='Y')){
    console.log("Welcome Comrade! You've passed the Spy Test")
}
else{
    console.log("Sorry, nothing to see here.")
}
