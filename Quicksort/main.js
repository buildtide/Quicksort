"use strict";
exports.__esModule = true;
var Quicksort_1 = require("./Quicksort");

let arry:number[] = [];

for(let i = 0; i<1500000; i++){
	arry[i] =Math.floor(Math.random() * 1500000) + 1;
}

console.log('Unsorted');
console.time('s');

var sorter = new Quicksort_1.QuickSort();
sorter.sort(arry);

console.log('Unsorted');
console.time('s');