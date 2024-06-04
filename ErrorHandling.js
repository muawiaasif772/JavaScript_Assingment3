// Divide Numbers Write a function divideNumbers that takes two parameters a and b. Inside the function, use a try block to attempt dividing a by b. In the catch block, handle the exception if b is 0 and return a message indicating division by zero. In the finally block, log a message indicating that the division attempt has been completed.
function divideNumbers(a, b) {
    try {
        const result = a / b;
    return result;
       
    } catch (error) {
        if (b < 0) {
            return error ?
            'division by zero':'';
        }
    } finally {
        if (b !== 0) {
            console.log('Division attempt has been completed.');
        }
    }
    
}

console.log(divideNumbers(6, 9));

// Parse Integer Write a function parseInteger that takes a string as a parameter and attempts to parse it into an integer using parseInt(). Use a try block to perform the parsing, and in the catch block, return a message indicating that the input is not a valid number
function parseInteger(str) {
    try {
        return parseInt(str);
    } catch (error) {
        return "Input is not a valid number.";
    }
}

console.log(parseInteger('78')); 
console.log(parseInteger('abc')); 




    // Exercise 3: Custom Error Handling Write a function getAreaOfRectangle that takes two parameters length and width. If either length or width is not a positive number, throw a custom error with an appropriate message. Otherwise, return the area of the rectangle.

    function getAreaOfRectangle(width,height){
        try{
            let result=height*width;
            if(height<0 || width<0){
                throw new Error('please eneter positive width and height')
            }
            return result
        }
        catch(error){
            return error
        }
    }
    console.log(getAreaOfRectangle(5,6))
    console.log(getAreaOfRectangle(5,-7))
