// 1-1 Declare a array called fruits with some fruits in default.
let fruits = ["Apple", "Banana", "Lemon"];

// 1-2 Print every element in the fruits array declared above.
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 1-3 Modify the third fruit to Durian and print the fruit array.
fruits.splice(2, 0, "Durian");
console.log(fruits);

// 1-4 Using push method to add two fruits into array.
fruits.push("Watermelon", "Pineapple");
console.log(fruits);

// 1-5 Remove the first fruit from the array.
fruits.splice(0, 1);
console.log(fruits);

// 1-6 Using for, while loop to print the element in the fruits array.
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 1-7 Declare a array called numbers and set each element to its squared using map.
let numbers1 = [1, 2, 3, 4, 5];
let mapNumbers = numbers1.map((item) => {
  return item * item;
});
console.log(mapNumbers);

// 1-8 Declare a array called numbers and filter the prime number using filter.
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let filterNumbers = numbers2.filter((item) => {
  let isPrime = (item) => {
    if (item === 1) {
      return false;
    }
    for (let i = 2; i < item; i++) {
      if (item % i === 0) {
        return false;
      }
    }
    return true;
  };

  return isPrime(item);
});
console.log(filterNumbers);

// 1-9 Declare array called numbers and computed the sum of the elements using reduce.
let numbers3 = [1, 2, 3, 4, 5, 6];
let reduceNumbers = numbers3.reduce((item, index) => {
  return item + index;
}, 0);
console.log(reduceNumbers);
