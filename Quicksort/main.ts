import {QuickSort} from './Quicksort'

let arry:number[] = [];

console.log('Unsorted');
console.time('time to sort');

let sorter:QuickSort = new QuickSort();
    sorter.sort(arry);

console.timeEnd('time to sort');
console.log('Sorted');