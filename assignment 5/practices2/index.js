const todo = [];
import { getNodes } from "./domHandler.js";

const { input, num, addBtn, goal } = getNodes();

//新增項目
addBtn.addEventListener("click", () => {
  todo.push(input.value);
  goal.innerHTML = "";
  let itemID = 0;
  for (let i = 0; i < todo.length; i++) {
    let item = document.createElement("li");
    item.setAttribute("id", itemID);
    itemID = itemID + 1;
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    let itemText = document.createElement("span");
    itemText.textContent = todo[i];
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕";
    goal.appendChild(item);
    item.appendChild(checkbox);
    item.appendChild(itemText);
    item.appendChild(deleteBtn);
  }
  console.log("新增時", todo);
  input.value = "";
  num.textContent = todo.length;
});

//標記完成
goal.addEventListener("click", (e) => {
  if (e.target.nodeName === "INPUT" && e.target.checked == true) {
    num.textContent = Number(num.textContent) - 1;
  }
  if (e.target.nodeName === "INPUT" && e.target.checked == false) {
    num.textContent = Number(num.textContent) + 1;
  }
  if (e.target.nodeName === "BUTTON") {
    const parent = e.target.parentElement;
    const targetText = parent.childNodes[1].textContent;
    const targetIndex = Number(parent.id);
    todo.splice(targetIndex, 1);
    goal.removeChild(parent);
    num.textContent = todo.length;
  }
});
