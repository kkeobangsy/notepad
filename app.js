
const submit = document.querySelector(".submit-btn");
var list = document.getElementById("list");
let dropBox = document.getElementById("dropBox");
var clearForm = document.querySelectorAll(".title");
var clearTex = document.querySelectorAll( "textarea");
var clear = document.querySelector("#erase");
var number = 0;
const dropdownTitle = document.querySelector(".dropdown .title");
const dropdownOptions = document.querySelectorAll(".dropdown .option");
dropdownOptions.forEach(option => option.addEventListener("click", handleOptionSelected));
document.querySelector(".dropdown .title").addEventListener("change", handleTitleChange);
submit.addEventListener('click', addText);
/*dropBox.addEventListener("submit", handleTitleChange);*/
clear.addEventListener("click", clearList);
dropdownTitle.addEventListener("click", toggleMenuDisplay);


/*-------------------to add all to the list----------------------------*/
function addText() {
  const title = document.getElementById("title").value;

    const item = document.createElement("h6");
    item.innerHTML = title;

    document.getElementById("list2").append(item);


  const notes = document.getElementById("texArea").value;
    const items = document.createElement("h6");
    items.innerText = notes;
    document.getElementById("list3").append(items);




    /*---------------add number from the buttons---------------------------*/
  const inputNum = document.getElementById("count1").value;
  const outPut = document.createElement("h6");
        outPut.innerText =  inputNum;
        document.getElementById("list").append(outPut);
        outPut.style.textAlign = "center";




    /*------------------- red Line across words ----------------------------------------*/

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







    /*----------------clear all text from the textarea and title--------------------------*/

    clearForm.forEach(singleInput => singleInput.value = innerHTML = "" );
    clearTex.forEach(singleInput => singleInput.value = innerHTML = " ");
  
}

/*------------------------this is to select name from the menu-------------------------*/

function toggleClass(elem, className) {
  if (elem.className.indexOf(className) !== -1){
    elem.className = elem.className.replace(className, ' ');
  } else {
    elem.className = elem.className.replace(/\s+/g, ' ') + ' ' + className;
  }

  return elem;

}


/*------------------------to move the arrow on the menu to the right and down-------------*/
function toggleMenuDisplay(e){
      const dropdown = e.currentTarget.parentNode;
      const menu = dropdown.querySelector('.menu');
      const icon = dropdown.querySelector('.fa-angle-right');
    
  toggleClass(menu, 'hide');
  toggleClass(icon, 'rotate-90');

}



/*---------------------------this is for the menu button to hide and drop down -----------------------------*/
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
``
}



/*------------------------text that printed on the list section-------------*****************----------------*/
const title = document.getElementById("title");

function handleTitleChange(e) {
    const dropValue = document.getElementById("dropBox");
    dropValue.addEventListener("submit", function(){
        document.getElementById("list1").append(dropValue);
        this.form.submit();
    })
}


function up() {
   document.getElementById("list");
   document.querySelector("#count1").value = number;

  if (number < 12) {
    number += 1;
  } else {
    return;
  }

}



function down() {
  document.getElementById("list");
 document.querySelector("#count1").value = number;

   if(number <= 0) {
    return;
  } else {
    number -= 1;
  }
}



function clearList() {
  document.getElementById("list").textContent = " ";
  document.getElementById("list1").textContent = " ";
  document.getElementById("list2").textContent = " ";
  document.getElementById("list3").textContent = " ";


}







