let inputWord = document.getElementById("inputWord");
let search = document.getElementById("search");
let emptyError = document.getElementById("emptyError");
search.addEventListener("click",fetching);
inputWord.addEventListener("keyup", (e) => {
    emptyError.innerText = "";
    if (e.key === "Enter") {
        fetching();
    }
});
async function fetching() {
    try {
        inputWord = document.getElementById("inputWord"); // Move inside the function to get the latest value
        console.log("fetching function called");
        console.log(`the input word is ${inputWord.value}`);
        if(inputWord.value === "" || inputWord.value === null){ // Check for empty or null input
            emptyError.innerText = "please enter the word";
            emptyError.style.color = "red";
            document.getElementById("Audio").src = "";
            document.getElementById("word").innerText = "";
            document.getElementById("POS").innerText = "";
            document.getElementById("descriptiveWord").innerText = "";
            document.getElementById("actualMeaning").innerText = "";
            document.getElementById("example").innerText = "";
            document.getElementById("syno").innerText = "";
            document.getElementById("anti").innerText = "";
            return
        }
        else{
            emptyError.innerText = "";
            document.getElementById("Audio").src = "";
            document.getElementById("word").innerText = "";
            document.getElementById("POS").innerText = "";
            document.getElementById("descriptiveWord").innerText = "";
            document.getElementById("actualMeaning").innerText = "";
            document.getElementById("example").innerText = "";
            document.getElementById("syno").innerText = "";
            document.getElementById("anti").innerText = "";
            let fetchurl = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord.value}`);
            if(!fetchurl.ok){
                document.getElementById("word").innerText = "No result found";
                document.getElementById("Audio").style.display = "none";
                
                return; // Exit the function if no result is found
            }
            let response = await fetchurl.json();
            document.getElementById("word").innerText = `${inputWord.value}`;
            let wordData = response[0];
            console.log(wordData);
            
            let phenotics = wordData.phonetics;
            console.log(phenotics);

            // Get first available phonetic text
            let firstPhenoticObj = phenotics.find(p => p.text);
            let firstPhenotic = firstPhenoticObj ? firstPhenoticObj.text : "";
            console.log(firstPhenotic);

            // Get first available phonetic audio safely
            let firstAudioObj = phenotics.find(a => a.audio);
            let firstAudio = firstAudioObj ? firstAudioObj.audio : "";

            let audioElement = document.getElementById("Audio");

            if (firstAudio) {
                audioElement.src = firstAudio;
                audioElement.style.display = "block";
                audioElement.controls = true;
                audioElement.load(); // Load the new source
            } 
            else {
                audioElement.style.display = "none"; 
                audioElement.src = "";
            }
            let descriptiveWord = document.getElementById("descriptiveWord");
            descriptiveWord.textContent = firstPhenotic;
            let meaningsArray = wordData.meanings[0];
            let pos = meaningsArray.partOfSpeech;
            document.getElementById("POS").textContent = pos;
            let firstMeaning = meaningsArray.definitions[0].definition;
            document.getElementById("actualMeaning").textContent = `${firstMeaning}`;
            let firstExample = meaningsArray.definitions[0].example;
            if(firstExample!==undefined){
                document.getElementById("example").textContent = `Eg : ${firstExample}`;
            }
            let syon = meaningsArray.synonyms.join(",");
            if(syon!==""){
                document.getElementById("syno").textContent = `synonyms : ${syon}`
            }
            let anto = meaningsArray.antonyms.join(",");
            if(anto!==""){
                document.getElementById("anti").textContent = `antonyms : ${anto}`
            }
                
        }
    }catch (error) {
        console.error("Error fetching data:", error);
    }
}
inputWord.addEventListener("keypress", (e) => {
    if (e.key === "Enter") fetching();
});

// Call the function so it runs
// fetching();