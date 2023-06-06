export const getNodes = () => {
    const num1 = document.querySelector(".input-num1");
    const num2 = document.querySelector(".input-num2");
    const equals = document.querySelector(".equals-btn");
    const operationBtn = document.querySelector(".operation");
    // const plus = document.querySelector(".plus-btn");
    // const minus = document.querySelector(".minus-btn");
    // const multiply = document.querySelector(".multiply-btn");
    // const divide = document.querySelector(".divide-btn");
    return { num1, num2, equals, operationBtn }
}