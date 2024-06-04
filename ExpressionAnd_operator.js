// Arithmetic Operations Write a function that takes two numbers as parameters and returns their sum, difference, product, and quotient in an object.
function performOperations(a, b) {
    return {
        sum: a + b,
        difference: a - b,
        product: a * b,
        quotient: a / b
    };
}

console.log(performOperations(10, 5));

// string Concatenation Write a function that takes two strings as parameters and returns their concatenation.
function Concatenation(str1,str2){
    let combine=str1.concat(str2)
    return combine;
}
console.log(Concatenation('muawia','asif'))

// Comparison Operators Write a function that takes two numbers as parameters and returns true if the first number is greater than the second, and false otherwise.
function Comparison(num1,num2){
    if(num1>num2){
        return true
    }
    else{
        return false
    }
}
console.log(Comparison(2,5))

// Write a function that takes a number as a parameter and returns true if the number is between 10 and 20 (inclusive), or if the number is negative. Otherwise, return false.
function NumbersIs(x){
    x=Number(x)
 let max=20;
let  min=10;
if(x>=min && x<=max){
return true
}
else{
    return false
}
}
console.log(NumbersIs(2))
console.log(NumbersIs(22))
console.log(NumbersIs(18))

// Ternary Operator Write a function that takes a number as a parameter and returns "positive" if the number is greater than zero, "negative" if the number is less than zero, and "zero" if the number is equal to zero.
function checkPositive(num){
return num>0?'positive':'negative'
}
console.log(checkPositive(18))
console.log(checkPositive(-11))

// Short-circuit Evaluation Write a function that takes two parameters: x and y. If x is truthy, return x; otherwise, return y.
function Evaluation(x,y){
    return x || y; 
    
}
console.log(Evaluation(0,7))
console.log(Evaluation(null,4))
console.log(Evaluation(5,0))

// Bitwise Operators Write a function that takes two numbers as parameters and returns their bitwise AND, OR, and XOR operations.
function Bitwise_Operators(a,b){
    
if(a>0 && b<50){
    return 'number is between 0 and 50'
}
else if(a>60 || 90 ){
    return 'number is between 60 and 90'
}

else if(a!==b){
   return 'a and b is not equal'
}
}
console.log(Bitwise_Operators(67,67))

// Precedence and Parentheses Write a function that takes three numbers as parameters and returns the result of (a + b) * c.
function checkPrecidenc(a,b,c){
    return (a + b) * c
}
console.log(checkPrecidenc(3,5,7))

// Write a function that takes any value as a parameter and returns its data type as a string (e.g., "number", "string", "object", "undefined", etc.).
function ceckDataType(value){
    return (typeof value)
}
console.log(ceckDataType('Muawia'))
console.log(ceckDataType(12))
console.log(ceckDataType(null))
console.log(ceckDataType(undefined))
console.log(ceckDataType({}))
// Assignment Operators Write a function that takes two parameters, a and b. Swap the values of a and b using the assignment operator without using a temporary variable.
function swapValues(a, b) {
    [a, b] = [b, a];
    console.log("a:", a);
    console.log("b:", b);
}

swapValues(5, 10);

