// Global scope

var globalVar = "I'm a global variable";
let globalLet = "i'm also global, but scoped with let";
const globalConst = "i'm a gloabl constant";

{
    // Block scope
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: I'm a global variable
console.log(globalLet); // Output: i'm also global, but scoped with let
console.log(globalConst); // Output: i'm a gloabl constant

//Block Scope
console.log(blockVar);
//console.log(blockLet); //Throws ReferenceError
//console.log(blockConst); //Throws ReferenceError

function show() {
    var functionVar = "I'm a function-scoped var";
    let functionLet = "I'm a function-scoped let";
    const functionConst = "I'm a function-scoped const";
}
show();

//console.log(functionVar); //Throws ReferenceError
//console.log(functionLet); //Throws ReferenceError
//console.log(functionConst); //Throws ReferenceError

//Block Scope 2 - Redeclaration of variables 

{
    var blockVar2 = "Hello Var";
    let blockLet2 = "Hello Let";
    const blockConst2 = "Hello Const";

    console.log(blockVar2);
    console.log(blockLet2);
    console.log(blockConst2);

    //Redeclaration of variables
    var blockVar2 = "Hello Var 2";
    //let blockLet2 = "Hello Let 2"; //Throws SyntaxError
    //const blockConst2 = "Hello Const 2"; //Throws SyntaxError

    console.log(blockVar2);
    //console.log(blockLet2);
    //console.log(blockConst2);
}

//Global Scope 3 - Redeclaration of variables
var blockVar2 = "Hello Var 3";
let blockLet2 = "Hello Let 3";
const blockConst2 = "Hello Const 3";

console.log(blockVar2); //Output: Hello Var 3
console.log(blockLet2); //Output: Hello Let 3
console.log(blockConst2); //Output: Hello Const 3
