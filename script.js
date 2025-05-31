const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
const date = document.getElementById("date-box");

function AddTask(){
    if(inputBox.value != '' && date != ''){
        let li =document.createElement('li');
        li.innerHTML = inputBox.value + " within " + date.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }else{
        alert("You must write something!")
    }
    inputBox.value = "";
    date.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName =="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}


function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask();



var changeBtn = document.getElementById('dark-btn');

changeBtn.onclick = function(){
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        changeBtn.innerHTML= 'Day';
    }else{
        changeBtn.innerHTML= 'Night';
    }
}