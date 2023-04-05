define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * This class contains logic for QuickSort algorithm implementation.
     *
     * @class QuickSort
     * @constructor
     */
    class QuickSort {
        constructor() {
            this.arry = [];
        }
        /**
         * Starts the soring process.
         *
         * @method sort
         * @param {Array} arry The array to be sorted.
         */
        sort(arry) {
            if (arry && arry.length !== 0) {
                this.arry = arry;
                this.quicksort(0, this.arry.length - 1);
            }
        }
        /**
         * Swaps array according to given indices.
         *
         * @method swap
         * @param {Number} i Index of array to swap.
         * @param {Number} j Index of array to swap.
         */
        swap(i, j) {
            [this.arry[i], this.arry[j]] = [this.arry[j], this.arry[i]];
        }
        /**
         * Sorts array in O(nlogn) time average case and O(n^2) worst case. With space complexity of O(logn).
         *
         * @method quicksort
         * @param {Number} low The lower-end index of array.
         * @param {Number} high The higher-end index of array.
         */
        quicksort(low, high) {
            let i = low;
            let j = high;
            let pivot = this.arry[Math.floor((low + high) / 2)];
            while (i <= j) {
                while (this.arry[i] < pivot) {
                    i++;
                }
                while (this.arry[j] > pivot) {
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
        }
    }
    exports.default = QuickSort;
});
//# sourceMappingURL=Quicksort.js.map