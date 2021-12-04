// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const calcAge = birthYear => 2021 - birthYear;

// console.log(calcAge(1990));
// console.log('Hello');

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degress celsius:')),
  };

  console.log(measurement);
  console.table(measurement);
  console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  debugger;
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
