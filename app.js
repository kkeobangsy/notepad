const form = document.querySelector("form");
const alert = document.querySelector(".alert");
const submit = document.querySelector(".submit-btn");
var list = document.getElementById("list");
var clearForm = document.querySelectorAll("input");
var clear = document.querySelector(".erase");
var cost = document.querySelector("cost");
var mass = document.getElementById("dropList")
submit.addEventListener('click', addText);
clear.addEventListener("click", clearList);
mass.addEventListener("click", drop);



function addText() {
  const title = document.getElementById("title").value;

    const item = document.createElement("h2")
    item.textContent = document.querySelector("#title").value ;

    

    item.addEventListener("click", () => {
      if(item.style.color != "red")
      item.style.color = "red"
        else 
           item.style.color = "black"
          
  
    })
    item.addEventListener("click", () => {
      if(item.style.textDecoration != "line-through") 
      item.style.textDecoration = "line-through";
      else 
      item.style.textDecoration = "none"; 
    })
    
    //drop();
    document.querySelector("#list").appendChild(item);

    clearForm.forEach(singleInput => singleInput.value = innerHTML = "" );

    console.log(title);
  
}


function drop() {
      list.innerHTML = mass.value;

  console.log(list.innerHTML);

}


function increase() {
    var upButton = document.getElementById("");
    for (let i = 0; i < 10; i++){
      
    }

}

function decrease() {

}

function clearList() {
  document.querySelector("#list").textContent = " ";
}


