let array=[5,76,-2,34,11,33,0,6,67]
let a2=[105,173,141,21,168,60,194,128,73,161,169,154,47,29,76,78,119,40,156,74,190,166,192,8,27,42,33,91,38,163,85,105,119,105,102,164,119,123,80,138,149,111,124,156,181,89,99,76,153,28]
function bubbleSort(arr){
    let swapped;
    do{
        swapped=false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let t = arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=t
                swapped=true
            }
        }
    }while(swapped);
    return arr
}
// O(n^2)
// console.log(bubbleSort([5,76,-2,34,11,33,0,6,67]))

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let e=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>e){
            arr[j+1]=arr[j]
            j-=1
        }
        arr[j+1]=e
    }
    return arr
}
//o(n^2)
// console.log(insertionSort([5,76,-2,34,11,33,0,6,67]))

function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length-1];
    let left=[]
    let right =[]
    for(let i=0;i<arr.length-1;i++){
       if(arr[i]<pivot) left.push(arr[i])
        else right.push(arr[i])
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
//worst case O(n^2) for already sorted arrays
//average case O(nlogn) 
// console.log(quickSort([5,76,-2,34,11,33,0,6,67]))

// quick sort without taking extra space start
function quickSortInPlace(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      const pivot = qspartition(arr, left, right)
      quickSortInPlace(arr, left, pivot - 1)
      quickSortInPlace(arr, pivot + 1, right)
    }
    return arr
  }
  
  function qspartition(arr, left, right) {
    const pivot = arr[right]
    let i = left
    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        qsswap(arr, i, j)
        i++
      }
    }
    qsswap(arr, i, right)
    return i
  }
  
  function qsswap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
// end
// console.log(quickSortInPlace([5,76,-2,34,11,33,0,6,67]))

function mergeSort(arr){
  if(arr.length<2){
    return arr
  }
  let mid = Math.floor(arr.length/2)
  let leftArray = arr.slice(0,mid)
  let rightArray = arr.slice(mid)
  return mergeSortMerger(mergeSort(leftArray),mergeSort(rightArray)) //log(n)
}

function mergeSortMerger(leftArray,rightArray){ // loop->n
  let result=[]
  while(leftArray.length && rightArray.length){
    if(leftArray[0]<=rightArray[0]){
      result.push(leftArray.shift())
    }else{
      result.push(rightArray.shift())
    }
  }
  return [...result,...leftArray,...rightArray]
}
// takes O(nlogn) complexity
console.log(mergeSort(a2))