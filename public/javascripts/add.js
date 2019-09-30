const button = document.getElementById("action");

button.addEventListener("click", (ev) => {
  ev.preventDefault();
  console.log ("clicked");


window.location.replace(window.location+"/execute/" + 
"?number=" + document.getElementById("number").value +
"&title=" +  document.getElementById("title").value +
"&grade=" +  document.getElementById("grade").value +
"&uss=" +  document.getElementById("uss").value +
"&ars=" +  document.getElementById("ars").value +
"&language=" +  document.getElementById("language").value+
"&note=" +  document.getElementById("note").value
);

} )

