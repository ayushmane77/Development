var a = 10;
function fun(){
    a++; // can access the global variable
}
fun();
console.log(a); // value get upadate to 11

// this creates a problem 

// IIFE ( Immediate Invoked function Execution) : one time, private, immediate execution , but not reusable.
(function fun2(){
    console.log("this is a IIFE function");
})(); // the parathensis immediately written after the function is invoking the actual function


(()=>{
    console.log("this is another IIFE function arrow");
})();

// why there is a need of IIFE function
// normal function can be overriden by any other developers which may spoil the program or application
// functions are supposed to be meant for re - usable code or logic to enfore DRY principle.

// but In come cases, when strictly functions need to be executed only once, without overriding it and keeping it
// behaviour private , we use IIFE functions
// but the disadvantage is that It cannot be invoked again and again. and not resuable for different parts of code.
