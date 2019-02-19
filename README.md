easy-array-tools
===========================

## 环境依赖
node 5.x ~

npm 4.x ~

## 部署步骤


 `npm install easy-array-tools`

 `import easyArrayTools from 'easy-array-tools'`

 `easyArrayTools.arrMax([192,2,432,2,43,21,23]) // --> 432`




## 目录结构描述
├── Readme.md                   // help   
├── index                       // 应用   
├── src                     
│   └── easy-array.js        // core code   
├── node_modules   
├── package.json   
├── lib                      
│   └── easy-array.js       // babel转译成es5的代码   
└── gitignore



## V1.0.2 版本内容更新
1. 数组最大值  arrMax(arr)
2. 数组最小值  arrMin(arr)
3. 数组拆分   chunkArr(arr,size)
4. 数组中target出现次数     countOccurrences(arr, target)
5. 数组平铺  arrayDeepFlatten(arr)
6. 数组去重  removeTheSame(arr)
7. 数组去重  distinctValuesOfArray(arr)
8. 两个数组中不同的值     differentValue(arr1, arr2)
9. 筛选数组中的元素（移除数组中的某些特定元素）     filterElement(arr, target)
