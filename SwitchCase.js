// Exercise 1: Switch-Case Write a function getSeason that takes a month (as a string or number) as a parameter and returns the corresponding season based on the following mapping:

// "December", "January", "February" => "Winter"
// "March", "April", "May" => "Spring"
// "June", "July", "August" => "Summer"
// "September", "October", "November" => "Autumn"
function getSeason(number){
    // number=Number(number)

    if (isNaN(number) || number < 1 || number > 12) {
        return 'Enter a valid month number between 1 and 12';
    }
switch(true){
    case (number>=12 || number<3):
        return  'winter'
    case (number>3 || number<=5):
        return  "Spring"
 case (number>5 && number<=8):
        return  "Summer"
case (number>8 && number<=11):
    console.log( "Autumn")
}

}
console.log(getSeason(4))

// Exception Handling Write a function divideNumbers that takes two parameters a and b. Handle the exception when b is 0 and return the result of the division.
function divideNumbers(divider,diviser){        
    try{
        let result=divider/diviser;
        if(diviser==0){
            throw new Error("you can't divided by zero")
        }
        return result

    }
    catch(error){
        return error

    }}
    console.log(divideNumbers(6,5))
    console.log(divideNumbers(4,0))

// Exercise 3: Throw Statement Write a function calculateSquareRoot that takes a number as a parameter and returns the square root. If the input is negative, throw a custom error with an appropriate message.
function calculateSquareRoot(number){
   try{
    let result=number*number
    if(number<0){
        throw new Error('Enter a positive number')
    }
    return result
   }
   catch(error){
    return error
    // console.log(error)
   }
}
console.log(calculateSquareRoot(5))
console.log(calculateSquareRoot(-5))
