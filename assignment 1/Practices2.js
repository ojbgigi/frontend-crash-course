// 2-1
let age = 30;
if (age >= 18) {
    console.log("can vote");
} else {
    console.log("can't vote");
}

// 2-2
let num = 4;
if (num % 2 == 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}

// 2-3
let a = 10;
let b = 5;
if (a > b) {
    console.log("a is greater than b");

} else if (a == b) {
    console.log("a is equal to b");
} else {
    console.log("a is less than b");
}

// 2-4
let x = 10;
let y = 15;
let z = 12;
let answerBig;
let answerEqual;

if (x > y && x > z) {
    answerBig = "x";
} else if (y > z && y > x) {
    answerBig = "y";
} else if (z > x && z > y) {
    answerBig = "z";
} else {
    answerBig = "見到鬼沒有誰比較大";
}

if (x == y && x > z) {
    answerEqual = "x和y";
    answerBig = "x和y";
} else if (x == y && z > x) {
    answerEqual = "x和y";
    answerBig = "z";
} else if (y == z && y > x) {
    answerEqual = "y和z";
    answerBig = "y和z";
} else if (y == z && x > y) {
    answerEqual = "y和z";
    answerBig = "x";
} else if (x == z && x > y) {
    answerEqual = "x和z";
    answerBig = "x和z";
} else if (x == z && y > z) {
    answerEqual = "x和z";
    answerBig = "y";
    console.log("這邊的:" + answerEqual);
} else if (x == y && x == z) {
    answerEqual = "都相等";
    answerBig = "都一樣大"
} else {
    answerEqual = "三個數字都不相等";
}

console.log("最大的數字：" + answerBig);
console.log("相等的數字：" + answerEqual);

// 2-5
let start = 10;
let end = 100;
let number = 9;
if (start < number && number < end) {
    console.log("數字存在於範圍內");
} else {
    console.log("數字在範圍之外");
}

// 2-6
let year = 2023;
if ((year % 4 == 0) || (year % 400 == 0)) {
    console.log("是閏年");
} else {
    console.log("不是閏年");
}