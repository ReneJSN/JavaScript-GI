let num1 = "Rene";
let num2 = "Santiago";

if (num1.length > num2.length){
    let difference = num1.length - num2.length
    console.log(num1 + " is longer than " + num2 + " by " + difference + " characters.")
} else {
    let difference = num2.length - num1.length
    console.log(num2 + " is longer than " + num1 + " by " + difference + " characters.")
}