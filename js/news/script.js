// const API_KEY = "dfd9f7cb05724dcf986fe6640a45101d"; // this is a wrong api key. create your own key from newsapi.org
let inputWord = document.getElementById("inputWord");
let SearchBtn = document.getElementById("SearchBtn");
let inputError = document.getElementById("inputError");
let container = document.getElementById("container");
let today = new Date().toISOString().split("T")[0];
console.log(today);

document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // prevent page jump
    let category = e.target.innerText.toLowerCase();
    fetchNewsByCategory(category);
  });
});

async function fetchNewsByCategory(category) {
    // Optional: highlight active nav link
    // setActiveCategory(category);

    // Set input box value (optional, so user sees what was searched)
    inputWord.value = category;

    // Call the same fetching function
    fetchingData(new Event("submit")); // manually create a fake event
}

async function CreateNewCard(newArr){
    let a = document.getElementById("card");
    
    newArr.forEach(element => {
        console.log(element.description);
        let cloneCard = a.cloneNode(true);
        cloneCard.querySelector("p").textContent = element.description;
        cloneCard.querySelector("img").src = element.urlToImage;
        if(element.urlToImage === null) {
            cloneCard.querySelector("img").src = "https://via.placeholder.com/150"; // Placeholder image URL
        }
        cloneCard.querySelector("h5").textContent = element.title;
        cloneCard.style.display = "inline-block"
        cloneCard.querySelector("small").textContent = element.publishedAt;
        cloneCard.querySelector("a").setAttribute("href",`${element.url}`);
        cloneCard.querySelector("a").textContent = "view more";
        // giveDescriptions(cloneCard,element);
        container.appendChild(cloneCard);
        
    });
}

inputWord.addEventListener("keyup",(e)=>{
    if(e.key === "Enter"){
        fetchingData();
    }
});

SearchBtn.addEventListener("click",fetchingData);
async function fetchingData(event){
    event.preventDefault();
    try{
        // console.log("fetching function"); // {aricles, status, totalResuts}
        // console.log(`the input value is ${inputWord.value}`); // in results , I get an array of 96 objects

        let templateCard = document.getElementById("card"); 
        // document.getElementById("card").style.display = "none";
        // document.getElementById("container").innerHTML = "";
        if(inputWord.value === "" || inputWord.value === null){
            inputError.innerHTML = "please enter the word"; 
            inputError.style.color = "red";
            return;
        }
        inputError.innerHTML = "";
        container.innerHTML = "";  
        container.appendChild(templateCard); // re-add hidden template card
        templateCard.style.display = "none"; // ✅ keep it hidden as before

        // with author, content , description , publishedAt, source(object) , title, url , urlToImage
        // let today = new Date().toISOString().split("T")[0];
        // let data = await fetch(`https://newsapi.org/v2/everything?q=${inputWord.value.trim()}&from=${today}&sortBy=publishedAt&apiKey=${API_KEY}`);

        let data = await fetch(`https://newsapi.org/v2/everything?q=${inputWord.value.trim()}&from=2025-09-1&sortBy=publishedAt&apiKey=${API_KEY}`);
        if(!data.ok){
            inputError.innerHTML = "please enter a valid input"
            return;
        }
        let response = await data.json();
        // console.log(response);
        // let arr = response.articles;
        // console.log(arr);
        // console.log(typeof arr);
        CreateNewCard(arr);
        
    }
    catch(err){
        console.log(err);
        
    }
}

// fetchingData();