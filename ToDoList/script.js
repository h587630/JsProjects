const inputBox=document.getElementById("input");
const listContainer=document.getElementById("list-container");
function addTask(){
    if(inputBox.value===''){
        alert("You must write some task to add.")
    }else{
        let task=document.createElement("li");
        task.innerHTML=inputBox.value;
        listContainer.appendChild(task);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        task.appendChild(span);
    }
    inputBox.value="";
    saveData();
   
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

    }, false
);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
 function showTasks(){
    listContainer.innerHTML=localStorage.getItem("data");
 }
 showTasks();