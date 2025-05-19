function recFib(n){
    if(n<2) return n;
     return recFib(n-1) + recFib(n-2);
}
// has O(n^2) not as effective as O(n) for iterative sols
// console.log(recFib(3))
// console.log(recFib(5))
// console.log(recFib(6))
// console.log(recFib(7))

function recFact(n){
    if(n<=1) return 1;
    return n*recFact(n-1);
}
// console.log(recFact(6)) takes O(n) as calls function n times

function recBinarysearch(arr,ele){
    return helperRecBinarySearch(arr,ele,0,arr.length-1)
}

function helperRecBinarySearch(arr,ele,left,right){
    if(left>right){
        return -1
    }
    let mid = Math.floor((left+right)/2);
    if(arr[mid]==ele) return mid;
    if(ele<arr[mid]){
       return helperRecBinarySearch(arr,ele,left,mid-1);
    }
    if(ele>arr[mid]){
        return helperRecBinarySearch(arr,ele,mid+1,right)
    }

}
// O(logn)
// console.log(recBinarysearch([2,5,7,8,11,23,33,45,56,21],33));
// console.log(recBinarysearch([2,5,7,8,11,23,33,45,56,21],32));