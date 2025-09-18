let arr = [4,53,5,55,42];
let sum1 = arr.reduce((acc,curr)=>{
    return acc + curr;
},0);

console.log(sum1);
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15