var c = console.log.bind(document);

obj1 = { a: 10 };
const obj2 = { ...obj1 };
obj2.a = 20;
c(obj1);
c(obj2);

//
// function mul(a) {
//   return function (b) {
//     if (b) {
//       return mul(a * b);
//     }
//     return a;
//   };
// }

const mul = (a) => {
  (b) => {
    (c) => {
      return a * b * c;
    };
  };
};

c(mul(2)(3)(4));
