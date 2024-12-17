alert("Success")

const button = document.getElementById("John");

button.addEventListener("click", function(e){
    e.target.value
    const navbar = document.getElementById("navbar");
    navbar.classList.remove("navcolormain")
    navbar.classList.add("navcolor2")

    })

//Find out which button was clicked
//Need to use an array
//For loop

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}