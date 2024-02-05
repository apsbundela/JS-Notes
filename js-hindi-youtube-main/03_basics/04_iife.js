// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

/*
        Why we need IIFE

    There are 2 resons why we need IIFE

    1. Sometimes we want to execute function just after dclaration, for an example for DB connection

    2. Sometimes Globel Scope variable can pollute our function because global variable is accessable to anyone and their value can change,
       so we dont want to pollute our function so we use IIFE

*/ 