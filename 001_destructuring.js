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
