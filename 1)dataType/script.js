let message = "გამარჯობა"; // String--> ტექსტის შესანახად გამოიყენება.
let age = 25; //Number--> მთელი და ათწილადი რიცხვების შესანახად გამოიყენება.
let isStudent = true; //Boolean--> მხოლოდ ჭეშმარიტი(true) ან მცდარი(false) მნიშვნელობების შესანახად გამოიყენება.
let lastName; //Undefined--> როდესაც ცვლადი იქმნება, მაგრამ არ მიენიჭება მნიშვნელობა ის ავტომატურად იქნება undefined.
let empty = null; //Null--> ცვლადს მნიშვნელობა არ აქვს, არის ცარიელი.
let user = {
    name: "გიორგი",
    age: 25,
} // Object--> მონაცემთა უფრო რთული სტრუქტურა,რომელსაც სხვადასხვა ტიპის მონაცამები შეიძლება ჰქონდეს.



        // სტრინგებთან მუშაობა:
// სტრინგის შეერთება(concetanation) --> შეგვიძლია,ორი ან მეტი სტრინგი ერთმანეთს შევუერთოდ.
let firstName1= "გიორგი";
let lastName1 = "გიორგაძე";

let fullName = firstName1 + " " + lastName1; 
console.log(fullName); //გიორგი გიორგაძე




    // ბულეანები - ჭეშმარიტი და მცდარი
let isLoggedIN = true;
let isLoggedOut = false;


    // მონაცემთა ტიპების გადაკეთება
let num = 123;
let str = String(num); // "123"


let str1 = "123";
let num1 = Number(str1); // 123


