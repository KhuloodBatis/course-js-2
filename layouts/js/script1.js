"use strict";

// const x = 23;


// console.log(x);

// let arr = [1,2,3,4,5,5];

// console.log(arr);
// let Joi = 
//!how solve problem
// const temperatures = [3,-2,-6,-2,-1,'error',9,13,17,15,14,9,5]

//  const  calcTempAmplitude = function (temps){
// // const aumplitud = Math.max(temps) - Math.min(temps)
// let max= temps[0]
// let min = temps[0]
// for (let i=0 ;i < temps.length ; i++){
//     const curTemp = temps[i]
//     if( typeof  curTemp !== 'number')continue;

//      if (curTemp> max) max=curTemp;
//      if (curTemp<min) min = curTemp
//    }
//    console.log(max,min);
//    return max-min 
//  }


 
// calcTempAmplitude([3,7,5,8,1])
// calcTempAmplitude(temperatures)

// const amp = calcTempAmplitude(temperatures)
// console.log(amp);

//max =7 
//! how marge two array in sam function 

// const temperatures = [3,-2,-6,-2,-1,'error',9,13,17,15,14,9,5]
// const temperatures2 = [3,-1,-6,-2,-1,'error',8,13,17,19,14,9,5]
//  const  calcTempAmplitude = function (temps1,temps2){
//     const temps = temps1.concat(temps2)
// // const aumplitud = Math.max(temps) - Math.min(temps)
// let max= temps[0]
// let min = temps[0]
// for (let i=0 ;i < temps.length ; i++){
//     const curTemp = temps[i]
//     if( typeof  curTemp !== 'number')continue;
     
//      if (curTemp> max) max=curTemp;
//      if (curTemp<min) min = curTemp
//    }
//    console.log(max,min);
//    return max-min 
//  }


// //  calcTempAmplitude([3,7,5,8,1])
 
// // calcTempAmplitude(temperatures)
// // 
// console.log(calcTempAmplitude([3,5,1],[9,4,5]));
// // //?A) identify
// const amp = calcTempAmplitude(temperatures,temperatures2 )
// console.log(amp);

//!bebugging 

// const measureKelvin =  function() {
//  const measurement = {
//     type : 'temp',
//     unit: 'calsius',
// //?C) FIXD
//     value: Number(prompt('Degrees celsius:')),
//  };
//  //?B) find
//  console.log(measurement.value);
// //  console.log(measurement.value);
// //  console.warn(measurement.value);
// //  console.error(measurement.value);
 
//  const kelivn = measurement.value + 273;
//  return kelivn
// };
// //?A) identify
// console.log(measureKelvin());

//!========challenge

const date1 = [17,21,23]
const date2 = [12,5,-5,0,4]
const pF = function (arr){
    let str = '';
    for(let i = 0 ; i < arr.length ; i++){
        // console.log(`${arr[i]} ْC in ${i+1} day.... `);
        str = str+`${arr[i]} ْC in ${i+1} day....`
    }
    console.log('...' + str);
}

pF(date1)
pF(date2)