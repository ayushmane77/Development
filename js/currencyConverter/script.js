
let currencies = {
    "USD" : 1,
    "INR" : 88.17,
    "CNY": 7.14,       // Chinese Yuan
    "EUR": 0.92,       // Euro
    "GBP": 0.78,     // British Pound
    "JPY": 143.5,    // Japanese Yen
    "AUD": 1.55,     // Australian Dollar
    "CAD": 1.36,     // Canadian Dollar
    "CHF": 0.87,     // Swiss Franc
    "SGD": 1.35,     // Singapore Dollar
    "HKD": 7.8,      // Hong Kong Dollar
    "NZD": 1.67,     // New Zealand Dollar
    "ZAR": 18.4,     // South African Rand
    "BRL": 5.1,      // Brazilian Real
    "RUB": 96.5,     // Russian Ruble
    "MXN": 18.2,     // Mexican Peso
    "AED": 3.67,     // UAE Dirham
    "SAR": 3.75,     // Saudi Riyal
    "KRW": 1350,     // South Korean Won
    "SEK": 10.7      // Swedish Krona
}
let amount = document.querySelector("input");
let convert = document.getElementById("convert");
let source = document.getElementById("source");
let target = document.getElementById("target");
let result = document.getElementById("result");

for(let elem in currencies){
    // console.log(elem);
    let option = document.createElement("option");
    option.value = elem;
    option.textContent = elem;
    source.appendChild(option);
    target.appendChild(option.cloneNode(true));
}

convert.addEventListener("click",()=>{
    if(amount.value === ""){
        document.getElementById("amountError").innerHTML = "Please enter an amount"
        document.getElementById("amountError").style.color = "red";
    }
    else if(isNaN(amount.value)){
        document.getElementById("amountError").innerHTML = "Please provide a number"
        document.getElementById("amountError").style.color = "yellow";
    }
    else{ // ........................................
        document.getElementById("amountError").innerHTML = "";
        console.log(amount.value);
    
        // console.log(source); // bug: always shows initial value only even after changing the option
        // console.log(target); // bug: always shows initial value only even after changing the option
    
        // Fix: Move these two lines inside the event listener to get updated values
        let from = document.getElementById("source").value;
        let to = document.getElementById("target").value;
        // console.log(source); // should show updated value now
        // console.log(target); // should show updated value now
        // console.log(from);
        // console.log(to);
        
    
    
        let convertedAmount = parseFloat(amount.value) * (currencies[to]/currencies[from]);

        result.innerHTML = `${amount.value} ${from} is ${convertedAmount.toFixed(2)} ${to}`

    } // ...................................
    
});