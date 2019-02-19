"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// const arr = [10,23094323,-1,29283,223,444,23,54,4,2,23,32,432,424,324]
// // 快速求数组中最大值
var arrMax = function arrMax(arr) {
    return Math.max.apply(Math, _toConsumableArray(arr));
};
// console.log(arrMax(arr)) // 23094323


// // 快速求数组中最小值
var arrMin = function arrMin(arr) {
    return Math.min.apply(Math, _toConsumableArray(arr));
};
// console.log(arrMin(arr)) // -1

// // 将数组切成指定的较小数组
// // 使用Array.from()创建新的数组, 这符合将生成的区块数。使用Array.slice()将新数组的每个元素映射到size长度的区块。如果原始数组不能均匀拆分, 则最终的块将包含剩余的元素。
var chunkArr = function chunkArr(arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) }, function (v, i) {
        return arr.slice(i * size, i * size + size);
    });
};
// console.log(chunkArr(arr,4)) // -->[ [ 10, 23094323, -1, 29283 ],[ 223, 444, 23, 54 ],[ 4, 2, 23, 32 ],[ 432, 424, 324 ] ]

// //计算某个值出现的次数（数组中）
var countOccurrences = function countOccurrences(arr, target) {
    return arr.reduce(function (a, v) {
        return v === target ? a + 1 : a + 0;
    }, 0);
};
// console.log(countOccurrences(arr,23)) // --> 2

// // 数组平铺
// const manyDeepArr = [1,2,3,3,[3,4,2,213,12,1232132,1,414,2,[34,2,21,234,32423,2,[3443,12,12,1312,32,1]]]]
var arrayDeepFlatten = function arrayDeepFlatten(arr) {
    var _ref;

    return (_ref = []).concat.apply(_ref, _toConsumableArray(arr.map(function (v) {
        return Array.isArray(v) ? arrayDeepFlatten(v) : v;
    })));
};
// console.log(arrayDeepFlatten(manyDeepArr)) // 目标数组平铺

// // 数组去重
var removeTheSame = function removeTheSame(arr) {
    return new Set(arr);
};
// console.log('remove the same value:', removeTheSame([11,2,3,2,2,2,2,3,3,3]))
// 数组去重
var distinctValuesOfArray = function distinctValuesOfArray(arr) {
    return [].concat(_toConsumableArray(new Set(arr)));
};
// console.log('remove the same value:', distinctValuesOfArray([11,2,3,2,2,2,2,3,3,3]))
// // 求两个数组中不同的值 (从b创建Set , 然后使用Array.filter() on 只保留a b中不包含的值.)
// const tagetArr1 = [1,2,2,3,2,2]
// const tagetArr2 = [1112321,2,2,2,3,2,2,1,1111]
var differentValue = function differentValue(a, b) {
    var s = new Set(b);
    return a.filter(function (x) {
        return !s.has(x);
    });
};
// console.log(differentValue(tagetArr1, tagetArr2))

// 筛选数组中的元素（移除数组中的元素, 直到传递的函数返回true。返回数组中的其余元素。）
var filterElement = function filterElement(arr, fn) {
    while (arr.length > 0 && !fn(arr[0])) {
        arr.shift();
    }return arr;
};
// console.log(filterElement([1,2,2,2,2,234,3,42,2,3,2], n => n >= 3))

exports.default = {
    arrMax: arrMax,
    arrMin: arrMin,
    chunkArr: chunkArr,
    countOccurrences: countOccurrences,
    arrayDeepFlatten: arrayDeepFlatten,
    removeTheSame: removeTheSame,
    distinctValuesOfArray: distinctValuesOfArray,
    differentValue: differentValue,
    filterElement: filterElement
};