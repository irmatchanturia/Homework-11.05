
//9-ის გამრავლების ტაბულა 

for(let i = 1; i<=10; i++){
    console.log("9 x " + i + " = " + 9*i);
}


// // იპოვე მასივის ელემენტების ჯამი 
let numbers = [3, 7, 10, 15, 20]
let sum=0;

for(let i=0; i< numbers.length; i++){
    sum=sum + numbers[i];
}
console.log(sum)

// დაბეჭდე მხოლოდ ლუწი რიცხვები 
let number = [3, 7, 10, 15, 20]
let evenNum = [];

// for(let i = 0; i< number.length; i++){
//     if(number[i]%2==0){
//         evenNum=number[i]
//         console.log(evenNum)
//     }
// }

for(let i = 0; i< number.length; i++){
    if(number[i]%2==0){
        evenNum.push(number[i])
    }
}
console.log(evenNum)


// დაბეჭდე ის რიცხვები რომლებიც მეტია 10-ზე 
let numb = [3, 7, 10, 15, 20]
let moreThanTen=[];

for(let i = 0; i< number.length; i++){
    if(numb[i]>10){
        moreThanTen.push(numb[i])
    }
}
    console.log(moreThanTen);


//იპოვე ამ რიცხვების საშუალო არითმეტიკული 

let numbr = [3, 7, 10, 15, 20]
let summ = 0;
let averageNum = 0;
for(let i = 0; i < numbr.length; i++){
    summ=summ + numbr[i];
    averageNum=summ/numbr.length;
}
console.log(averageNum)
 
// იპოვე ყველაზე გრძელი სიტყვა.  
let words = ["cat", "elephant", "dog", "computer"];
let longest="";
for(let i = 0; i < words.length; i++){
    if(words[i].length > longest.length)
        longest=words[i]
}
console.log(longest)



