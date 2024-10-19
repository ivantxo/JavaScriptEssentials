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
];

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(1);

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

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
