const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// const books = getBooks();
// books;

//## Destructuring
const book = getBook(1);

// const title = book.title;
// const author = book.author;
// with destructuring
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(title, author, pages, publicationDate, genres, hasMovieAdaptation);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];
// with destructuring
// const [primaryGenre, secondaryGenre] = genres;
// console.log(primaryGenre, secondaryGenre);

// a) Assigning to new variable names
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;
console.log(foo);
console.log(bar);

// b) Assigning to new variable names
const { a: aa = 10, b: bb = 5 } = { a: 3 };
console.log(aa);
console.log(bb);

// Unpacking properties from objects passed as a function parameter
const user = {
  id: 42,
  displayName: "santi",
  fullName: {
    firstName: "Santiago",
    lastName: "Ramirez",
  },
};

function userId({ id }) {
  console.log("The id is: " + id);
}
userId(user);

function displayName({ displayName: dname }) {
  console.log(`Display Name is: ${dname}`);
}
displayName(user);

function whois({ displayName, fullName: { firstName: name } }) {
  console.log(`${displayName} is ${name}`);
}
whois(user);

// Default values
function drawChart({
  size = "big",
  coords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, coords, radius);
  // do some chart drawing
}

drawChart({
  coords: { x: 18, y: 30 },
  radius: 30,
});

// Combined array and object destructuring
const props = [
  { id: 1, name: "Fizz" },
  { id: 2, name: "Buzz" },
  { id: 3, name: "FizzBuzz" },
];
const [, , { name }] = props;
console.log(name);

//## Rest/Spread operator
//# Rest
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
// Gets primaryGenre and secondaryGenre individually and another array with the rest of genres
console.log(primaryGenre, secondaryGenre, otherGenres);

// Allows a function to accept an indefinite number of arguments as an array
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}
console.log(sum(1, 2, 3));

function myFun(a, b, ...manyArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyArgs", manyArgs);
}
myFun("one", "two", "three", "four", "five");

//#Spread
// Create a new array with all the values and at the end add a new item
const newGenres = [...genres, "Epic fantasy"];
console.log(newGenres);

// Create a new onject, add a new property (moviePublicationDate) and update pages
const updatedBook = {
  ...book,
  moviePublicationDate: "2001-12-19",
  pages: 1210,
};
console.log(updatedBook);

// This won't update the pages, because pages will be overwritten by the ...books elements
// const updatedBook = {
//   pages: 1210,
//   ...book,
//   moviePublicationDate: "2001-12-19",
// };

// There are 3 places that accept the spread syntax:
// 1. Function arguments: myFunction (a, ...iterableObj, b)
// a)
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 4];
console.log(sum(...numbers));

// b)
function myFunction(v, w, x, y, z) {
  console.log("params: ", v, w, x, y, z);
}
const args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);

// c)
const dateFields = [1970, 0, 1]; // 1 Jan 1970
const d = new Date(...dateFields);
console.log(d);

// Any argument in the arg list can use spread syntax, and spread syntax can be used multiple times

// function myFunction(v, w, x, y, z) {}
// const args = [0, 1];
// myFunction(-1, ...args, 2, ...[3]);

// 2. Array literals ([1, iterableObj, '4', 'five', 6])
// a)
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
console.log(lyrics);

// b)
const arr = [1, 2, 3];
const arr2 = [...arr];
arr2.push(4);
console.log(arr2);
// arr remains unaffected

// c) A better way to concatenate arrays
let arr1 = [0, 1, 2];
const arr3 = [3, 4, 5];
// arr1 = arr1.concat(arr3);
arr1 = [...arr1, ...arr3];
console.log(arr1);

// d) Add elements at the start of an array
// const arr4 = [0, 1, 2];
// const arr5 = [3, 4, 5];
// Array.prototype.unshift.apply(arr4, arr5);
// console.log(arr4);
let arr4 = [0, 1, 2];
const arr5 = [3, 4, 5];
arr4 = [...arr5, ...arr4];
console.log(arr4);

// e) Conditionally adding elements to an array
const isSummer = true;
const fruits = ["apple", "banana", isSummer ? "watermelon" : undefined];
console.log(fruits);

// 3. Object literals ({...obj, key: 'value'})
// a) You can use spread to merge multiple objects into one new object
const obj1 = { foo: "bar", x: 42 };
const obj2 = { bar: "baz", y: 13 };
const mergeObj = { ...obj1, obj2 };

// b) Overriding properties
const obj3 = { foo: "bar", x: 42 };
const obj4 = { foo: "baz", y: 13 };
const mergedObj = { x: 41, ...obj1, ...obj2, y: 9 };
console.log(mergedObj);

// c) Conditionally adding properties to an object
const isSummer2 = true;
const fruits2 = {
  apple: 10,
  banana: 5,
  ...(isSummer2 ? { watermelon: 30 } : {}),
};
console.log(fruits2);
