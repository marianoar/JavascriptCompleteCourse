'use strict';

const data1 = [15, 17, 23, 21];
const data2 = [12, 4, -5, 0, 1];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log('...' + str);
};

printForecast(data1);
