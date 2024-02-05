                        /*     String Declaration   */

const name = "hitesh"
const repoCount = 50

 console.log(name + repoCount + " Value");
//*********please use this below (string interpolation) syantax while opearting with string dont use (+ +)**************** 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

 console.log(gameName[0]); //h 
 /*(Don't confuse. string is not an array. This object conatining a object as character with key and value pair and we are passing key to get value)*/
 console.log(gameName.__proto__);


                             /*  String Methods */


 console.log(gameName.length);
 console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));


/*

1. What is Diffrence declaring string 
       a. let gameName = "AngryBird" 
       b. let gameName = new String("AngryBird")

Answer:    second way is declaring string using Object class of string. There is no major difference. Even decalring a string as first option converting itself internally as Object only
            and mostly we prefer first option to declare string and one extra point with second option is if you go to browser and print the the string you will see, Prototype and some more stuff.

2. How Many ways to Create String ? What are diffrence 

Answer : Strings can be created as primitives, from string literals, or as objects, using the String() constructor.
                const string1 = "A string primitive";
                const string4 = new String("A String object");

        ->  String primitives and string objects share many behaviors, but have other important differences 

                const strPrim = "foo"; // A literal is a string primitive
                const strObj = new String(strPrim); // String with new returns a string wrapper object.

                console.log(typeof strPrim); // "string"
                console.log(typeof strObj); // "object"

        -> String primitives and String objects also give different results when using eval(). Primitives passed to eval are treated as source code; String objects are treated as all other objects are,
           by returning the object. For example:

                const s1 = "2 + 2"; // creates a string primitive
                const s2 = new String("2 + 2"); // creates a String object
                console.log(eval(s1)); // returns the number 4
                console.log(eval(s2)); // returns the string "2 + 2"

    Warning  :  You should rarely find yourself using String as a constructor.


2. Can You Acces the Chracter of string? How many ways?

    -> There are two ways to access an individual character in a string. The first is the charAt() method:

                        "cat".charAt(1); // gives value "a"

    -> The other way is to treat the string as an array-like object, where individual characters correspond to a numerical index:

                        "cat"[1]; // gives value "a"

            When using bracket notation for character access, attempting to delete or assign a value to these properties will not succeed.

*/

const sentence = 'The quick brown fox jumps over the lazy dog.';
let index = 2;
const updatedSentence = 'But not able to catch.'
const newUpdateSentence = ' Now he tried to jumop'

console.log(`${sentence} at ${index} gives the value ${sentence.at(index)}`);
console.log(`${sentence} at ${index} gives the value ${sentence.charAt(index)}`);
/*
                        at()

is newer (supported by all browsers only since March 2022)
works with any iterable object
can accept negative values as arguments

                    charAt()

is older and as such supported by older browser versions
only works with strings
cant accept negative values as arguments
*/
console.log(`it will return ascii/ charachter value given index in string  ${sentence.charCodeAt(index)}`);
console.log(`it will return ascii/ charachter value given index in string  ${sentence.codePointAt(index)}`);

/*
                 charCodeAt()
    
     > If index is out of range of 0 – str.length - 1, charCodeAt() returns NaN
                
                codePointAt()

    > If index is out of the range of 0 – str.length - 1, codePointAt() returns undefined.

Both methods return an integer representing the UTF-16 code of a character, but only codePointAt() can return 
the full value of a Unicode value greather 0xFFFF (65535).

*/


console.log(`${sentence.concat(updatedSentence,newUpdateSentence)}`) // we can n strigs to concate with given string

console.log(sentence.endsWith("dog."));
console.log(sentence.endsWith("brown",14));
console.log(sentence.endsWith("brown",15));

/*
    syntax:    
            endsWith(searchString, optional endPosition)
*/


console.log(String.fromCharCode(92, 42, 90, 61));// "\*Z=""
console.log(String.fromCodePoint(97, 114));  //"ar"
/* Here we give character code/ascii and get return the corresponding char value
    the only diffrence fromCodePoint has large limit for paramter
*/

console.log(sentence.includes("quick")); // true
console.log(sentence.includes("quick",10)); //false

/* syntax: 
    includes(searchString)
    includes(searchString, optional position)

    Here position : The position within the string at which to begin searching for searchString. (Defaults to 0.)
*/





