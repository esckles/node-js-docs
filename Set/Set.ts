// Set interval

// const renderMyName = setInterval(() => {
//   console.log("My Name is samuel");
//   clearInterval(renderMyName);
// }, 5000);

//Example 2
// setInterval(() => {
//   console.log("Hello");
//   clearInterval;
// }, 2000);

///🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀

// SetTimout

// const x = setTimeout(() => {
//   console.log("Welcome User");
//   clearTimeout(x);
// }, 3000);

// const y = "y axis";

// console.log(y);

//setimmediate
// const x = (money: string) => {
//   const a = setInterval(() => {
//     console.log(money);
//     clearInterval(a);
//   }, 5000);

//   return a;
// };

// console.log(x("jsjs"));

// const b = [","]

// const f = setImmediate(() => {
//   console.log("Render Immediate function now");
// });

// console.log(f);

// function formatNumber(num: number): string {
//     return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

// const displayFormattedNumber = 10000;

// setInterval(() => {
//   const randomNum = Math.floor(Math.random() * (1000000 - 1000 + 1)) + 1000;
//   displayFormattedNumber(randomNum);
// }, 1000);

const xx = "";
const xr = xx.split("");

// console.log(
//   xr
//     .filter((el) => {
//       return !x.includes(el);
//     })
//     .join("")
// );

// const x = [","];
// const func = (money: number) => {
//   const x = setInterval(() => {
//     console.log(money.toString());
//     clearInterval(x);
//   }, 1000);
// };

// console.log(func(10000));

// console.clear();

// const priceGenerator = (amount: number) => {
//   const finalPrice = amount.toLocaleString();
//   const duration = setInterval(() => {
//     console.log(`₦${finalPrice} is your charges`);
//   }, 5000);

//   return { duration };
// };

// console.log("Price Generator:......", priceGenerator(1000000));

// const x = () => {
//   const f = setInterval((el: 10) => {
//     const e = el - 1 === 0;
//     return e;
//   }, 1000);
//   console.log(f);
// };

const startCountdown = () => {
  let count = 10;

  const timer = setInterval(() => {
    console.log(count);

    if (count === 0) {
      console.log("Time up!!!");
      clearInterval(timer);
    }

    count--;
  }, 1000);
};

console.log(startCountdown());
