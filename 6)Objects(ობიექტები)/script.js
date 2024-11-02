        // ობიექტის შექმნის ფორმატი

let objectName = { 
    property1: value1,
    property2: value2,
    //...
};

// მარტივი მაგალითი

let car = {
    brand: "BMW",
    model: "X5",
    year: 2021
};


        // ობიექტების თვისებებზე წვდომა
        
    // წერტილის ნოტაცია:

console.log(car.brand); // BMW

console.log(car.model); // X5

console.log(car.year); // 2021

    // კვადრატული ფრჩხილების ნოტაცია:

console.log(car["brand"]); // BMW

console.log(car["model"]); // X5

console.log(car["year"]); // 2021


    // ობიექტების თვისებების შეცვლა


car.brand = "Mercedes"; // თვისების შეცვლა

console.log(car.brand); // Mercedes


    // ობიექტების თვისებების დამატება


car.color = "black"; // ახალი თვისების დამატება

console.log(car.color); // black


    // ობიექტების თვისებების წაშლა


delete car.year; // თვისების წაშლა

console.log(car.year); // undefined

console.log(car); // {brand: "Mercedes", model: "X5", color: "black"}


        // მეთოდები ობიექტში


    //ობიექტის მეთოდის შექმნა


let person = {
    firstName: "გიორგი",
    lastName: "გიორგაძე",
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
};


console.log(person.fullName()); // გიორგი გიორგაძე



    // ობიექტის მეთოდზე წვდომა

person.fullName(); // გიორგი გიორგაძე

        // ციკლების გამოყენება ობიექტში

    //for...of ციკლი


let book ={
    title: "carlson",
    author: "Astrid Lindgren",
    year: 1953
};


for(let key in book){
    console.log(`${key}: ${book[key]}`); // title: carlson, author: Astrid Lindgren, year: 1953
}



        // object.keys() და object.values()

    //object.keys() გასაღების მიღება

let film = {
    title: "titanic",
    director: "James Cameron",
    year: 1997
};


let keys = Object.keys(film); // ["title", "director", "year"]

console.log(keys); // ["title", "director", "year"]


    //object.values() გასაღების მიღება

let values = Object.values(film); // ["titanic", "James Cameron", 1997]

console.log(values); // ["titanic", "James Cameron", 1997]



        // ჩადგმული ობიექტი

let student = {
    name: "John",
    lastName: "Doe",
    age: 18,

    adress: {
        city: "New York",
        street: "Broadway",
        number: 15
    }
};


console.log(student.adress.city); // New York



        // ობიექტის შედარება

    //მაგალითი:

let car1 = {brand: Toypta};
let car2 = {brand: Toypta};

console.log(car1 === car2); // false

cpnsole.log(car1 == car2); // false