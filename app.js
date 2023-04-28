const form = document.querySelector("form");
const alert = document.querySelector(".alert");
const submit = document.querySelector(".submit-btn");
var list = document.getElementById("list");
var clearForm = document.querySelectorAll("input");
var clear = document.querySelector(".erase");
submit.addEventListener('click', addText);
clear.addEventListener("click", clearList);

const plus = "add";
const minus = "subtract";

function addText() {
  const title = document.getElementById("title").value;

    const item = document.createElement("h2")
    item.textContent = document.querySelector("#title").value + " " 
    + document.querySelector("#text").value;

    item.addEventListener("click", () => {
      if(item.style.color != "red")
        item.addEventListener("click", () => {
            if(item.style.textDecoration != "line-through") 
              item.style.textDecoration = "line-through";
              else
              item.style.textDecoration = "none";
          })
      else

          item.style.color = "black";
    })


    document.querySelector("#list").appendChild(item);
    document.querySelector("#title").value = "";

    clearForm.forEach(singleInput => singleInput.value = innerHTML = "" );

    console.log(title);
  
}

function clearList() {
  document.querySelector("#list").textContent = " ";
}

