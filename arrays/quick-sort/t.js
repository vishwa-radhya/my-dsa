//divide and conquer

function quickSort(arr){
    if(arr.length<2) return arr
    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot) left.push(arr[i])
        else right.push(arr[i])
    }
    return [...quickSort(left),pivot,...quickSort(right)];
}
/**
 * average time complexity O(nlogn) // array roughly divides into two halves at each step
 * worst time complexity O(n^2), pivot is always smallest ot largest
 * space complexity : creates 2 new arrays O(n^2) recursion stack takes O(log n) space in average case and O(n) in the worst case
 */
// console.log(quickSort([4,56,21,46,78,11,25]));

// in place quick sort without extra space
  function quickSortInPlace(arr,low=0,high=arr.length-1){
    if(low>=high){
      return arr
    }
    const partitionIndex = partitionIndexing(arr,low,high)
    quickSortInPlace(arr,low,partitionIndex-1)
    quickSortInPlace(arr,partitionIndex+1,high)
    return arr
  }
  function partitionIndexing(arr,low,high){
    let i =low-1
    let pivot = arr[high]
    for(let j=low;j<high;j++){
      if(arr[j]<pivot){
        i++;
        [arr[i],arr[j]]=[arr[j],arr[i]]
      }
    }
    [arr[i+1],arr[high]]=[arr[high],arr[i+1]]
    return i+1
  }
  const myArray = [10, 7, 8, 9, 1, 5];
  console.log(quickSortInPlace(myArray))
/**
 * avg tc O(nlogn) - same reasoning as above
 * worst tc O(n^2) - same ...
 * sc - auxiliary space O(logn) coz only space needed for recursion stack
 */