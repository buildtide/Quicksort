#Quicksort:
```javascript
import {Quicksort} from '@softnami/quicksort';

let arry: number[] = [];

for (let i = 0; i < 10; i++) {
  arry[i] = Math.floor(Math.random() * 5 + 0);
}

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
 
```
#Daily Coding Question:
Visit http://www.softnami.com/dailycoding/signup.html to get daily coding question at your email.