//4-1 create a simple html like example
// see index.html

//4-2 Append a p tag with “My first DOM created.” into container.
let paragraph = document.createElement("p");
let text = document.createTextNode("My first DOM created.");
paragraph.appendChild(text);
let parent = document.querySelector(".container");
parent.appendChild(paragraph);

//4-3 Append a ul tag.
let ulTag = document.createElement("ul");
ulTag.classList.add("ul");
parent.appendChild(ulTag);

//4-4 Append 3 li tags into the ul tag with 3 items: red, blue, yellow using for loop.
let colors = ["red", "blue", "yellow"];

for (let i = 0; i < colors.length; i++) {
  let liTag = document.createElement("li");
  let liParent = document.querySelector(".ul");
  let liText = document.createTextNode(colors[i]);
  liTag.appendChild(liText);
  liParent.appendChild(liTag);
}
