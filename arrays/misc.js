
function cartesianProduct(arr1,arr2){
    const result=[]
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            result.push([arr1[i],arr2[j]])
        }
    }
    return result
}
//has arrays of different lengths say m,n so it is O(mn)
// console.log(cartesianProduct([1,2],[3,4,5]))

function climbingStairCase(n){
    const noOfWays=[1,2]
    for(let i=2;i<=n;i++){
        noOfWays[i]=noOfWays[i-1]+noOfWays[i-2]
    }
    console.log(noOfWays)
    return noOfWays[n-1]
}
// number of ways to climb the staircase with 1 step or 2 step 
// to react the end(n) we need to react either n-1 or n-2 from there we can reach the end with single step or double
//so the solution is sum of ways to reach up with one step at a time and two steps at a time just like fibonacci
// console.log(climbingStairCase(1))
// console.log(climbingStairCase(2))
// console.log(climbingStairCase(3))
// console.log(climbingStairCase(4))
// console.log(climbingStairCase(5))



// let hit=0
function towerOfHanoi(n,fromRod,toRod,usingRod){
    if(n === 1){
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
        hit++
        return
    }
    towerOfHanoi(n-1,fromRod,usingRod,toRod)
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    hit++
    towerOfHanoi(n-1,usingRod,toRod,fromRod)
}
// towerOfHanoi(3,'A','C','B')
// towerOfHanoi(7,'A','C','B')
// console.log(hit)
//refer assets towerOFHanoi image
// consists of three rods A B C with n discs initially on A ascending from top
// goal is transfer the same to rod C using rod B, the discs shouldnt be placed in wrong order at any time (desc on asc)
// sol: 1) shift n-1 disks from A to B using C 2) shift last disc from A to C 3) shift n-1 discs from B to C using A
// A(from rod) b(using rod) C(to rod)
/**
 * lastly we need to take 2^n - 1 steps 
 * so it takes O(2^n) comsplexity
 */
