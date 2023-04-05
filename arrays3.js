//Write a function that accepts an array of strings and console.logs each element using a for loop.
let arr = (["Hello", "Angela", "Milkah","Nyeliep"])
for(let i=0;i<arr.length;i++ ){
    console.log(arr[i])
}

//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
let num = [10,8,12,6,5,15];
num.forEach(function(num){
  console.log(num*2)  
});

//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
let numbers = [2,4,6,12,10];
manipulateNumbers(arr)
function manipulateNumbers(arr) {
  for (let i = 0; i < 4; i++) {
    numbers[i] *= 8;
  }
  let pal = numbers.length;
  for (let i = pal - 2; i < pal; i++) {
    numbers[i] += 5;
  }
  console.log(numbers);
}

//Write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];
for(let i =0; i<arrNum.length; i++){
    if(i===4){
        break;
         }
         console.log({"arrNum":arrNum[i]});
}

//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index
let fruits= ['apple','plum','banana','strawberries','kiwi'];
for(let i =0; i<fruits.length; i++){
    if(i===2){
        continue;
    }
    console.log({"continue":fruits[i]});
}
