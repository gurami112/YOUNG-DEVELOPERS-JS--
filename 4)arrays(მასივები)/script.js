        // მასივი (arrays)

//            0ინდექსი   1ინდექსი   2ინდექსი   3ინდექსი
let fruits = ["ვაშლი",  "ბანანი",   "ატამი",    "მანგო"];


        // მასივის ელემნტებზე წვდომა

console.log(fruits[0]); // ვაშლი
console.log(fruits[1]); // ბანანი
console.log(fruits[2]); // ატამი
console.log(fruits[3]); // მანგო

        // მასივის ელემენტების შეცვლა


fruits[1] = "მანგო";  // მეორე ელეტის (ბანანის) შეცვლა მანგოთი

console.log(fruits[1]); // მანგო


        // მასივის სიგრძე


console.log(fruits.length); // 4


        // მასივის ელემენტების დამატება და წაშლა


    // push() - მასივის ბოლოს ელემენტების დამატება

fruits.push("კომში") // მასივის ბოლოს დაემატება ატამი გამოვა

console.log(fruits); // ["ვაშლი", "ბანანი",  ატამი", "მანგო", კომში]


    // pop() - მასივის ბოლოდან ელემენტის წაშლა


fruits.pop(); // მასივის ბოლოდან წაშლის ელემენტს

console.log(fruits.pop()); // ["ვაშლი", "ბანანი",  ატამი", "მანგო"]


        // ელემენტები წაშლის მაგალითი

let animals = ["ლომი","ძაღლი", "კატა","ბაყაყი"]

animals.splice(1, 2) // იწყება ინდექს 1-დანმ და შლის 2 ელემენტს

console.log(animals)   // ["ლომი", "ბაყაყი"]


        //ელემენტების წაშლა და ჩასმა

let cars = ["BMW", "Mercedes", "Audi", "Toyota"]

cars.splice(1, 1, "Lexus", "NISSAN") // შლის 1 ელემენტს ინდექს 1-ზე და ამატებს ორ ახალ ელემენტს

console.log (cars) // ["BMW", "Lexus", "NISSAN", "Audi", "Toyota"]


        //მასივის გადამოწმება
        
let colors = ["წითელი", "ყვითელი", "მწვანე", "ლურჯი"]

console.log(colors.includes("წითელი")) // true
console.log(colors.includes("თეთრი")) // false


        // ციკლის გამოყენებით მასივის ყველა ელემენტის დაბეჭდვა

for(let i =0; i < colors.length; i++){
    console.log(colors[i]);
}

    // for..of ციკლით

for (let color of colors){
    console.log(color);
}

