/**
 * This class contains logic for QuickSort algorithm implementation.
 *
 * @class QuickSort
 * @constructor
 */
export default class QuickSort {
    private arry;
    constructor();
    /**
     * Starts the soring process.
     *
     * @method sort
     * @param {Array} arry The array to be sorted.
     */
    sort(arry: number[]): void;
    /**
     * Swaps array according to given indices.
     *
     * @method swap
     * @param {Number} i Index of array to swap.
     * @param {Number} j Index of array to swap.
     */
    swap(i: number, j: number): void;
    /**
     * Sorts array in O(nlogn) time average case and O(n^2) worst case. With space complexity of O(logn).
     *
     * @method quicksort
     * @param {Number} low The lower-end index of array.
     * @param {Number} high The higher-end index of array.
     */
    quicksort(low: number, high: number): void;
}
