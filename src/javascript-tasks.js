import "./App.css";

export const Test = () => {
  // 1  var to let and const
  // var -> function
  // let -> block scope
  // const -> block scope
  // const blockTest = () => {
	 
  //   for (var i = 0; i < 100; i++) {
	     
  //     console.log("In side code for block i value", i);      
  //   }
    for (var i = 0; i < 10; i++) {
	     
     console.log("In side code for block i value", i);      
  }
  
   for (var i = 0; i < 10; i++) {
	     
     console.log("In side code for block i value", i);      
  }
  
  //   console.log("Accessing i value Outside of the block", i);
  // };

  // blockTest();

  // 2 Object
  // const person = {
  //   name: "roshi",
  //   add() {},
  // };

  // person.name; //Accessing person name value in javascript es5

  // person["name"]; //Accessing person name value;

  // person["name"] = "new roshi"; //override the person name value;

  // const targetField = "name";
  // person[targetField.value] = "john";

  // console.log("person Object :", person);

  //   // 3 Array spread operators.

  //   const cars = ["Saab", "Volvo", "BMW"];
  //   const items = ["items1", "items2", "item3"];

  //   const getAllArrays = [...cars, ...items, "addNewItem"];
  //   console.log("getAllArrays :", getAllArrays);

  //   // 3 object spread operators.

  //   const apples = { name0: "Apples" };
  //   const bananas = { name1: "Bananas" };
  //   const oranges = { name2: "Oranges" };

  //   const getAllObjects = { ...apples, ...bananas, ...oranges, new: "newObject" };
  //   console.log("getAllObjects :", getAllObjects);

  //  // 4 Object destructuring

  // const address = {
  //   Street: "xyz",
  //   City: "bangalore",
  //   Country: "india",
  // };
  // const { Street, City, Country } = address;

  // console.log(Street, City, Country);

  // 5 ES6 Arrow functions allows a short syntax for writing function expressions.

  // const colors = ["red", "green", "blue"];
  // const items = colors.map((color) => `<div>` + color + `</div>`);

  // console.log("items", items);

  // 6 ES6 filter function expressions

  const family = [
    { name: "Jack", age: 26 },
    { name: "Jill", age: 22 },
    { name: "James", age: 5 },
    { name: "Jenny", age: 2 },
  ];

  // const familyList = family.map((person) => {
  //   return person.age;
  // });
  // console.log("familyList", familyList);

  // const familyList = family.filter((person) => {
  //   return person.age > 18;
  // });

  // const familyListWithFilter = family.filter((person) => {
  //   return person.age === 22;
  // });
  // console.log("familyListWithFilter", familyListWithFilter);

  // const familyListWithFind = family.find((person) => {
  //   return person.name === "Jenny";
  // });
  // console.log("familyListWithFind", familyListWithFind);

  const cars = ["Saab", "Volvo", "BMW"];

  family.forEach((person) => {
    console.log("familyListWithForEach", person.name);
  });
  // console.log("familyListWithForEach", familyListWithForEach);

  // const familyList = family.filter((person) => person.age > 18);

  // console.log("familyList", familyList);

  // 7 ES6 forEach function expressions
  const arrayItems = ["hello", "bird", "table", "football", "pipe", "code"];
  arrayItems.forEach((item) => console.log(item));

  return <>
   <div>
   <button 
  onClick={() => alert('hello world')}
  >
  Click
  </button>
   </div>
  </>;
};
