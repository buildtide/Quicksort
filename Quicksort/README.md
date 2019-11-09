#Quicksort:
```javascript
import {QuickSort} from '@softnami/quicksort'

let arry:number[] = [];

console.log('Unsorted');
console.time('time to sort');

let sorter:QuickSort = new QuickSort();
    sorter.sort(arry);

console.timeEnd('time to sort');
console.log('Sorted');
```
#Daily Coding Question:
Visit http://www.softnami.com/dailycoding/signup.html to get daily coding question at your email.