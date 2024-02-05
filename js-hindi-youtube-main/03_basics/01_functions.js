
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage("hitesh"))

   
/*    +++  rest Operator +++   */
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));



/*

        Rest Operator vs Spread Operator 


        My Defination : Rest Operator represent as triple dot. which means all the values supplied by the user puts inside single array.
                        Spread Operator also represent as triple dot (...) here given values of iterables expands into individual elements.

        https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/

        The main difference between rest and spread is that the rest operator puts 
        the rest of some specific user-supplied values into a JavaScript array.
         But the spread syntax expands iterables into individual elements.''

         
        Rest Operator   ---> puts the values inside the array

                *  
                        function myBio(firstName, lastName, ...otherInfo) { 
                            return otherInfo;
                        }

                        myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");
                        
                        // The invocation above will return:
                        ["CodeSweetly", "Web Developer", "Male"]

                *  Rest Operator Works in a Destructuring Assignment (rest element should be at last )
                        const [firstName, lastName, ...otherInfo] = ["Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"]; 

        Spread Operator 

                        
                * The spread syntax works within array literals, function calls, and initialized property objects to spread the values
                     of iterable objects into separate items


                     + Spread Works in an Array Literal

                        const myName = ["Sofela", "is", "my"];
                        const aboutMe = ["Oluwatobi", ...myName, "name."];

                        console.log(aboutMe); // [ "Oluwatobi", "Sofela", "is", "my", "name." ]

                    +  Spread Convert a String into Individual Array Items

                        const myName = "Oluwatobi Sofela";
                        console.log([...myName]); //    [ "O", "l", "u", "w", "a", "t", "o", "b", "i", " ", "S", "o", "f", "e", "l", "a" ]


                    + Spread Operator Works in a Function Call

                        const numbers = [1, 3, 5, 7];

                        function addNumbers(a, b, c, d) {
                            return a + b + c + d;
                        }
                        console.log(addNumbers(...numbers)); //16


                    + How Spread Works in an Object Literal

                     ex1   const myNames = ["Oluwatobi", "Sofela"];
                        const bio = { ...myNames, runs: "codesweetly.com" };

                        console.log(bio);   // { 0: "Oluwatobi", 1: "Sofela", runs: "codesweetly.com" }

                    ex2
                        const myNames = {id:122, name:"Ayush"};
                        const bio = { ...myNames, runs: "codesweetly.com" };

                        console.log(bio) // {id: 122, name: 'Ayush', runs: 'codesweetly.com'}


                    #### What to Know About the Spread Operator ###

                    + Spread operators can’t expand object literal’s values

                    + The spread operator does not clone identical properties

                                const myName = { firstName: "Tobi", lastName: "Sofela" };
                                const bio = { ...myName, firstName: "Oluwatobi", website: "codesweetly.com" };

                                console.log(bio); //  { firstName: "Oluwatobi", lastName: "Sofela", website: "codesweetly.com" };

                    + Beware of how spread works when used on objects containing non-primitives!

                               

*/