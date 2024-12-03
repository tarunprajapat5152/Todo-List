let inputText = document.getElementById("text");
let addBtn = document.getElementById("add");
let darkMode = document.getElementById("darkMode");
let ul = document.querySelector(".list-items");
function addTodo() {
  if (inputText.value) {
    let check = document.getElementById("check");
    check.style.display = "none";
    let div = document.createElement("div");
    let li = document.createElement("li");
    let icon = document.createElement("div");
    let editBtn = document.createElement("img");
    let removeBtn = editBtn.cloneNode();
    let doneBtn = removeBtn.cloneNode();

    div.setAttribute("class", "div-container")
    // add value
    let id = Math.floor(Math.random()*9000)+1000;
    let value = inputText.value;
    console.log(value);
    li.innerText = id+". "+value;
    inputText.value = "";
    li.style.listStyle = "none";
    localStorage.setItem(id, value);
    // append icon div
    editBtn.setAttribute("src", "edit.svg");
    editBtn.setAttribute("class", "cs");
    removeBtn.setAttribute("src", "remove.svg");
    removeBtn.setAttribute("class", "cs1");
    removeBtn.style.marginLeft = "12px";
    doneBtn.setAttribute("src", "right.svg");
    doneBtn.setAttribute("class", "cs1");
    doneBtn.style.marginLeft = "12px";
    // add event
    editBtn.addEventListener(("click"), ()=>{
      let p = prompt("Now You Can Update...")
      let updatedText = li.innerText.slice(0,4)+". " + p.substring(0); 
      li.innerText = updatedText;
      console.log(updatedText);
      let updatedText1 = p.substring(0); 
      console.log(updatedText1);
      localStorage.setItem(li.innerText.slice(0,4),updatedText1);
    })
    removeBtn.addEventListener(("click"), ()=>{
      let chars = li.innerText.split(".");
      let key = chars[0];
      localStorage.removeItem(key);
      div.remove();
    })
    doneBtn.addEventListener(("click"), ()=>{
      li.style.textDecoration = "line-through";
      li.style.color = "#666666";
    })
    // append items
    ul.append(div);
    div.append(li, icon);
    icon.append(editBtn, removeBtn, doneBtn);
  } else {
    alert("Plese enter the value in text box !");
  }
}
addBtn.addEventListener("click", addTodo);
inputText.addEventListener("keydown", (e)=>{
  if (e.key === "Enter") {
    addTodo();
  }
})

let light = 0;
darkMode.addEventListener("click", () => {
  let body = document.body;
  if (light === 0) {
    darkMode.innerHTML = "<i class='bi bi-brightness-low'></i>";
    darkMode.style.fontSize = "20px";
    body.style.backgroundColor = "black";
    body.style.color = "#F7F7F7";
    light = 1;
  }
  else{
    darkMode.innerHTML = "<i class='bi bi-moon'></i>";
    darkMode.style.fontSize = "16px";
    body.style.backgroundColor = "white";
    body.style.color = "black";
    light = 0;
  }
});

window.onload = function () {
  for (let i = 0; i < localStorage.length; i++) {
    let retriveId = localStorage.key(i);
    let retriveValue = localStorage.getItem(retriveId);
    let check = document.getElementById("check");
    check.style.display = "none";
    let div = document.createElement("div");
    let li = document.createElement("li");
    let icon = document.createElement("div");
    let editBtn = document.createElement("img");
    let removeBtn = editBtn.cloneNode();
    let doneBtn = removeBtn.cloneNode();
    // append div
    div.setAttribute("class", "div-container");
    // append list
    li.innerText = retriveId+". "+retriveValue;
    inputText.value = "";
    li.style.listStyle = "none";
    // append icon div
    icon.setAttribute("class", "icon");
    editBtn.setAttribute("src", "edit.svg");
    editBtn.setAttribute("class", "cs");
    removeBtn.setAttribute("src", "remove.svg");
    removeBtn.setAttribute("class", "cs1");
    removeBtn.style.marginLeft = "12px";
    doneBtn.setAttribute("src", "right.svg");
    doneBtn.setAttribute("class", "cs1");
    doneBtn.style.marginLeft = "12px";
    // add event
    editBtn.addEventListener(("click"), (e)=>{
      let p = prompt("Now You Can Update...")
      let updatedText = li.innerText.slice(0,4)+". " + p.substring(0); 
      li.innerText = updatedText;
      console.log(updatedText);
      let updatedText1 = p.substring(0); 
      console.log(updatedText1);
      localStorage.setItem(li.innerText.slice(0,4),updatedText1);
    })
    removeBtn.addEventListener(("click"), (e)=>{
      let chars = li.innerText.split(".");
      let key = chars[0];
      localStorage.removeItem(key);
      div.remove();
    })
    doneBtn.addEventListener(("click"), ()=>{
      li.style.textDecoration = "line-through";
      li.style.color = "#666666";
    })
    // append items
    ul.append(div);
    div.append(li, icon);
    icon.append(editBtn, removeBtn, doneBtn);
  }
}