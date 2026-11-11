/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let third = [...new Set(nums)];

    third.sort((a, b) => b - a);

    if (third.length >= 3) {
        return third[2];
    }

    return third[0];
};