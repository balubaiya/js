//   9 // string capitalize using map

let str = ["hello","hi","namaste"];

let newString = str.map((str)=>str.toUpperCase());

console.log(newString);

// 10 //array of objects of book 

let books= [
    {
        title:"paarijat",
        author:"Bishnu Kumari waiba"
    },
    {
        title:"Romeo and juilet",
        author:"William Shaekspere"
    },
    {
        title:"jiban kada ki ful",
        author:"unknown"
    }
]

books.splice(1,1);

console.log(books);



// 11. sorting 
let strings = ["banana", "apple", "grape", "orange", "mango"];
strings.sort(); 
console.log( strings);



// 12>  Filtering
let fruits = ["Apple", "Banana", "Avocado", "Grapes", "Anda", "Orange"];
let filteredArray = fruits.filter(fruit => fruit.startsWith('A'));
console.log( filteredArray);



// 13. map to extract ages 
let students = [
  { name: "Ram", age: 16 },
  { name: "Hari", age: 23 },
  { name: "Jack", age: 21 },
  { name: "Harry", age: 18 }
];
let ages = students.map(student => student.age);
console.log( ages);
