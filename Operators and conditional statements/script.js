        // არითმეტიკული ოპერატორები

// +:დამატება
// -:გამოკლება
// *:გამრავლება
// /:გაყოფა
// %:მოდულუსი (ნაშთი)


let x = 10;
let y = 3;

console.log(x + y); //13
console.log(x - y); //7
console.log(x * y); //30
console.log(x / y); //3.3333333333333335
console.log(x % y); //1


        // შედარებითი ოპერატორები

// ==:მნიშვნელობის ტოლობა (მონაცემთა ტიპისიუგულებლოყოფით)
// ===:ტოლობა (მონაცემთა ტიპის ჩათვლისთ)


// !=: მნიშვნელობის უთანასწორობა
// !==:სრული უთანასწორობა(ტიპის ჩათვლით)
// >:მეტია
// <:ნაკლებია
// >=:მეტია ან ტოლი
// <=:ნაკლებია ან ტოლი


let a = 5;
let b = "5";

console.log(a == b); //true (მონაცემთა ტიპები არ არუს გათვალისწინებული)

console.log(a === b); //false (რიცხვი და სტრინგი არ არის ტოლი)

console.log(a != b); //false
console.log(a !== b); //true


        // ლოგიკური ოპერატორები

// &&: AND(ორივე პირობა უნდა იყოს ჭეშმარიტი)

// ||: OR(ერთი პირობა უნდა იყოს ჭეშმარიტი)

// !: NOT(პირობის შებრუნება)

let age = 20;
let isStudent = true;

console.log(age > 18 && isStudent); //true (ორივე პირობა ჭეშმარიტია)

console.log(age > 18 || isStudent); //true (ერთი მაინც მართალია)

console.log(!isStudent); //false (გადაატრიელბს ჭეშმარიტს)


        // პირობითი statments - if,else 
        
let temperature = 30;

if (temperature > 30) {
    console.log("ცხელა");
} else if (temperature < 20) {
    console.log("თბილა");
} else {
    console.log("ცივა");
}
