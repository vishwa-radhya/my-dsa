function linearSearch(arr,ele){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===ele) return i;
    }
    return -1;
}
// O(n)
// console.log(linearSearch([1,4,5,2,6],6));
// console.log(linearSearch([1,4,5,2,6],7));

function binarySearch(arr,ele){
    let left = 0;
    let right = arr.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(arr[mid] === ele) return mid;
        else if(ele < arr[mid]){
            right=mid-1;
        }else if(ele > arr[mid]){
            left=mid+1;
        }
    }
    return -1;
}
// O(logn)
//console.log(binarySearch([2,5,7,8,11,23,33,45,56,21],33));
//console.log(binarySearch([2,5,7,8,11,23,33,45,56,21],32));
