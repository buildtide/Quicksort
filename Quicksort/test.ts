import Quicksort from './Quicksort';

let arry: number[] = [];

//generating ramdom data for demo
for (let i = 0; i < 10; i++) {
  arry[i] = Math.floor(Math.random() * 5 + 0);
}


//shuffling the array of numbers
for (let i = 0; i < 10; i++) {
  let randomindex = Math.floor(Math.random() * 9 + 0);
  let temp = arry[i];
  arry[i] = arry[randomindex];
  arry[randomindex] = temp;
}

console.log('UnsortedArray', arry);


let sorter: Quicksort = new Quicksort();
            sorter.sort(arry);

console.log('Sorted Array', arry);