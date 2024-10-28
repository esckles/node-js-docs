// console.log("hi");

// const MyName: string = "Mije";
// let myCar: string = "Mecedes Benz";

// const GenderisFemale: boolean = true;
// const isPaymentCompleted: boolean = false;

//Number
// const age: number = 55;
// const height: number = 180;

//Undefined

// const url: undefined = undefined;
// const checkingResponse: undefined = undefined;

///Working with Non-primitive Datatypes

// Empty array
// const arr: [] = [];

///An array of string

// const arrOfString: string[] = ["Red", "blue", "yellow", "purple", "pink"];
///arrOfNumber
// const arrOfNumbers: Number[] = [1, 2, 3, 4, 5, 6];

//arrOfBoolean
// const arrOfBoolean: boolean[] = [true, false];

// An arrOf Undefined

// const arrOfUndefined: undefined[] = [undefined, undefined];

//Empty object
// const all: {} = {};

//Nested Objects

// const Person: {
//   name: string;
//   gender: string;
//   haspaidFees: boolean;
//   isUndefined: undefined;
// } = {
//   name: "Mije",
//   gender: "Male",
//   haspaidFees: true,
//   isUndefined: undefined,
// };

// const helo: {}[] = [{ nME: "Jken" }];
// const hello: {}[] = [{ nME: "Jke" }];

// const persontwo = {
//   name: "Mije",
//   gender: "Male",
//   haspaidFees: true,
//   isUndefined: undefined,
//   Hobbies: [{ name: "ss" }],
// };
console.clear();

const x = ["*", "%", "#", "+"];
const xx = "Than*k%Yo#u+Lo%r#d";
const xr = xx.split("");

console.log(
  xr
    .filter((el) => {
      return !x.includes(el);
    })
    .join("")
);
