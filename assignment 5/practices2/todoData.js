import { getNodes } from "./domHandler.js";
const { num, goal } = getNodes();
//渲染新list
export const updateList = (todo) => {
  let str = "";
  let len = todo.length;
  for (let i = 0; i < len; i++) {
    str += `<li id="${i}"><input type="checkbox" ${todo[i].check}/><span>${todo[i].content}</span><button>x</button></li>`;
  }
  goal.innerHTML = str;
};
//渲染尚未完成項目
export const findFinish = (todo) => {
  const newFinish = todo.filter((item) => {
    return item.check == "";
  });
  num.textContent = newFinish.length;
};
