export const getNodes = () => {
  const num1 = document.querySelector(".input-num1");
  const num2 = document.querySelector(".input-num2");
  const equals = document.querySelector(".equals-btn");
  const operationBtn = document.querySelector(".operation");
  const result = document.querySelector(".result");
  const plusBtn = document.querySelector("#plus-btn");
  const minusBtn = document.querySelector("#minus-btn");
  const multiplyBtn = document.querySelector("#multiply-btn");
  const divideBtn = document.querySelector("#divide-btn");
  return {
    num1,
    num2,
    equals,
    operationBtn,
    result,
    plusBtn,
    minusBtn,
    multiplyBtn,
    divideBtn,
  };
};
