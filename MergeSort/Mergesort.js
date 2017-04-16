"use strict";
exports.__esModule = true;
/**
 * This class contains logic for MergeSort algorithm implementation.
 *
 * @class MergeSort
 * @constructor
 */
var MergeSort = (function () {
    function MergeSort() {
        this.temp = [];
    }
    /**
     * Starts the soring process.
     *
     * @method sort
     * @param {Array} arry The array to be sorted.
     */
    MergeSort.prototype.sort = function (arry) {
        if (arry !== undefined || arry.length !== 0) {
            this.mergeSort(arry, this.temp, 0, arry.length - 1);
        }
    };
    /**
        * Recursively sorts and calls merge.
        *
        * @method mergeSort
        * @param {Array} arr The array to be sorted.
        * @param {Array} temp The temporary array.
        * @param {Number} left The left index of the array.
        * @param {Number} right The right index of the array.
        */
    MergeSort.prototype.mergeSort = function (arr, temp, left, right) {
        if (left < right) {
            var center = Math.floor((left + right) / 2);
            this.mergeSort(arr, temp, left, center);
            this.mergeSort(arr, temp, center + 1, right);
            this.merge(arr, temp, left, center + 1, right);
        }
    };
    /**
       * This method contains the logic to implement the merge step.
       *
       * @method merge
       * @param {Array} arr The array to be sorted.
       * @param {Array} temp The temporary array.
       * @param {Number} left The left index of the array.
       * @param {Number} right The right index of the array.
       * @param {Number} rightEnd The right most index of the array.     */
    MergeSort.prototype.merge = function (arr, temp, left, right, rightEnd) {
        var leftEnd = right - 1;
        var k = left;
        var num = rightEnd - left + 1;
        while (left <= leftEnd && right <= rightEnd) {
            if (arr[left] <= arr[right]) {
                temp[k++] = arr[left++];
            }
            else {
                temp[k++] = arr[right++];
            }
        }
        while (left <= leftEnd) {
            temp[k++] = arr[left++];
        }
        while (right <= rightEnd) {
            temp[k++] = arr[right++];
        }
        for (var i = 0; i < temp.length; i++, rightEnd--) {
            arr[rightEnd] = temp[rightEnd];
        }
    };
    return MergeSort;
}());
exports.MergeSort = MergeSort;
