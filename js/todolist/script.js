let addbtn = document.getElementById("Add");
let listOfTasks = document.querySelector("ul");
let deleteBtn = document.querySelector("deleteBtn");
// let isComplete = false;
// let arrayOfTasks = [

// ]

addbtn.addEventListener("click",()=>{
    console.log(document.querySelector("input").value);
    
    if(document.getElementById("inputText").value === ""){
        document.getElementById("empty").innerHTML = "Please enter a task";
        document.getElementById("empty").style.color = "red";
    }
    else{
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        
        let list = document.createElement("li");
        list.setAttribute("contenteditable",true);
        list.appendChild(checkbox);
        let txt = document.createTextNode(document.getElementById("inputText").value);
        list.appendChild(txt);
    
        let del = document.createElement("button");
        del.setAttribute("id","deleteBtn");
        del.textContent = "delete";
        list.appendChild(del);
        deleteBtn = document.querySelector("deleteBtn");
        
        listOfTasks.appendChild(list);
        del.addEventListener("click",()=>{
            list.remove();
        })
        document.getElementById("inputText").value = ""; // to clear the input field after adding a task
        document.getElementById("empty").innerHTML = ""; // to clear the warning message after adding a task

        checkbox.addEventListener("click",()=>{
            // checkbox.classList.toggle("completed");
            list.classList.toggle("completed");
        });
    }
})

