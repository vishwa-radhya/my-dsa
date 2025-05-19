function testPower2(n){
    while(n>=1){
        if(n==1){
            return true
        }
        n=n/2;
    }
    return false;
} 
// half at each step so O(logn)

const constantTimePower2=(n)=> (n & (n-1)) === 0 //O(1)

function testIsPrime(n){
    // for(let i =2;i<n;i++){
    //     if(n % i === 0) {
    //         return false;
    //     }
    // } takes o(n) 
    for(let i=2;i<Math.sqrt(n);i++){
        if(n%i===0) return false;
    }
    //takes O(root(n))
    return true;
}


// console.log(testIsPrime(101))
// console.log(testPower2(262144))
// console.log(constantTimePower2(262144))
// console.log(testPower2(16))
// console.log(testPower2(7))