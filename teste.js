const { NOMEM } = require("dns");

const name = "gilson";

const nameSplit = name.split(" ");

console.log(nameSplit);

count = 0;
const result = nameSplit.reduce((acc, el, _, array) => {
  count++;
  if (count === array.length) {
    return (acc +=
      el[0].toLocaleUpperCase() + el.slice(1, el.length).toLowerCase());
  }
  acc += el[0].toLocaleUpperCase() + el.slice(1, el.length).toLowerCase() + " ";
  return acc;
}, "");

console.log(result);
