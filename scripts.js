'use strict';
console.log('test');
// Problem I
// we have a serie of data temperature and we need to get max, min and amplitude
const temperatures = [3, -2, -6, -1, 9, 13, 'error', 17, 15, 14, 9, 5];

//how to get a maximun value from an array
const calcTemAmplitude = function (anArray) {
  let max = anArray[0];
  let min = anArray[0];

  for (let i = 0; i < anArray.length; i++) {
    if (typeof anArray[i] !== 'number') continue;
    if (anArray[i] > max) {
      max = anArray[i];
    }
    if (anArray[i] < min) min = anArray[i];
  }
  console.log('max: ' + max);
  console.log('min: ' + min);
  return max - min;
};

const amplitude = calcTemAmplitude(temperatures);
console.log('amplitude: ' + amplitude);

//Problem II
// Same problem but with two arrays
// solution proposed is merge arrays into one

const secondTemperatures = [6, 13, 23, -4, -4, 9, 0, 19];

const array3 = temperatures.concat(secondTemperatures);

const amplitude2 = calcTemAmplitude(array3);
console.log('second amplitude: ' + amplitude2);

// ---

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degree celsius:')),
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
// console.warn(measureKelvin());
// console.error(measureKelvin());
// console.table(); another way to show objects into console
