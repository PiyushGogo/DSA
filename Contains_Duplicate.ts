// ---------------java code with O(n) time complexity------------
// class Solution {
//     public boolean containsDuplicate(int[] nums) {
//         HashSet<Integer> setData = new HashSet<>();
//         for(int val : nums){
//             if(setData.contains(val)){
//                 return true;
//             }
//             setData.add(val);
//         }
//         return false;   
//     }
// }


// ------------------------JavaScript----------------------------

// var containsDuplicate = function(nums) {
//     const setData = new Set();

//     for(const val of nums){
//         if(setData.has(val)){
//             return true;
//         }
//         setData.add(val);
//     }
//     return false;
    
// };


// --------------------Typescript --------------------

function containsDuplicate(nums: number[]): boolean {
    const setData = new Set<number>();

    for (const num of nums) {
        if (setData.has(num)) return true;
        setData.add(num);
    }

    return false;
    
};