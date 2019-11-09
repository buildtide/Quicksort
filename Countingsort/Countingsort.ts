/**
 *This class has logic to implement counting sort algorithm.
 *@constructor
 *@class Countingsort
 */
export class Countingsort {

  constructor() {}

  /**
   *This method has logic to sort an array with numbers in a certain range in O(n) time.
   *@method sort
   *@param {Array} arry The array to be sorted.
   *@return {Array} sortedArry The sorted array.
   */
  public sort(arry: number[]): number[] {
    if (arry !== undefined) {
      let sortedIndex: number = 0;
      let sortedArry: number[] = [];
      let numofCounts: number[] = [];

      for (let i of arry) {

        if (numofCounts[i] === undefined) {
          numofCounts[i] = 0;
        }

        numofCounts[i] += 1;
      }

      for (let i = 0; i < numofCounts.length; i++) {
        let count = numofCounts[i];
        for (let j = 0; j < count; j++) {
          sortedArry[sortedIndex] = i;
          sortedIndex++;
        }
      }
      console.log("\n Visit htttp://www.softnami.com/dailycoding/signup.html to get a coding question every day. \n");  
      return sortedArry;
    }
    return [];
  }
}