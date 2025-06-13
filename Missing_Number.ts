// Missing Number-----Object(n) TC 

// -----------------JAVA------------
// class Solution {
//     public int missingNumber(int[] nums) {

//         int n = nums.length;
//         int expectedSum = (n * (n + 1)) / 2;
//         int actualSum = 0;

//         for (int num : nums) {
//             actualSum += num;
//         }

//         return expectedSum - actualSum;
        
//     }
// }


// -------------Typescript-----------------------
function missingNumber(nums: number[]): number {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((acc, val) => acc + val, 0);
    return expectedSum - actualSum;
}
