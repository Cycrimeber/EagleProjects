character = "#";
for(i=0; i<=7; i++){
character = character + character;

}
console.log(character);


// FIZZFUZZ TEST
// for(count=1; count<=100; count++){
//     if(count % 3 == 0 && count % 5 == 0){
//         console.log("FizzFuzz");
//         continue;
//     }else if(count % 5 == 0){
//         console.log("Fuzz");
//         continue;
//     }else if(count % 3 == 0){
//         console.log("Fizz");
//         continue; 
//     }
//     console.log(count);
// }


// for(i=1; i<7; i++){
//     for(j=1; j<i; j++){
//         console.log(j);
//     }
    
// }


// // arrow functions
// let introduce = (name) => {
//     console.log("Hello " + name);
// }

// console.log(introduce("Isaiah"));

// let add = (num1, num2) => {
//     var result = num1 + num2;
//     return result;
// }

// console.log(add(3,5));

// class cars{
//     constructor(name, model){
//         this.name = name;
//         this.model = model;
//     }

//     speed(limit){
//         console.log(limit + "km/h");
//     }
// }

// let myCar = new cars("Toyota", "Picnic");
// console.log(myCar.name + " " + myCar.model + " runs at " + myCar.speed(500));
