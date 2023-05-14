//3-1 Create a simple html with some tags.
// see index.html

//3-2 Using getElementById to get a element and print it.
const element1 = document.getElementById("title");
console.log(element1);
//3-3 Using getElementsByClassName to get elements and print all.
const element2 = document.getElementsByClassName("text");
console.log(element2);
//3-4 Using querySelector to get a element by id and print it.
const element3 = document.querySelector("#title");
console.log(element3);
//3-5 Using querySelector to get a element by class and print it.
const element4 = document.querySelector(".item");
console.log(element4);
//3-6 Using querySelectorAll to get elements by class and print all.
const element5 = document.querySelectorAll(".item");
console.log(element5);
