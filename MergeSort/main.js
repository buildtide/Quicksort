"use strict";
exports.__esModule = true;
var Mergesort_1 = require("./Mergesort");
var arry = [];
for (var i = 0; i < 5; i++) {
    arry[i] = Math.floor(Math.random() * 16) + 1;
}
console.log('Unsorted', arry);
var sorter = new Mergesort_1.MergeSort();
sorter.sort(arry);
console.log('Sorted', arry);
