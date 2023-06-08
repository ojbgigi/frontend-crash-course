import { getNodes } from "./domHandler.js";

import { updateList, findFinish } from "./todoData.js";

const todo = [];

const { input, num, addBtn, goal } = getNodes();

const addTodo = () => {
  // goal.innerHTML = "";
  let inputText = input.value;
  let itemContent = { content: inputText, check: "" };
  itemContent.content = inputText;
  todo.push(itemContent);
  updateList(todo);
  input.value = "";
  num.textContent = todo.length;
};

//新增項目
addBtn.addEventListener("click", addTodo);

goal.addEventListener("click", (e) => {
  //標記完成
  if (e.target.nodeName === "INPUT" && e.target.checked == true) {
    const parent = e.target.parentElement;
    const targetIndex = Number(parent.id);
    todo[targetIndex].check = "checked";
    findFinish(todo);
  }
  if (e.target.nodeName === "INPUT" && e.target.checked == false) {
    const parent = e.target.parentElement;
    const targetIndex = Number(parent.id);
    todo[targetIndex].check = "";
    findFinish(todo);
  }

  //刪除項目
  if (e.target.nodeName === "BUTTON") {
    const parent = e.target.parentElement;
    const targetIndex = Number(parent.id);
    todo.splice(targetIndex, 1);
    updateList(todo);
    findFinish(todo);
  }
});
