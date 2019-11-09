#Countingsort:
```javascript
import {Countingsort} from '@softnami/countingsort';

let unsortedArray: number[] = [];

let sortedArray: number[] = [];

for (let i = 0; i < 10; i++) {
  unsortedArray[i] = Math.floor(Math.random() * 5 + 0);
}

for (let i = 0; i < 10; i++) {

  let randomindex = Math.floor(Math.random() * 9 + 0);
  let temp = unsortedArray[i];
  unsortedArray[i] = unsortedArray[randomindex];
  unsortedArray[randomindex] = temp;
}

console.log('UnsortedArray', unsortedArray);


let sorter: Countingsort = new Countingsort();
sortedArray = sorter.sort(unsortedArray);

console.log('Sorted Array', sortedArray);
 
```
#Daily Coding Question:
Visit http://www.softnami.com/dailycoding/signup.html to get daily coding question at your email.