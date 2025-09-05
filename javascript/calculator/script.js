let btn = document.querySelectorAll("#button");
let str = "";
let txt = document.getElementById("write");
console.log(btn);

console.log(typeof(btn));

// let ans = document.getElementById("answer");
btn.forEach((val,key)=>{
    val.addEventListener("click",()=>{
        console.log(val.innerText);
        if(val.textContent === "="){
            if(str.includes("x")){
                let newStr = str.replaceAll("x","*");
                txt.innerHTML = eval(newStr);
                str = txt.innerHTML;
                // ans.innerHTML = str;
                // console.log(ans.innerHTML);
                
            }
            else if(str.includes("^")){
                let NewStr = str.replaceAll("^","**");
                txt.innerHTML = eval(NewStr);
                str = txt.innerHTML;
                // ans.innerHTML = str;
            }
            else{
                txt.innerHTML = eval(str);
                str = txt.innerHTML;
                // ans.innerHTML = str;
            }
        }
        else if(val.textContent === "AC"){
            str = "";
            txt.innerHTML = str;
        }
        else if(val.textContent === "C"){
            str = str.substring(0,str.length-1);
            txt.innerHTML = str;
        }
        else{
            str = str + val.innerHTML;
            txt.innerHTML = str;
        }    
    });
    
})
// var arr = [34,43,5,24];
// var even = [];
// var odd = [];
