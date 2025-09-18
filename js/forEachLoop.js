let arr = [6,3,7,4];
arr.forEach((e)=>{
    console.log(e);  
})

for(i in arr){
    console.log(i);
    
}
for(i of arr){
    console.log(i);
    
}

const array2 = [4,52,3,42,64];
array2[3] = 66;
console.log(array2);
array2.push(464);
console.log(array2);

