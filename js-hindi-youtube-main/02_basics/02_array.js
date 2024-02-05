const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) // ['H', 'i', 't', 'e', 's', 'h'] 
console.log(Array.from({name: "hitesh"})) // interesting

/*
    Syantax
       
      Array.from(arrayLike, mapFn, thisArg)

        #arrayLike
         An iterable or array-like object to convert to an array.

        #mapFn (optional)

        #thisArg (Optional)

    Return 
        A new Array instance.
    --Later 
*/

console.log(Array.of("Ken","Williomson","MS","Dhoni")); // ['Ken', 'Williomson', 'MS', 'Dhoni'] 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
/*
    Syantax    
        Array.of(element1, element2, …,  elementN)
    
    return 
       A new Array instance.

Q   Diffrence b/w Array(7) and Array.of(7)

    Array.of(7) creates an array with a single element, 7, whereas Array(7) creates an empty array with a length property of 7
*/



