"use strict";
exports.__esModule = true;
/**
 * This class contains logic for QuickSort algorithm implementation.
 *
 * @class QuickSort
 * @constructor
 */
var QuickSort = (function () {
    function QuickSort() {
    }
    /**
      * Starts the soring process.
      *
      * @method sort
      * @param {Array} arry The array to be sorted.
      */
    QuickSort.prototype.sort = function (arry) {
        if (arry !== undefined || arry.length !== 0) {
            this.arr = arry;
            this.quicksort(0, this.arr.length - 1);
        }
    };
    /**
     * Swaps array according to given indices.
     *
     * @method swap
     * @param {Number} i Index of array to swap.
     * @param {Number} j Index of array to swap.
     */
    QuickSort.prototype.swap = function (i, j) {
        var temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    };
    /**
     * Sorts array in O(nlogn) time average case and O(n^2) worst case. With space complexity of O(logn).
     *
     * @method quicksort
     * @param {Number} low The lower-end index of array.
     * @param {Number} high The higher-end index of array.
     */
    QuickSort.prototype.quicksort = function (low, high) {
        var i = low;
        var j = high;
        var pivot = this.arr[Math.floor((low + high) / 2)];
        while (i <= j) {
            while (this.arr[i] < pivot) {
                i++;
            }
            while (this.arr[j] > pivot) {
                j--;
            }
            if (i <= j) {
                this.swap(i, j);
                i++;
                j--;
            }
        }
        if (low < j) {
            this.quicksort(low, j);
        }
        if (i < high) {
            this.quicksort(i, high);
        }
    };
    return QuickSort;
}());
exports.QuickSort = QuickSort;
