let quote = "asfosjfois";
let p = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("moreTweet");
let Tweet = document.getElementById("tweet");
let lightDark = document.getElementById("switch");
let islight = true;
function validate(){
    let name = document.getElementById("inputAddress").value;
    if(name==="" || name ===null){
        document.getElementById("nameError").innerText = "please enter the name";
        document.getElementById("nameError").style.color = "red";
        return false;
    }
    let email = document.getElementById("inputEmail4").value;
    if(email ==="" || email === null){
        document.getElementById("emailError").innerText = "please enter the email";
        document.getElementById("emailError").style.color = "red";
        return false;
    }
    let textArea = document.getElementById("textarea").value;
    if(textArea === "" || textArea === null){
        document.getElementById("textAreaError").innerText = "please fill your valuable message";
        document.getElementById("textAreaError").style.color = "red";
    }

    if(textArea ==="" || textArea ===null){
        return false;
    }
    return true;
}
async function getRandomQuote(){
    try{
        if(localStorage.getItem("q")!==null){
            localStorage.getItem("q");
        }
        let quoteApi = await fetch('https://dummyjson.com/quotes/random');
        let response = await quoteApi.json();
        console.log(response);
        console.log(typeof(response));
        p.innerHTML = response.quote;
        author.innerHTML = response.author;
    }
    catch(err){
        console.log(err);    
    }
    
}
btn.addEventListener("click",getRandomQuote);
Tweet.addEventListener("click",startTweet);

lightDark.addEventListener("click",darktolight);
function darktolight(){
    if(islight){
        let Switch = document.getElementById("switch");
        Switch.innerText = "light theme";
        Switch.style.color = "white";
        let NavLink = document.getElementsByClassName("nav-link");
        let arr4 = Array.from(NavLink);
        arr4.forEach((e)=>{
            e.style.color = "white";
        });
        let Navicon = document.getElementById("navicon");
        Navicon.style.backgroundColor = "#7A7A73";
        let LastBtn = document.getElementById("lastBtn");
        LastBtn.style.color = "white";
        let Body = document.querySelector("body");
        let cardBody = document.getElementsByClassName("card-body");
        let navbar = document.querySelector("nav");
        let Section = document.querySelector("section");
        let aboutMeimg = document.getElementById("aboutMeImg");
        let buttons = document.getElementsByClassName("btn btn-warning");
        let FormControl = document.getElementsByClassName("form-control");
        let New = document.getElementById("new");
        New.style.backgroundColor = "#7A7A73";
        let arr3 = Array.from(FormControl);
        arr3.forEach((e)=>{
            console.log(e);
            
            e.style.backgroundColor = "#282C35";
            e.style.color = "white";
        })
        let arr2 = Array.from(buttons);
        arr2.forEach((e)=>{
            e.style.backgroundColor = "#7851A9";
            e.style.border = "none";
        })
        aboutMeimg.style.opacity = 0.4;
        Section.style.backgroundColor = "#282C35";
        navbar.style.backgroundColor = "black";
        Body.style.backgroundColor = "black";
        Body.style.color = "white";
        let arr = Array.from(cardBody);
        // console.log(arr);
        arr.forEach((e)=>{
            // console.log(e);
            e.style.backgroundColor = "black";
            
        })
        islight = false;
    }
    else{
        let Switch = document.getElementById("switch");
        Switch.innerText = "dark theme";
        Switch.style.color = "black";
        let NavLink = document.getElementsByClassName("nav-link");
        let arr4 = Array.from(NavLink);
        arr4.forEach((e)=>{
            e.style.color = "black";
        })
        let Navicon = document.getElementById("navicon");
        Navicon.style.backgroundColor = "white";
        let LastBtn = document.getElementById("lastBtn");
        LastBtn.style.color = "black";
        let Body = document.querySelector("body");
        let cardBody = document.getElementsByClassName("card-body");
        let navbar = document.querySelector("nav");
        let Section = document.querySelector("section");
        let aboutMeimg = document.getElementById("aboutMeImg");
        let buttons = document.getElementsByClassName("btn btn-warning");
        let FormControl = document.getElementsByClassName("form-control");
        let New = document.getElementById("new");
        New.style.backgroundColor = "gray";
        let arr3 = Array.from(FormControl);
        arr3.forEach((e)=>{
            e.style.backgroundColor = "white";
        })
        let arr2 = Array.from(buttons);
        arr2.forEach((e)=>{
            // e.setAttribute("class","btn btn-warning");
            // e.className = "btn btn-warning";
            e.style.backgroundColor = "#FFCC00";
            // e.style.border = "none";
        })
        aboutMeimg.style.opacity = 1;
        Section.style.backgroundColor = "#F2F2F2";
        navbar.style.backgroundColor = "white";
        Body.style.backgroundColor = "white";
        Body.style.color = "black";
        let arr = Array.from(cardBody);
        // console.log(arr);
        arr.forEach((e)=>{
            // console.log(e);
            e.style.backgroundColor = "white";
            
        })
        
        
        islight = true;
    }

}

function startTweet(){
    window.open("https://twitter.com/intent/tweet?text=Hello%20world");
}

setInterval(getRandomQuote,3600000);



// ----------------------------------------------------------


// async function getRandomQuote() {
//     try {
//         let quoteApi = await fetch('https://dummyjson.com/quotes/random');
//         let response = await quoteApi.json();
//         console.log("Fetched quote:", response);
//         // You can display it in your <p> or <strong> here
//     } catch (err) {
//         console.log("Error fetching quote:", err);
//     }
// }

// // Auto-fetch once per day
// function checkAndFetchQuote() {
//     let lastFetched = localStorage.getItem("lastFetchedDate");
//     let now = Date.now();

//     if (!lastFetched || now - lastFetched >= 86400000) {
//         getRandomQuote();
//         localStorage.setItem("lastFetchedDate", now);
//     } else {
//         console.log("Quote already updated today.");
//     }
// }

// // Manual fetch with button
// document.addEventListener("DOMContentLoaded", () => {
//     checkAndFetchQuote(); // run on page load

//     let btn = document.getElementById("moreTweet");
//     if (btn) {
//         btn.addEventListener("click", () => {
//             getRandomQuote(); // fetch immediately
//             localStorage.setItem("lastFetchedDate", Date.now()); // reset 24h timer
//         });
//     }
// });



