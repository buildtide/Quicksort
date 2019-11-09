#InsertionSort:
```javascript
import {InsertionSort} from '@softnami/insertionsort';

let sorter:InsertionSort = new InsertionSort();
let dummyarray:number[] = [];

for(let i:number=0; i<15; i++){

  dummyarray[i] = Math.floor(Math.random()*290+1);

}

console.log("Unsorted Array", dummyarray);

dummyarray = sorter.sort(dummyarray);

console.log("Sorted Array", dummyarray);

```
#Daily Coding Question:
Visit http://www.softnami.com/dailycoding/signup.html to get daily coding question at your email.