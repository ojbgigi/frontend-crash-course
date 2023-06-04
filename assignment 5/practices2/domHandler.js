export const getNodes = () => {
  const input = document.querySelector(".todo-input");
  const num = document.querySelector(".todo-num");
  const addBtn = document.querySelector(".add-btn");
  const goal = document.querySelector(".todo-list");
  return { input, num, addBtn, goal };
};
