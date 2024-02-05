// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn01 = myArr.slice()
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

let newArray1 = ["ABC","DEF","FGH","IJK"]
const myn3 = newArray1.splice(1,0,345);  //added 345 at index 1 of newArray
console.log("D ", newArray1);
console.log(myn3); // no element is removed so the array will be empty

/*
              +++++ slice +++++

    -> The slice() method returns a copy of a portion of an array into a new array
        selected from start to end (end not included) 

    -> where start and end represent the index of items in that array. 
    
    -> The original array will not be modified.

    Syntax

        slice(start, end) 
               
    Return 

        A new array containing the extracted elements.
    



                +++++ splice +++++ 

    -> The splice() method changes the contents of an array by removing or replacing existing elements
        and/or adding new elements in place

    -> The original array will modified. If you dont want to modified/mutate original array go for toSpliced method

    Syntax 

        splice(start, deleteCount, item1, item2,  …,  itemN)

        # start
            Zero-based index at which to start changing the array,

        # deletedCount (optional)
            An integer indicating the number of elements in the array to remove from start

        # item1, …, itemN (optional)

            The elements to add to the array, beginning from start.
            If you do not specify any elements, splice() will only remove elements from the array.

   Return

    An array containing the deleted elements.
    If only one element is removed, an array of one element is returned.
    If no elements are removed, an empty array is returned.

*/


const newArray2 = [1,2,3,4,5]
let myn4 = newArray2.shift();
console.log("E",newArray2); //E [ 2, 3, 4, 5 ]
console.log(myn4); //1

/*
                +++++ shift() +++++ 
     removes the first element from an array and returns that removed element

   Syntax
        shift()

  Return value
     The removed element from the array; undefined if the array is empty.



            ++++ unshift() +++++
   adds the s elements to the beginning of an array 

   Syntax
        unshift(element1, element2, …, elementN)

    Return value
            new array


*/


const elements = ['Fire', 'Air', 'Water'];
let myn5 = elements.join("*");
console.log(elements);
console.log(myn5);

/*      ++++ join() ++++
  Syntax
        join(separator)

        # separator
           A string to separate each pair of adjacent elements of the array.
             
  
  Return value
         A string with all array elements joined.
*/


const array1 = [{name:"ayush",id:0}, {name:"Amul",id:1}];
const iterator1 = array1.keys();

for (const key of iterator1) {
  console.log(key);
}



/*    ++++ keys()++++
>  returns a new array iterator object that contains the keys for each index in the array.

    Syntax
            keys()
    Return value
            A new iterable iterator object.

*/

const array2 = [{name:"ayush",id:0}, {name:"Amul",id:1}];
const iterator2 = array1.values();

for (const val of iterator2) {
  console.log(val);
}


/*    ++++ keys()++++
>  returns a new array iterator object that contains the values for each index in the array.

    Syntax
            values()
    Return value
            A new iterable iterator object.

*/



/*       +++++++++++++  Array Iteration methods    */

//forEach()  map()  filter() reduce() find() findIndex()