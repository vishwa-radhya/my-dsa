function mergeSort(arr){
    if (arr.length<2) return arr
    const mid = Math.floor(arr.length/2);
    const leftArray = arr.slice(0,mid)
    const rightArray = arr.slice(mid,arr.length)
    return merger(mergeSort(leftArray),mergeSort(rightArray))
}

function merger(leftArray,rightArray){
    let result =[]
    while(leftArray.length && rightArray.length){
        if(leftArray[0]<=rightArray[0]){
            result.push(leftArray.shift())
        }else{
            result.push(rightArray.shift())
        }
    }
    return [...result,...leftArray,...rightArray]
}
// tc O(nlogn)
// sc O(n)
/**
 * recursive calls: Create new arrays with slice() at every level (left and right).

Merge step: Uses a new result array and spreads remaining items — this further adds to space use.

Shift operations: Modifies arrays by removing first elements (shift() is O(n) per call), not in-place.
 */
// console.log(mergeSort([3,4,1,43,21,32,7]))

// also in place is rare and not stable theoritically it gives O(1) sc
// optimized version avoids .shift() for performance 

function nMergeSort(arr){
    if (arr.length<2) return arr
    const mid = Math.floor(arr.length/2);
    const leftArray = arr.slice(0,mid)
    const rightArray = arr.slice(mid,arr.length)
    return merger(nMergeSort(leftArray),nMergeSort(rightArray))
}
function nMerger(leftArray,rightArray){
    const result=[]
    let i=0, j=0
    while(i<leftArray.length && j<rightArray.length){
        if(leftArray[i]<=rightArray[j]){
            result.push(leftArray[i])
            i++
        }else{
            result.push(rightArray[j])
            j++
        }
    }
    return result.concat(leftArray.slice(i)).concat(rightArray.slice(j))
}
// console.log(nMergeSort([3,4,1,43,21,32,7]))
