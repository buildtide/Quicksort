# Quicksort:

### [Author: Hussain Mir Ali] 
#### [Hire me,](mailto:admin@cloudhadoop.com) I can build your next project. 

This is a module for the Quicksort algorithm and helps you sort arrays. It is built with TypeScript, is light weight and has no dependencies.

```javascript
import Quicksort from '@softnami/quicksort';

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

/*UnsortedArray [
  4, 4, 1, 2, 1,
  4, 3, 2, 2, 4
]*/

let sorter: Quicksort = new Quicksort();
            sorter.sort(arry);

console.log('Sorted Array', arry);

/*Sorted Array [
  1, 1, 2, 2, 2,
  3, 4, 4, 4, 4
]*/
```
