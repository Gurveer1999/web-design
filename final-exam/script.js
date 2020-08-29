var allNames = document.getElementById("name");
var sub = document.getElementById("submit");
var ul = document.querySelector("ul");
var listNames;

function storeNames() {
  listNames = allNames.value.split(",");
}

function viewList() {
  for (var i = 0; i < listNames.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = listNames[i];
    ul.appendChild(li);
  }
}
