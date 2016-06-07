'use strict';

let count = 0;

const reverse = function (string){
    return string.split("").reverse().join("");
};

let total=0;

for (let i=0;i<=1000000;i++) {
  let num = (i).toString(2);
  let mun = reverse(num);
  if (num === mun) {
    total +=i;
  }
}


module.exports = () => {
  return true;
};
