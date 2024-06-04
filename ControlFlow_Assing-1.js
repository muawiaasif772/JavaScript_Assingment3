// Exercise 1: Grade Calculator Write a function getGrade that takes a numerical score as a parameter and returns the corresponding letter grade based on the following grading scale:

// 90 and above: "A"
// 80 to 89: "B"
// 70 to 79: "C"
// 60 to 69: "D"
// Below 60: "F"
function getGrade(numbers){
    if(numbers>=90){
        return 'A'
    }else if(numbers>=80 && numbers<89 ){
        return'B'
    } else if(numbers>=70 && numbers<79){
        return'C'
    }
    else if(numbers>=60 && numbers<69){
        return'D'
    }
    else{
        return'F'
    }
}
console.log(getGrade(45))

// Time Greeting Write a function greetBasedOnTime that takes the current hour as a parameter and returns a greeting message based on the time of day:

// 0 to 11: "Good morning"
// 12 to 17: "Good afternoon"
// 18 to 23: "Good evening"

function greetBasedOnTime(time){
 if(time>0 && time<=11){
   return "Good morning"
 }
 else if(time>12 && time<=17){
    return("Good afternoon")}
else if(time>18 && time<=23){
return "Good evening"
}
else{
   return 'enter valid hourse'
}
}
console.log(greetBasedOnTime(22))
// Check if a Number is Prime Write a function isPrime that takes a positive integer as a parameter and returns true if it is a prime number, and false otherwise. A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.
function isPrime(prime){
    if(prime>0 && prime%2===1){
        return true
    }
    else{
        return false
    }
}
console.log(isPrime(19))