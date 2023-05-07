// 5-1
const isEven = x => {
    if (x % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log("isEven: " + isEven(5));

// 5-2
const isLeapYear = x => {
    if ((x % 4 == 0) || (x % 400 == 0) || (x % 100 == 1)) {
        return true;
    } else {
        return false;
    }
}
console.log("isLeapYear: " + isLeapYear(2023));

// 5-3
const isPrime = x => {
    if (x == 1) {
        return false;
    }
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}
console.log("isPrime:" + isPrime(2));


// 5-4
const findMax = (x, y, z) => {
    if (x > y && x > z) {
        return x;
    } else if (y > z && y > x) {
        return y;
    } else if (z > x && z > y) {
        return z;
    } else {
        return console.log("見到鬼沒有誰比較大");
    }
}
console.log("最大的數字為: " + findMax(10, 12, 8));