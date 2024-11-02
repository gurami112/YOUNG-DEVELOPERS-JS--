        // ფუნქციის შექმნა

function functionName(){
    // კოდის ბლოკი, რომელიც შესრულდება როცა ფუნქცია გამოიძახება
}


    // მარტივი მაგალითი 

function greet(){
    console.log(`Hello`)
}

greet() // გამოძახება


    // ფუნქციის არგუმენტები

function functionName(parametr1,parametr2) {
    // კოდის ბლოკი, რომელიც იყენებს პარამეტრებს
}


    //მაგალითი-ფუნქცია, რომელიც მომხმარებელს ეუბნება გამარჯობას

function greetUser(name){
    console.log(`Hello, ${name}!`)
}

greetUser("მარიამი") // Hello, მარიამი!

greetUser("გიორგი") // Hello, გიორგი!


    // ფუნქციის დაბრუნება

function functionName(){
    //მოქმედება

    return value; // ფუნქცია აბრუნებს value-ს
}


    // მაგალითი


function sum(a,b){
    return a + b;
}

let result = sum(5, 10);
console.log(result); // 15



    // პარამეტრების საწყისი მნიშვნელობა(defaulr parameters)

function greetUser(user = "Guest"){
    console.log(`Hello, ${user}!`)
}

greetUser("მარიამი") // Hello, მარიამი!

greetUser() // Hello, Guest!


    // ფუქნციების გამოძახება სხვა ფუნქციებიდან
    

function multiply(a,b){
    return a * b;
}

function square(a){
    return multiply(a,a); // გამრავლების ფუნქციის გამოძახება
}

console.log(square(4)) //16


    // ფუქციების ცვლადებში შენახვა(Function expression)


let greet = function(name){
    console.log(`Hello, ${name}!`)
}

greet("მარიამი") // Hello, მარიამი!


    // Arrow Function (ისარი ფუნქცია)

const functionName = (paramet1,paramet2) => {
    // კოდის ბლოკი
    return value; 
}

    // მაგალითი

const greet = (name) =>{
    console.log(`Hello, ${name}!`)
}


    // მარტივი Arrow Function

const square = x => x*x;
console.log(`square(5)`) // 25