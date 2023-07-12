const form = document.querySelector("form");
const alert = document.querySelector(".alert");
const submit = document.querySelector(".submit-btn");
var list = document.getElementById("list");
var clearForm = document.querySelectorAll("input");
var clear = document.querySelector(".erase");
var cost = document.querySelector("cost");
const result = document.querySelector("#count1");
var number = 0;
const dropdownTitle = document.querySelector(".dropdown .title");
const dropdownOptions = document.querySelectorAll(".dropdown .option");
//var measure = document.querySelector("#dropList");
dropdownOptions.forEach(option => option.addEventListener("click", handleOptionSelected));
document.querySelector(".dropdown .title").addEventListener("change", handleTitleChange);
submit.addEventListener('click', addText);
clear.addEventListener("click", clearList);
dropdownTitle.addEventListener("click", toggleMenuDisplay);
//measure.addEventListener("click", drop);



function addText() {
  const title = document.getElementById("title").value;

    const item = document.createElement("h6");
    item.textContent = title;


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
    
    
    document.querySelector("#list").append(item);

    clearForm.forEach(singleInput => singleInput.value = innerHTML = "" );


    console.log(title);
  
}

function toggleClass(elem, className) {
  if (elem.className.indexOf(className) !== -1){
    elem.className = elem.className.replace(className, ' ');
  } else {
    elem.className = elem.className.replace(/\s+/g, ' ') + ' ' + className;
  }

  return elem;

}

function toggleDisplay(elem) {
  const curDisplayStyle = elem.style.display;

  if (curDisplayStyle === 'none' || curDisplayStyle === '') {
    elem.style.display = 'block';
  } else {
    elem.style.display = 'none';
  }


}

function toggleMenuDisplay(e){
      const dropdown = e.currentTarget.parentNode;
      const menu = dropdown.querySelector('.menu');
      const icon = dropdown.querySelector('.fa-angle-right');
    
  toggleClass(menu, 'hide');
  toggleClass(icon, 'rotate-90');

}

function handleOptionSelected(e) {
  toggleClass(e.target.parentNode, 'hide');

    const id = e.target.id;
    const newValue = e.target.textContent + ' ';
    const titleElem = document.querySelector('.dropdown .title');
    const icon = document.querySelector('.dropdown .title .fa');

    titleElem.textContent = newValue;
    titleElem.appendChild(icon);

  document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
  setTimeout(() => toggleClass(icon, 'rotate-90', 0));

}

function handleTitleChange(e) {
  const result = document.getElementById('list1');
  const size = e.target.textContent;
  const letter = document.createElement("h7");

 result.innerHTML += size;

  console.log(size);

}

function up() {
  const text = document.getElementById("list2");
  if (number < 12) {
    number += 1;
  } else {
    return;
  }

 document.querySelector("#count1").value = number;
  text.innerHTML += " " + number;
  console.log(number);
  
}

function down() {
 const text = document.getElementById("list2");
 document.querySelector("#count1").value = number;

   if(number <= 0) {
    return;
  } else {
    number -= 1;
  }
  
  
  text.innerHTML += " " + number;
  console.log(number)
}


function count() {
      const number = document.querySelector("#count1");
      const result = document.querySelector(".list2");

      const num = document.createElement("h8");
      num.innerHTML = number.value;
      
      result.append(num);

      number.addEventListener('key')

      //number.textContent = result;
      console.log(number);

    }


function clearList() {
  document.querySelector("#list").textContent = " ";


}







