// 4-1
for (let i = 1; i <= 10000; i++) {
    // console.log(i);
}

// 4-2
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        // console.log("1-100 even numbers:" +i);
    } else {
    }
}

// 4-2
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 1) {
        // console.log("1-100 odd numbers:" +i);
    } else {
    }
}

// 4-3
let prime = true;

let i = 2;
while (i <= 100) {
    let num = 2;
    while (num < i - 1) {
        if (i % num == 0) {
            prime = false;
            break;
        }
        num++;
    }
    if (prime) {
        // console.log("Prime numbers is " + i);
    }
    prime = true;
    i++;
}

// 4-5
let x = "*";
for (let i = 1; i <= 6; i++) {
    // console.log(x)
    x = x + "*";
}

// 4-6
let num1 = 1;
let num2 = 1;
for (let i = 1; i <= 9; i++) {
    for (let i = 1; i <= 9; i++) {
        console.log(num1 + " * " + num2 + " = " + num1 * num2)
        if (num2 < 9) {
            num2++;
        } else {
            num2 = 1;
        }
    }
    num1++;
}