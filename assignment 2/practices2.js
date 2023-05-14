// 2-1 Create an object called person with properties for name, age, and gender. Assign values to these properties and then display the name and age of the person.
let person1 = {
  name: "Adele",
  age: 35,
  gender: "Female",
};
console.log("name:" + person1.name + " age:" + person1.age);

// 2-2 Add a method to the person object created in the previous assignment called greet. The method should display a greeting message “Hello”. Invoke the greet method to see the greeting message.
let person2 = {
  name: "Adele",
  age: 35,
  gender: "Female",
  greet: function () {
    return "Hello";
  },
};
console.log(person2.greet());

// 2-3 Add a properties called friends to the person which contains several names and print it.
let person3 = {
  name: "Adele",
  age: 35,
  gender: "Female",
  friends: ["GiGi", "Amei", "Alin"],
};
console.log(person3.friends);
